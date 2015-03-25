montageDefine("b52e2a0","core/meta/property-blueprint",{dependencies:["../core","../enum","../logger"],factory:function(t,e){"use strict";var n=t("../core").Montage,i=t("../enum").Enum;t("../logger").logger("blueprint"),(new i).initWithMembers("string","number","boolean","date","enum","url","object"),(new i).initWithMembers("list","set","map");var r={name:"default",cardinality:1,mandatory:!1,readOnly:!1,denyDelete:!1,valueType:"string",collectionValueType:"list",valueObjectPrototypeName:"",valueObjectModuleId:"",enumValues:[],helpKey:""};e.PropertyBlueprint=n.specialize({constructor:{value:function(){this.superForValue("constructor")()}},initWithNameBlueprintAndCardinality:{value:function(t,e,n){return this._name=null!==t?t:r.name,this._owner=e,this.cardinality=n>0?n:r.cardinality,this}},serializeSelf:{value:function(t){t.setProperty("name",this.name),t.setProperty("blueprint",this._owner,"reference"),1/0===this.cardinality?t.setProperty("cardinality",-1):this._setPropertyWithDefaults(t,"cardinality",this.cardinality),this._setPropertyWithDefaults(t,"mandatory",this.mandatory),this._setPropertyWithDefaults(t,"readOnly",this.readOnly),this._setPropertyWithDefaults(t,"denyDelete",this.denyDelete),this._setPropertyWithDefaults(t,"valueType",this.valueType),this._setPropertyWithDefaults(t,"collectionValueType",this.collectionValueType),this._setPropertyWithDefaults(t,"valueObjectPrototypeName",this.valueObjectPrototypeName),this._setPropertyWithDefaults(t,"valueObjectModuleId",this.valueObjectModuleId),this.enumValues.length>0&&this._setPropertyWithDefaults(t,"enumValues",this.enumValues),this._setPropertyWithDefaults(t,"helpKey",this.helpKey)}},deserializeSelf:{value:function(t){this._name=t.getProperty("name"),this._owner=t.getProperty("blueprint"),this.cardinality=this._getPropertyWithDefaults(t,"cardinality"),-1===this.cardinality&&(this.cardinality=1/0),this.mandatory=this._getPropertyWithDefaults(t,"mandatory"),this.readOnly=this._getPropertyWithDefaults(t,"readOnly"),this.denyDelete=this._getPropertyWithDefaults(t,"denyDelete"),this.valueType=this._getPropertyWithDefaults(t,"valueType"),this.collectionValueType=this._getPropertyWithDefaults(t,"collectionValueType"),this.valueObjectPrototypeName=this._getPropertyWithDefaults(t,"valueObjectPrototypeName"),this.valueObjectModuleId=this._getPropertyWithDefaults(t,"valueObjectModuleId"),this.enumValues=this._getPropertyWithDefaults(t,"enumValues"),this.helpKey=this._getPropertyWithDefaults(t,"helpKey")}},_setPropertyWithDefaults:{value:function(t,e,n){n!=r[e]&&t.setProperty(e,n)}},_getPropertyWithDefaults:{value:function(t,e){var n=t.getProperty(e);return n?n:r[e]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},cardinality:{value:r.cardinality},mandatory:{value:r.mandatory},denyDelete:{value:r.denyDelete},readOnly:{value:r.readOnly},isAssociationBlueprint:{get:function(){return!1}},isToMany:{get:function(){return 1/0===this.cardinality||this.cardinality>1}},isDerived:{get:function(){return!1}},valueType:{value:r.valueType},collectionValueType:{value:r.collectionValueType},valueObjectPrototypeName:{value:r.valueObjectPrototypeName},valueObjectModuleId:{value:r.valueObjectModuleId},_enumValues:{value:null},enumValues:{get:function(){return this._enumValues?this._enumValues:[]},set:function(t){Array.isArray(t)&&(this._enumValues=t)}},helpKey:{value:r.helpKey},blueprintModuleId:t("../core")._blueprintModuleIdDescriptor,blueprint:t("../core")._blueprintDescriptor})}});