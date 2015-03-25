montageDefine("b52e2a0","ui/base/abstract-button",{dependencies:["../../core/core","./abstract-control","../../composer/press-composer"],factory:function(t,e){var n=(t("../../core/core").Montage,t("./abstract-control").AbstractControl),i=t("../../composer/press-composer").PressComposer,r=e.AbstractButton=n.specialize({constructor:{value:function r(){if(this.constructor===r)throw Error("AbstractControl cannot be instantiated.");this.super(),this._pressComposer=new i,this.addComposer(this._pressComposer),this._pressComposer.defineBinding("longPressThreshold ",{"<-":"holdThreshold",source:this}),this.defineBinding("classList.has('montage--disabled')",{"<-":"!enabled"}),this.defineBinding("classList.has('montage--active')",{"<-":"active"})}},enabled:{value:!0},_preventFocus:{value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(t){this._preventFocus=!!t,this.needsDraw=!0}},acceptsActiveTarget:{value:function(){return!this._preventFocus}},willBecomeActiveTarget:{value:function(){}},_labelNode:{value:void 0,enumerable:!1},_label:{value:void 0,enumerable:!1},label:{get:function(){return this._label},set:function(t){if(t!==void 0&&this.converter)try{t=this.converter.convert(t),this.error&&(this.error=null)}catch(e){this.error=e}this._label=""+t,this.needsDraw=!0}},holdThreshold:{value:1e3},_pressComposer:{value:null},_active:{value:!1},active:{get:function(){return this._active},set:function(t){this._active=t,this.needsDraw=!0}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},addEventListener:{value:function(t,e,i){n.addEventListener.call(this,t,e,i),"longAction"===t&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(t){this.active=!0,t.touch&&document.addEventListener("touchmove",this,!1),this._preventFocus||this._element.focus()}},handlePress:{value:function(){this.active=!1,this.dispatchActionEvent(),document.removeEventListener("touchmove",this,!1)}},handleKeyup:{value:function(t){32===t.keyCode&&(this.active=!1,this.dispatchActionEvent())}},handleLongPress:{value:function(){this._pressComposer.cancelPress();var t=document.createEvent("CustomEvent");t.initCustomEvent("longAction",!0,!0,null),this.dispatchEvent(t)}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(t){t.preventDefault()}},isInputElement:{value:!1},enterDocument:{value:function(t){t&&(this.isInputElement="INPUT"===this.originalElement.tagName,this.isInputElement?void 0===this._label&&(this.label=this.originalElement.value):(this.originalElement.firstChild||this.originalElement.appendChild(document.createTextNode("")),this._labelNode=this.originalElement.firstChild,void 0===this._label&&(this.label=this._labelNode.data)),this.element.setAttribute("role","button"),this.element.addEventListener("keyup",this,!1))}},_drawLabel:{enumerable:!1,value:function(t){this.isInputElement?this._element.value=t:this._labelNode&&(this._labelNode.data=t)}},draw:{value:function(){this._elementNeedsTabIndex()&&(this._preventFocus?this.element.removeAttribute("tabindex"):this.element.setAttribute("tabindex","-1")),this.isInputElement&&(this.element.disabled=!this.enabled),this._drawLabel(this.label)}},_elementNeedsTabIndexRegex:{value:/INPUT|TEXTAREA|A|SELECT|BUTTON|LABEL/},_elementNeedsTabIndex:{value:function(){return null===this.element.tagName.match(this._elementNeedsTabIndexRegex)}}})}});