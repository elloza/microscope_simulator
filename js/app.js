!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e){return[e.rotate_center.to_right-e.imageRadius,e.rotate_center.to_bottom-e.imageRadius,2*e.imageRadius,2*e.imageRadius]}n.r(t);const r=document.querySelector("#main-viewer"),o=r.getContext("2d");const i=new class{constructor(e,t,n,a){this.sampleListURL=e,this.imageDataRoot=t,this.indexedDBName=n,this.storageName=a}getSampleListURL(){return this.sampleListURL}getImageDataPath(e){return this.imageDataRoot+e+"/"}getDBName(){return this.indexedDBName}getStorageName(){return this.storageName}}("./dynamic/rock_list.json","./data-packages/","db_v3","files"),s=0,c=e=>t=>Math.floor(t/e),l=e=>t=>{const n=Math.floor(t/e);return t<0?t+e:e<=t?t-e*n:t},u=(e=!0)=>e?-1:1;function d(e){const t=e.isCrossNicol?e.cross_images:e.open_images;o.save(),o.beginPath(),o.arc(0,0,e.canvasWidth/2-s,0,2*Math.PI,!1),o.clip();const n=e.getAlpha(e.rotate);o.rotate(u(e.isClockwise)*(e.rotate+15*e.getImageNumber(e.rotate))/180*Math.PI),o.globalAlpha=1;const r=t[e.getImageNumber(e.rotate)];try{o.drawImage(r,...a(e),-e.canvasWidth/2,-e.canvasHeight/2,e.canvasWidth,e.canvasHeight)}catch(e){}o.restore(),o.save(),o.beginPath(),o.arc(0,0,e.canvasWidth/2-s,0,2*Math.PI,!1),o.clip(),o.rotate(u(e.isClockwise)*(e.rotate+15*e.getImageNumber(e.rotate+15))/180*Math.PI),o.globalAlpha=1-n;const i=t[e.getImageNumber(e.rotate+15)];try{o.drawImage(i,...a(e),-e.canvasWidth/2,-e.canvasHeight/2,e.canvasWidth,e.canvasHeight)}catch(e){}return o.restore(),e}function g(e){if(e.drawHairLine)return o.strokeStyle=e.isCrossNicol?"white":"black",o.globalAlpha=1,o.beginPath(),o.moveTo(0,.5*-e.canvasHeight+s),o.lineTo(0,.5*e.canvasHeight-s),o.moveTo(.5*-e.canvasWidth+s,0),o.lineTo(.5*e.canvasWidth-s,0),o.closePath(),o.stroke(),e}const m=(e,t,n)=>e*n/t;function h(e){if(!e.scaleWidth)return;let t=m(e.canvasWidth,2*e.imageRadius,e.scaleWidth);const n=e.canvasWidth,a=document.querySelector("#scalebar");let r=1*e.scaleText.match(/(\d+\.?\d*)/)[0];const o=e.scaleText.match(/\D*$/)[0];for(;t>=n;)t*=.5,r*=.5;return a.style.width=t+"px",a.querySelector("div:first-child").innerHTML=`${r} ${o}`,e}function p(e){return function(e){o.clearRect(.5*-e.canvasWidth,.5*-e.canvasHeight,e.canvasWidth,e.canvasHeight)}(e),d(e),g(e),h(e),e}class A{constructor(e){return this.root=document.querySelector(e),this.hook={},this}activate(){this.hook.activate(this.root),this.root.classList.remove("inactive")}inactivate(){this.hook.inactivate(this.root),this.root.classList.add("inactive")}setHookOnActivate(e=(e=>{})){return this.hook.activate=e,this}setHookOnInactivate(e=(e=>{})){return this.hook.inactivate=e,this}}const f=new A("#error_message_bar").setHookOnInactivate(e=>{e.classList.remove("message-error")});function v(e){return f.inactivate(),e}function y(e){return t=>(f.setHookOnActivate(t=>{t.querySelector(".message_space").innerHTML=e,t.classList.add("message-error")}),f.activate(),t)}const w=new A("#loading_message_bar").setHookOnActivate(e=>{e.querySelector(".message_space").innerHTML="Loading images...",e.classList.add("message-loading")}).setHookOnInactivate(e=>{e.classList.remove("message-loading")}),b=e=>(w.activate(),e),_=e=>(w.inactivate(),e),L=e=>{return document.querySelector("#welcome-card").classList.add("inactive"),e},S=e=>{return document.querySelector("#viewer_wrapper").classList.remove("inactive"),e},P=e=>{return document.querySelector("#low-navigation").classList.remove("inactive"),e};function D(e){return new Promise((t,n)=>{Zip.inflate_file(e,t,n,function(e){const t=document.querySelector(e),n=t.querySelector(".bar");return n.style.width="0%",t.clientWidth,e=>{n.style.width=`${e.loaded/e.total*100}%`}}("#progress_bar"),function(e){const t=document.querySelector(e).querySelector(".bar");return e=>{t.style.width="0%"}}("#progress_bar"))})}function k(e){return new Promise((t,n)=>{const a=new FileReader;a.onerror=n,a.onload=(()=>{t(a.result)}),a.readAsDataURL(e)})}async function O(e){const t=Zip.inflate(e),n={};return await Promise.all(Object.entries(t.files).map(async e=>{if(e[0].includes(".json"))n[e[0]]=e[1].inflate();else{const t=e[0].match(/.*\.(\w+)$/)[1],a=await function(e,t){return new Promise((n,a)=>{for(var r=new Uint8Array(e),o="",i=r.byteLength,s=0;s<i;s++)o+=String.fromCharCode(r[s]);n(`data:image/${t};base64,`+window.btoa(o))})}(e[1].inflate(),t),r=a.match(/^data:(image\/\w+);/)[1].split("/")[1],o=e[0].split(".")[0]+"."+r;n[o]=a}return!0})),n}function B(e){return e.replace(/\//g,"_").replace(/\./g,"")}async function I(e,t,n,a){const r=B(t),o=await e.zipDBHandler.get(e.zipDB,r);var s;if(void 0!==o&&o.lastModified===n)return[o,!1,null];if(a)return void 0!==o?[o,!1,null]:[null,!1,null];{const a=i.getImageDataPath(t)+"manifest.json",o=i.getImageDataPath(t)+"o1.jpg",c=i.getImageDataPath(t)+"c1.jpg",l=i.getImageDataPath(t)+e.supportedImageType+".zip";return[{manifest:await fetch(a).then(e=>e.text()),thumbnail:{"o1.jpg":await fetch(o).then(e=>e.blob()).then(k),"c1.jpg":await fetch(c).then(e=>e.blob()).then(k)},id:r,lastModified:n,zip:null},!0,(s=l,async()=>await D(s).then(O))]}}function H(e,t){return new Promise(async(n,a)=>{const r=e.supportedImageType,o=i.getImageDataPath(t)+r+".zip",[s,c]=await async function(e){try{return[(await fetch(e,{method:"HEAD"}).catch(e=>{throw console.log("Package metadata cannot be fetched."),Error(e)})).headers.get("last-modified"),!1]}catch(e){return["none",!0]}}(o);n(await I(e,t,s,c))})}function E(e){return e.hasOwnProperty("rotate_center")?{to_right:e.rotate_center[0],to_bottom:e.rotate_center[1]}:{to_right:.5*e.image_width,to_bottom:.5*e.image_height}}function M(e){const t=E(e),n=.5*e.image_width,a=.5*e.image_height;return Math.min(n-Math.abs(n-t.to_right),a-Math.abs(a-t.to_bottom))}function N(e,t){if("string"==typeof e)return e;if("object"==typeof e){if(e.hasOwnProperty(t))return e[t];{const t=Object.keys(e);return t.length>0?e[t[0]]:""}}return""}function R(e){const t=document.querySelector("#view_discription"),n=e.language,a=`<ul style="list-style-type:none;">\n            <li>${`${N(e.rockType,n)} ${e.location?"("+N(e.location,n)+")":""}`}</li>\n            <li>${N(e.discription,n)}</li>\n            <li>${N(e.owner,n)}</li>\n        </ul>`;return t.innerHTML=a,e}function T(e){return new Promise((t,n)=>{const a=new Image;a.onload=(e=>{a.onnerror=null,t(a)}),a.onerror=(e=>{t(a)}),a.src=function(e){if(e instanceof Blob)return(window.URL||window.webkitURL).createObjectURL(e);return String,e}(e)})}function j(e,t){return t in e?e[t]:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII="}function q(e,t){return n=>new Promise(async(a,r)=>{Promise.all([Promise.all(Array(n.image_number-1).fill(0).map((n,a)=>j(e,`o${a+1}.${t}`)).map(T)),Promise.all(Array(n.image_number-1).fill(0).map((n,a)=>j(e,`c${a+1}.${t}`)).map(T))]).then(e=>{return{open:e[0],cross:e[1]}}).then(function(e){return t=>new Promise((n,a)=>{e.open_images=t.open,e.cross_images=t.cross,n(e)})}(n)).then(a)})}function C(e,t){return t?t=>new Promise((n,a)=>{(function(e){return async t=>{if(await e.zipDBHandler.put(e.zipDB,t),e.storedKeys.push(t.id),e.storedKeys.length>20){const t=e.storedKeys.shift();await e.zipDBHandler.delete(e.zipDB,t),Array.from(document.querySelectorAll(`#rock_selector>option[value=${t}]`)).forEach(e=>{const t=e.innerHTML.replace("✓ ","");e.innerHTML=t,e.classList.remove("downloaded")})}return e}})(e)(t).then(n)}):t=>new Promise((t,n)=>{t(e)})}function x(e){return new Promise(async(t,n)=>{const a=document.querySelector("#rock_selector"),r=a.options[a.selectedIndex].value;e.canRotate=!1,v(),b(),L(),S(),P();try{const[a,o,i]=await H(e,r),s=JSON.parse(a.manifest),[u,d]=await function(e){return(t,n)=>new Promise((a,r)=>{e.containorID=B(t),e.isClockwise=n.rotate_clockwise,e.location=n.hasOwnProperty("location")?n.location:"Unknown",e.rockType=n.hasOwnProperty("rock_type")?n.rock_type:"Unknown",e.owner=n.hasOwnProperty("owner")?n.owner:"Unknown",e.discription=n.hasOwnProperty("discription")?n.discription:"No discription. ",e.rotate_center=E(n),e.imageWidth=n.image_width,e.imageHeight=n.image_height,e.imageRadius=M(n),e.imageRadiusOriginal=M(n),e.scaleWidth=!!n.hasOwnProperty("scale-pixel")&&parseInt(n["scale-pixel"]),e.scaleText=!!n.hasOwnProperty("scale-unit")&&n["scale-unit"];const o=n.rotate_by_degree,i=n.hasOwnProperty("cycle_rotate_degree")?parseInt(n.cycle_rotate_degree):90,s=i/o+1;e.image_number=s;const u=s-1,d=2*(s-1);e.getImageNumber=i>0?t=>l(s-1)(c(o)(e.isClockwise?360-t:t)):e=>mirrorBy(u)(l(d)(c(o)(e))),e.getAlpha=(e=>{const t=l(2*d)(c(o)(e));return 1-(e-o*t)/o}),e.open_images=[],e.cross_images=[],e.rotate=0,a(e)})}(e)(r,s).then(R).then(q(a.thumbnail,"jpg")).then(p).then(function(e,t,n){return async a=>n?[a,Object.assign(t,{zip:await e()})]:[a,t]}(i,a,o));u.canRotate=!0,q(d.zip,u.supportedImageType)(u).then(e=>C(e,o)(d)).then(function(e){return t=>t=>new Promise((n,a)=>{Array.from(document.querySelectorAll(`#rock_selector>option[value=${e}]`)).forEach(e=>{const t=e.innerHTML.replace("✓ ","");e.innerHTML="✓ "+t,e.classList.add("downloaded")}),n(t)})}(r)(s)).then(p).then(t)}catch(e){n(e)}})}HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var a=atob(this.toDataURL(t,n).split(",")[1]),r=a.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=a.charCodeAt(i);e(new Blob([o],{type:t||"image/png"}))}});const W=(K=r,(e,t=0)=>e instanceof MouseEvent?e instanceof WheelEvent?[e.deltaX,e.deltaY]:[e.pageX-K.offsetLeft,e.pageY-K.offsetTop]:e instanceof TouchEvent&&e.touches.length>t?[e.touches[t].pageX-K.offsetLeft,e.touches[t].pageY-K.offsetTop]:void 0);var K;function z(e,t){return e.drag_start=e.drag_end||void 0,e.drag_end=W(t),e.pinch_start=e.pinch_end||void 0,e.pinch_end=W(t,1),e}function U(e,t){if(!e.canRotate)return;if(void 0===e.drag_start)return;const n=(a=.5*e.canvasWidth,r=.5*e.canvasHeight,(e,t,n,o)=>{const i=e-a,s=n-a,c=t-r,l=o-r,u=(i*s+c*l)/Math.sqrt((i*i+c*c)*(s*s+l*l));return Math.sign(i*l-s*c)*Math.acos(u)})(...e.drag_end,...e.drag_start);var a,r;return e.rotate+=n/Math.PI*180,e.rotate>=360?e.rotate-=360:e.rotate<0&&(e.rotate+=360),e}function $(e,t){return()=>{z(e,t),function(e,t){if(void 0===e.drag_start)return;if(void 0===e.pinch_start)return;const n=[...e.drag_start],a=[...e.pinch_start],r=[...e.drag_end],o=[...e.pinch_end],i=Math.sqrt((r[0]-o[0])**2+(r[1]-o[1])**2)/Math.sqrt((n[0]-a[0])**2+(n[1]-a[1])**2),s=i>2?e.imageRadius:e.imageRadius/i;e.imageRadius=s>e.imageRadiusOriginal?e.imageRadiusOriginal:s<100?100:s}(e),d(e),g(e),h(e)}}const Q=e=>t=>{e.isMousedown=!0,e.drag_end=W(t),t.preventDefault()},X=e=>t=>{e.isMousedown&&(t instanceof MouseEvent||1===t.touches.length?(t.preventDefault(),requestAnimationFrame(function(e,t){return()=>{z(e,t),U(e),d(e),g(e)}}(e,t))):2===t.touches.length&&(t.preventDefault(),requestAnimationFrame($(e,t))))},G=e=>t=>{e.isMousedown=!1,e.drag_end=void 0,e.pinch_end=void 0,t.preventDefault()};function Y(e,t){return()=>{!function(e,t){const n=W(t)[1],a=e.imageRadius+n;e.imageRadius=a>e.imageRadiusOriginal?e.imageRadiusOriginal:a<100?100:a}(e,t),d(e),g(e),h(e)}}const J=e=>t=>{t.preventDefault(),requestAnimationFrame(Y(e,t))};function F(e){return new Promise(async(t,n)=>{const a=i.getSampleListURL();try{var r=await fetch(a).catch(e=>{throw Error(e)}).then(e=>e.json());e.localStorage.put("list_of_sample",JSON.stringify(r.list_of_sample))}catch(t){var o=e.localStorage.get("list_of_sample");r={list_of_sample:JSON.parse(o)};console.warn(t),y("<p>Internet disconnected.</p>")()}(function(e,t){return new Promise(async(n,a)=>{const r=e.storedKeys,o=t.list_of_sample,i=document.querySelector("#rock_selector");i.innerHTML="<option value='' disabled selected style='display:none;'>Select sample</option>",o.map(t=>{const n=document.createElement("option");return n.value=t["package-name"],n.innerHTML=(r.includes(t["package-name"])?"✓ ":"")+t["list-name"][e.language],r.includes(t["package-name"])&&n.classList.add("downloaded"),n}).forEach(e=>{i.appendChild(e)}),document.querySelector("#top-navigation").classList.add("isready"),i.classList.add("isready"),n(e)})})(e,r).then(t)})}function V(e){document.querySelector("#language_selector").addEventListener("change",t=>(function(e){return function(t){return new Promise((t,n)=>{const a=document.querySelector("#language_selector"),r=a.options[a.selectedIndex].value;e.language=r,e.localStorage.put("language",r),t(e)})}})(e)(t).then(F).then(R),!1)}function Z(e){document.querySelector("#form-contact div.button").addEventListener("click",e=>Array.from(e.target.classList).includes("pending")?null:async function(e,t){const n=e.target;n.classList.add("pending"),t.classList.add("inactive"),t.classList.remove("success"),t.classList.remove("error");const a=document.querySelector("#form-contact"),r=a.querySelector("#select-contact_topic"),o=r[r.selectedIndex].value,i=a.querySelector("textarea").value,s=a.querySelector("input[type=email").value;if(""===o)return n.classList.remove("pending"),t.innerHTML="Select topic !",t.classList.add("error"),t.classList.remove("inactive"),!1;if(void 0===i||""==i)return n.classList.remove("pending"),t.innerHTML="Write message !",t.classList.add("error"),t.classList.remove("inactive"),!1;const c={from:s,title:o,body:i},l=JSON.stringify(c),u={Accept:"text/plain,application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"};console.log({method:"POST",headers:u,body:l});try{await fetch("https://dgo96yhuni.execute-api.us-east-1.amazonaws.com/contactapi/contact",{method:"POST",headers:u,body:l,mode:"no-cors"}),t.innerHTML="Success. Thank you for contributing !",t.classList.add("success"),t.classList.remove("inactive")}catch(e){console.log(e),t.innerHTML="Network error !",t.classList.add("error"),t.classList.remove("inactive")}return n.classList.remove("pending"),!1}(e,document.querySelector("#form-contact .form-message")),!1)}function ee(){const e=window.innerWidth,t=window.innerHeight-200;return e<t?e:t}function te(e){return new Promise((t,n)=>{e.canvasWidth=ee()-20,e.canvasHeight=ee()-20,r.width=e.canvasWidth,r.height=e.canvasHeight,o.translate(.5*e.canvasWidth,.5*e.canvasHeight),t(e)})}class ne{constructor(){this.db=window.localStorage}put(e,t){this.db.setItem(e,t)}get(e){const t=this.db.getItem(e);return null==t?void 0:t}}class ae{constructor(){this.db={}}put(e,t){this.db[e]=t}get(e){return this.db.hasOwnProperty("key")?this.db[e]:void 0}}function re(e){return e.localStorage=window.localStorage?new ne:new ae,e}async function oe(){return(await Promise.all(["data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="].map(e=>new Promise((t,n)=>{var a=document.createElement("img");a.onerror=(e=>t(!1)),a.onload=(()=>t(!0)),a.src=e})))).every(e=>!!e)}async function ie(){return(await Promise.all(["data:image/jp2;base64,AAAADGpQICANCocKAAAAFGZ0eXBqcDIgAAAAAGpwMiAAAAAtanAyaAAAABZpaGRyAAAABAAAAAQAAw8HAAAAAAAPY29scgEAAAAAABAAAABpanAyY/9P/1EALwAAAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAw8BAQ8BAQ8BAf9SAAwAAAABAQAEBAAB/1wABECA/5AACgAAAAAAGAAB/5PP/BAQFABcr4CA/9k="].map(e=>new Promise((t,n)=>{var a=document.createElement("img");a.onerror=(e=>t(!1)),a.onload=(()=>t(!0)),a.src=e})))).every(e=>!!e)}async function se(e){return e.supportWebp=await oe(),e.supportJ2k=await ie(),e.supportedImageType=await async function(){return await oe()?"webp":await ie()?"jp2":"jpg"}(),e}function ce(e){const t=e.localStorage.get("language"),n=void 0!==t?t:e.language;return e.language=n,document.querySelector("option[value="+n+"]").selected=!0,e}class le{constructor(e,t,n,a){this.db=window.indexedDB,this.db_name=e,this.db_version=t,this.storeName=n,this.primaryKey=a}schemeDef(e){e.createObjectStore(this.storeName,{keyPath:this.primaryKey,autoIncrement:!0})}connect(){const e=new Promise((e,t)=>{const n=this.db.open(this.db_name,this.db_version);n.onsuccess=(t=>e(t.target.result)),n.onerror=(e=>t("fails to open db")),n.onupgradeneeded=(e=>this.schemeDef(e.target.result))});return e.then(e=>e.onerror=(e=>alert("error: "+e.target.errorCode))),e}async put(e,t){return new Promise((n,a)=>{const r=e.transaction([this.storeName],"readwrite").objectStore(this.storeName).put(t);r.onsuccess=(()=>n(Object.assign({[this.primaryKey]:r.result},t))),r.onerror=a})}async get(e,t){return new Promise((n,a)=>{const r=e.transaction([this.storeName]).objectStore(this.storeName).get(t);r.onsuccess=(()=>n(r.result)),r.onerror=a})}async delete(e,t){return new Promise((n,a)=>{const r=e.transaction([this.storeName],"readwrite").objectStore(this.storeName).delete(t);r.onsuccess=(()=>n(t)),r.onerror=a})}async loadAllKey(e){return new Promise(async(t,n)=>{const a=[];var r=IDBKeyRange.lowerBound(0);e.transaction([this.storeName]).objectStore(this.storeName).openCursor(r).onsuccess=function(e){var n=e.target.result;0==!!n?t(a):(a.push(n.key),n.continue())}})}async getAllKeys(e){return new Promise(async(t,n)=>{try{var a=e.transaction([this.storeName]).objectStore(this.storeName)}catch(e){return t([])}if(a.getAllKeys)a.getAllKeys().onsuccess=function(e){const n=e.target.result;t(n)};else{const n=await this.loadAllKey(e);t(n)}a.onerror=n})}}class ue extends le{constructor(e,t,n,a){console.warn("IndexedDB is not available !"),super(e,t,n,a),this.storage={}}connect(){return{}}put(e,t){if(e.hasOwnProperty(t[this.primaryKey]))var n=e[t[this.primaryKey]];else n={};const a=Object.assign(n,t);return e[t[this.primaryKey]]=a,{[t[this.primaryKey]]:a}}get(e,t){return e.hasOwnProperty(t)?e[t]:void 0}delete(e,t){return e.hasOwnProperty(t)?(e[t]=null,t):void 0}loadAll(e){return Object.entries(e)}getAllKeys(e){return Object.keys(e)}}async function de(e){return e.zipDBHandler=window.indexedDB?navigator.userAgent.match("Edge")?new le(i.getDBName(),1,i.getStorageName(),"id"):new le(i.getDBName(),2,i.getStorageName(),"id"):new ue(i.getDBName(),2,i.getStorageName(),"id"),e.zipDB=await e.zipDBHandler.connect(),e}async function ge(e){return e.storedKeys=await e.zipDBHandler.getAllKeys(e.zipDB),e}indexedDB.deleteDatabase("db_v2"),indexedDB.deleteDatabase("zipfiles"),window.addEventListener("DOMcontentloaded",function(e){const t=navigator.userAgent;t.indexOf("iPhone")>=0||t.indexOf("iPad")>=0||t.indexOf("Android")>=0?window.addEventListener("orientationchange",t=>te(e).then(p),!1):window.addEventListener("resize",t=>te(e).then(p),!1),"function"!=typeof Symbol||"symbol"!=typeof Symbol()?document.getElementById("please_use_modern_browser").classList.remove("inactive"):te(e).then(re).then(se).then(ce).then(de).then(ge).then(F).then(_).catch(e=>{console.error(e),_(e)}),function(e){const t=document.querySelector("#change_nicol"),n=document.querySelector("#change_nicol + label"),a=e=>new Promise((n,a)=>{t.checked=e.isCrossNicol,e.isCrossNicol=!e.isCrossNicol,n(e)});t.addEventListener("click",e=>{e.preventDefault()},!1),n.addEventListener("touch",e=>{e.preventDefault()},!1),t.addEventListener("touch",e=>{e.preventDefault()},!1),n.addEventListener("mouseup",t=>a(e).then(p),!1),n.addEventListener("touchend",t=>a(e).then(p).then(e=>{t.cancelable&&t.preventDefault()}),!1)}(e),function(e){document.querySelector("#rock_selector").addEventListener("change",t=>{x(e).then(p).then(v).then(_).catch(e=>{console.log("Sample cannot be loaded because of network error."),y("Internet disconnected.")(e)})},!1)}(e),function(e){r.addEventListener("mousedown",Q(e),!1),r.addEventListener("dragstart",e=>{e.preventDefault()},!1),r.addEventListener("drag",e=>{e.preventDefault()},!1),r.addEventListener("dragend",e=>{e.preventDefault()},!1),r.addEventListener("touchstart",Q(e),!1),r.addEventListener("mousemove",X(e),!1),r.addEventListener("touchmove",X(e),!1),r.addEventListener("mouseup",G(e),!1),r.addEventListener("touchend",G(e),!1),r.addEventListener("wheel",J(e),!1)}(e),V(e),Z()}({containorID:"",imageNumber:1,canvasWidth:ee()<=500?ee():500,canvasHeight:ee()<=500?ee():500,imageRadius:0,open_image_srcs:[],open_images:[],cross_image_srcs:[],cross_images:[],isMousedown:!1,drag_start:[0,0],drag_end:[0,0],rotate:0,rotate_axis_translate:[],isClockwise:!0,isCrossNicol:!1,language:(window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage).match("ja")?"ja":"en",storedKeys:[],drawHairLine:!0,canRotate:!0}),!1)}]);