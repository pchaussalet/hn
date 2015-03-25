var Montage=require("../core").Montage,Converter=require("./converter").Converter,Validator=require("./converter").Validator,isNumber=require("./converter").isNumber,isDef=require("./converter").isDef,SCALED_NUMERIC_RE_=/^([\-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/,NUMERIC_SCALE_PREFIXES_=["P","T","B","M","K","","m","u","n"],NUMERIC_SCALES_SI_=exports.NUMERIC_SCALES_SI_={"":1,n:1e-9,u:1e-6,m:.001,k:1e3,K:1e3,M:1e6,B:1e9,T:1e12,P:1e15},NUMERIC_SCALES_BINARY_=exports.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)},_numericValueToString=exports._numericValueToString=function(t,e,n,i,a){a=a||NUMERIC_SCALE_PREFIXES_;var r=t,s="",o=1;0>t&&(t=-t);for(var c=0;a.length>c;c++){var l=a[c];if(o=e[l],t>=o||1>=o&&t>.1*o){s=l;break}}s?i&&(s+=i):o=1;var h=Math.pow(10,isDef(n)?n:2);return Math.round(r/o*h)/h+s},_stringToNumericValue=function(t,e){var n=t.match(SCALED_NUMERIC_RE_);return n?n[1]*e[n[2]]:0/0},isConvertableScaledNumber=function(t){return SCALED_NUMERIC_RE_.test(t)},stringToNumericValue=exports.stringToNumericValue=function(t){return t.endsWith("B")?_stringToNumericValue(t,NUMERIC_SCALES_BINARY_):_stringToNumericValue(t,NUMERIC_SCALES_SI_)},numericValueToString=exports.numericValueToString=function(t,e){return _numericValueToString(t,NUMERIC_SCALES_SI_,e)},NumberValidator=exports.NumberValidator=Validator.specialize({allowFloat:{value:!0},allowNegative:{value:!0},validate:{value:function(t){var e;return t=t||"",t=t.replace(/,/g,""),e=isNumber(t)?t:this.allowFloat===!0?parseFloat(t,10):parseInt(t,10),isNaN(e)?{message:"Invalid Number"}:e}}}),NumberConverter=exports.NumberConverter=Converter.specialize({allowPartialConversion:{value:!1},validator:{value:new NumberValidator},shorten:{value:null},decimals:{value:2},forceDecimals:{value:!1},round:{value:null},_reg:{value:/(\d+)(\d{3})/},allowFloat:{value:!0},allowNegative:{value:!0},_makeReadable:{value:function(t,e,n){e=e||",",n=n||".";for(var i=(""+t).split("."),a=i[0];this._reg.test(a);)a=a.replace(this._reg,"$1"+e+"$2");var r=i.length>1?i[1]:"";if(this.forceDecimals)for(;r.length<this.decimals;)r+="0";var s=r.length>0?n+r:"";return a+s}},convert:{value:function(t){if(this.shorten)return numericValueToString(t,this.decimals);var e;if(this.round)e=""+Number(Math.round(t));else{var n=Math.pow(10,this.decimals||2),i=1;e=Number(Math.round(t/i*n)/n)}return this._makeReadable(e)}},revert:{value:function(t){this.validator.allowFloat=this.allowFloat,this.validator.allowNegative=this.allowNegative;var e=this.validator.validate(t);if(isNumber(e))return e;throw Error(e.message)}}});