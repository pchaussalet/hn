montageDefine("b52e2a0","core/serialization/serializer/self-serializer",{dependencies:["../../core"],factory:function(t,e){var n=t("../../core").Montage,i=n.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},constructor:{value:function i(){}},initWithMalkerAndVisitorAndObject:{value:function(t,e,n){return this._malker=t,this._visitor=e,this._object=n,this}},getObjectLabel:{value:function(t){return this._visitor.labeler.getObjectLabel(t)}},addObject:{value:function(t){return"object"==typeof t?(this._malker.visit(t),t):void 0}},addObjectReference:{value:function(t){var e=this._visitor.builder,n=this._visitor.labeler,i=n.getObjectLabel(t);return{thisIsAReferenceCreatedByMontageSerializer:!0,reference:e.createObjectReference(i)}}},setProperty:{value:function(t,e,n){var i,r=this._visitor.builder;i=r.top.getProperty("properties"),r.push(i),this._visitor.setProperty(this._malker,t,e,n),r.pop()}},setAllProperties:{value:function(){var t,e=this._visitor.builder;t=e.top.getProperty("properties"),e.push(t),this._visitor.setSerializableObjectProperties(this._malker,this._object),e.pop()}},setUnit:{value:function(t){this._visitor.setObjectCustomUnit(this._malker,this._object,t)}},setAllUnits:{value:function(){this._visitor.setObjectCustomUnits(this._malker,this._object)}}});e.SelfSerializer=i}});