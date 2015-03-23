/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;


var _makeParamsIntoHash = function(params) {
    // split each param pair
    return (params || "").split(/\?|&/).slice(1).map(
        // now separate them in a array of [key, val]
        function(e) { return e.split("=", 2); }
    ).reduce(
        // and then map it into a hash
        function(o, s) { 
            if (o[s[0]]) {
                if (! o[s[0]].push) {
                    o[s[0]] = [o[s[0]]];
                }
                o[s[0]].push(s[1]);
            } else {
                o[s[0]] = s[1];    
            }
            return o;
        }, {}
    );
};

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    navigationIndex: {
        get: function() {
            return this._navigationIndex;
        },
        set: function(navigationIndex) {
            if (this._navigationIndex !== navigationIndex) {
                this._navigationIndex = navigationIndex;
                this.needsDraw = true;
            }
        }
    },

    _navigationIndex: {
        value: 0
    },

    navigation: {
        value: [{kind: "stories"}/*, {kind: "story", item_id: "9238839"}*/]
    },

    _displayedNavigationIndex: {
        value: 0
    },

    navigationContentLoadedForIndex: {
        value: function(data, index) {
            if (data) {
                if (this.navigationIndex === index) {
                    this._displayedNavigationIndex = this.navigationIndex;
                    this.needsDraw = true;
                }
                // ok, fallback to user for data with "created" property is a quick and dirty hack
                this.navigation[index].kind = data.type || (data.created && "user");
                this.navigation[index].item_id = data.id;
            }
        }
    },


    navigateToURL: {
        value: function(url, restoredState) {
            var ourl = new URL(url);
            if (ourl.pathname === "/item" || ourl.pathname === "/user") {
                // building a hash from url parameter
                var params = _makeParamsIntoHash(ourl.search);
                if (params.id) {

                    this.navigationIndex = this._displayedNavigationIndex + 1;
                    var needsPush = !this.navigation[this.navigationIndex];

                    if (needsPush) {
                        var index = this.navigationIndex;
                        while(this.navigation.length < index+1) {
                            this.navigation.push({kind: "loading"});
                        }
                    } else {
                        this.navigation[this.navigationIndex] = {kind: "loading"};
                    }

                    try {
                        // catch exceptions since it throws on unbound paths
                        this.cancelBinding("templateObjects.repetition.childComponents." + this.navigationIndex + ".switchValue");
                        this.cancelBinding("templateObjects.repetition.childComponents." + this.navigationIndex + ".childComponents.0.itemId");
                    } catch(e) {};

                    this.previousKindBindCancel = this.defineBinding(
                        "templateObjects.repetition.childComponents." + this.navigationIndex + ".switchValue", 
                        { "<-": "navigation." + this.navigationIndex + ".kind"}
                    );
                    this.previousIdBindCancel = this.defineBinding(
                        "templateObjects.repetition.childComponents." + this.navigationIndex + ".childComponents.0.itemId", 
                        { "<-": "navigation." + this.navigationIndex + ".item_id"}
                    );

                    if (! restoredState) {                    
                        history.pushState(
                            {item_id: params.id, nav_index: this.navigationIndex}, "", 
                            "#!" + ourl.pathname  + "?id="+params.id
                        );
                    }

                    var component = this;
                    var loadingForIndex = this.navigationIndex;
                    var ref = new Firebase("https://hacker-news.firebaseio.com/v0" + ourl.pathname + "/" + params.id);
                    var h = ref.on("value", function(snap) {
                        component.navigationContentLoadedForIndex(snap.val(), loadingForIndex);
                        ref.off("value", h);
                    });
                }

            }

        }
    },

    handleClick: {
        value: function(event) {
            // climb up to find if we handle this event as a navigation event
            var node = event.target;
            if (! node) return;
            while(node && node.tagName !== "A" && node.parentNode !== node) {
                node = node.parentNode;
            }
            if (node && node.tagName === "A") {
                // link, negociate it as an internal or external link
                var url = new URL(node.getAttribute("href"));
                if (url.host === location.host || url.hostname === "news.ycombinator.com") {
                    // treat it as internal link
                    event.preventDefault();
                    event.stopPropagation();
                    this.navigateToURL(node.getAttribute("href"));
                }
                return false;
            }
            return true;
        }
    },

    handlePopstate: {
        value: function(event) {
            // fetch event.state.nav_index or fallback to displayedIndex - 1;
            var i, index = (i = event, i = i && i.state, i = i && i.nav_index) || (this._displayedNavigationIndex - 1);
            index = Math.max(0, index);
            this.navigationIndex = this._displayedNavigationIndex = index;
        }
    },


    enterDocument:  {
        value: function(firstDraw) {
            if (firstDraw) {
                window.addEventListener("popstate", this, false);
                this.element.addEventListener("click", this, false);

                if (location.hash) {
                    var content = location.hash.split(/\#\!/)[1];
                    if (content) {
                        this.navigateToURL("https://news.ycombinator.com" + content, true);
                    }
                }

            }
        }
    },

    draw: {
        value: function() {
            this.super();

            // fiddle with navigation elements
            var array = this.element.children[0].children;
            if (array.length === this.navigation.length) {
                var i;
                for (i = 0; i < array.length; i++) {
                    var child = array[i];
                    var dx = (i - this._displayedNavigationIndex);
                    dx = dx < 0 ? -1.0/(1<<(-dx)) : dx*1.2;

                    child.style.transform = "translate3d("+dx*100+"%, 0, 0)";
                    child.style.WebkitTransform = "translate3d("+dx*100+"%, 0, 0)";
                }
            } else {
                this.needsDraw = true;
            }

        }
    }

});
