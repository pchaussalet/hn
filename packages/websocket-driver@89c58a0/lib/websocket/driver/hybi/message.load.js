montageDefine("89c58a0","lib/websocket/driver/hybi/message",{dependencies:[],factory:function(e,t,n){"use strict";var r=function(){this.rsv1=!1,this.rsv2=!1,this.rsv3=!1,this.opcode=null,this.length=0,this._chunks=[]},i={read:function(){if(this.data)return this.data;this.data=new Buffer(this.length);for(var e=0,t=0,n=this._chunks.length;n>t;t++)this._chunks[t].copy(this.data,e),e+=this._chunks[t].length;return this.data},pushFrame:function(e){this.rsv1=this.rsv1||e.rsv1,this.rsv2=this.rsv2||e.rsv2,this.rsv3=this.rsv3||e.rsv3,null===this.opcode&&(this.opcode=e.opcode),this._chunks.push(e.payload),this.length+=e.length}};for(var a in i)r.prototype[a]=i[a];n.exports=r}});