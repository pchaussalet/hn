montageDefine("44d9a4a","lib/utils",{dependencies:[],factory:function(e,t){t.arrayToObject=function(e){for(var t={},n=0,r=e.length;r>n;++n)e[n]!==void 0&&(t[n]=e[n]);return t},t.clone=function(e){if("object"!=typeof e||null===e)return e;if(Buffer.isBuffer(e))return""+e;var n=Array.isArray(e)?[]:{};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t.clone(e[r]));return n},t.merge=function(e,n){if(!n)return e;var r=t.clone(e);if(Array.isArray(n)){for(var i=0,a=n.length;a>i;++i)n[i]!==void 0&&(r[i]="object"==typeof r[i]?t.merge(r[i],n[i]):n[i]);return r}Array.isArray(r)&&(r=t.arrayToObject(r));for(var o=Object.keys(n),s=0,l=o.length;l>s;++s){var c=o[s],u=n[c];r[c]=u&&"object"==typeof u?r[c]?t.merge(r[c],u):t.clone(u):u}return r},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.compact=function(e){if("object"!=typeof e||null===e)return e;var n={};for(var r in e)if(e.hasOwnProperty(r))if(Array.isArray(e[r])){n[r]=[];for(var i=0,a=e[r].length;a>i;i++)e[r][i]!==void 0&&n[r].push(e[r][i])}else n[r]=t.compact(e[r]);return n}}});