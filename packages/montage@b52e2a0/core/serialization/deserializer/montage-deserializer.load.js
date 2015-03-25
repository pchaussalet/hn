montageDefine("b52e2a0","core/serialization/deserializer/montage-deserializer",{dependencies:["../../core","mousse/deserialization/interpreter","mousse/deserialization/deserializer","./montage-interpreter","./montage-reviver","../../promise","../../jshint","../../logger"],factory:function(t,e){var n=t("../../core").Montage;t("mousse/deserialization/interpreter").Interpreter;var i=t("mousse/deserialization/deserializer").Deserializer,r=t("./montage-interpreter").MontageInterpreter,a=t("./montage-reviver").MontageReviver,o=t("../../promise").Promise,s=t("../../jshint").JSHINT;t("../../logger").logger("montage-deserializer");var l=n.specialize.call(i,{_interpreter:{value:null},_serializationString:{value:null},_serialization:{value:null},init:{value:function(t,e,n){if(!this.isSerializationStringValid(t))throw Error(this._formatSerializationSyntaxError(t));return i.call(this,t),this._origin,this._serialization=null,this._interpreter=(new r).init(e,n),this}},serialization:{get:function(){var t=this._serialization;return t||(t=JSON.parse(this._serializationString),this._serialization=t),t}},deserialize:{value:function(t,e){var n;try{n=JSON.parse(this._serializationString)}catch(i){return o.reject(i)}return this._interpreter.instantiate(n,t,e)}},preloadModules:{value:function(){var t=JSON.parse(this._serializationString);return this._interpreter.preloadModules(t)}},getExternalObjectLabels:{value:function(){var t=this.serialization,e=[];for(var n in t)0===Object.keys(t[n]).length&&e.push(n);return e}},isSerializationStringValid:{value:function(t){try{return JSON.parse(t),!0}catch(e){return!1}}},_formatSerializationSyntaxError:{value:function(t){var e,n,i,r,a,o="   ",l=this._origin;if(s(t))e="Syntax error in the serialization but not able to find it!\n"+t;else{n=s.errors[0],i=t.split("\n"),r=(o+i.length).length,a=n.line-1;for(var c=0,u=i.length;u>c;c++)i[c]=Array(r-(c+1+"").length+1).join(c===a?">":" ")+(c+1)+" "+i[c];e="Syntax error at line "+n.line+(l?" from "+l:"")+":\n"+n.evidence+"\n"+n.reason+"\n"+i.join("\n")}return e}}},{defineDeserializationUnit:{value:function(t,e){a.defineUnitReviver(t,e)}}});e.MontageDeserializer=l,e.deserialize=function(t,e){return(new l).init(t,e).deserializeObject()}}});