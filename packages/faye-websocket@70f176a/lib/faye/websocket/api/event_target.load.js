montageDefine("70f176a","lib/faye/websocket/api/event_target",{dependencies:["./event"],factory:function(e,t,n){var i=e("./event"),r={onopen:null,onmessage:null,onerror:null,onclose:null,addEventListener:function(e,t){this.on(e,t)},removeEventListener:function(e,t){this.removeListener(e,t)},dispatchEvent:function(e){e.target=e.currentTarget=this,e.eventPhase=i.AT_TARGET,this["on"+e.type]&&this["on"+e.type](e),this.emit(e.type,e)}};n.exports=r}});