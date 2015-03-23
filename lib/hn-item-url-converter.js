/**
 * @module lib/hn-item-url-converter
 * @requires montage/core/converter/converter
 */

var Converter = require("montage/core/converter/converter").Converter;

var HnItemUrlConverter = exports.HnItemUrlConverter = Converter.specialize( /** @lends Converter# */ {
    /**
     * Specifies whether the converter allows partial conversion.
     * @type {boolean}
     * @default true
     */
    allowPartialConversion: {
            value: true
    },

    /**
     * Converts values from the input domain into the output range.
     * @method
     * @default null
     */
    convert: {
        enumerable: false,
        value: function(input) {
            return "https://news.ycombinator.com/item?id=" + input;
        }
    },

    /**
     * Optionally, reverts values from the output range, back into the input
     * range. This may not be possible with high fidelity depending on the
     * relationship between these domains.
     * @method
     * @default null
     */
    revert: {
            enumerable: false,
            value: null
    }

});
