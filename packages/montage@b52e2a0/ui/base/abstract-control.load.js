montageDefine("b52e2a0","ui/base/abstract-control",{dependencies:["../../core/core","../component","collections/dict"],factory:function(t,e){var n=(t("../../core/core").Montage,t("../component").Component),i=t("collections/dict");e.AbstractControl=n.specialize({dispatchActionEvent:{value:function(){return this.dispatchEvent(this.createActionEvent())}},_detail:{value:null},detail:{get:function(){return null==this._detail&&(this._detail=new i),this._detail}},createActionEvent:{value:function(){var t,e=document.createEvent("CustomEvent");return t=this._detail,e.initCustomEvent("action",!0,!0,t),e}}})}});