montageDefine("48adafc","lib/_stream_duplex",{dependencies:["core-util-is","inherits","./_stream_readable","./_stream_writable"],factory:function(e,t,n){function r(e){return this instanceof r?(l.call(this,e),c.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),this.once("end",i),void 0):new r(e)}function i(){this.allowHalfOpen||this._writableState.ended||process.nextTick(this.end.bind(this))}function a(e,t){for(var n=0,r=e.length;r>n;n++)t(e[n],n)}n.exports=r;var o=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t},s=e("core-util-is");s.inherits=e("inherits");var l=e("./_stream_readable"),c=e("./_stream_writable");s.inherits(r,l),a(o(c.prototype),function(e){r.prototype[e]||(r.prototype[e]=c.prototype[e])})}});