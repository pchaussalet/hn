montageDefine("6a85fb6","ui/raw-html.reel/raw-html",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.RawHtml=n.specialize({constructor:{value:function(){this.super()}},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,this.needsDraw=!0)}},defaultValue:{value:""},draw:{value:function(){var e=this._value,t=e||0===e?e:this.defaultValue;this.element.innerHTML=t}}})}});