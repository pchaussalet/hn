/**
 * @module ui/raw-html.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class RawHtml
 * @extends Component
 */
exports.RawHtml = Component.specialize(/** @lends RawHtml# */ {
    constructor: {
        value: function RawHtml() {
            this.super();
        }
    },

    _value: {
        value: null
    },

    value: {
        get: function() {
            return this._value;
        },
        set: function(value) {
            if (this._value !== value) {
                this._value = value;
                this.needsDraw = true;
            }
        }
    },

    defaultValue: {
      value: ""
    },

    draw: {
        value: function() {
            // get correct value
            var value = this._value, displayValue = (value || 0 === value ) ? value : this.defaultValue;

            //push to DOM
            this.element.innerHTML = displayValue;
        }
    }
});
