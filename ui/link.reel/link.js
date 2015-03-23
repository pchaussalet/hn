/**
 * @module ui/link.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Link
 * @extends Component
 */
exports.Link = Component.specialize(/** @lends Link# */ {
    constructor: {
        value: function Link() {
            this.super();
        }
    },

    _url: {
        value: null
    },

    url: {
        get: function() {
            return this._url;
        },
        set: function(url) {
            if (this._url !== url) {
                this._url = url;
                this.needsDraw = true;
            }
        }
    },

    urlConverter: {
        value: null
    },

    draw: {
        value: function() {
            // get correct value
            this.super();

            var url = this._url;

            if (this.urlConverter) {
                url = this.urlConverter.convert(url);
            }

            this.element.setAttribute("href", url)
        }
    }
});
