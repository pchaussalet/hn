var util=require("util"),driver=require("websocket-driver"),API=require("./websocket/api"),WebSocket=function(e,t,n,i,r){r=r||{},this._stream=t,this._driver=driver.http(e,{maxLength:r.maxLength,protocols:i});var a=this;if(this._stream&&this._stream.writable){if(!this._stream.readable)return this._stream.end();var s=function(){a._stream.removeListener("data",s)};this._stream.on("data",s),this._driver.io.write(n),API.call(this,r),process.nextTick(function(){a._driver.start()})}};util.inherits(WebSocket,API),WebSocket.isWebSocket=function(e){return driver.isWebSocket(e)},WebSocket.validateOptions=function(e,t){driver.validateOptions(e,t)},WebSocket.WebSocket=WebSocket,WebSocket.Client=require("./websocket/client"),WebSocket.EventSource=require("./eventsource"),module.exports=WebSocket;