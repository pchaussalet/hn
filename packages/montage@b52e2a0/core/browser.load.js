montageDefine("b52e2a0","core/browser",{dependencies:["montage"],factory:function(t,e){var n=t("montage").Montage,i=RegExp(/AppleWebKit\/([\d.]+)/),a=n.specialize({constructor:{value:function a(t){this.super(),this._userAgent=t,this._analyze(t)}},_analyze:{value:function(t){if(t.indexOf("Android")>-1&&t.indexOf("Mozilla/5.0")>-1&&t.indexOf("AppleWebKit")>-1){this.android={};var e=i.exec(t),n=null===e?null:parseFloat(i.exec(t)[1]);this.android.androidBrowser=null!==n&&537>n}}},_userAgent:{value:null}}),r=null;n.defineProperties(e,{browser:{get:function(){return null===r&&(r=new a(navigator.userAgent)),r}},Browser:{value:a}})}});