montageDefine("e19c942","http-apps/route",{dependencies:["q","./status"],factory:function(e,t){var n=e("q"),i=e("./status");t.Cap=function(e,t){return t=t||i.notFound,function(n,i){return""===n.pathInfo||"/"===n.pathInfo?e(n,i):t(n,i)}},t.Tap=function(e,t){return function(){var i=this,r=arguments;return n.when(t.apply(this,arguments),function(t){return t?t:e.apply(i,r)})}},t.Trap=function(e,t){return function(i){return n.when(e.apply(this,arguments),function(e){return e?(e.headers=e.headers||{},t(e,i)||e):void 0})}},t.Branch=function(e,t){return e||(e={}),t||(t=i.notFound),function(n,i){if(!/^\//.test(n.pathInfo))return t(n,i);var r=n.pathInfo.slice(1),a=r.split("/"),o=decodeURIComponent(a.shift());return Object.has(e,o)?(n.scriptName=n.scriptName+o+"/",n.pathInfo=r.slice(o.length),Object.get(e,o)(n,i)):t(n,i)}},t.FirstFound=function(e){return function(t){function i(){var o=e[r++](t,o);return a>r?n.when(o,function(e){return 404===e.status?i():e}):o}var r=0,a=e.length;return i()}}}});