var internals={};exports.arrayToObject=function(e){for(var t={},n=0,r=e.length;r>n;++n)e[n]!==void 0&&(t[n]=e[n]);return t},exports.clone=function(e){if("object"!=typeof e||null===e)return e;if(Buffer.isBuffer(e))return""+e;var t=Array.isArray(e)?[]:{};for(var n in e)e.hasOwnProperty(n)&&(t[n]=exports.clone(e[n]));return t},exports.merge=function(e,t){if(!t)return e;var n=exports.clone(e);if(Array.isArray(t)){for(var r=0,i=t.length;i>r;++r)t[r]!==void 0&&(n[r]="object"==typeof n[r]?exports.merge(n[r],t[r]):t[r]);return n}Array.isArray(n)&&(n=exports.arrayToObject(n));for(var a=Object.keys(t),o=0,s=a.length;s>o;++o){var l=a[o],c=t[l];n[l]=c&&"object"==typeof c?n[l]?exports.merge(n[l],c):exports.clone(c):c}return n},exports.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},exports.compact=function(e){if("object"!=typeof e||null===e)return e;var t={};for(var n in e)if(e.hasOwnProperty(n))if(Array.isArray(e[n])){t[n]=[];for(var r=0,i=e[n].length;i>r;r++)e[n][r]!==void 0&&t[n].push(e[n][r])}else t[n]=exports.compact(e[n]);return t};