montageDefine("199c172","compile-evaluator",{dependencies:["collections/shim-object","collections/map","collections/sorted-set","./operators","./scope","./parse"],factory:function(e,t,n){function i(e){return i.semantics.compile(e)}var r=e("collections/shim-object"),a=e("collections/map"),o=e("collections/sorted-set"),s=e("./operators");e("./scope"),n.exports=i;var l={literal:function(e){return function(){return e.value}},value:function(){return function(e){return e.value}},parameters:function(){return function(e){return e.parameters}},element:function(e){return function(t){return t.document.getElementById(e.id)}},component:function(e){return function(t){return t.components.getObjectByLabel(e.label)}},tuple:function(e){var t=e.args.map(this.compile,this);return function(e){return t.map(function(t){return t(e)})}},record:function(e){var t=e.args,n={};for(var i in t)n[i]=this.compile(t[i]);return function(e){var t={};for(var i in n)t[i]=n[i](e);return t}}},c={mapBlock:function(e,t){return function(n){return e(n).map(function(e){return t(n.nest(e))})}},filterBlock:function(e,t){return function(n){return e(n).filter(function(e){return t(n.nest(e))})}},someBlock:function(e,t){return function(n){return e(n).some(function(e){return t(n.nest(e))})}},everyBlock:function(e,t){return function(n){return e(n).every(function(e){return t(n.nest(e))})}},sortedBlock:function(e,t){return function(n){return e(n).sorted(Function.by(function(e){return t(n.nest(e))}))}},sortedSetBlock:function(e,t){return function(n){function i(e){return t(n.nest(e))}function a(e,t){return r.compare(i(e),i(t))}function s(e,t){return r.equals(i(e),i(t))}return new o(e(n),s,a)}},groupBlock:function(e,t){return function(n){return e(n).group(function(e){return t(n.nest(e))})}},groupMapBlock:function(e,t){return function(n){return new a(e(n).group(function(e){return t(n.nest(e))}))}},minBlock:function(e,t){return function(n){return e(n).min(Function.by(function(e){return t(n.nest(e))}))}},maxBlock:function(e,t){return function(n){return e(n).max(Function.by(function(e){return t(n.nest(e))}))}},parent:function(e){return function(t){return e(t.parent)}},"with":function(e,t){return function(n){return t(n.nest(e(n)))}},"if":function(e,t,n){return function(i){var r=e(i);if(null!=r)return r?t(i):n(i)}},not:function(e){return function(t){return!e(t)}},and:function(e,t){return function(n){return e(n)&&t(n)}},or:function(e,t){return function(n){return e(n)||t(n)}},"default":function(e,t){return function(n){var i=e(n);return null==i&&(i=t(n)),i}},defined:function(e){return function(t){var n=e(t);return null!=n}},path:function(t,n){return function(r){var a=t(r),o=n(r),s=e("./parse");try{var l=s(o),c=i(l);return c(r.nest(a))}catch(u){}}}},u=r.clone(s,1);r.addEach(u,{property:function(e,t){return e[t]},get:function(e,t){return e.get(t)},mapContent:Function.identity,rangeContent:Function.identity,view:function(e,t,n){return e.slice(t,t+n)}}),i.semantics={compilers:l,argCompilers:c,operators:u,compile:function(e){var t=this.compilers,n=this.argCompilers,i=this.operators;if(t.hasOwnProperty(e.type))return t[e.type].call(this,e);if(n.hasOwnProperty(e.type)){var r=e.args.map(this.compile,this);return n[e.type].apply(null,r)}i.hasOwnProperty(e.type)||(i[e.type]=function(t){var n=Array.prototype.slice.call(arguments,1);if(!t[e.type])throw new TypeError("Can't call "+JSON.stringify(e.type)+" of "+t);return t[e.type].apply(t,n)});var a=i[e.type],r=e.args.map(this.compile,this);return function(e){var t=r.map(function(t){return t(e)});if(t.every(s.defined))return a.apply(null,t)}}}}});