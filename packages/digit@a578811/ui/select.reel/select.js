var AbstractSelect=require("montage/ui/base/abstract-select").AbstractSelect;exports.Select=AbstractSelect.specialize({constructor:{value:function(){this.super(),this.classList.add("digit-Select")}},enterDocument:{value:function(t){this.super(t),this.element.addEventListener("change",this,!1)}},handleChange:{value:function(){var t=this.contentController.organizedContent,e=this.element.selectedIndex;this.value=t[e]}},draw:{value:function(){var t,e=this.contentController.organizedContent;this._contentIsDirty&&(this.drawOptions(),this._contentIsDirty=!1),t=e.indexOf(this.value),-1==t&&(t=0),this.element.selectedIndex=t}},drawOptions:{value:function(){for(var t,e,i=this.contentController.organizedContent,n=document.createDocumentFragment(),o=0,a=i.length;a>o;o++)t=document.createElement("option"),e=i[o],t.textContent=e&&e[this.labelPropertyName],n.appendChild(t);this.element.innerHTML="",this.element.appendChild(n)}}});