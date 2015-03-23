/**
 * @module ui/story-list.reel
 */
var Component = require("montage/ui/component").Component;
var Firebase = require("firebase");
var TimeAgoConverter = require("lib/time-ago-converter").TimeAgoConverter;

/**
 * @class StoryList
 * @extends Component
 */
exports.StoryList = Component.specialize(/** @lends StoryList# */ {
    constructor: {
        value: function StoryList() {
            this.super();
        }
    },

    loadNextStories: {
      value: function() {
        var ref = new Firebase("https://hacker-news.firebaseio.com/v0/topstories");
        var component = this;
        var handler = ref.on("value", function(snap) {
            var collect = [];
            snap.val().slice(component.subs.length, component.subs.length+50).forEach(function(o, index) {
                var s_ref = new Firebase("https://hacker-news.firebaseio.com/v0/item/" + o);

                (function(s_ref) {
                    collect.push(new Promise(function(resolve, reject) {
                        var storyHandler = s_ref.on("value", function(s_snap) {
                            resolve(s_snap.val());
                            s_ref.off("value", storyHandler);
                        })
                    }));
                })(s_ref);
            });

            Promise.all(collect).then(function(data) {
                data.forEach(function(o) {
                    component.subs.push(o);
                });
                ref.off("value", handler);
            });
        });
      }
    },

    templateDidLoad: {
        value: function() {
          this.loadNextStories();
        }
    },

    time_ago_converter: {
        value: new TimeAgoConverter()
    },

    subs: {
       value: [
       
       ]
    },


    handleClick: {
        value: function(event) {
            var placeholder; 
            if (event.target.component && event.target.component.identifier === "story-more-link") {
                this.loadNextStories();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    },

    enterDocument:  {
        value: function(firstDraw) {
            if (firstDraw) {
                this.element.addEventListener("click", this, false);
            }
        }
    }
});
