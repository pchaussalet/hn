/**
 * @module ui/user.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class User
 * @extends Component
 */
exports.User = Component.specialize(/** @lends User# */ {
    constructor: {
        value: function User() {
            this.super();
            this.addPathChangeListener("itemId", this, "_loadUser");
        }
    },

    user: {
        value: null
    },    

    submissions: {
        value: null
    },

    _loadUser: {
        value: function() {
            if (! this.itemId) { 
                this.user = null;
                this.submissions = null;
                return; 
            }
            
            var component = this;
            var ref = new Firebase("https://hacker-news.firebaseio.com/v0/user/" + this.itemId);
            var h = ref.on("value", function(snap) {
                ref.off("value", h);

                var result = snap.val();
                var waitAll = [];
                result && result.submitted.slice(0, 25).forEach(function(id, index) {
                    waitAll.push(new Promise(function(resolve, reject){
                        var iRef = new Firebase("https://hacker-news.firebaseio.com/v0/item/" + id);
                        var iH = iRef.on("value", function(iSnap) {
                            iRef.off("value", iH);

                            resolve(iSnap.val());
                        })
                    }));
                });

                Promise.all(waitAll).then(function(all) {
                    component.submissions = all;
                    component.user = result;
                });
            });

        }
    }

});
