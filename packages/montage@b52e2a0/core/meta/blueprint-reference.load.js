montageDefine("b52e2a0","core/meta/blueprint-reference",{dependencies:["../core","../promise","./blueprint","./binder","./remote-reference","./binder-reference","../logger","./module-blueprint"],factory:function(t,e){"use strict";t("../core").Montage;var n=t("../promise").Promise,i=t("./blueprint"),r=t("./binder"),a=t("./remote-reference").RemoteReference,o=t("./binder-reference").BinderReference;t("../logger").logger("blueprint"),e.BlueprintReference=a.specialize({constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",(this._reference.blueprintName||"unnamed").toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e){e.blueprintName;var a=e.blueprintModule;e.prototypeName,e.moduleId;var s=e.binderReference,l=n.resolve(r.Binder.manager.defaultBinder);return s&&(l=o.valueFromReference(s,t)),l.then(function(e){if(e){var n=t("./module-blueprint");return n.ModuleBlueprint.getBlueprintWithModuleId(a.id,a.require).then(function(t){if(t)return e.addBlueprint(t),t;throw Error("Error cannot find Blueprint "+a)})}return i.Blueprint.getBlueprintWithModuleId(a,t)})}},referenceFromValue:{value:function(t){var e={};return e.blueprintName=t.name,e.blueprintModule=t.blueprintInstanceModule,t.binder&&!t.binder.isDefault&&(e.binderReference=o.referenceFromValue(t.binder)),e}}})}});