montageDefine("199c172","compile-assigner",{dependencies:["./compile-evaluator","./algebra","./scope"],factory:function(e,t,n){function i(e){return i.semantics.compile(e)}var r=e("./compile-evaluator"),a=e("./algebra");e("./scope");var o={type:"value"},s={type:"literal",value:!0},l={type:"literal",value:!1};n.exports=i,i.semantics={compile:function(e){var t=this.compilers;if("equals"===e.type){var n=this.compile(e.args[0]),i=this.compileEvaluator(e.args[1]);return t.equals(n,i)}if("if"===e.type){var r=this.compileEvaluator(e.args[0]),s=this.compile(e.args[1]),l=this.compile(e.args[2]);return t["if"](r,s,l)}if("and"===e.type||"or"===e.type){var c=a(e.args[0],o),u=a(e.args[1],o),h=this.compileEvaluator(e.args[0]),i=this.compileEvaluator(e.args[1]),d=this.compileEvaluator(c[1]),p=this.compileEvaluator(u[1]),n=this.compile(c[0]),f=this.compile(u[0]);return t[e.type](n,f,h,i,d,p)}if("everyBlock"===e.type){var g=this.compileEvaluator(e.args[0]),m=a(e.args[1],{type:"literal",value:!0}),v=this.compile(m[0]),y=this.compileEvaluator(m[1]);return t.everyBlock(g,v,y)}if("parent"===e.type){var b=this.compile(e.args[0]);return function(e,t){return b(e,t.parent)}}if(t.hasOwnProperty(e.type)){var _=e.args.map(this.compileEvaluator,this.compileEvaluator.semantics);return t[e.type].apply(null,_)}throw Error("Can't compile assigner for "+JSON.stringify(e.type))},compileEvaluator:r,compilers:{property:function(e,t){return function(n,i){var r=e(i);if(r){var a=t(i);null!=a&&(Array.isArray(r)?r.set(a,n):r[a]=n)}}},get:function(e,t){return function(n,i){var r=e(i);if(r){var a=t(i);null!=a&&r.set(a,n)}}},has:function(e,t){return function(n,i){var r=e(i);if(r){var a=t(i);null!=n&&(n?(r.has||r.contains).call(r,a)||r.add(a):(r.has||r.contains).call(r,a)&&(r.remove||r["delete"]).call(r,a))}}},equals:function(e,t){return function(n,i){return n?e(t(i),i):void 0}},"if":function(e,t,n){return function(i,r){var a=e(r);if(null!=a)return a?t(i,r):n(i,r)}},and:function(e,t,n,i,r,a){return function(o,l){null!=o&&(o?(e(r(s),l),t(a(s),l)):e(n(l)&&!i(l),l))}},or:function(e,t,n,i,r,a){return function(o,s){null!=o&&(o?e(n(s)||!i(s),s):(e(r(l),s),t(a(l),s)))}},rangeContent:function(e){return function(t,n){var i=e(n);i&&(t?i.swap(0,i.length,t):i.clear())}},mapContent:function(e){return function(t,n){var i=e(n);i&&(i.clear(),n.value&&i.addEach(t))}},reversed:function(e){return function(t,n){var i=e(n);i&&i.swap(0,i.length,t.reversed())}},everyBlock:function(e,t,n){return function(i,r){if(i){var a=e(r),o=n(r);a.forEach(function(e){t(o,r.nest(e))})}}}}}}});