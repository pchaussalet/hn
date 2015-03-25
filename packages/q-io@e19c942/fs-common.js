var Q=require("q"),Boot=require("./fs-boot"),RootFs=require("./fs-root"),MockFs=require("./fs-mock"),concat=function(e){return Array.prototype.concat.apply([],e)};exports.update=function(e,t){function n(e){var t=this;return e=e||this.ROOT,RootFs(t,e)}function i(e){this.node=e,this.size=e.size}for(var r in Boot)e[r]=Boot[r];e.read=function(e,t,n,i){return"object"==typeof t?i=t:"object"==typeof n?(i=n,i.flags=t):(i=i||{},i.flags=t,i.charset=n),i.flags=i.flags||"r",Q.when(this.open(e,i),function(e){return e.read()},function(i){throw i.message="Can't read "+e+" because "+i.message,i.path=e,i.flags=t,i.charset=n,i})},e.write=function(e,t,n,i,r){var a=this;return"object"==typeof n?r=n:"object"==typeof i?(r=i,r.flags=n):(r=r||{},r.flags=n,r.charset=i),n=r.flags||"w",-1!==n.indexOf("b")?t instanceof Buffer||(t=new Buffer(t)):t instanceof Buffer&&(n+="b"),r.flags=n,Q.when(a.open(e,r),function(e){return Q.when(e.write(t),function(){return e.close()})})},e.append=function(e,t,n,i,r){var a=this;return"object"==typeof n?r=n:"object"==typeof i?(r=i,r.flags=n):(r=r||{},r.flags=n,r.charset=i),n=r.flags||"a",t instanceof Buffer&&(n+="b"),r.flags=n,Q.when(a.open(e,r),function(e){return Q.when(e.write(t),function(){return e.close()})})},e.move=function(e,t){var n=this;return this.rename(e,t).catch(function(i){if(i.crossDevice)return n.copyTree(e,t).then(function(){return n.removeTree(e)});throw i})},e.copy=function(e,t){var n=this;return Q.when(n.stat(e),function(i){var r=i.node.mode;return Q.all([n.open(e,{flags:"rb"}),n.open(t,{flags:"wb",mode:r})])}).spread(function(e,t){return Q.when(e.forEach(function(e){return t.write(e)}),function(){return Q.all([e.close(),t.close()])})})},e.copyTree=function(e,t){var n=this;return Q.when(n.stat(e),function(i){return i.isFile()?n.copy(e,t):i.isDirectory()?n.exists(t).then(function(r){function a(){return Q.when(n.list(e),function(i){return Q.all(i.map(function(i){return n.copyTree(n.join(e,i),n.join(t,i))}))})}return r?a():Q.when(n.makeDirectory(t,i.node.mode),a)}):i.isSymbolicLink()?n.symbolicCopy(e,t):void 0})},e.listTree=function(e,t){var n=this;e=(e||"")+"",e||(e="."),t=t||function(){return!0};var i=n.stat(e);return Q.when(i,function(i){var r=[];try{var a=t(e,i)}catch(o){return Q.reject(o)}return Q.when(a,function(a){return a&&r.push([e]),null!==a&&i.isDirectory()?Q.when(n.list(e),function(i){return r.push.apply(r,i.map(function(i){var r=n.join(e,i);return n.listTree(r,t)})),r}):r})},function(){return[]}).then(Q.all).then(concat)},e.listDirectoryTree=function(e){return this.listTree(e,function(e,t){return t.isDirectory()})},e.makeTree=function(e,t){e+="";var n=this,i=n.split(e),r=[];return n.isAbsolute(e)&&r.push(i.shift()||n.ROOT),i.reduce(function(e,i){return Q.when(e,function(){r.push(i);var e=n.join(r)||".",a=n.makeDirectory(e,t);return Q.when(a,null,function(e){if(!e.exists)throw e})})},void 0)},e.removeTree=function(e){var t=this;return Q.when(t.statLink(e),function(n){return n.isSymbolicLink()?t.remove(e):n.isDirectory()?t.list(e).then(function(n){return Q.all(n.map(function(n){return t.removeTree(t.join(e,n))})).then(function(){return t.removeDirectory(e)})}):t.remove(e)})},e.symbolicCopy=function(e,t,n){var i=this;return Q.when(i.relative(t,e),function(e){return i.symbolicLink(t,e,n||"file")})},e.exists=function(e){return Q.when(this.stat(e),function(){return!0},function(){return!1})},e.isFile=function(e){return Q.when(this.stat(e),function(e){return e.isFile()},function(){return!1})},e.isDirectory=function(e){return Q.when(this.stat(e),function(e){return e.isDirectory()},function(){return!1})},e.isSymbolicLink=function(e){return Q.when(this.statLink(e),function(e){return e.isSymbolicLink()},function(){return!1})},e.lastModified=function(e){var t=this;return t.stat(e).invoke("lastModified")},e.lastAccessed=function(e){var t=this;return t.stat(e).invoke("lastAccessed")},e.absolute=function(e){return this.isAbsolute(e)?this.normal(e):this.join(t(),e)},e.relative=function(e,t){var n=this;return Q.when(this.isDirectory(e),function(i){return i?n.relativeFromDirectory(e,t):n.relativeFromFile(e,t)})},e.relativeFromFile=function(e,t){var n=this;for(e=n.absolute(e),t=n.absolute(t),e=e.split(n.SEPARATORS_RE()),t=t.split(n.SEPARATORS_RE()),e.pop();e.length&&t.length&&t[0]==e[0];)e.shift(),t.shift();for(;e.length;)e.shift(),t.unshift("..");return t.join(n.SEPARATOR)},e.relativeFromDirectory=function(e,n){for(n||(n=e,e=t()),e=this.absolute(e),n=this.absolute(n),e=e.split(this.SEPARATORS_RE()),n=n.split(this.SEPARATORS_RE()),2===e.length&&""===e[1]&&e.pop();e.length&&n.length&&n[0]==e[0];)e.shift(),n.shift();for(;e.length;)e.shift(),n.unshift("..");return n.join(this.SEPARATOR)},e.contains=function(e,t){var n,i;if(e=this.absolute(e),t=this.absolute(t),e=e.split(this.SEPARATORS_RE()),t=t.split(this.SEPARATORS_RE()),2===e.length&&""===e[1]&&e.pop(),e.length>t.length)return!1;for(n=0,i=e.length;i>n&&e[n]===t[n];n++);return n==i},e.reroot=n,e.toObject=function(e){var t=this,n=t.listTree(e||"",function(e,t){return t.isFile()});return Q.when(n,function(e){var n={};return Q.all(e.map(function(e){return Q.when(t.read(e,"rb"),function(t){n[e]=t})})).then(function(){return n})})},e.merge=function(e){var t,n={};return e.forEach(function(e){t=Q.when(t,function(){return e.listTree("",function(e,t){return t.isFile()}).then(function(t){return Q.all(t.map(function(t){return Q.when(e.read(t,"rb"),function(e){n[t]=e})}))})})}),Q.when(t,function(){return MockFs(n)})},e.Stats=i;var a=["isDirectory","isFile","isBlockDevice","isCharacterDevice","isSymbolicLink","isFIFO","isSocket"];a.forEach(function(e){i.prototype[e]=function(){return this.node[e]()}}),i.prototype.lastModified=function(){return new Date(this.node.mtime)},i.prototype.lastAccessed=function(){return new Date(this.node.atime)}};