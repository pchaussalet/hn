montageDefine("39b6ab9","serialization/builder",{dependencies:["./ast"],factory:function(e,t){(function(t){function n(){this.init()}var i=e("./ast");Object.defineProperties(n.prototype,{_root:{value:null,writable:!0},_stack:{value:null,writable:!0},_references:{value:null,writable:!0},_placeholderProperty:{value:Object.create(null)},init:{value:function(){return this._references=Object.create(null),this._root=new i.Root,this._stack=[this._root],this}},cleanup:{value:function(){this._references=null,this._root=null,this._stack=null}},getExternalReferences:{value:function(){var e=this._references,t=this._root,n=[];for(var i in e)t.hasProperty(i)&&t.getProperty(i)!==this._placeholderProperty||n.push(i);return n}},relabelReferences:{value:function(e,t){var n=this._references[e];if(n){n=n.slice(0);for(var i=0,r=n.length;r>i;i++)n[i].value=t}}},_registerReference:{value:function(e){var t=this._references,n=e.value;t[n]?t[n].push(e):t[n]=[e]}},_unregisterReference:{value:function(e){var t,n=e.label,i=this._references[n];1===i.length?delete this._references[n]:(t=i.indexOf(e),-1===t?console.log("BUG: reference '"+n+"' not found in registry."):i.splice(t,1))}},_createPlaceholdersForReferences:{value:function(){var e=this._references,t=this._root;for(var n in e)t.hasProperty(n)||t.setProperty(n,this._placeholderProperty)}},getSerialization:{value:function(e){return this._createPlaceholdersForReferences(),this._root.serialize(e)}},root:{get:function(){return this._root}},top:{get:function(){return this._stack[0]}},push:{value:function(e){return this._stack.unshift(e)}},pop:{value:function(){return this._stack.shift()}},createObjectLiteral:{value:function(){return new i.ObjectLiteral(this._root,Object.create(null))}},createArray:{value:function(){return new i.ObjectLiteral(this._root,[])}},createObjectReference:{value:function(e){var t=new i.ObjectReference(this._root,e);return this._registerReference(t),t}},createRegExp:{value:function(e){return new i.RegExpObject(this._root,e)}},createString:{value:function(e){return new i.Value(this._root,e)}},createNumber:{value:function(e){return new i.Value(this._root,e)}},createBoolean:{value:function(e){return new i.Value(this._root,e)}},createNull:{value:function(){return new i.Value(this._root,null)}},createCustomObject:{value:function(){return new i.CustomObject(this._root)}}}),t.Builder=n})(t)}});