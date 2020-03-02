!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";n.r(e);n(2),n(6);function r(t){this.map=t,this.zoomControl=null,this.tileLayer=null,this.timeLayers=null,this.d60Layer=null,this.d30Layer=null,this.w30Layer=null,this.centres=null;this.tileLayer=L.tileLayer("https://api.mapbox.com/styles/v1/hawkinsohocl/cjxa85mpa01ws1ckezki29p3i/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGF3a2luc29ob2NsIiwiYSI6IjNmMmZkMzY4MTUwZGNiMjE4NTExOWQwNDBjNzg4NjAzIn0.bv8BBlUo7MtQR544YviGZQ",{attribution:'<a href="http://commonslibrary.parliament.uk">House of Commons Library</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',accessToken:"pk.eyJ1IjoiaGF3a2luc29ob2NsIiwiYSI6IjNmMmZkMzY4MTUwZGNiMjE4NTExOWQwNDBjNzg4NjAzIn0.bv8BBlUo7MtQR544YviGZQ",minZoom:5,maxZoom:18}),this.map.on("moveend",function(){var e=t.getCenter(),n=t.getZoom(),r="?long=".concat(e.lng,"&lat=").concat(e.lat,"&zoom=").concat(n);history.replaceState(null,null,r)}),this.setupMap=function(t,e,n,r){var o=this;this.zoomControl=L.control.zoom({position:"topright"}),this.d60Layer=t,this.d30Layer=e,this.w30Layer=n,this.centreMarkers=r;var i={"Driving within 60 minutes":t,"Driving within 30 minutes":e,"Walking within 30 minutes":n};this.timeLayers=L.control.layers({},i,{position:"bottomright",collapsed:!1}),this.d60Layer.setZIndex(1),this.d30Layer.setZIndex(2),this.w30Layer.setZIndex(3),this.tileLayer.addTo(this.map),this.d60Layer.addTo(this.map),this.d30Layer.addTo(this.map),this.w30Layer.addTo(this.map),this.centreMarkers.forEach(function(t){t.addTo(o.map)}),this.timeLayers.addTo(this.map),this.zoomControl.addTo(this.map)}}function o(t){this.mapView=t,this.dataDownloads=4,this.d60Json=null,this.d30Json=null,this.w30Json=null,this.centres=null,this.d60Layer=null,this.d30Layer=null,this.w30Layer=null,this.centreMarkers=null,this.downloadMapData=function(t){var e=this;d3.json("drive-60.json").then(function(t){e.d60Json=t,e.d60Layer=L.geoJson(e.d60Json,{color:"#046a38",opacity:0,weight:1,fillOpacity:.4}),e.registerDownload()}),d3.json("drive-30.json").then(function(t){e.d30Json=t,e.d30Layer=L.geoJson(e.d30Json,{color:"#046a38",opacity:0,weight:1,fillOpacity:.4}),e.registerDownload()}),d3.json("walk-30.json").then(function(t){e.w30Json=t,e.w30Layer=L.geoJson(e.w30Json,{color:"#046a38",opacity:0,weight:1,fillOpacity:.4}),e.registerDownload()}),d3.csv("scanning-centres.csv").then(function(t){e.centres=t,e.centreMarkers=[],e.centres.forEach(function(t){var n=L.marker([+t.longitude,+t.latitude]);n.bindPopup("<b>".concat(t.name,"</b><br>").concat(t.postcode),{closeButton:!1}).openPopup(),e.centreMarkers.push(n)}),e.registerDownload()})},this.registerDownload=function(){this.dataDownloads=this.dataDownloads-1,0===this.dataDownloads&&this.mapView.setupMap(this.d60Layer,this.d30Layer,this.w30Layer,this.centreMarkers)}}function i(t){for(var e=window.location.search.substring(1).split("&"),n=0;n<e.length;n++){var r=e[n].split("=");if(r[0]==t)return r[1]}return null}var s=i("long"),a=i("lat"),u=i("zoom");window.sc=function(t,e,n){var i={},s=function(t,e){return null==t||0==t||isNaN(parseFloat(t))?e:parseFloat(t)},a=s(t,-4),u=s(e,54.8),c=s(n,6),l=L.map("map",{zoomControl:!1,maxBounds:L.latLngBounds(L.latLng(73,-60),L.latLng(25,50))});l.setView([u,a],c);var f=new r(l),d=new o(f);return i.mapView=f,i.mapModel=d,d.downloadMapData(),i}(s,a,u)},function(t,e,n){(function(r,o){var i,s,a;function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a=function(){"use strict";function t(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}var e=setTimeout;function n(){}function i(t){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function s(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void c(e.promise,t)}a(e.promise,r)}else(1===t._state?a:c)(e.promise,t._value)})):t._deferreds.push(e)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===u(e)||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void d((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}var r,o}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function d(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var r=new this.constructor(n);return s(this,new f(t,e,r)),r},i.prototype.finally=t,i.all=function(t){return new i(function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,s){try{if(s&&("object"===u(s)||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){i(t,e)},n)}r[t]=s,0==--o&&e(r)}catch(t){n(t)}}for(var s=0;s<r.length;s++)i(s,r[s])})},i.resolve=function(t){return t&&"object"===u(t)&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},i._immediateFn="function"==typeof r&&function(t){r(t)}||function(t){e(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var h=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==o)return o;throw new Error("unable to locate global object")}();"Promise"in h?h.Promise.prototype.finally||(h.Promise.prototype.finally=t):h.Promise=i},"object"===u(e)&&void 0!==t?a():void 0===(s="function"==typeof(i=a)?i.call(e,n,e,t):i)||(t.exports=s)}).call(this,n(3).setImmediate,n(0))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(4),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o,i,s,a,u=1,c={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){p(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){p(t.data)},r=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):r=function(t){setTimeout(p,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&p(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),r=function(e){t.postMessage(s+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return c[u]=o,r(u),u++},d.clearImmediate=h}function h(t){delete c[t]}function p(t){if(l)setTimeout(p,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{h(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(0),n(5))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var t=a(d);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};l.prototype.append=function(t,e){t=a(t),e=u(e);var n=this.map[t];this.map[t]=n?n+","+e:e},l.prototype.delete=function(t){delete this.map[a(t)]},l.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},l.prototype.set=function(t,e){this.map[a(t)]=u(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),c(t)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},l.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),c(t)},e.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];w.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})},t.Headers=l,t.Request=m,t.Response=w,t.fetch=function(t,n){return new Promise(function(r,o){var i=new m(t,n),s=new XMLHttpRequest;s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new l,t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new w(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function l(t){this.map={},t instanceof l?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function h(t){var e=new FileReader,n=d(e);return e.readAsArrayBuffer(t),n}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&r(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,n,r=f(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=d(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(t,e){var n,r,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),i.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function w(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)}]);
//# sourceMappingURL=map.bundle.js.map