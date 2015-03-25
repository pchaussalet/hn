montageDefine("b52e2a0","core/meta/blueprint",{dependencies:["../core","../promise","../serialization","./object-property","../enum","./binder","./blueprint-reference","./property-blueprint","./association-blueprint","./derived-property-blueprint","./event-blueprint","./validation-rule","../deprecate","../logger","./module-blueprint"],factory:function(t,e){"use strict";var n=t("../core").Montage,i=t("../promise").Promise;t("../serialization").Deserializer,t("./object-property").ObjectProperty,t("../enum").Enum;var r=t("./binder"),a=t("./blueprint-reference").BlueprintReference,o=t("./property-blueprint").PropertyBlueprint,s=t("./association-blueprint").AssociationBlueprint,l=t("./derived-property-blueprint").DerivedPropertyBlueprint,c=t("./event-blueprint").EventBlueprint,u=t("./validation-rule").PropertyValidationRule,h=t("../deprecate");t("../logger").logger("blueprint");var d={name:"default",customPrototype:!1},p=e.Blueprint=n.specialize({FileExtension:{value:".meta"},constructor:{value:function p(){this.superForValue("constructor")(),this._eventBlueprints=[],this.defineBinding("eventBlueprints",{"<-":"_eventBlueprints.concat(parent.eventBlueprints)"})}},initWithName:{value:function(t){return this._name=null!==t?t:"default",this.customPrototype=!1,this}},initWithNameAndModuleId:{value:h.deprecateMethod(void 0,function(t){return this.initWithName(t)},"Blueprint#initWithNameAndModuleId","ModuleBlueprint#initWithModuleAndExportName")},serializeSelf:{value:function(t){t.setProperty("name",this.name),this._binder&&!this.binder.isDefault&&t.setProperty("binder",this._binder,"reference"),this.blueprintInstanceModule&&t.setProperty("blueprintModule",this.blueprintInstanceModule),this._parentReference&&t.setProperty("parent",this._parentReference),this._setPropertyWithDefaults(t,"customPrototype",this.customPrototype),this._propertyBlueprints.length>0&&t.setProperty("propertyBlueprints",this._propertyBlueprints),Object.getOwnPropertyNames(this._propertyBlueprintGroups).length>0&&t.setProperty("propertyBlueprintGroups",this._propertyBlueprintGroups),this._eventBlueprints.length>0&&t.setProperty("eventBlueprints",this._eventBlueprints),this._propertyValidationRules.length>0&&t.setProperty("propertyValidationRules",this._propertyValidationRules)}},deserializeSelf:{value:function(t){this._name=t.getProperty("name");var e=t.getProperty("binder");e&&(this._binder=e),this.blueprintInstanceModule=t.getProperty("blueprintModule"),this._parentReference=t.getProperty("parent"),this.customPrototype=this._getPropertyWithDefaults(t,"customPrototype");var n;n=t.getProperty("propertyBlueprints"),n&&(this._propertyBlueprints=n),n=t.getProperty("propertyBlueprintGroups"),n&&(this._propertyBlueprintGroups=n),n=t.getProperty("eventBlueprints"),n&&(this._eventBlueprints=n),n=t.getProperty("propertyValidationRules"),n&&(this._propertyValidationRules=n)}},_setPropertyWithDefaults:{value:function(t,e,n){n!=d[e]&&t.setProperty(e,n)}},_getPropertyWithDefaults:{value:function(t,e){var n=t.getProperty(e);return n?n:d[e]}},_name:{value:null},name:{get:function(){return this._name}},create:{value:function(t,e){if(t===void 0||p.prototype.isPrototypeOf(t)){var i=Object.getPrototypeOf(p).create;return i.call(this,t===void 0?this:t,e)}var r=n.create(t,e);return this.ObjectProperty.applyWithBlueprint(r.prototype,this),this.customPrototype=!0,r}},newInstance:{value:function(){var t=this.newInstancePrototype();return t?new t:null}},newInstancePrototype:{value:function(){if(!this.customPrototype){var t=this.parent?this.parent.newInstancePrototype():n,e=n.create(t,{init:{value:function(){return this}}});return this.ObjectProperty.applyWithBlueprint(e.prototype,this),e?e:null}throw Error("FIXME")}},ObjectProperty:{serializable:!1,enumerable:!0,get:function(){return this.binder?this.binder.ObjectProperty:r.Binder.manager.defaultBlueprintObjectProperty}},blueprintInstanceModule:{serializable:!1,value:null},blueprintInstanceModuleId:{get:function(){throw Error("blueprintInstanceModuleId is deprecated, use blueprintInstanceModule instead")},set:function(){throw Error("blueprintInstanceModuleId is deprecated, use blueprintInstanceModule instead")}},identifier:{get:function(){return["blueprint",(this.name||"unnamed").toLowerCase()].join("_")}},_binder:{value:null},binder:{serializable:!1,get:function(){return this._binder||(this._binder=r.Binder.manager.defaultBinder,this._binder.addBlueprint(this)),this._binder},set:function(t){this._binder=t}},_parentReference:{value:null},_parent:{value:null},parent:{serializable:!1,get:function(){return this._parent},set:function(t){t?(this._parentReference=(new a).initWithValue(t),this._parent=t):(this._parentReference=null,this._parent=null)}},moduleId:{get:function(){throw Error("Blueprint#moduleId is deprecated, use ModuleBlueprint#module instead")},set:function(){throw Error("Blueprint#moduleId is deprecated, use ModuleBlueprint#module instead")}},prototypeName:{get:function(){throw Error("Blueprint#prototypeName is deprecated, use ModuleBlueprint#exportName instead")},set:function(){throw Error("Blueprint#prototypeName is deprecated, use ModuleBlueprint#exportName instead")}},customPrototype:{value:!1},_propertyBlueprints:{value:[],distinct:!0},propertyBlueprints:{get:function(){var t=[];return t=t.concat(this._propertyBlueprints),this.parent&&(t=t.concat(this.parent.propertyBlueprints)),t}},_propertyBlueprintsTable:{value:{},distinct:!0,writable:!1},addPropertyBlueprint:{value:function(t){if(null!==t&&null!==t.name){var e=this._propertyBlueprints.indexOf(t);0>e&&(null!==t.owner&&t.owner!==this&&t.owner.removePropertyBlueprint(t),this._propertyBlueprints.push(t),this._propertyBlueprintsTable[t.name]=t,t._owner=this)}return t}},removePropertyBlueprint:{value:function(t){if(null!==t&&null!==t.name){var e=this._propertyBlueprints.indexOf(t);e>=0&&(this._propertyBlueprints.splice(e,1),delete this._propertyBlueprintsTable[t.name],t._owner=null)}return t}},newPropertyBlueprint:{value:function(t,e){return(new o).initWithNameBlueprintAndCardinality(t,this,e)}},newAssociationBlueprint:{value:function(t,e){return(new s).initWithNameBlueprintAndCardinality(t,this,e)}},newDerivedPropertyBlueprint:{value:function(t,e){return(new l).initWithNameBlueprintAndCardinality(t,this,e)}},addToOnePropertyBlueprintNamed:{value:function(t){return this.addPropertyBlueprint(this.newPropertyBlueprint(t,1))}},addToManyPropertyBlueprintNamed:{value:function(t){return this.addPropertyBlueprint(this.newPropertyBlueprint(t,1/0))}},addToOneAssociationBlueprintNamed:{value:function(t,e){var n=this.addPropertyBlueprint(this.newAssociationBlueprint(t,1));return e&&(n.targetBlueprint=e.owner,e.targetBlueprint=this),n}},addToManyAssociationBlueprintNamed:{value:function(t,e){var n=this.addPropertyBlueprint(this.newAssociationBlueprint(t,1/0));return e&&(n.targetBlueprint=e.owner,e.targetBlueprint=this),n}},propertyBlueprintForName:{value:function(t){var e=this._propertyBlueprintsTable[t];if(e===void 0){e=g;var n,i;for(i=0;(n=this._propertyBlueprints[i])!==void 0;i++)if(n.name===t){e=n;break}this._propertyBlueprintsTable[t]=e}return e===g&&(e=null),!e&&this.parent&&(e=this.parent.propertyBlueprintForName(t)),e}},_propertyBlueprintGroups:{distinct:!0,value:{}},propertyBlueprintGroups:{get:function(){var t=[];for(var e in this._propertyBlueprintGroups)t.push(e);return this.parent&&(t=t.concat(this.parent.propertyBlueprintGroups)),t}},propertyBlueprintGroupForName:{value:function(t){var e=this._propertyBlueprintGroups[t];return!e&&this.parent&&(e=this.parent.propertyBlueprintGroupForName(t)),e}},addPropertyBlueprintGroupNamed:{value:function(t){var e=this._propertyBlueprintGroups[t];return null==e&&(e=[],this._propertyBlueprintGroups[t]=e),e}},removePropertyBlueprintGroupNamed:{value:function(t){var e=this._propertyBlueprintGroups[t];return null!=e&&delete this._propertyBlueprintGroups[t],e}},addPropertyBlueprintToGroupNamed:{value:function(t,e){var n=this._propertyBlueprintGroups[e];null==n&&(n=this.addPropertyBlueprintGroupNamed(e));var i=n.indexOf(t);return 0>i&&n.push(t),n}},removePropertyBlueprintFromGroupNamed:{value:function(t,e){var n=this._propertyBlueprintGroups[e];if(null!=n&&null!=t){var i=n.indexOf(t);i>=0&&n.splice(i,1)}return null!=n?n:[]}},_eventBlueprints:{value:null},eventBlueprints:{value:null},_eventBlueprintsTable:{value:{},distinct:!0,writable:!1},addEventBlueprint:{value:function(t){if(null!==t&&null!==t.name){var e=this._eventBlueprints.indexOf(t);0>e&&(t.owner&&t.owner!==this&&t.owner.removeEventBlueprint(t),this._eventBlueprints.push(t),this._eventBlueprintsTable[t.name]=t,t._owner=this)}return t}},removeEventBlueprint:{value:function(t){if(null!==t&&null!==t.name){var e=this._eventBlueprints.indexOf(t);e>=0&&(this._eventBlueprints.splice(e,1),delete this._eventBlueprintsTable[t.name],t._owner=null)}return t}},newEventBlueprint:{value:function(t){return(new c).initWithNameAndBlueprint(t,this)}},addEventBlueprintNamed:{value:function(t){return this.addEventBlueprint(this.newEventBlueprint(t))}},eventBlueprintForName:{value:function(t){var e=this._eventBlueprintsTable[t];if(e===void 0){e=v;var n,i;for(i=0;(n=this._eventBlueprints[i])!==void 0;i++)if(n.name===t){e=n;break}this._eventBlueprintsTable[t]=e}return e===v&&(e=null),!e&&this.parent&&(e=this.parent.eventBlueprintForName(t)),e}},_propertyValidationRules:{value:{}},propertyValidationRules:{get:function(){var t=[];for(var e in this._propertyValidationRules)t.push(this._propertyValidationRules[e]);return this.parent&&(t=t.concat(this.parent.propertyValidationRules)),t}},propertyValidationRuleForName:{value:function(t){var e=this._propertyValidationRules[t];return!e&&this.parent&&(e=this.parent.propertyValidationRuleForName(t)),e}},addPropertyValidationRule:{value:function(t){var e=this._propertyValidationRules[t];return null==e&&(e=(new u).initWithNameAndBlueprint(t,this),this._propertyValidationRules[t]=e),e}},removePropertyValidationRule:{value:function(t){var e=this._propertyValidationRules[t];return null!=e&&delete this._propertyValidationRules[t],e}},evaluateRules:{value:function(t){var e=[];for(var n in this._propertyValidationRules){var i=this._propertyValidationRules[n];i.evaluateRule(t)&&e.push(i.messageKey)}return e}},blueprintModuleId:t("../core")._blueprintModuleIdDescriptor,blueprint:t("../core")._blueprintDescriptor},{getBlueprintWithModuleId:{value:h.deprecateMethod(void 0,function(e,n){return t("./module-blueprint").ModuleBlueprint.getBlueprintWithModuleId(e,n)},"Blueprint.getBlueprintWithModuleId","ModuleBlueprint.getBlueprintWithModuleId")},createDefaultBlueprintForObject:{value:function(t){if(t){var e=n.getInfoForObject(t).isInstance?Object.getPrototypeOf(t):t,r=n.getInfoForObject(e),a=new this;for(var o in e)if("_"!==o.charAt(0)&&e.hasOwnProperty(o)){var s,l=e[o];s=Array.isArray(l)?a.addToManyPropertyBlueprintNamed(o):a.addToOnePropertyBlueprintNamed(o),a.addPropertyBlueprintToGroupNamed(s,r.objectName)}var c=Object.getPrototypeOf(e);return c&&"blueprint"in c?c.blueprint.then(function(t){return a.parent=t,a}):i.resolve(a)}return i.resolve(f)}}}),f=Object.freeze((new p).initWithName("Unknown")),g=Object.freeze((new o).initWithNameBlueprintAndCardinality("Unknown",null,1)),v=Object.freeze((new c).initWithNameAndBlueprint("Unknown",null))}});