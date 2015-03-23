/**
 * @module lib/time-ago-converter
 * @requires montage/core/converter/converter
 */

var Converter = require("montage/core/converter/converter").Converter;

var qualifiers = ["second", "minute", "hour", "day", "month", "year"];

var TimeAgoConverter = exports.TimeAgoConverter = Converter.specialize( /** @lends Converter# */ {

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
          var ago = Date.now()/1000 - input;
          var results = [ // array of [seconds, minutes, hours, days, years]
            ago % 60,
            (ago = Math.floor(ago/60)) % 60,
            (ago = Math.floor(ago/60)) % 24,
            (ago = Math.floor(ago/24)) % 30,
            (ago = Math.floor(ago/30)) % 12,
            (ago = Math.floor(ago/12))
          ]; 

          var i;
          var val;
          for(i = qualifiers.length, val = 0; val === 0 && i > 0 ; i--) {
            val = results.pop();
          }

          if (val !== 0) {
            return val + " " + qualifiers[i] + (val > 1 ? "s" : "");
          } else {
            return "now";
          }
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