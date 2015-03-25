montageDefine("b52e2a0","core/logger",{dependencies:["./core"],factory:function(t,e){function n(t){var e=function(t){return this._color=t,this};for(var n in d)e[n]=function(e){return function(){return t.color(d[e])}}(n);t.color=e}var i,a,r,s,o,l,c,h,u=t("./core").Montage;a=e.loggers={},o=function(){var t,e=o.caller.caller;return t=e.name,""===t&&(t="anonymous"),t},l=function(t){if(t.getHours){var e=t.getHours(),n=t.getMinutes(),i=t.getSeconds();return(1===e.length?"0"+e:e)+":"+(1===n.length?"0"+n:n)+":"+(1===i.length?"0"+i:i)+"."+t.getMilliseconds()}},s=function(){},r=function(){console.log(arguments)},i=e.Logger=u.specialize({constructor:{value:function i(){this.super(),n(this)}},init:{value:function(t,e,n){if(this.name=t,this._onStateChange=e,this._storeState=!n,this._storeState&&h){var i=h.getItem("_montage_logger_"+t);i&&(this.isDebug="true"===i)}return e&&this._onStateChange("true"===i),this.isError=!0,this}},name:{value:null},buffer:{value:[],distinct:!0},buffered:{value:!1},flush:{value:function(){var t,e,n=this.buffer;for(e=0;t=n[e];e++)this._formattedLog(t);this.buffer.length=0}},isDebug:{get:function(){return this.debug!==s},set:function(t){this.debug=t?this._consoleLogMontage:s}},isError:{get:function(){return this.error!==s},set:function(t){this.error=t?this._consoleLogMontage:s}},_consoleLogMontage:{value:function(){var t=arguments[0],e=t._montage_metadata;new Date,e?(Array.prototype.shift.call(arguments),Array.prototype.unshift.call(arguments,e.objectName+"."+o(t)+"()"),this.buffered?this.buffer.push(arguments):this._formattedLog(arguments)):this.buffered?this.buffer.push(arguments):this._formattedLog(arguments)}},_formattedLog:{value:function(t){var e=t[0];g.isDebug&&"string"==typeof e&&Array.prototype.splice.call(t,0,1,"%c"+e,this._logCss),console.log.apply(console,t)}},__logCss:{value:null},_logCss:{get:function(){return null===this.__logCss&&(this.__logCss="",this.__logCss+=this._color?"color:"+this._color+";":"color:black;"),this.__logCss}},debug:{value:s},error:{value:s},toTimeString:{value:l},_storeState:{value:null},_onStateChange:{value:null}});var d={base03:"#002b36",base02:"#073642",base01:"#586e75",base00:"#657b83",base0:"#839496",base1:"#93a1a1",base2:"#eee8d5",base3:"#fdf6e3",yellow:"#b58900",orange:"#cb4b16",red:"#dc322f",magenta:"#d33682",violet:"#6c71c4",blue:"#268bd2",cyan:"#2aa198",green:"#859900"};e.logger=function(t,e,n){var r;return null==(r=a[t])&&(r=(new i).init(t,e,n),u.defineProperty(a,t,{value:r})),r},c=u.specialize({constructor:{value:function c(){this.super()}},init:{value:function(){return document.nativeAddEventListener?(document.nativeAddEventListener("keyup",this,!1),document.nativeAddEventListener("keydown",this,!1)):(document.addEventListener("keyup",this,!1),document.addEventListener("keydown",this,!1)),this}},inspectorElement:{value:null},m_dontRemove:{value:null},titleHeader:{value:null},shown:{value:!1},isCtrl:{value:!1},isAlt:{value:!1},keyup:{value:function(t){17==t.which&&(this.isCtrl=!1),18==t.which&&(this.isAlt=!1)}},keydown:{value:function(t){return 17==t.which&&(this.isCtrl=!0),18==t.which&&(this.isAlt=!0),76==t.which&&this.isCtrl===!0&&this.isAlt===!0?(this.shown?this.hideInspector():this.showInspector(),!1):void 0}},change:{value:function(t){var e=t.target.checked,n=t.target.value,i=a[n];i.isDebug=e,i._onStateChange&&i._onStateChange(e),i._storeState&&h&&h.setItem("_montage_logger_"+n,e)}},mouseup:{value:function(){this.hideInspector()}},showInspector:{value:function(){if(!this.inspectorElement){var t,e,n,i,r,s,o,l,c,u,d,p=0;for(this.m_dontRemove=document.getElementsByTagName("body")[0],this.inspectorElement=document.createElement("div"),this.inspectorElement.id="_montage_logger_inspector",e=document.createElement("div"),this.inspectorElement.appendChild(e),i=document.createElement("div"),e.appendChild(i),n=document.createElement("h1"),n.className="_montage_logger_inspector-title",n.textContent="Logger Inspector",this.titleHeader=n,i.appendChild(n),c=Object.keys(a),p=0;t=a[c[p]];p++)r=document.createElement("label"),s=document.createElement("input"),d=document.createElement("span"),r.className="_montage_logger_inspector-content",d.textContent=t.name,r.appendChild(s),r.appendChild(d),s.value=t.name,s.type="checkbox",s.checked=!!t.isDebug,l="_montage_logger_"+t.name,t._storeState&&h&&(o=h.getItem(l),null==o&&h.setItem(l,t.isDebug)),i.appendChild(r);u=document.createElement("style");var f="#_montage_logger_inspector {";f+="    border: 1px solid rgba(15,15,15,0.4);",f+="    position: fixed;",f+="    right: 25px;",f+="    top: 25px;",f+="    -webkit-border-radius: 5px;",f+="    color: #dddddd;",f+='    font: 10px "Lucida Grande","Lucida Sans", sans;',f+="    background:-webkit-gradient(linear, left top, left bottom, from(rgba(15,15,15,0.75)), to(rgba(15,15,15,0.95)) );",f+="    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.3);",f+="    width: 250px;",f+="}",f+="#_montage_logger_inspector div {",f+="    -webkit-border-radius: 5px;",f+="    background: -webkit-gradient(radial, 100 -60, 0, 125 -50, 125, from(rgba(255,255,255,0.00)), to(rgba(0,0,0,.2)), color-stop(1, rgba(0,0,0,.2)));",f+="}",f+="#_montage_logger_inspector div div {",f+="    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.2)), to(rgba(0,0,0,.1)), color-stop(0.33, rgba(255,255,255,.01)), color-stop(0.33, rgba(50,50,50,1)) );",f+="    padding: 7px 10px;",f+="    -webkit-border-radius: 3px;",f+="    overflow-x: hidden;",f+="}",f+="._montage_logger_inspector-title {",f+="    color: rgba(255,255,255,0.9);",f+="    font-size: 13px;",f+="    margin: 0 0 11px 0;",f+="    padding: 0 0 0 5px;",f+="}",f+="._montage_logger_inspector-content {",f+="    padding: 0 0 0 20px;",f+="    margin: 0;",f+="    display: block;",f+="}",u.textContent=f,document.head.appendChild(u)}this.shown=!0,this.m_dontRemove.appendChild(this.inspectorElement),this.titleHeader.nativeAddEventListener("mouseup",this,!1),this.inspectorElement.nativeAddEventListener("change",this,!1)}},hideInspector:{value:function(){document.getElementById("_montage_logger_inspector")&&(this.shown=!1,this.m_dontRemove.removeChild(this.inspectorElement),this.titleHeader.nativeRemoveEventListener("mouseup",this,!1),this.inspectorElement.nativeRemoveEventListener("change",this,!1))}},handleEvent:{enumerable:!1,value:function(t){this[t.type]&&this[t.type](t)}}});var p=function(){(new c).init()};if("undefined"!=typeof window){try{h=window.localStorage}catch(f){console.log("Error accessing localStorage",f)}window.loggers=a,h&&p()}var g=e.logger("colors")}});