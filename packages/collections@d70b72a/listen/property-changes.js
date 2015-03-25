function PropertyChanges(){throw Error("This is an abstract interface. Mix it. Don't construct it")}function dispatchEach(e,t,n){for(var i=e.active,r=e.current,a=i.length=r.length;a--;)i[a]=r[a];for(var o=0,s=i.length;s>o;o++){var l=i[o];if(!(0>r.indexOf(l))){var c=l;if(l=l[e.specificHandlerMethodName]||l[e.genericHandlerMethodName]||l,!l.call)throw Error("No event listener for "+e.specificHandlerName+" or "+e.genericHandlerName+" or call on "+l);l.call(c,n,t,this)}}}require("../shim");var object_owns=Object.prototype.hasOwnProperty;module.exports=PropertyChanges,PropertyChanges.debug=!0,PropertyChanges.prototype.getOwnPropertyChangeDescriptor=function(e){this.__propertyChangeListeners__||Object.defineProperty(this,"__propertyChangeListeners__",{value:{},enumerable:!1,configurable:!0,writable:!0});var t=this.__propertyChangeListeners__;if(!object_owns.call(t,e)){var n=e+"";n=n&&n[0].toUpperCase()+n.slice(1),t[e]={willChangeListeners:{current:[],active:[],specificHandlerMethodName:"handle"+n+"WillChange",genericHandlerMethodName:"handlePropertyWillChange"},changeListeners:{current:[],active:[],specificHandlerMethodName:"handle"+n+"Change",genericHandlerMethodName:"handlePropertyChange"}}}return t[e]},PropertyChanges.prototype.hasOwnPropertyChangeDescriptor=function(e){if(!this.__propertyChangeListeners__)return!1;if(!e)return!0;var t=this.__propertyChangeListeners__;return object_owns.call(t,e)?!0:!1},PropertyChanges.prototype.addOwnPropertyChangeListener=function(e,t,n){this.makeObservable&&!this.isObservable&&this.makeObservable();var i,r=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);i=n?r.willChangeListeners:r.changeListeners,PropertyChanges.makePropertyObservable(this,e),i.current.push(t);var a=this;return function(){PropertyChanges.removeOwnPropertyChangeListener(a,e,i.current,n),a=null}},PropertyChanges.prototype.addBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.addOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.removeOwnPropertyChangeListener=function(e,t,n){var i,r=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);i=n?r.willChangeListeners:r.changeListeners;var a=i.current.lastIndexOf(t);if(-1===a)throw Error("Can't remove property change listener: does not exist: property name"+JSON.stringify(e));i.current.splice(a,1)},PropertyChanges.prototype.removeBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.removeOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.dispatchOwnPropertyChange=function(e,t,n){var i=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);if(!i.isActive){i.isActive=!0;var r;if(r=n?i.willChangeListeners:i.changeListeners,0!==r.length)try{dispatchEach.call(this,r,e,t)}finally{i.isActive=!1}}},PropertyChanges.prototype.dispatchBeforeOwnPropertyChange=function(e,t){return PropertyChanges.dispatchOwnPropertyChange(this,e,t,!0)},PropertyChanges.prototype.makePropertyObservable=function(e){if(!Array.isArray(this)){if(!Object.isExtensible(this))throw Error("Can't make property "+JSON.stringify(e)+" observable on "+this+" because object is not extensible");var t;"object"==typeof this.__state__?t=this.__state__:(t={},Object.isExtensible(this)&&Object.defineProperty(this,"__state__",{value:t,writable:!0,enumerable:!1})),t[e]=this[e],this.__overriddenPropertyDescriptors__||(n={},Object.defineProperty(this,"__overriddenPropertyDescriptors__",{value:n,enumerable:!1,writable:!0,configurable:!0}));var n=this.__overriddenPropertyDescriptors__;if(!object_owns.call(n,e)){var i,r=this;do{if(i=Object.getOwnPropertyDescriptor(r,e))break;r=Object.getPrototypeOf(r)}while(r);if(i=i||{value:void 0,enumerable:!0,writable:!0,configurable:!0},i.configurable&&(n[e]=i,i.writable||i.set)){var a;a="value"in i?{get:function(){return i.value},set:function(n){return n===i.value?n:(PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,i.value),i.value=n,t[e]=n,PropertyChanges.dispatchOwnPropertyChange(this,e,n),n)},enumerable:i.enumerable,configurable:!0}:{get:function(){return i.get?i.get.apply(this,arguments):void 0},set:function(n){var r;return i.get&&(r=i.get.apply(this,arguments)),i.set&&i.set.apply(this,arguments),i.get&&(n=i.get.apply(this,arguments),t[e]=n),n===r?n:(PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,r),PropertyChanges.dispatchOwnPropertyChange(this,e,n),n)},enumerable:i.enumerable,configurable:!0},Object.defineProperty(this,e,a)}}}},PropertyChanges.getOwnPropertyChangeDescriptor=function(e,t){return e.getOwnPropertyChangeDescriptor?e.getOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.getOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.hasOwnPropertyChangeDescriptor=function(e,t){return e.hasOwnPropertyChangeDescriptor?e.hasOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.hasOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.addOwnPropertyChangeListener=function(e,t,n,i){return Object.isObject(e)?e.addOwnPropertyChangeListener?e.addOwnPropertyChangeListener(t,n,i):PropertyChanges.prototype.addOwnPropertyChangeListener.call(e,t,n,i):void 0},PropertyChanges.removeOwnPropertyChangeListener=function(e,t,n,i){return Object.isObject(e)?e.removeOwnPropertyChangeListener?e.removeOwnPropertyChangeListener(t,n,i):PropertyChanges.prototype.removeOwnPropertyChangeListener.call(e,t,n,i):void 0},PropertyChanges.dispatchOwnPropertyChange=function(e,t,n,i){return Object.isObject(e)?e.dispatchOwnPropertyChange?e.dispatchOwnPropertyChange(t,n,i):PropertyChanges.prototype.dispatchOwnPropertyChange.call(e,t,n,i):void 0},PropertyChanges.addBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.addOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.removeBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.removeOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.dispatchBeforeOwnPropertyChange=function(e,t,n){return PropertyChanges.dispatchOwnPropertyChange(e,t,n,!0)},PropertyChanges.makePropertyObservable=function(e,t){return e.makePropertyObservable?e.makePropertyObservable(t):PropertyChanges.prototype.makePropertyObservable.call(e,t)};