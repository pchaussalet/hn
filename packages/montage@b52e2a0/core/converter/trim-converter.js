var Montage=require("../core").Montage,Converter=require("./converter").Converter,trim=exports.trim=function(t){return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};exports.TrimConverter=Converter.specialize({_convert:{value:function(t){return t&&"string"==typeof t?trim(t):void 0}},convert:{value:function(t){return this._convert(t)}},revert:{value:function(t){return this._convert(t)}}});