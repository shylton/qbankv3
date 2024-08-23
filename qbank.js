(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function at(){}function Fo(n){return n()}function js(){return Object.create(null)}function ee(n){n.forEach(Fo)}function Bo(n){return typeof n=="function"}function xe(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function Ml(n){return Object.keys(n).length===0}function V(n,t){n.appendChild(t)}function z(n,t,e){n.insertBefore(t,e||null)}function q(n){n.parentNode&&n.parentNode.removeChild(n)}function nr(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function F(n){return document.createElement(n)}function Ut(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function rt(n){return document.createTextNode(n)}function K(){return rt(" ")}function Rt(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function xl(n){return function(t){return t.preventDefault(),n.call(this,t)}}function O(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Ll(n){return Array.from(n.childNodes)}function xt(n,t){t=""+t,n.data!==t&&(n.data=t)}function Te(n,t){n.value=t??""}function we(n,t,e,r){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,r?"important":"")}function rr(n,t,e){n.classList[e?"add":"remove"](t)}function Fl(n,t,{bubbles:e=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,e,r,t),s}class Bl{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,r=null){this.e||(this.is_svg?this.e=Ut(e.nodeName):this.e=F(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(t)),this.i(r)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)z(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(q)}}let gn;function cn(n){gn=n}function Ti(){if(!gn)throw new Error("Function called outside component initialization");return gn}function Ul(n){Ti().$$.on_mount.push(n)}function Uo(n){Ti().$$.on_destroy.push(n)}function wi(){const n=Ti();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=Fl(t,e,{cancelable:r});return s.slice().forEach(l=>{l.call(n,o)}),!o.defaultPrevented}return!0}}function jl(n,t){const e=n.$$.callbacks[t.type];e&&e.slice().forEach(r=>r.call(this,t))}const Ie=[],$s=[];let Re=[];const qs=[],$l=Promise.resolve();let si=!1;function ql(){si||(si=!0,$l.then(jo))}function oi(n){Re.push(n)}const Yr=new Set;let Ae=0;function jo(){if(Ae!==0)return;const n=gn;do{try{for(;Ae<Ie.length;){const t=Ie[Ae];Ae++,cn(t),Hl(t.$$)}}catch(t){throw Ie.length=0,Ae=0,t}for(cn(null),Ie.length=0,Ae=0;$s.length;)$s.pop()();for(let t=0;t<Re.length;t+=1){const e=Re[t];Yr.has(e)||(Yr.add(e),e())}Re.length=0}while(Ie.length);for(;qs.length;)qs.pop()();si=!1,Yr.clear(),cn(n)}function Hl(n){if(n.fragment!==null){n.update(),ee(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(oi)}}function zl(n){const t=[],e=[];Re.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),Re=t}const Jn=new Set;let ae;function Ql(){ae={r:0,c:[],p:ae}}function Gl(){ae.r||ee(ae.c),ae=ae.p}function Kt(n,t){n&&n.i&&(Jn.delete(n),n.i(t))}function ue(n,t,e,r){if(n&&n.o){if(Jn.has(n))return;Jn.add(n),ae.c.push(()=>{Jn.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function hn(n){n&&n.c()}function Pe(n,t,e,r){const{fragment:s,after_update:o}=n.$$;s&&s.m(t,e),r||oi(()=>{const l=n.$$.on_mount.map(Fo).filter(Bo);n.$$.on_destroy?n.$$.on_destroy.push(...l):ee(l),n.$$.on_mount=[]}),o.forEach(oi)}function Se(n,t){const e=n.$$;e.fragment!==null&&(zl(e.after_update),ee(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Kl(n,t){n.$$.dirty[0]===-1&&(Ie.push(n),ql(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Le(n,t,e,r,s,o,l,c=[-1]){const h=gn;cn(n);const d=n.$$={fragment:null,ctx:[],props:o,update:at,not_equal:s,bound:js(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:js(),dirty:c,skip_bound:!1,root:t.target||h.$$.root};l&&l(d.root);let m=!1;if(d.ctx=e?e(n,t.props||{},(E,b,...R)=>{const D=R.length?R[0]:b;return d.ctx&&s(d.ctx[E],d.ctx[E]=D)&&(!d.skip_bound&&d.bound[E]&&d.bound[E](D),m&&Kl(n,E)),b}):[],d.update(),m=!0,ee(d.before_update),d.fragment=r?r(d.ctx):!1,t.target){if(t.hydrate){const E=Ll(t.target);d.fragment&&d.fragment.l(E),E.forEach(q)}else d.fragment&&d.fragment.c();t.intro&&Kt(n.$$.fragment),Pe(n,t.target,t.anchor,t.customElement),jo()}cn(h)}class Fe{$destroy(){Se(this,1),this.$destroy=at}$on(t,e){if(!Bo(e))return at;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Ml(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Wl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},qo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let b=(c&15)<<2|d>>6,R=d&63;h||(R=64,l||(b=64)),r.push(e[m],e[E],e[b],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($o(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Wl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||E==null)throw new Xl;const b=o<<2|c>>4;if(r.push(b),d!==64){const R=c<<4&240|d>>2;if(r.push(R),E!==64){const D=d<<6&192|E;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Xl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yl=function(n){const t=$o(n);return qo.encodeByteArray(t,!0)},ir=function(n){return Yl(n).replace(/\./g,"")},Jl=function(n){try{return qo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=()=>Zl().__FIREBASE_DEFAULTS__,eu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Jl(n[1]);return t&&JSON.parse(t)},Ai=()=>{try{return tu()||eu()||nu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ru=n=>{var t,e;return(e=(t=Ai())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},iu=n=>{const t=ru(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ho=()=>{var n;return(n=Ai())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[ir(JSON.stringify(e)),ir(JSON.stringify(l)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lu(){var n;const t=(n=Ai())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uu(){return!lu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cu(){try{return typeof indexedDB=="object"}catch{return!1}}function hu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="FirebaseError";class Be extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=fu,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?du(o,r):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new Be(s,c,r)}}function du(n,t){return n.replace(pu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const pu=/\{\$([^}]+)}/g;function ai(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],l=t[s];if(Hs(o)&&Hs(l)){if(!ai(o,l))return!1}else if(o!==l)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Hs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n){return n&&n._delegate?n._delegate:n}class yn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new su;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_u(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gu(n){return n===oe?void 0:n}function _u(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new mu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const vu={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Eu=Y.INFO,Tu={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},wu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Tu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qo{constructor(t){this.name=t,this._logLevel=Eu,this._logHandler=wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Au=(n,t)=>t.some(e=>n instanceof e);let zs,Qs;function Iu(){return zs||(zs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bu(){return Qs||(Qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Go=new WeakMap,li=new WeakMap,Ko=new WeakMap,Jr=new WeakMap,Ii=new WeakMap;function Ru(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Wt(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Go.set(e,n)}).catch(()=>{}),Ii.set(t,n),t}function Pu(n){if(li.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});li.set(n,t)}let ui={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return li.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ko.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Su(n){ui=n(ui)}function Cu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Zr(this),t,...e);return Ko.set(r,t.sort?t.sort():[t]),Wt(r)}:bu().includes(n)?function(...t){return n.apply(Zr(this),t),Wt(Go.get(this))}:function(...t){return Wt(n.apply(Zr(this),t))}}function Vu(n){return typeof n=="function"?Cu(n):(n instanceof IDBTransaction&&Pu(n),Au(n,Iu())?new Proxy(n,ui):n)}function Wt(n){if(n instanceof IDBRequest)return Ru(n);if(Jr.has(n))return Jr.get(n);const t=Vu(n);return t!==n&&(Jr.set(n,t),Ii.set(t,n)),t}const Zr=n=>Ii.get(n);function Du(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=Wt(l);return r&&l.addEventListener("upgradeneeded",h=>{r(Wt(l.result),h.oldVersion,h.newVersion,Wt(l.transaction),h)}),e&&l.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const ku=["get","getKey","getAll","getAllKeys","count"],Nu=["put","add","delete","clear"],ti=new Map;function Gs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ti.get(t))return ti.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Nu.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ku.includes(e)))return;const o=async function(l,...c){const h=this.transaction(l,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ti.set(t,o),o}Su(n=>({...n,get:(t,e,r)=>Gs(t,e)||n.get(t,e,r),has:(t,e)=>!!Gs(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Mu(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Mu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ci="@firebase/app",Ks="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Qo("@firebase/app"),xu="@firebase/app-compat",Lu="@firebase/analytics-compat",Fu="@firebase/analytics",Bu="@firebase/app-check-compat",Uu="@firebase/app-check",ju="@firebase/auth",$u="@firebase/auth-compat",qu="@firebase/database",Hu="@firebase/database-compat",zu="@firebase/functions",Qu="@firebase/functions-compat",Gu="@firebase/installations",Ku="@firebase/installations-compat",Wu="@firebase/messaging",Xu="@firebase/messaging-compat",Yu="@firebase/performance",Ju="@firebase/performance-compat",Zu="@firebase/remote-config",tc="@firebase/remote-config-compat",ec="@firebase/storage",nc="@firebase/storage-compat",rc="@firebase/firestore",ic="@firebase/vertexai-preview",sc="@firebase/firestore-compat",oc="firebase",ac="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]",lc={[ci]:"fire-core",[xu]:"fire-core-compat",[Fu]:"fire-analytics",[Lu]:"fire-analytics-compat",[Uu]:"fire-app-check",[Bu]:"fire-app-check-compat",[ju]:"fire-auth",[$u]:"fire-auth-compat",[qu]:"fire-rtdb",[Hu]:"fire-rtdb-compat",[zu]:"fire-fn",[Qu]:"fire-fn-compat",[Gu]:"fire-iid",[Ku]:"fire-iid-compat",[Wu]:"fire-fcm",[Xu]:"fire-fcm-compat",[Yu]:"fire-perf",[Ju]:"fire-perf-compat",[Zu]:"fire-rc",[tc]:"fire-rc-compat",[ec]:"fire-gcs",[nc]:"fire-gcs-compat",[rc]:"fire-fst",[sc]:"fire-fst-compat",[ic]:"fire-vertex","fire-js":"fire-js",[oc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Map,uc=new Map,fi=new Map;function Ws(n,t){try{n.container.addComponent(t)}catch(e){fe.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function or(n){const t=n.name;if(fi.has(t))return fe.debug(`There were multiple attempts to register component ${t}.`),!1;fi.set(t,n);for(const e of sr.values())Ws(e,n);for(const e of uc.values())Ws(e,n);return!0}function cc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new zo("app","Firebase",hc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=ac;function Wo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=Ho()),!e)throw Xt.create("no-options");const o=sr.get(s);if(o){if(ai(e,o.options)&&ai(r,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const l=new yu(s);for(const h of fi.values())l.addComponent(h);const c=new fc(e,r,l);return sr.set(s,c),c}function pc(n=hi){const t=sr.get(n);if(!t&&n===hi&&Ho())return Wo();if(!t)throw Xt.create("no-app",{appName:n});return t}function Ce(n,t,e){var r;let s=(r=lc[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fe.warn(c.join(" "));return}or(new yn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="firebase-heartbeat-database",gc=1,vn="firebase-heartbeat-store";let ei=null;function Xo(){return ei||(ei=Du(mc,gc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(vn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),ei}async function _c(n){try{const e=(await Xo()).transaction(vn),r=await e.objectStore(vn).get(Yo(n));return await e.done,r}catch(t){if(t instanceof Be)fe.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});fe.warn(e.message)}}}async function Xs(n,t){try{const r=(await Xo()).transaction(vn,"readwrite");await r.objectStore(vn).put(t,Yo(n)),await r.done}catch(e){if(e instanceof Be)fe.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});fe.warn(r.message)}}}function Yo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=1024,vc=30*24*60*60*1e3;class Ec{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new wc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ys();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=vc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ys(),{heartbeatsToSend:r,unsentEntries:s}=Tc(this._heartbeatsCache.heartbeats),o=ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ys(){return new Date().toISOString().substring(0,10)}function Tc(n,t=yc){const e=[];let r=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),Js(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Js(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class wc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cu()?hu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _c(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Js(n){return ir(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n){or(new yn("platform-logger",t=>new Ou(t),"PRIVATE")),or(new yn("heartbeat",t=>new Ec(t),"PRIVATE")),Ce(ci,Ks,n),Ce(ci,Ks,"esm2017"),Ce("fire-js","")}Ac("");var Ic="firebase",bc="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce(Ic,bc,"app");var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function _(){}_.prototype=p.prototype,y.D=p.prototype,y.prototype=new _,y.prototype.constructor=y,y.C=function(v,T,A){for(var g=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)g[ut-2]=arguments[ut];return p.prototype[T].apply(v,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,p,_){_||(_=0);var v=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)v[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)v[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=y.g[0],_=y.g[1],T=y.g[2];var A=y.g[3],g=p+(A^_&(T^A))+v[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+v[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+v[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+v[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+v[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+v[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+v[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+v[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+v[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+v[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+v[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+v[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+v[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+v[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+v[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+v[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^A&(_^T))+v[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+v[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+v[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+v[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+v[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+v[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+v[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+v[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+v[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+v[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+v[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+v[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+v[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+v[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+v[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+v[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^A)+v[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+v[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+v[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+v[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+v[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+v[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+v[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+v[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+v[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+v[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+v[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+v[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+v[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+v[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+v[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+v[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~A))+v[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+v[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+v[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+v[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+v[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+v[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+v[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+v[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+v[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+v[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+v[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+v[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+v[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+v[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+v[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+v[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,y.g[2]=y.g[2]+T&4294967295,y.g[3]=y.g[3]+A&4294967295}r.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var _=p-this.blockSize,v=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=_;)s(this,y,A),A+=this.blockSize;if(typeof y=="string"){for(;A<p;)if(v[T++]=y.charCodeAt(A++),T==this.blockSize){s(this,v),T=0;break}}else for(;A<p;)if(v[T++]=y[A++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var _=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=_&255,_/=256;for(this.u(y),y=Array(16),p=_=0;4>p;++p)for(var v=0;32>v;v+=8)y[_++]=this.g[p]>>>v&255;return y};function o(y,p){var _=c;return Object.prototype.hasOwnProperty.call(_,y)?_[y]:_[y]=p(y)}function l(y,p){this.h=p;for(var _=[],v=!0,T=y.length-1;0<=T;T--){var A=y[T]|0;v&&A==p||(_[T]=A,v=!1)}this.g=_}var c={};function h(y){return-128<=y&&128>y?o(y,function(p){return new l([p|0],0>p?-1:0)}):new l([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return E;if(0>y)return S(d(-y));for(var p=[],_=1,v=0;y>=_;v++)p[v]=y/_|0,_*=4294967296;return new l(p,0)}function m(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return S(m(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),v=E,T=0;T<y.length;T+=8){var A=Math.min(8,y.length-T),g=parseInt(y.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),v=v.j(A).add(d(g))):(v=v.j(_),v=v.add(d(g)))}return v}var E=h(0),b=h(1),R=h(16777216);n=l.prototype,n.m=function(){if(x(this))return-S(this).m();for(var y=0,p=1,_=0;_<this.g.length;_++){var v=this.i(_);y+=(0<=v?v:4294967296+v)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(D(this))return"0";if(x(this))return"-"+S(this).toString(y);for(var p=d(Math.pow(y,6)),_=this,v="";;){var T=U(_,p).g;_=B(_,T.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(y);if(_=T,D(_))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function D(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function x(y){return y.h==-1}n.l=function(y){return y=B(this,y),x(y)?-1:D(y)?0:1};function S(y){for(var p=y.g.length,_=[],v=0;v<p;v++)_[v]=~y.g[v];return new l(_,~y.h).add(b)}n.abs=function(){return x(this)?S(this):this},n.add=function(y){for(var p=Math.max(this.g.length,y.g.length),_=[],v=0,T=0;T<=p;T++){var A=v+(this.i(T)&65535)+(y.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(y.i(T)>>>16);v=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new l(_,_[_.length-1]&-2147483648?-1:0)};function B(y,p){return y.add(S(p))}n.j=function(y){if(D(this)||D(y))return E;if(x(this))return x(y)?S(this).j(S(y)):S(S(this).j(y));if(x(y))return S(this.j(S(y)));if(0>this.l(R)&&0>y.l(R))return d(this.m()*y.m());for(var p=this.g.length+y.g.length,_=[],v=0;v<2*p;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<y.g.length;T++){var A=this.i(v)>>>16,g=this.i(v)&65535,ut=y.i(T)>>>16,Q=y.i(T)&65535;_[2*v+2*T]+=g*Q,L(_,2*v+2*T),_[2*v+2*T+1]+=A*Q,L(_,2*v+2*T+1),_[2*v+2*T+1]+=g*ut,L(_,2*v+2*T+1),_[2*v+2*T+2]+=A*ut,L(_,2*v+2*T+2)}for(v=0;v<p;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=p;v<2*p;v++)_[v]=0;return new l(_,0)};function L(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function N(y,p){this.g=y,this.h=p}function U(y,p){if(D(p))throw Error("division by zero");if(D(y))return new N(E,E);if(x(y))return p=U(S(y),p),new N(S(p.g),S(p.h));if(x(p))return p=U(y,S(p)),new N(S(p.g),p.h);if(30<y.g.length){if(x(y)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=b,v=p;0>=v.l(y);)_=M(_),v=M(v);var T=j(_,1),A=j(v,1);for(v=j(v,2),_=j(_,2);!D(v);){var g=A.add(v);0>=g.l(y)&&(T=T.add(_),A=g),v=j(v,1),_=j(_,1)}return p=B(y,T.j(p)),new N(T,p)}for(T=E;0<=y.l(p);){for(_=Math.max(1,Math.floor(y.m()/p.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(_),g=A.j(p);x(g)||0<g.l(y);)_-=v,A=d(_),g=A.j(p);D(A)&&(A=b),T=T.add(A),y=B(y,g)}return new N(T,y)}n.A=function(y){return U(this,y).h},n.and=function(y){for(var p=Math.max(this.g.length,y.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)&y.i(v);return new l(_,this.h&y.h)},n.or=function(y){for(var p=Math.max(this.g.length,y.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)|y.i(v);return new l(_,this.h|y.h)},n.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)^y.i(v);return new l(_,this.h^y.h)};function M(y){for(var p=y.g.length+1,_=[],v=0;v<p;v++)_[v]=y.i(v)<<1|y.i(v-1)>>>31;return new l(_,y.h)}function j(y,p){var _=p>>5;p%=32;for(var v=y.g.length-_,T=[],A=0;A<v;A++)T[A]=0<p?y.i(A+_)>>>p|y.i(A+_+1)<<32-p:y.i(A+_);return new l(T,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=m,Jo=l}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zo,ta,un,ea,Zn,di,na,ra,ia;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,u){return i==Array.prototype||i==Object.prototype||(i[a]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gn=="object"&&Gn];for(var a=0;a<i.length;++a){var u=i[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in u))break t;u=u[w]}i=i[i.length-1],f=u[i],a=a(f),a!=f&&a!=null&&t(u,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var u=0,f=!1,w={next:function(){if(!f&&u<i.length){var I=u++;return{value:a(I,i[I]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function d(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function m(i,a,u){return i.call.apply(i.bind,arguments)}function E(i,a,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(a,w)}}return function(){return i.apply(a,arguments)}}function b(i,a,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,b.apply(null,arguments)}function R(i,a){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,a){function u(){}u.prototype=a.prototype,i.aa=a.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,w,I){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return a.prototype[w].apply(f,k)}}function x(i){const a=i.length;if(0<a){const u=Array(a);for(let f=0;f<a;f++)u[f]=i[f];return u}return[]}function S(i,a){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const w=i.length||0,I=f.length||0;i.length=w+I;for(let k=0;k<I;k++)i[w+k]=f[k]}else i.push(f)}}class B{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function L(i){return/^[\s\xa0]*$/.test(i)}function N(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function U(i){return U[" "](i),i}U[" "]=function(){};var M=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function j(i,a,u){for(const f in i)a.call(u,i[f],f,i)}function y(i,a){for(const u in i)a.call(void 0,i[u],u,i)}function p(i){const a={};for(const u in i)a[u]=i[u];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,a){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)i[u]=f[u];for(let I=0;I<_.length;I++)u=_[I],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function T(i){var a=1;i=i.split(":");const u=[];for(;0<a&&i.length;)u.push(i.shift()),a--;return i.length&&u.push(i.join(":")),u}function A(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Rr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class ut{constructor(){this.h=this.g=null}add(a,u){const f=Q.get();f.set(a,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Q=new B(()=>new lt,i=>i.reset());class lt{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,qe=!1,Rr=new ut,Ui=()=>{const i=c.Promise.resolve(void 0);$e=()=>{i.then(nl)}};var nl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){A(u)}var a=Q;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}qe=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function vt(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var rl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return i}();function He(i,a){if(vt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(M){t:{try{U(a.nodeName);var w=!0;break t}catch{}w=!1}w||(a=null)}}else u=="mouseover"?a=i.fromElement:u=="mouseout"&&(a=i.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:il[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&He.aa.h.call(this)}}D(He,vt);var il={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),sl=0;function ol(i,a,u,f,w){this.listener=i,this.proxy=null,this.src=a,this.type=u,this.capture=!!f,this.ha=w,this.key=++sl,this.da=this.fa=!1}function Vn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Dn(i){this.src=i,this.g={},this.h=0}Dn.prototype.add=function(i,a,u,f,w){var I=i.toString();i=this.g[I],i||(i=this.g[I]=[],this.h++);var k=Sr(i,a,f,w);return-1<k?(a=i[k],u||(a.fa=!1)):(a=new ol(a,this.src,I,!!f,w),a.fa=u,i.push(a)),a};function Pr(i,a){var u=a.type;if(u in i.g){var f=i.g[u],w=Array.prototype.indexOf.call(f,a,void 0),I;(I=0<=w)&&Array.prototype.splice.call(f,w,1),I&&(Vn(a),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Sr(i,a,u,f){for(var w=0;w<i.length;++w){var I=i[w];if(!I.da&&I.listener==a&&I.capture==!!u&&I.ha==f)return w}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),Vr={};function ji(i,a,u,f,w){if(f&&f.once)return qi(i,a,u,f,w);if(Array.isArray(a)){for(var I=0;I<a.length;I++)ji(i,a[I],u,f,w);return null}return u=Or(u),i&&i[ze]?i.K(a,u,d(f)?!!f.capture:!!f,w):$i(i,a,u,!1,f,w)}function $i(i,a,u,f,w,I){if(!a)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,Z=kr(i);if(Z||(i[Cr]=Z=new Dn(i)),u=Z.add(a,u,f,k,I),u.proxy)return u;if(f=al(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)rl||(w=k),w===void 0&&(w=!1),i.addEventListener(a.toString(),f,w);else if(i.attachEvent)i.attachEvent(zi(a.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function al(){function i(u){return a.call(i.src,i.listener,u)}const a=ll;return i}function qi(i,a,u,f,w){if(Array.isArray(a)){for(var I=0;I<a.length;I++)qi(i,a[I],u,f,w);return null}return u=Or(u),i&&i[ze]?i.L(a,u,d(f)?!!f.capture:!!f,w):$i(i,a,u,!0,f,w)}function Hi(i,a,u,f,w){if(Array.isArray(a))for(var I=0;I<a.length;I++)Hi(i,a[I],u,f,w);else f=d(f)?!!f.capture:!!f,u=Or(u),i&&i[ze]?(i=i.i,a=String(a).toString(),a in i.g&&(I=i.g[a],u=Sr(I,u,f,w),-1<u&&(Vn(I[u]),Array.prototype.splice.call(I,u,1),I.length==0&&(delete i.g[a],i.h--)))):i&&(i=kr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Sr(a,u,f,w)),(u=-1<i?a[i]:null)&&Dr(u))}function Dr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[ze])Pr(a.i,i);else{var u=i.type,f=i.proxy;a.removeEventListener?a.removeEventListener(u,f,i.capture):a.detachEvent?a.detachEvent(zi(u),f):a.addListener&&a.removeListener&&a.removeListener(f),(u=kr(a))?(Pr(u,i),u.h==0&&(u.src=null,a[Cr]=null)):Vn(i)}}}function zi(i){return i in Vr?Vr[i]:Vr[i]="on"+i}function ll(i,a){if(i.da)i=!0;else{a=new He(a,this);var u=i.listener,f=i.ha||i.src;i.fa&&Dr(i),i=u.call(f,a)}return i}function kr(i){return i=i[Cr],i instanceof Dn?i:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Or(i){return typeof i=="function"?i:(i[Nr]||(i[Nr]=function(a){return i.handleEvent(a)}),i[Nr])}function Et(){Ht.call(this),this.i=new Dn(this),this.M=this,this.F=null}D(Et,Ht),Et.prototype[ze]=!0,Et.prototype.removeEventListener=function(i,a,u,f){Hi(this,i,a,u,f)};function St(i,a){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=a.type||a,typeof a=="string")a=new vt(a,i);else if(a instanceof vt)a.target=a.target||i;else{var w=a;a=new vt(f,i),v(a,w)}if(w=!0,u)for(var I=u.length-1;0<=I;I--){var k=a.g=u[I];w=kn(k,f,!0,a)&&w}if(k=a.g=i,w=kn(k,f,!0,a)&&w,w=kn(k,f,!1,a)&&w,u)for(I=0;I<u.length;I++)k=a.g=u[I],w=kn(k,f,!1,a)&&w}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var u=i.g[a],f=0;f<u.length;f++)Vn(u[f]);delete i.g[a],i.h--}}this.F=null},Et.prototype.K=function(i,a,u,f){return this.i.add(String(i),a,!1,u,f)},Et.prototype.L=function(i,a,u,f){return this.i.add(String(i),a,!0,u,f)};function kn(i,a,u,f){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var w=!0,I=0;I<a.length;++I){var k=a[I];if(k&&!k.da&&k.capture==u){var Z=k.listener,mt=k.ha||k.src;k.fa&&Pr(i.i,k),w=Z.call(mt,f)!==!1&&w}}return w&&!f.defaultPrevented}function Qi(i,a,u){if(typeof i=="function")u&&(i=b(i,u));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Gi(i){i.g=Qi(()=>{i.g=null,i.i&&(i.i=!1,Gi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class ul extends Ht{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Gi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(i){Ht.call(this),this.h=i,this.g={}}D(Qe,Ht);var Ki=[];function Wi(i){j(i.g,function(a,u){this.g.hasOwnProperty(u)&&Dr(a)},i),i.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),Wi(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mr=c.JSON.stringify,cl=c.JSON.parse,hl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function xr(){}xr.prototype.h=null;function Xi(i){return i.h||(i.h=i.i())}function Yi(){}var Ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lr(){vt.call(this,"d")}D(Lr,vt);function Fr(){vt.call(this,"c")}D(Fr,vt);var ne={},Ji=null;function Nn(){return Ji=Ji||new Et}ne.La="serverreachability";function Zi(i){vt.call(this,ne.La,i)}D(Zi,vt);function Ke(i){const a=Nn();St(a,new Zi(a))}ne.STAT_EVENT="statevent";function ts(i,a){vt.call(this,ne.STAT_EVENT,i),this.stat=a}D(ts,vt);function Ct(i){const a=Nn();St(a,new ts(a,i))}ne.Ma="timingevent";function es(i,a){vt.call(this,ne.Ma,i),this.size=a}D(es,vt);function We(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Xe(){this.g=!0}Xe.prototype.xa=function(){this.g=!1};function fl(i,a,u,f,w,I){i.info(function(){if(i.g)if(I)for(var k="",Z=I.split("&"),mt=0;mt<Z.length;mt++){var J=Z[mt].split("=");if(1<J.length){var Tt=J[0];J=J[1];var wt=Tt.split("_");k=2<=wt.length&&wt[1]=="type"?k+(Tt+"="+J+"&"):k+(Tt+"=redacted&")}}else k=null;else k=I;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+a+`
`+u+`
`+k})}function dl(i,a,u,f,w,I,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+a+`
`+u+`
`+I+" "+k})}function _e(i,a,u,f){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+ml(i,u)+(f?" "+f:"")})}function pl(i,a){i.info(function(){return"TIMEOUT: "+a})}Xe.prototype.info=function(){};function ml(i,a){if(!i.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var I=w[0];if(I!="noop"&&I!="stop"&&I!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Mr(u)}catch{return a}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ns={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Br;function Mn(){}D(Mn,xr),Mn.prototype.g=function(){return new XMLHttpRequest},Mn.prototype.i=function(){return{}},Br=new Mn;function zt(i,a,u,f){this.j=i,this.i=a,this.l=u,this.R=f||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rs}function rs(){this.i=null,this.g="",this.h=!1}var is={},Ur={};function jr(i,a,u){i.L=1,i.v=Bn(Ft(a)),i.m=u,i.P=!0,ss(i,null)}function ss(i,a){i.F=Date.now(),xn(i),i.A=Ft(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),vs(u.i,"t",f),i.C=0,u=i.j.J,i.h=new rs,i.g=Ls(i.j,u?a:null,!i.m),0<i.O&&(i.M=new ul(b(i.Y,i,i.g),i.O)),a=i.U,u=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ki[0]=w.toString()),w=Ki);for(var I=0;I<w.length;I++){var k=ji(u,w[I],f||a.handleEvent,!1,a.h||a);if(!k)break;a.g[k.key]=k}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ke(),fl(i.i,i.u,i.A,i.l,i.R,i.m)}zt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Bt(i)==3?a.j():this.Y(i)},zt.prototype.Y=function(i){try{if(i==this.g)t:{const wt=Bt(this.g);var a=this.g.Ba();const Ee=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Rs(this.g)))){this.J||wt!=4||a==7||(a==8||0>=Ee?Ke(3):Ke(2)),$r(this);var u=this.g.Z();this.X=u;e:if(os(this)){var f=Rs(this.g);i="";var w=f.length,I=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),Ye(this);var k="";break e}this.h.i=new c.TextDecoder}for(a=0;a<w;a++)this.h.h=!0,i+=this.h.i.decode(f[a],{stream:!(I&&a==w-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,dl(this.i,this.u,this.A,this.l,this.R,wt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,mt=this.g;if((Z=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Z)){var J=Z;break e}}J=null}if(u=J)_e(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,u);else{this.o=!1,this.s=3,Ct(12),re(this),Ye(this);break t}}if(this.P){u=!0;let kt;for(;!this.J&&this.C<k.length;)if(kt=gl(this,k),kt==Ur){wt==4&&(this.s=4,Ct(14),u=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==is){this.s=4,Ct(15),_e(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else _e(this.i,this.l,kt,null),qr(this,kt);if(os(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||k.length!=0||this.h.h||(this.s=1,Ct(16),u=!1),this.o=this.o&&u,!u)_e(this.i,this.l,k,"[Invalid Chunked Response]"),re(this),Ye(this);else if(0<k.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Wr(Tt),Tt.M=!0,Ct(11))}}else _e(this.i,this.l,k,null),qr(this,k);wt==4&&re(this),this.o&&!this.J&&(wt==4?Ns(this.j,this):(this.o=!1,xn(this)))}else Nl(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),re(this),Ye(this)}}}catch{}finally{}};function os(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function gl(i,a){var u=i.C,f=a.indexOf(`
`,u);return f==-1?Ur:(u=Number(a.substring(u,f)),isNaN(u)?is:(f+=1,f+u>a.length?Ur:(a=a.slice(f,f+u),i.C=f+u,a)))}zt.prototype.cancel=function(){this.J=!0,re(this)};function xn(i){i.S=Date.now()+i.I,as(i,i.I)}function as(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=We(b(i.ba,i),a)}function $r(i){i.B&&(c.clearTimeout(i.B),i.B=null)}zt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(pl(this.i,this.A),this.L!=2&&(Ke(),Ct(17)),re(this),this.s=2,Ye(this)):as(this,this.S-i)};function Ye(i){i.j.G==0||i.J||Ns(i.j,i)}function re(i){$r(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Wi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function qr(i,a){try{var u=i.j;if(u.G!=0&&(u.g==i||Hr(u.h,i))){if(!i.K&&Hr(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Hn(u),$n(u);else break t;Kr(u),Ct(18)}}else u.za=w[1],0<u.za-u.T&&37500>w[2]&&u.F&&u.v==0&&!u.C&&(u.C=We(b(u.Za,u),6e3));if(1>=cs(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else se(u,11)}else if((i.K||u.g==i)&&Hn(u),!L(a))for(w=u.Da.g.parse(a),a=0;a<w.length;a++){let J=w[a];if(u.T=J[0],J=J[1],u.G==2)if(J[0]=="c"){u.K=J[1],u.ia=J[2];const Tt=J[3];Tt!=null&&(u.la=Tt,u.j.info("VER="+u.la));const wt=J[4];wt!=null&&(u.Aa=wt,u.j.info("SVER="+u.Aa));const Ee=J[5];Ee!=null&&typeof Ee=="number"&&0<Ee&&(f=1.5*Ee,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const kt=i.g;if(kt){const Qn=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qn){var I=f.h;I.g||Qn.indexOf("spdy")==-1&&Qn.indexOf("quic")==-1&&Qn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(zr(I,I.h),I.h=null))}if(f.D){const Xr=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xr&&(f.ya=Xr,et(f.I,f.D,Xr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=xs(f,f.J?f.ia:null,f.W),k.K){hs(f.h,k);var Z=k,mt=f.L;mt&&(Z.I=mt),Z.B&&($r(Z),xn(Z)),f.g=k}else Ds(f);0<u.i.length&&qn(u)}else J[0]!="stop"&&J[0]!="close"||se(u,7);else u.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?se(u,7):Gr(u):J[0]!="noop"&&u.l&&u.l.ta(J),u.v=0)}}Ke(4)}catch{}}var _l=class{constructor(i,a){this.g=i,this.map=a}};function ls(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function us(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function cs(i){return i.h?1:i.g?i.g.size:0}function Hr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function zr(i,a){i.g?i.g.add(a):i.h=a}function hs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}ls.prototype.cancel=function(){if(this.i=fs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function fs(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const u of i.g.values())a=a.concat(u.D);return a}return x(i.i)}function yl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],u=i.length,f=0;f<u;f++)a.push(i[f]);return a}a=[],u=0;for(f in i)a[u++]=i[f];return a}function vl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var u=0;u<i;u++)a.push(u);return a}a=[],u=0;for(const f in i)a[u++]=f;return a}}}function ds(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var u=vl(i),f=yl(i),w=f.length,I=0;I<w;I++)a.call(void 0,f[I],u&&u[I],i)}var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function El(i,a){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),w=null;if(0<=f){var I=i[u].substring(0,f);w=i[u].substring(f+1)}else I=i[u];a(I,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ie(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ie){this.h=i.h,Ln(this,i.j),this.o=i.o,this.g=i.g,Fn(this,i.s),this.l=i.l;var a=i.i,u=new tn;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),ms(this,u),this.m=i.m}else i&&(a=String(i).match(ps))?(this.h=!1,Ln(this,a[1]||"",!0),this.o=Je(a[2]||""),this.g=Je(a[3]||"",!0),Fn(this,a[4]),this.l=Je(a[5]||"",!0),ms(this,a[6]||"",!0),this.m=Je(a[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}ie.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ze(a,gs,!0),":");var u=this.g;return(u||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ze(a,gs,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Ze(u,u.charAt(0)=="/"?Al:wl,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Ze(u,bl)),i.join("")};function Ft(i){return new ie(i)}function Ln(i,a,u){i.j=u?Je(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Fn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ms(i,a,u){a instanceof tn?(i.i=a,Rl(i.i,i.h)):(u||(a=Ze(a,Il)),i.i=new tn(a,i.h))}function et(i,a,u){i.i.set(a,u)}function Bn(i){return et(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Je(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ze(i,a,u){return typeof i=="string"?(i=encodeURI(i).replace(a,Tl),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Tl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var gs=/[#\/\?@]/g,wl=/[#\?:]/g,Al=/[#\?]/g,Il=/[#\?@]/g,bl=/#/g;function tn(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Qt(i){i.g||(i.g=new Map,i.h=0,i.i&&El(i.i,function(a,u){i.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=tn.prototype,n.add=function(i,a){Qt(this),this.i=null,i=ye(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(a),this.h+=1,this};function _s(i,a){Qt(i),a=ye(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ys(i,a){return Qt(i),a=ye(i,a),i.g.has(a)}n.forEach=function(i,a){Qt(this),this.g.forEach(function(u,f){u.forEach(function(w){i.call(a,w,f,this)},this)},this)},n.na=function(){Qt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let f=0;f<a.length;f++){const w=i[f];for(let I=0;I<w.length;I++)u.push(a[f])}return u},n.V=function(i){Qt(this);let a=[];if(typeof i=="string")ys(this,i)&&(a=a.concat(this.g.get(ye(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)a=a.concat(i[u])}return a},n.set=function(i,a){return Qt(this),this.i=null,i=ye(this,i),ys(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function vs(i,a,u){_s(i,a),0<u.length&&(i.i=null,i.g.set(ye(i,a),x(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var f=a[u];const I=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var w=I;k[f]!==""&&(w+="="+encodeURIComponent(String(k[f]))),i.push(w)}}return this.i=i.join("&")};function ye(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Rl(i,a){a&&!i.j&&(Qt(i),i.i=null,i.g.forEach(function(u,f){var w=f.toLowerCase();f!=w&&(_s(this,f),vs(this,w,u))},i)),i.j=a}function Pl(i,a){const u=new Xe;if(c.Image){const f=new Image;f.onload=R(Gt,u,"TestLoadImage: loaded",!0,a,f),f.onerror=R(Gt,u,"TestLoadImage: error",!1,a,f),f.onabort=R(Gt,u,"TestLoadImage: abort",!1,a,f),f.ontimeout=R(Gt,u,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else a(!1)}function Sl(i,a){const u=new Xe,f=new AbortController,w=setTimeout(()=>{f.abort(),Gt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:f.signal}).then(I=>{clearTimeout(w),I.ok?Gt(u,"TestPingServer: ok",!0,a):Gt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(w),Gt(u,"TestPingServer: error",!1,a)})}function Gt(i,a,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function Cl(){this.g=new hl}function Vl(i,a,u){const f=u||"";try{ds(i,function(w,I){let k=w;d(w)&&(k=Mr(w)),a.push(f+I+"="+encodeURIComponent(k))})}catch(w){throw a.push(f+"type="+encodeURIComponent("_badmap")),w}}function en(i){this.l=i.Ub||null,this.j=i.eb||!1}D(en,xr),en.prototype.g=function(){return new Un(this.l,this.j)},en.prototype.i=function(i){return function(){return i}}({});function Un(i,a){Et.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Un,Et),n=Un.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,rn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Es(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Es(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?nn(this):rn(this),this.readyState==3&&Es(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,nn(this))},n.Qa=function(i){this.g&&(this.response=i,nn(this))},n.ga=function(){this.g&&nn(this)};function nn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,rn(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=a.next();return i.join(`\r
`)};function rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ts(i){let a="";return j(i,function(u,f){a+=f,a+=":",a+=u,a+=`\r
`}),a}function Qr(i,a,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Ts(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):et(i,a,u))}function st(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(st,Et);var Dl=/^https?$/i,kl=["POST","PUT"];n=st.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Br.g(),this.v=this.o?Xi(this.o):Xi(Br),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(I){ws(this,I);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const I of f.keys())u.set(I,f.get(I));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(I=>I.toLowerCase()=="content-type"),w=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(kl,a,void 0))||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,k]of u)this.g.setRequestHeader(I,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bs(this),this.u=!0,this.g.send(i),this.u=!1}catch(I){ws(this,I)}};function ws(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,As(i),jn(i)}function As(i){i.A||(i.A=!0,St(i,"complete"),St(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,St(this,"complete"),St(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Is(this):this.bb())},n.bb=function(){Is(this)};function Is(i){if(i.h&&typeof l<"u"&&(!i.v[1]||Bt(i)!=4||i.Z()!=2)){if(i.u&&Bt(i)==4)Qi(i.Ea,0,i);else if(St(i,"readystatechange"),Bt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var f;if(f=k===0){var w=String(i.D).match(ps)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!Dl.test(w?w.toLowerCase():"")}u=f}if(u)St(i,"complete"),St(i,"success");else{i.m=6;try{var I=2<Bt(i)?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.Z()+"]",As(i)}}finally{jn(i)}}}}function jn(i,a){if(i.g){bs(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||St(i,"ready");try{u.onreadystatechange=f}catch{}}}function bs(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Bt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),cl(a)}};function Rs(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Nl(i){const a={};i=(i.g&&2<=Bt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(L(i[f]))continue;var u=T(i[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const I=a[w]||[];a[w]=I,I.push(u)}y(a,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(i,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||a}function Ps(i){this.Aa=0,this.i=[],this.j=new Xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,i),this.cb=sn("retryDelaySeedMs",1e4,i),this.Wa=sn("forwardChannelMaxRetries",2,i),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ls(i&&i.concurrentRequestLimit),this.Da=new Cl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ps.prototype,n.la=8,n.G=1,n.connect=function(i,a,u,f){Ct(0),this.W=i,this.H=a||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=xs(this,null,this.W),qn(this)};function Gr(i){if(Ss(i),i.G==3){var a=i.U++,u=Ft(i.I);if(et(u,"SID",i.K),et(u,"RID",a),et(u,"TYPE","terminate"),on(i,u),a=new zt(i,i.j,a),a.L=2,a.v=Bn(Ft(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=Ls(a.j,null),a.g.ea(a.v)),a.F=Date.now(),xn(a)}Ms(i)}function $n(i){i.g&&(Wr(i),i.g.cancel(),i.g=null)}function Ss(i){$n(i),i.u&&(c.clearTimeout(i.u),i.u=null),Hn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function qn(i){if(!us(i.h)&&!i.s){i.s=!0;var a=i.Ga;$e||Ui(),qe||($e(),qe=!0),Rr.add(a,i),i.B=0}}function Ol(i,a){return cs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=We(b(i.Ga,i,a),Os(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new zt(this,this.j,i);let I=this.o;if(this.S&&(I?(I=p(I),v(I,this.S)):I=this.S),this.m!==null||this.O||(w.H=I,I=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Vs(this,w,a),u=Ft(this.I),et(u,"RID",i),et(u,"CVER",22),this.D&&et(u,"X-HTTP-Session-Id",this.D),on(this,u),I&&(this.O?a="headers="+encodeURIComponent(String(Ts(I)))+"&"+a:this.m&&Qr(u,this.m,I)),zr(this.h,w),this.Ua&&et(u,"TYPE","init"),this.P?(et(u,"$req",a),et(u,"SID","null"),w.T=!0,jr(w,u,null)):jr(w,u,a),this.G=2}}else this.G==3&&(i?Cs(this,i):this.i.length==0||us(this.h)||Cs(this))};function Cs(i,a){var u;a?u=a.l:u=i.U++;const f=Ft(i.I);et(f,"SID",i.K),et(f,"RID",u),et(f,"AID",i.T),on(i,f),i.m&&i.o&&Qr(f,i.m,i.o),u=new zt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Vs(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),zr(i.h,u),jr(u,f,a)}function on(i,a){i.H&&j(i.H,function(u,f){et(a,f,u)}),i.l&&ds({},function(u,f){et(a,f,u)})}function Vs(i,a,u){u=Math.min(i.i.length,u);var f=i.l?b(i.l.Na,i.l,i):null;t:{var w=i.i;let I=-1;for(;;){const k=["count="+u];I==-1?0<u?(I=w[0].g,k.push("ofs="+I)):I=0:k.push("ofs="+I);let Z=!0;for(let mt=0;mt<u;mt++){let J=w[mt].g;const Tt=w[mt].map;if(J-=I,0>J)I=Math.max(0,w[mt].g-100),Z=!1;else try{Vl(Tt,k,"req"+J+"_")}catch{f&&f(Tt)}}if(Z){f=k.join("&");break t}}}return i=i.i.splice(0,u),a.D=i,f}function Ds(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;$e||Ui(),qe||($e(),qe=!0),Rr.add(a,i),i.v=0}}function Kr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=We(b(i.Fa,i),Os(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ks(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=We(b(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),$n(this),ks(this))};function Wr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ks(i){i.g=new zt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Ft(i.qa);et(a,"RID","rpc"),et(a,"SID",i.K),et(a,"AID",i.T),et(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&et(a,"TO",i.ja),et(a,"TYPE","xmlhttp"),on(i,a),i.m&&i.o&&Qr(a,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Bn(Ft(a)),u.m=null,u.P=!0,ss(u,i)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),Kr(this),Ct(19))};function Hn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ns(i,a){var u=null;if(i.g==a){Hn(i),Wr(i),i.g=null;var f=2}else if(Hr(i.h,a))u=a.D,hs(i.h,a),f=1;else return;if(i.G!=0){if(a.o)if(f==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var w=i.B;f=Nn(),St(f,new es(f,u)),qn(i)}else Ds(i);else if(w=a.s,w==3||w==0&&0<a.X||!(f==1&&Ol(i,a)||f==2&&Kr(i)))switch(u&&0<u.length&&(a=i.h,a.i=a.i.concat(u)),w){case 1:se(i,5);break;case 4:se(i,10);break;case 3:se(i,6);break;default:se(i,2)}}}function Os(i,a){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*a}function se(i,a){if(i.j.info("Error code "+a),a==2){var u=b(i.fb,i),f=i.Xa;const w=!f;f=new ie(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ln(f,"https"),Bn(f),w?Pl(f.toString(),u):Sl(f.toString(),u)}else Ct(2);i.G=0,i.l&&i.l.sa(a),Ms(i),Ss(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Ms(i){if(i.G=0,i.ka=[],i.l){const a=fs(i.h);(a.length!=0||i.i.length!=0)&&(S(i.ka,a),S(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function xs(i,a,u){var f=u instanceof ie?Ft(u):new ie(u);if(f.g!="")a&&(f.g=a+"."+f.g),Fn(f,f.s);else{var w=c.location;f=w.protocol,a=a?a+"."+w.hostname:w.hostname,w=+w.port;var I=new ie(null);f&&Ln(I,f),a&&(I.g=a),w&&Fn(I,w),u&&(I.l=u),f=I}return u=i.D,a=i.ya,u&&a&&et(f,u,a),et(f,"VER",i.la),on(i,f),f}function Ls(i,a,u){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new st(new en({eb:u})):new st(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fs(){}n=Fs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(i,a){return new Dt(i,a)};function Dt(i,a){Et.call(this),this.g=new Ps(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!L(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!L(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new ve(this)}D(Dt,Et),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Gr(this.g)},Dt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=Mr(i),i=u);a.i.push(new _l(a.Ya++,i)),a.G==3&&qn(a)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Gr(this.g),delete this.g,Dt.aa.N.call(this)};function Bs(i){Lr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const u in a){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}D(Bs,Lr);function Us(){Fr.call(this),this.status=1}D(Us,Fr);function ve(i){this.g=i}D(ve,Fs),ve.prototype.ua=function(){St(this.g,"a")},ve.prototype.ta=function(i){St(this.g,new Bs(i))},ve.prototype.sa=function(i){St(this.g,new Us)},ve.prototype.ra=function(){St(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,ia=function(){return new zn},ra=function(){return Nn()},na=ne,di={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,Zn=On,ns.COMPLETE="complete",ea=ns,Yi.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",Et.prototype.listen=Et.prototype.K,un=Yi,ta=en,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,Zo=st}).apply(typeof Gn<"u"?Gn:typeof self<"u"?self:typeof window<"u"?window:{});const to="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new Qo("@firebase/firestore");function an(){return de.logLevel}function $(n,...t){if(de.logLevel<=Y.DEBUG){const e=t.map(bi);de.debug(`Firestore (${Ue}): ${n}`,...e)}}function pe(n,...t){if(de.logLevel<=Y.ERROR){const e=t.map(bi);de.error(`Firestore (${Ue}): ${n}`,...e)}}function ar(n,...t){if(de.logLevel<=Y.WARN){const e=t.map(bi);de.warn(`Firestore (${Ue}): ${n}`,...e)}}function bi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n="Unexpected state"){const t=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+n;throw pe(t),new Error(t)}function pt(n,t){n||W()}function nt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Pc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Sc{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ce;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ce,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ce)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pt(typeof r.accessToken=="string"),new sa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return pt(t===null||typeof t=="string"),new It(t)}}class Cc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Vc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Cc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,$("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(pt(typeof e.token=="string"),this.R=e.token,new Dc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Nc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function tt(n,t){return n<t?-1:n>t?1:0}function De(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new H(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new dt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.timestamp=t}static fromTimestamp(t){return new it(t)}static min(){return new it(new dt(0,0))}static max(){return new it(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e,r){e===void 0?e=0:e>t.length&&W(),r===void 0?r=t.length-e:r>t.length-e&&W(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return En.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof En?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ot extends En{construct(t,e,r){return new ot(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new H(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ot(e)}static emptyPath(){return new ot([])}}const Oc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends En{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return Oc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new H(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new H(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new H(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(r+=c,s++):(o(),s++)}if(o(),l)throw new H(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(ot.fromString(t))}static fromName(t){return new G(ot.fromString(t).popFirst(5))}static empty(){return new G(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new ot(t.slice()))}}function Mc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=it.fromTimestamp(r===1e9?new dt(e+1,0):new dt(e,r));return new Jt(s,G.empty(),t)}function xc(n){return new Jt(n.readTime,n.key,-1)}class Jt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Jt(it.min(),G.empty(),-1)}static max(){return new Jt(it.max(),G.empty(),-1)}}function Lc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Fc)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},h=>r(h))}),l=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,l=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{l[d]=m,++c,c===o&&r(l)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Uc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}la.oe=-1;function Ri(n){return n==null}function lr(n){return n===0&&1/n==-1/0}function jc(n){return typeof n=="number"&&Number.isInteger(n)&&!lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Rn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ua(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new Vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new Vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kn(this.root,t,this.comparator,!0)}}class Kn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new gt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,r,s,o){return this}insert(t,e,r){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.comparator=t,this.data=new Vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new no(this.data.getIterator())}getIteratorFrom(t){return new no(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pt(this.comparator);return e.data=t,e}}class no{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new Pt(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $c("Invalid base64 string: "+o):o}}(t);return new qt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const qc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(n){if(pt(!!n),typeof n=="string"){let t=0;const e=qc.exec(n);if(pt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tn(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ca(n){const t=n.mapValue.fields.__previous_value__;return Pi(t)?ca(t):t}function ur(n){const t=me(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,e,r,s,o,l,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class cr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof cr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ke(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pi(n)?4:zc(n)?9007199254740991:10:W()}function Lt(n,t){if(n===t)return!0;const e=ke(n);if(e!==ke(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ur(n).isEqual(ur(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=me(s.timestampValue),c=me(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Tn(s.bytesValue).isEqual(Tn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return _t(s.geoPointValue.latitude)===_t(o.geoPointValue.latitude)&&_t(s.geoPointValue.longitude)===_t(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return _t(s.integerValue)===_t(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=_t(s.doubleValue),c=_t(o.doubleValue);return l===c?lr(l)===lr(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return De(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(eo(l)!==eo(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!Lt(l[h],c[h])))return!1;return!0}(n,t);default:return W()}}function wn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Ne(n,t){if(n===t)return 0;const e=ke(n),r=ke(t);if(e!==r)return tt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=_t(o.integerValue||o.doubleValue),h=_t(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ro(n.timestampValue,t.timestampValue);case 4:return ro(ur(n),ur(t));case 5:return tt(n.stringValue,t.stringValue);case 6:return function(o,l){const c=Tn(o),h=Tn(l);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),h=l.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=tt(c[d],h[d]);if(m!==0)return m}return tt(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=tt(_t(o.latitude),_t(l.latitude));return c!==0?c:tt(_t(o.longitude),_t(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const c=o.values||[],h=l.values||[];for(let d=0;d<c.length&&d<h.length;++d){const m=Ne(c[d],h[d]);if(m)return m}return tt(c.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===Wn.mapValue&&l===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(l===Wn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=l.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const b=tt(h[E],m[E]);if(b!==0)return b;const R=Ne(c[h[E]],d[m[E]]);if(R!==0)return R}return tt(h.length,m.length)}(n.mapValue,t.mapValue);default:throw W()}}function ro(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=me(n),r=me(t),s=tt(e.seconds,r.seconds);return s!==0?s:tt(e.nanos,r.nanos)}function Oe(n){return pi(n)}function pi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Tn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return G.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=pi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of r)o?o=!1:s+=",",s+=`${l}:${pi(e.fields[l])}`;return s+"}"}(n.mapValue):W()}function mi(n){return!!n&&"integerValue"in n}function Si(n){return!!n&&"arrayValue"in n}function tr(n){return!!n&&"mapValue"in n}function fn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Rn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=fn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=fn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function zc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fn(e)}setAll(t){let e=yt.emptyPath(),r={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}l?r[c.lastSegment()]=fn(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Rn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ot(fn(this.value))}}function ha(n){const t=[];return Rn(n.fields,(e,r)=>{const s=new yt([e]);if(tr(r)){const o=ha(r.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e,r,s,o,l,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Nt(t,0,it.min(),it.min(),it.min(),Ot.empty(),0)}static newFoundDocument(t,e,r,s){return new Nt(t,1,e,it.min(),r,s,0)}static newNoDocument(t,e){return new Nt(t,2,e,it.min(),it.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new Nt(t,3,e,it.min(),it.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(it.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=it.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Nt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function io(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?r=G.comparator(G.fromName(l.referenceValue),e.key):r=Ne(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function so(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Qc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{}class ft extends fa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Kc(t,e,r):e==="array-contains"?new Yc(t,r):e==="in"?new Jc(t,r):e==="not-in"?new Zc(t,r):e==="array-contains-any"?new th(t,r):new ft(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Wc(t,r):new Xc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&ke(this.value)===ke(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends fa{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Zt(t,e)}matches(t){return da(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function da(n){return n.op==="and"}function pa(n){return Gc(n)&&da(n)}function Gc(n){for(const t of n.filters)if(t instanceof Zt)return!1;return!0}function gi(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+Oe(n.value);if(pa(n))return n.filters.map(t=>gi(t)).join(",");{const t=n.filters.map(e=>gi(e)).join(",");return`${n.op}(${t})`}}function ma(n,t){return n instanceof ft?function(r,s){return s instanceof ft&&r.op===s.op&&r.field.isEqual(s.field)&&Lt(r.value,s.value)}(n,t):n instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,l,c)=>o&&ma(l,s.filters[c]),!0):!1}(n,t):void W()}function ga(n){return n instanceof ft?function(e){return`${e.field.canonicalString()} ${e.op} ${Oe(e.value)}`}(n):n instanceof Zt?function(e){return e.op.toString()+" {"+e.getFilters().map(ga).join(" ,")+"}"}(n):"Filter"}class Kc extends ft{constructor(t,e,r){super(t,e,r),this.key=G.fromName(r.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class Wc extends ft{constructor(t,e){super(t,"in",e),this.keys=_a("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xc extends ft{constructor(t,e){super(t,"not-in",e),this.keys=_a("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function _a(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>G.fromName(r.referenceValue))}class Yc extends ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Si(e)&&wn(e.arrayValue,this.value)}}class Jc extends ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wn(this.value.arrayValue,e)}}class Zc extends ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!wn(this.value.arrayValue,e)}}class th extends ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>wn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e=null,r=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function oo(n,t=null,e=[],r=[],s=null,o=null,l=null){return new eh(n,t,e,r,s,o,l)}function Ci(n){const t=nt(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>gi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ri(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Oe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Oe(r)).join(",")),t.ue=e}return t.ue}function Vi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Qc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ma(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!so(n.startAt,t.startAt)&&so(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e=null,r=[],s=[],o=null,l="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nh(n,t,e,r,s,o,l,c){return new yr(n,t,e,r,s,o,l,c)}function rh(n){return new yr(n)}function ao(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ih(n){return n.collectionGroup!==null}function dn(n){const t=nt(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Pt(yt.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new fr(o,r))}),e.has(yt.keyField().canonicalString())||t.ce.push(new fr(yt.keyField(),r))}return t.ce}function he(n){const t=nt(n);return t.le||(t.le=sh(t,dn(n))),t.le}function sh(n,t){if(n.limitType==="F")return oo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new fr(s.field,o)});const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return oo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function _i(n,t,e){return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ya(n,t){return Vi(he(n),he(t))&&n.limitType===t.limitType}function va(n){return`${Ci(he(n))}|lt:${n.limitType}`}function ln(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ga(s)).join(", ")}]`),Ri(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Oe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Oe(s)).join(",")),`Target(${r})`}(he(n))}; limitType=${n.limitType})`}function Di(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):G.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(l,c,h){const d=io(l,c,h);return l.inclusive?d<=0:d<0}(r.startAt,dn(r),s)||r.endAt&&!function(l,c,h){const d=io(l,c,h);return l.inclusive?d>=0:d>0}(r.endAt,dn(r),s))}(n,t)}function oh(n){return(t,e)=>{let r=!1;for(const s of dn(n)){const o=ah(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ah(n,t,e){const r=n.field.isKeyField()?G.comparator(t.key,e.key):function(o,l,c){const h=l.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Ne(h,d):W()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Rn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return ua(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Vt(G.comparator);function dr(){return lh}const Ea=new Vt(G.comparator);function Xn(...n){let t=Ea;for(const e of n)t=t.insert(e.key,e);return t}function Ta(n){let t=Ea;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function le(){return pn()}function wa(){return pn()}function pn(){return new je(n=>n.toString(),(n,t)=>n.isEqual(t))}const uh=new Vt(G.comparator),ch=new Pt(G.comparator);function bt(...n){let t=ch;for(const e of n)t=t.add(e);return t}const hh=new Pt(tt);function fh(){return hh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(t)?"-0":t}}function Ia(n){return{integerValue:""+n}}function dh(n,t){return jc(t)?Ia(t):Aa(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this._=void 0}}function ph(n,t,e){return n instanceof pr?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Pi(o)&&(o=ca(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof An?Ra(n,t):n instanceof In?Pa(n,t):function(s,o){const l=ba(s,o),c=lo(l)+lo(s.Pe);return mi(l)&&mi(s.Pe)?Ia(c):Aa(s.serializer,c)}(n,t)}function mh(n,t,e){return n instanceof An?Ra(n,t):n instanceof In?Pa(n,t):e}function ba(n,t){return n instanceof mr?function(r){return mi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class pr extends vr{}class An extends vr{constructor(t){super(),this.elements=t}}function Ra(n,t){const e=Sa(t);for(const r of n.elements)e.some(s=>Lt(s,r))||e.push(r);return{arrayValue:{values:e}}}class In extends vr{constructor(t){super(),this.elements=t}}function Pa(n,t){let e=Sa(t);for(const r of n.elements)e=e.filter(s=>!Lt(s,r));return{arrayValue:{values:e}}}class mr extends vr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function lo(n){return _t(n.integerValue||n.doubleValue)}function Sa(n){return Si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function gh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof An&&s instanceof An||r instanceof In&&s instanceof In?De(r.elements,s.elements,Lt):r instanceof mr&&s instanceof mr?Lt(r.Pe,s.Pe):r instanceof pr&&s instanceof pr}(n.transform,t.transform)}class _h{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Er{}function Ca(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Da(n.key,jt.none()):new Pn(n.key,n.data,jt.none());{const e=n.data,r=Ot.empty();let s=new Pt(yt.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),s=s.add(o)}return new ge(n.key,r,new Mt(s.toArray()),jt.none())}}function yh(n,t,e){n instanceof Pn?function(s,o,l){const c=s.value.clone(),h=co(s.fieldTransforms,o,l.transformResults);c.setAll(h),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ge?function(s,o,l){if(!er(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=co(s.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(Va(s)),h.setAll(c),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function mn(n,t,e,r){return n instanceof Pn?function(o,l,c,h){if(!er(o.precondition,l))return c;const d=o.value.clone(),m=ho(o.fieldTransforms,h,l);return d.setAll(m),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ge?function(o,l,c,h){if(!er(o.precondition,l))return c;const d=ho(o.fieldTransforms,h,l),m=l.data;return m.setAll(Va(o)),m.setAll(d),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,l,c){return er(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function vh(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ba(r.transform,s||null);o!=null&&(e===null&&(e=Ot.empty()),e.set(r.field,o))}return e||null}function uo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&De(r,s,(o,l)=>gh(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Pn extends Er{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ge extends Er{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Va(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function co(n,t,e){const r=new Map;pt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);r.set(o.field,mh(l,c,e[s]))}return r}function ho(n,t,e){const r=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);r.set(s.field,ph(o,l,t))}return r}class Da extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&yh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=wa();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const h=Ca(l,c);h!==null&&r.set(s.key,h),l.isValidDocument()||l.convertToNoDocument(it.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),bt())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,(e,r)=>uo(e,r))&&De(this.baseMutations,t.baseMutations,(e,r)=>uo(e,r))}}class ki{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){pt(t.mutations.length===r.length);let s=function(){return uh}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,r[l].version);return new ki(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,X;function Ah(n){switch(n){default:return W();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Ih(n){if(n===void 0)return pe("GRPC error has no .code"),C.UNKNOWN;switch(n){case ct.OK:return C.OK;case ct.CANCELLED:return C.CANCELLED;case ct.UNKNOWN:return C.UNKNOWN;case ct.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ct.INTERNAL:return C.INTERNAL;case ct.UNAVAILABLE:return C.UNAVAILABLE;case ct.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ct.NOT_FOUND:return C.NOT_FOUND;case ct.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ct.ABORTED:return C.ABORTED;case ct.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ct.DATA_LOSS:return C.DATA_LOSS;default:return W()}}(X=ct||(ct={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Jo([4294967295,4294967295],0);class bh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ph(n,t){return yi(n,t.toTimestamp())}function Ve(n){return pt(!!n),it.fromTimestamp(function(e){const r=me(e);return new dt(r.seconds,r.nanos)}(n))}function ka(n,t){return vi(n,t).canonicalString()}function vi(n,t){const e=function(s){return new ot(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Sh(n){const t=ot.fromString(n);return pt(xh(t)),t}function Ei(n,t){return ka(n.databaseId,t.path)}function Ch(n){const t=Sh(n);return t.length===4?ot.emptyPath():Dh(t)}function Vh(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dh(n){return pt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fo(n,t,e){return{name:Ei(n,t),fields:e.value.mapValue.fields}}function kh(n,t){let e;if(t instanceof Pn)e={update:fo(n,t.key,t.value)};else if(t instanceof Da)e={delete:Ei(n,t.key)};else if(t instanceof ge)e={update:fo(n,t.key,t.data),updateMask:Mh(t.fieldMask)};else{if(!(t instanceof Eh))return W();e={verify:Ei(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const c=l.transform;if(c instanceof pr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof An)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof In)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mr)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw W()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ph(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:W()}(n,t.precondition)),e}function Nh(n,t){return n&&n.length>0?(pt(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?Ve(s.updateTime):Ve(o);return l.isEqual(it.min())&&(l=Ve(o)),new _h(l,s.transformResults||[])}(e,t))):[]}function Oh(n){let t=Ch(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){pt(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const b=Na(E);return b instanceof Zt&&pa(b)?b.getFilters():[b]}(e.where));let l=[];e.orderBy&&(l=function(E){return E.map(b=>function(D){return new fr(be(D.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(b))}(e.orderBy));let c=null;e.limit&&(c=function(E){let b;return b=typeof E=="object"?E.value:E,Ri(b)?null:b}(e.limit));let h=null;e.startAt&&(h=function(E){const b=!!E.before,R=E.values||[];return new hr(R,b)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const b=!E.before,R=E.values||[];return new hr(R,b)}(e.endAt)),nh(t,s,l,o,c,"F",h,d)}function Na(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=be(e.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=be(e.unaryFilter.field);return ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=be(e.unaryFilter.field);return ft.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=be(e.unaryFilter.field);return ft.create(l,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return ft.create(be(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Zt.create(e.compositeFilter.filters.map(r=>Na(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function be(n){return yt.fromServerFormat(n.fieldPath)}function Mh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function xh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t){this.ct=t}}function Fh(n){const t=Oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_i(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this._n=new Uh}addToCollectionParentIndex(t,e){return this._n.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Jt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Uh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Pt(ot.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Pt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Me(0)}static Ln(){return new Me(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.changes=new je(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Nt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&mn(r.mutation,s,Mt.empty(),dt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,bt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=bt()){const s=le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let l=Xn();return o.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,bt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,r,s){let o=dr();const l=pn(),c=function(){return pn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ge)?o=o.insert(d.key,d):m!==void 0?(l.set(d.key,m.mutation.getFieldMask()),mn(m.mutation,d,m.mutation.getFieldMask(),dt.now())):l.set(d.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>l.set(d,m)),e.forEach((d,m)=>{var E;return c.set(d,new $h(m,(E=l.get(d))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=pn();let s=new Vt((l,c)=>l-c),o=bt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Mt.empty();m=c.applyToLocalView(d,m),r.set(h,m);const E=(s.get(c.batchId)||bt()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,E=wa();m.forEach(b=>{if(!o.has(b)){const R=Ca(e.get(b),r.get(b));R!==null&&E.set(b,R),o=o.add(b)}}),l.push(this.documentOverlayCache.saveOverlays(t,d,E))}return P.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(l){return G.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ih(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(le());let c=-1,h=o;return l.next(d=>P.forEach(d,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(b=>{h=h.insert(m,b)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,bt())).next(m=>({batchId:c,changes:Ta(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next(r=>{let s=Xn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let l=Xn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(E,b){return new yr(b,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((E,b)=>{l=l.insert(E,b)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(l=>{o.forEach((h,d)=>{const m=d.getKey();l.get(m)===null&&(l=l.insert(m,Nt.newInvalidDocument(m)))});let c=Xn();return l.forEach((h,d)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,d,Mt.empty(),dt.now()),Di(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return P.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ve(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Fh(s.bundledQuery),readTime:Ve(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.overlays=new Vt(G.comparator),this.hr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=le(),o=e.length+1,l=new G(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Vt((d,m)=>d-m);const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=le(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return P.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new wh(e,r));let o=this.hr.get(e);o===void 0&&(o=bt(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.Pr=new Pt(ht.Ir),this.Tr=new Pt(ht.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new ht(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new ht(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new G(new ot([])),r=new ht(e,t),s=new ht(e,t+1),o=[];return this.Tr.forEachInRange([r,s],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new G(new ot([])),r=new ht(e,t),s=new ht(e,t+1);let o=bt();return this.Tr.forEachInRange([r,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new ht(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return G.comparator(t.key,e.key)||tt(t.pr,e.pr)}static Er(t,e){return tt(t.pr,e.pr)||G.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Pt(ht.Ir)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Th(o,e,r,s);this.mutationQueue.push(l);for(const c of s)this.wr=this.wr.add(new ht(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(l)}lookupMutationBatch(t,e){return P.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ht(e,0),s=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],l=>{const c=this.Sr(l.pr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Pt(tt);return e.forEach(s=>{const o=new ht(s,0),l=new ht(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],c=>{r=r.add(c.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;G.isDocumentKey(o)||(o=o.child(""));const l=new ht(new G(o),0);let c=new Pt(tt);return this.wr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.pr)),!0)},l),P.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){pt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(e.mutations,s=>{const o=new ht(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new ht(e,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.vr=t,this.docs=function(){return new Vt(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,l=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(e))}getEntries(t,e){let r=dr();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Nt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=dr();const l=e.path,c=new G(l.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||Lc(xc(m),r)<=0||(s.has(m.key)||Di(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){W()}Fr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Kh(this)}getSize(t){return P.resolve(this.size)}}class Kh extends jh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.persistence=t,this.Mr=new je(e=>Ci(e),Vi),this.lastRemoteSnapshotVersion=it.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ni,this.targetCount=0,this.Lr=Me.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),P.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.qn(e),P.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((l,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e){this.Br={},this.overlays={},this.kr=new la(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Wh(this),this.indexManager=new Bh,this.remoteDocumentCache=function(s){return new Gh(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Lh(e),this.$r=new Hh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new zh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Qh(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){$("MemoryPersistence","Starting transaction:",t);const s=new Yh(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Yh extends Bc{constructor(t){super(),this.currentSequenceNumber=t}}class Oi{constructor(t){this.persistence=t,this.zr=new Ni,this.jr=null}static Hr(t){return new Oi(t)}get Jr(){if(this.jr)return this.jr;throw W()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),P.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=G.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,it.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return P.or([()=>P.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=bt(),s=bt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Mi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uu()?8:Uc(au())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Jh;return this.Ji(t,e,l).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,l,c.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(an()<=Y.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ln(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(an()<=Y.DEBUG&&$("QueryEngine","Query:",ln(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(an()<=Y.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ln(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,he(e))):P.resolve())}ji(t,e){if(ao(e))return P.resolve(null);let r=he(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=_i(e,null,"F"),r=he(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=bt(...o);return this.zi.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.Zi(e,c);return this.Xi(e,d,l,h.readTime)?this.ji(t,_i(e,null,"F")):this.es(t,d,e,h)}))})))}Hi(t,e,r,s){return ao(e)||s.isEqual(it.min())?P.resolve(null):this.zi.getDocuments(t,r).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,r,s)?P.resolve(null):(an()<=Y.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ln(e)),this.es(t,l,e,Mc(s,-1)).next(c=>c))})}Zi(t,e){let r=new Pt(oh(t));return e.forEach((s,o)=>{Di(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return an()<=Y.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ln(e)),this.zi.getDocumentsMatchingQuery(t,e,Jt.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Vt(tt),this.rs=new je(o=>Ci(o),Vi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function ef(n,t,e,r){return new tf(n,t,e,r)}async function Oa(n,t){const e=nt(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let h=bt();for(const d of s){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({us:d,removedBatchIds:l,addedBatchIds:c}))})})}function nf(n,t){const e=nt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const E=d.batch,b=E.keys();let R=P.resolve();return b.forEach(D=>{R=R.next(()=>m.getEntry(h,D)).next(x=>{const S=d.docVersions.get(D);pt(S!==null),x.version.compareTo(S)<0&&(E.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=bt();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function rf(n){const t=nt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function sf(n,t){const e=nt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class po{constructor(){this.activeTargetIds=fh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class of{constructor(){this.no=new po,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new po,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn=null;function ni(){return Yn===null?Yn=function(){return 268435456+Math.round(2147483648*Math.random())}():Yn++,"0x"+Yn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class cf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,l){const c=ni(),h=this.vo(e,r.toUriEncodedString());$("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,l),this.Mo(e,h,d,s).then(m=>($("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw ar("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}xo(e,r,s,o,l,c){return this.Co(e,r,s,o,l)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}vo(e,r){const s=lf[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=ni();return new Promise((l,c)=>{const h=new Zo;h.setWithCredentials(!0),h.listenOnce(ea.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Zn.NO_ERROR:const m=h.getResponseJson();$(At,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),l(m);break;case Zn.TIMEOUT:$(At,`RPC '${t}' ${o} timed out`),c(new H(C.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const E=h.getStatus();if($(At,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const R=b==null?void 0:b.error;if(R&&R.status&&R.message){const D=function(S){const B=S.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(B)>=0?B:C.UNKNOWN}(R.status);c(new H(D,R.message))}else c(new H(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new H(C.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{$(At,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);$(At,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Oo(t,e,r){const s=ni(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=ia(),c=ra(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new ta({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");$(At,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=l.createWebChannel(m,h);let b=!1,R=!1;const D=new uf({lo:S=>{R?$(At,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(b||($(At,`Opening RPC '${t}' stream ${s} transport.`),E.open(),b=!0),$(At,`RPC '${t}' stream ${s} sending:`,S),E.send(S))},ho:()=>E.close()}),x=(S,B,L)=>{S.listen(B,N=>{try{L(N)}catch(U){setTimeout(()=>{throw U},0)}})};return x(E,un.EventType.OPEN,()=>{R||($(At,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),x(E,un.EventType.CLOSE,()=>{R||(R=!0,$(At,`RPC '${t}' stream ${s} transport closed`),D.po())}),x(E,un.EventType.ERROR,S=>{R||(R=!0,ar(At,`RPC '${t}' stream ${s} transport errored:`,S),D.po(new H(C.UNAVAILABLE,"The operation could not be completed")))}),x(E,un.EventType.MESSAGE,S=>{var B;if(!R){const L=S.data[0];pt(!!L);const N=L,U=N.error||((B=N[0])===null||B===void 0?void 0:B.error);if(U){$(At,`RPC '${t}' stream ${s} received error:`,U);const M=U.status;let j=function(_){const v=ct[_];if(v!==void 0)return Ih(v)}(M),y=U.message;j===void 0&&(j=C.INTERNAL,y="Unknown error status: "+M+" with message "+U.message),R=!0,D.po(new H(j,y)),E.close()}else $(At,`RPC '${t}' stream ${s} received:`,L),D.yo(L)}}),x(c,na.STAT_EVENT,S=>{S.stat===di.PROXY?$(At,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===di.NOPROXY&&$(At,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function ri(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){return new bh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e,r,s,o,l,c,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ma(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(pe(e.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new H(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ff extends hf{constructor(t,e,r,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(pt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Nh(t.writeResults,t.commitTime),r=Ve(t.commitTime);return this.listener.A_(r,e)}return pt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Vh(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>kh(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,vi(e,r),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(C.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.xo(t,vi(e,r),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new H(C.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(pe(e),this.y_=!1):$("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{r.enqueueAndForget(async()=>{Cn(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=nt(h);d.M_.add(4),await Sn(d),d.N_.set("Unknown"),d.M_.delete(4),await wr(d)}(this))})}),this.N_=new pf(r,s)}}async function wr(n){if(Cn(n))for(const t of n.x_)await t(!0)}async function Sn(n){for(const t of n.x_)await t(!1)}function Cn(n){return nt(n).M_.size===0}async function xa(n,t,e){if(!_r(t))throw t;n.M_.add(1),await Sn(n),n.N_.set("Offline"),e||(e=()=>rf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await wr(n)})}function La(n,t){return t().catch(e=>xa(n,e,t))}async function Ar(n){const t=nt(n),e=te(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;gf(t);)try{const s=await sf(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,_f(t,s)}catch(s){await xa(t,s)}Fa(t)&&Ba(t)}function gf(n){return Cn(n)&&n.v_.length<10}function _f(n,t){n.v_.push(t);const e=te(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Fa(n){return Cn(n)&&!te(n).Zo()&&n.v_.length>0}function Ba(n){te(n).start()}async function yf(n){te(n).V_()}async function vf(n){const t=te(n);for(const e of n.v_)t.d_(e.mutations)}async function Ef(n,t,e){const r=n.v_.shift(),s=ki.from(r,t,e);await La(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ar(n)}async function Tf(n,t){t&&te(n).E_&&await async function(r,s){if(function(l){return Ah(l)&&l!==C.ABORTED}(s.code)){const o=r.v_.shift();te(r).t_(),await La(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ar(r)}}(n,t),Fa(n)&&Ba(n)}async function go(n,t){const e=nt(n);e.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Cn(e);e.M_.add(3),await Sn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await wr(e)}async function wf(n,t){const e=nt(n);t?(e.M_.delete(2),await wr(e)):t||(e.M_.add(2),await Sn(e),e.N_.set("Unknown"))}function te(n){return n.k_||(n.k_=function(e,r,s){const o=nt(e);return o.f_(),new ff(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:yf.bind(null,n),Ao:Tf.bind(null,n),R_:vf.bind(null,n),A_:Ef.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Ar(n)):(await n.k_.stop(),n.v_.length>0&&($("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const l=Date.now()+r,c=new xi(t,e,l,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,t){if(pe("AsyncQueue",`${t}: ${n}`),_r(n))return new H(C.UNAVAILABLE,`${t}: ${n}`);throw n}class Af{constructor(){this.queries=new je(t=>va(t),ya),this.onlineState="Unknown",this.z_=new Set}}function If(n){n.z_.forEach(t=>{t.next()})}var _o,yo;(yo=_o||(_o={})).J_="default",yo.Cache="cache";class bf{constructor(t,e,r,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new je(c=>va(c),ya),this.Da=new Map,this.Ca=new Set,this.va=new Vt(G.comparator),this.Fa=new Map,this.Ma=new Ni,this.xa={},this.Oa=new Map,this.Na=Me.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Rf(n,t,e){const r=Vf(n);try{const s=await function(l,c){const h=nt(l),d=dt.now(),m=c.reduce((R,D)=>R.add(D.key),bt());let E,b;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=dr(),x=bt();return h.os.getEntries(R,m).next(S=>{D=S,D.forEach((B,L)=>{L.isValidDocument()||(x=x.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,D)).next(S=>{E=S;const B=[];for(const L of c){const N=vh(L,E.get(L.key).overlayedDocument);N!=null&&B.push(new ge(L.key,N,ha(N.value.mapValue),jt.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,B,c)}).next(S=>{b=S;const B=S.applyToLocalDocumentSet(E,x);return h.documentOverlayCache.saveOverlays(R,S.batchId,B)})}).then(()=>({batchId:b.batchId,changes:Ta(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(l,c,h){let d=l.xa[l.currentUser.toKey()];d||(d=new Vt(tt)),d=d.insert(c,h),l.xa[l.currentUser.toKey()]=d}(r,s.batchId,e),await Ir(r,s.changes),await Ar(r.remoteStore)}catch(s){const o=Ua(s,"Failed to persist write");e.reject(o)}}function vo(n,t,e){const r=nt(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,l)=>{const c=l.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const h=nt(l);h.onlineState=c;let d=!1;h.queries.forEach((m,E)=>{for(const b of E.U_)b.j_(c)&&(d=!0)}),d&&If(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pf(n,t){const e=nt(n),r=t.batch.batchId;try{const s=await nf(e.localStore,t);$a(e,r,null),ja(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ir(e,s)}catch(s){await aa(s)}}async function Sf(n,t,e){const r=nt(n);try{const s=await function(l,c){const h=nt(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(E=>(pt(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);$a(r,t,e),ja(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ir(r,s)}catch(s){await aa(s)}}function ja(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function $a(n,t,e){const r=nt(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}async function Ir(n,t,e){const r=nt(n),s=[],o=[],l=[];r.ba.isEmpty()||(r.ba.forEach((c,h)=>{l.push(r.Ba(h,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const m=d&&!d.fromCache;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Mi.Ki(h.targetId,d);o.push(m)}}))}),await Promise.all(l),r.Sa.h_(s),await async function(h,d){const m=nt(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(d,b=>P.forEach(b.qi,R=>m.persistence.referenceDelegate.addReference(E,b.targetId,R)).next(()=>P.forEach(b.Qi,R=>m.persistence.referenceDelegate.removeReference(E,b.targetId,R)))))}catch(E){if(!_r(E))throw E;$("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const b=E.targetId;if(!E.fromCache){const R=m.ns.get(b),D=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(D);m.ns=m.ns.insert(b,x)}}}(r.localStore,o))}async function Cf(n,t){const e=nt(n);if(!e.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const r=await Oa(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(c=>{c.forEach(h=>{h.reject(new H(C.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ir(e,r.us)}}function Vf(n){const t=nt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Sf.bind(null,t),t}class Eo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ef(this.persistence,new Zh,t.initialUser,this.serializer)}createPersistence(t){return new Xh(Oi.Hr,this.serializer)}createSharedClientState(t){return new of}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Df{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cf.bind(null,this.syncEngine),await wf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Af}()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),r=function(o){return new cf(o)}(t.databaseInfo);return function(o,l,c,h){return new df(o,l,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,l,c){return new mf(r,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>vo(this.syncEngine,e,0),function(){return mo.D()?new mo:new af}())}createSyncEngine(t,e){return function(s,o,l,c,h,d,m){const E=new bf(s,o,l,c,h,d);return m&&(E.La=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=nt(r);$("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Sn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=oa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ua(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ii(n,t){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Oa(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function To(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Of(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>go(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>go(t.remoteStore,s)),n._onlineComponents=t}function Nf(n){return n.name==="FirebaseError"?n.code===C.FAILED_PRECONDITION||n.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Of(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await ii(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Nf(e))throw e;ar("Error using user provided cache. Falling back to memory cache: "+e),await ii(n,new Eo)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await ii(n,new Eo);return n._offlineComponents}async function Mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await To(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await To(n,new Df))),n._onlineComponents}function xf(n){return Mf(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n,t,e){if(!e)throw new H(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Lf(n,t,e,r){if(t===!0&&r===!0)throw new H(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ao(n){if(!G.isDocumentKey(n))throw new H(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Io(n){if(G.isDocumentKey(n))throw new H(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Li(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W()}function za(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new H(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Li(n);throw new H(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new H(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new H(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Lf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new H(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class br{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new H(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rc;switch(r.type){case"firstParty":return new Vc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=wo.get(e);r&&($("ComponentProvider","Removing Datastore"),wo.delete(e),r.terminate())}(this),Promise.resolve()}}function Ff(n,t,e,r={}){var s;const o=(n=za(n,br))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=It.MOCK_USER;else{c=ou(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new It(d)}n._authCredentials=new Pc(new sa(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Fi(this.firestore,t,this._query)}}class $t{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $t(this.firestore,t,this._key)}}class Yt extends Fi{constructor(t,e,r){super(t,e,rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $t(this.firestore,null,new G(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function Bf(n,t,...e){if(n=_n(n),Ha("collection","path",t),n instanceof br){const r=ot.fromString(t,...e);return Io(r),new Yt(n,null,r)}{if(!(n instanceof $t||n instanceof Yt))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return Io(r),new Yt(n.firestore,null,r)}}function Uf(n,t,...e){if(n=_n(n),arguments.length===1&&(t=oa.newId()),Ha("doc","path",t),n instanceof br){const r=ot.fromString(t,...e);return Ao(r),new $t(n,null,new G(r))}{if(!(n instanceof $t||n instanceof Yt))throw new H(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return Ao(r),new $t(n.firestore,n instanceof Yt?n.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ma(this,"async_queue_retry"),this.hu=()=>{const e=ri();e&&$("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=ri();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ri();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new ce;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!_r(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw pe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=xi.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&W()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Qa extends br{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new jf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ga(this),this._firestoreClient.terminate()}}function $f(n,t){const e=typeof n=="object"?n:pc(),r=typeof n=="string"?n:t||"(default)",s=cc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=iu("firestore");o&&Ff(s,...o)}return s}function qf(n){return n._firestoreClient||Ga(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ga(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new Hc(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,qa(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new kf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bn(qt.fromBase64String(t))}catch(e){throw new H(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bn(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=/^__.*__$/;class zf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}function Ya(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Bi{constructor(t,e,r,s,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Bi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return gr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Ya(this.fu)&&Hf.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Qf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Tr(t)}Fu(t,e,r,s=!1){return new Bi({fu:t,methodName:e,vu:r,path:yt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gf(n){const t=n._freezeSettings(),e=Tr(n._databaseId);return new Qf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Kf(n,t,e,r,s,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);el("Data must be an object, but it was:",l,r);const c=Za(r,l);let h,d;if(o.merge)h=new Mt(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const b=Wf(t,E,e);if(!l.contains(b))throw new H(C.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Jf(m,b)||m.push(b)}h=new Mt(m),d=l.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=l.fieldTransforms;return new zf(new Ot(c),h,d)}function Ja(n,t){if(tl(n=_n(n)))return el("Unsupported field value:",t,n),Za(n,t);if(n instanceof Wa)return function(r,s){if(!Ya(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let l=0;for(const c of r){let h=Ja(c,s.bu(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=_n(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=dt.fromDate(r);return{timestampValue:yi(s.serializer,o)}}if(r instanceof dt){const o=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yi(s.serializer,o)}}if(r instanceof Xa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:Rh(s.serializer,r._byteString)};if(r instanceof $t){const o=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw s.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ka(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Li(r)}`)}(n,t)}function Za(n,t){const e={};return ua(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rn(n,(r,s)=>{const o=Ja(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function tl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof Xa||n instanceof bn||n instanceof $t||n instanceof Wa)}function el(n,t,e){if(!tl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Li(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Wf(n,t,e){if((t=_n(t))instanceof Ka)return t._internalPath;if(typeof t=="string")return Yf(n,t);throw gr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Xf=new RegExp("[~\\*/\\[\\]]");function Yf(n,t,e){if(t.search(Xf)>=0)throw gr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ka(...t.split("."))._internalPath}catch{throw gr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function gr(n,t,e,r,s){const o=r&&!r.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${s}`),h+=")"),new H(C.INVALID_ARGUMENT,c+n+h)}function Jf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}function td(n,t){const e=za(n.firestore,Qa),r=Uf(n),s=Zf(n.converter,t);return ed(e,[Kf(Gf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function ed(n,t){return function(r,s){const o=new ce;return r.asyncQueue.enqueueAndForget(async()=>Rf(await xf(r),s,o)),o.promise}(qf(n),t)}(function(t,e=!0){(function(s){Ue=s})(dc),or(new yn("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Qa(new Sc(r.getProvider("auth-internal")),new kc(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(d.options.projectId,m)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ce(to,"4.6.3",t),Ce(to,"4.6.3","esm2017")})();const nd={apiKey:"AIzaSyA9n2z7PWBv46uONKZ0sQRr-zAyWtNC93U",authDomain:"svelte-todo-fireship-ebe79.firebaseapp.com",projectId:"svelte-todo-fireship-ebe79",storageBucket:"svelte-todo-fireship-ebe79.appspot.com",messagingSenderId:"800590283445",appId:"1:800590283445:web:dd71c566728aa4ecfc74fc"},rd=Wo(nd),id=$f(rd);function Ro(n){let t,e,r,s,o,l;return{c(){t=F("span"),e=F("span"),r=rt(`:
      `),s=F("span"),o=rt(`:
      `),l=F("span"),we(e,"--value",n[5]),we(s,"--value",n[4]),we(l,"--value",n[6]),O(t,"class","countdown font-mono")},m(c,h){z(c,t,h),V(t,e),V(t,r),V(t,s),V(t,o),V(t,l)},p(c,h){h&32&&we(e,"--value",c[5]),h&16&&we(s,"--value",c[4]),h&64&&we(l,"--value",c[6])},d(c){c&&q(t)}}}function sd(n){let t,e,r;return{c(){t=F("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M713-600 600-713l56-57 57 57 141-142 57 57-198 198ZM200-120v-640q0-33 23.5-56.5T280-840h280q-20 30-30 57.5T520-720q0 72 45.5 127T680-524q23 3 40 3t40-3v404L480-240 200-120Z"></path></svg>'},m(s,o){z(s,t,o),e||(r=Rt(t,"click",n[8]),e=!0)},p:at,d(s){s&&q(t),e=!1,r()}}}function od(n){let t,e,r;return{c(){t=F("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"></path></svg>'},m(s,o){z(s,t,o),e||(r=Rt(t,"click",n[8]),e=!0)},p:at,d(s){s&&q(t),e=!1,r()}}}function ad(n){let t,e,r,s,o,l,c,h,d,m,E,b,R=n[3]&&Ro(n);function D(B,L){return B[1]?sd:od}let x=D(n),S=x(n);return{c(){t=F("div"),R&&R.c(),e=K(),r=F("button"),r.textContent="Abort",s=K(),o=F("div"),l=F("span"),c=rt(n[0]),h=rt(" of "),d=rt(n[2]),m=K(),S.c(),O(r,"class","btn btn-sm w-32 justify-self-end"),O(l,"class","mr-2"),O(o,"class","flex items-center"),O(t,"class","grid grid-cols-2 gap-4 justify-between items-center bg-teal-950 text-white text-lg font-bold p-4")},m(B,L){z(B,t,L),R&&R.m(t,null),V(t,e),V(t,r),V(t,s),V(t,o),V(o,l),V(l,c),V(l,h),V(l,d),V(o,m),S.m(o,null),E||(b=Rt(r,"click",n[7]),E=!0)},p(B,[L]){B[3]?R?R.p(B,L):(R=Ro(B),R.c(),R.m(t,e)):R&&(R.d(1),R=null),L&1&&xt(c,B[0]),L&4&&xt(d,B[2]),x===(x=D(B))&&S?S.p(B,L):(S.d(1),S=x(B),S&&(S.c(),S.m(o,null)))},i:at,o:at,d(B){B&&q(t),R&&R.d(),S.d(),E=!1,b()}}}function ld(n,t,e){let r,s,o,l,{QNumber:c}=t,{bookmarked:h}=t,{totalQuestions:d=0}=t,{useTimer:m}=t;const E=wi();let b=Date.now(),R=b+d*70*1e3,D=m?setInterval(S,1e3):!1;function x(){clearInterval(D),E("abort")}function S(){e(9,b=Date.now())}function B(){E("bookmark",{mark:!h})}return Uo(()=>{clearInterval(D)}),n.$$set=L=>{"QNumber"in L&&e(0,c=L.QNumber),"bookmarked"in L&&e(1,h=L.bookmarked),"totalQuestions"in L&&e(2,d=L.totalQuestions),"useTimer"in L&&e(3,m=L.useTimer)},n.$$.update=()=>{n.$$.dirty&512&&e(10,r=Math.round((R-b)/1e3)),n.$$.dirty&1024&&e(5,s=Math.floor(r/3600)),n.$$.dirty&1056&&e(4,o=Math.floor((r-s*3600)/60)),n.$$.dirty&1072&&e(6,l=r-s*3600-o*60),n.$$.dirty&1024&&r===0&&(alert("Time's up!"),x())},[c,h,d,m,o,s,l,x,B,b,r]}class ud extends Fe{constructor(t){super(),Le(this,t,ld,ad,xe,{QNumber:0,bookmarked:1,totalQuestions:2,useTimer:3})}}function Po(n,t,e){const r=n.slice();return r[6]=t[e],r[8]=e,r}function So(n){let t,e=String.fromCharCode(65+n[8])+"",r,s,o=n[6]+"",l,c,h,d;function m(){return n[4](n[8])}return{c(){t=F("button"),r=rt(e),s=rt(". "),l=rt(o),O(t,"class",c="btn "+(n[1]===n[8]?"btn-active btn-ghost":"btn-ghost")+" w-full svelte-1yxs5au")},m(E,b){z(E,t,b),V(t,r),V(t,s),V(t,l),h||(d=Rt(t,"click",m),h=!0)},p(E,b){n=E,b&1&&o!==(o=n[6]+"")&&xt(l,o),b&2&&c!==(c="btn "+(n[1]===n[8]?"btn-active btn-ghost":"btn-ghost")+" w-full svelte-1yxs5au")&&O(t,"class",c)},d(E){E&&q(t),h=!1,d()}}}function cd(n){let t,e,r=n[0].prompt+"",s,o,l=n[0].answers,c=[];for(let h=0;h<l.length;h+=1)c[h]=So(Po(n,l,h));return{c(){t=F("div"),e=F("p"),s=rt(r),o=K();for(let h=0;h<c.length;h+=1)c[h].c();O(e,"class","text-lg my-2"),O(t,"class","container")},m(h,d){z(h,t,d),V(t,e),V(e,s),V(t,o);for(let m=0;m<c.length;m+=1)c[m]&&c[m].m(t,null)},p(h,[d]){if(d&1&&r!==(r=h[0].prompt+"")&&xt(s,r),d&15){l=h[0].answers;let m;for(m=0;m<l.length;m+=1){const E=Po(h,l,m);c[m]?c[m].p(E,d):(c[m]=So(E),c[m].c(),c[m].m(t,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=l.length}},i:at,o:at,d(h){h&&q(t),nr(c,h)}}}function hd(n,t,e){let r,{curQuestion:s}=t;const o=wi();function l(d){e(1,r=d)}function c(d){o("chosenAnswer",d)}const h=d=>{c(d),l(d)};return n.$$set=d=>{"curQuestion"in d&&e(0,s=d.curQuestion)},n.$$.update=()=>{n.$$.dirty&1&&e(1,r=s.userChoice??-1)},[s,r,l,c,h]}class fd extends Fe{constructor(t){super(),Le(this,t,hd,cd,xe,{curQuestion:0})}}function dd(n){let t,e,r,s,o,l,c,h;return{c(){t=F("div"),e=K(),r=F("nav"),s=F("button"),s.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"></path></svg>
    Prev`,o=K(),l=F("button"),l.innerHTML=`Next
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"></path></svg>`,O(t,"class","divider"),O(s,"class","btn btn-lg mx-1"),O(l,"class","btn btn-lg mx-1"),O(r,"class","navbar bg-base-500 flex flex-row justify-center")},m(d,m){z(d,t,m),z(d,e,m),z(d,r,m),V(r,s),V(r,o),V(r,l),c||(h=[Rt(s,"click",n[1]),Rt(l,"click",n[0])],c=!0)},p:at,i:at,o:at,d(d){d&&q(t),d&&q(e),d&&q(r),c=!1,ee(h)}}}function pd(n){const t=wi();function e(){t("nextQuestion",{})}function r(){t("prevQuestion",{})}return[e,r]}class md extends Fe{constructor(t){super(),Le(this,t,pd,dd,xe,{})}}function Co(n,t,e){const r=n.slice();return r[3]=t[e],r}function gd(n){let t,e,r,s,o=n[3].bookmarked&&Vo();return{c(){t=F("div"),e=F("span"),e.textContent="Incorrect",r=K(),s=F("span"),o&&o.c(),O(t,"class","flex flex-row text-lg text-red-500 font-bold")},m(l,c){z(l,t,c),V(t,e),V(t,r),V(t,s),o&&o.m(s,null)},p(l,c){l[3].bookmarked?o||(o=Vo(),o.c(),o.m(s,null)):o&&(o.d(1),o=null)},d(l){l&&q(t),o&&o.d()}}}function _d(n){let t,e,r,s,o=n[3].bookmarked&&Do();return{c(){t=F("div"),e=F("span"),e.textContent="Correct",r=K(),s=F("span"),o&&o.c(),O(t,"class","flex flex-row text-lg text-green-500 font-bold")},m(l,c){z(l,t,c),V(t,e),V(t,r),V(t,s),o&&o.m(s,null)},p(l,c){l[3].bookmarked?o||(o=Do(),o.c(),o.m(s,null)):o&&(o.d(1),o=null)},d(l){l&&q(t),o&&o.d()}}}function Vo(n){let t,e,r;return{c(){t=Ut("svg"),e=Ut("path"),r=Ut("path"),O(e,"d","M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"),O(e,"fill","#F19E39"),O(r,"d","M280-760v518l200-86 200 86v-518H280Z"),O(r,"fill","#F19E39"),O(t,"xmlns","http://www.w3.org/2000/svg"),O(t,"height","24px"),O(t,"viewBox","0 -960 960 960"),O(t,"width","24px")},m(s,o){z(s,t,o),V(t,e),V(t,r)},d(s){s&&q(t)}}}function Do(n){let t,e,r;return{c(){t=Ut("svg"),e=Ut("path"),r=Ut("path"),O(e,"d","M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"),O(e,"fill","#F19E39"),O(r,"d","M280-760v518l200-86 200 86v-518H280Z"),O(r,"fill","#F19E39"),O(t,"xmlns","http://www.w3.org/2000/svg"),O(t,"height","24px"),O(t,"viewBox","0 -960 960 960"),O(t,"width","24px")},m(s,o){z(s,t,o),V(t,e),V(t,r)},d(s){s&&q(t)}}}function ko(n){let t,e,r=n[3].prompt+"",s,o,l,c,h,d=n[3].answers[n[3].correct]+"",m,E,b,R=n[3].answers[n[3].userChoice]+"",D,x,S,B,L,N,U=n[3].rationale+"",M,j,y,p,_,v,T;function A(Q,lt){return Q[3].correct===Q[3].userChoice?_d:gd}let g=A(n),ut=g(n);return{c(){ut.c(),t=K(),e=F("p"),s=rt(r),o=K(),l=F("p"),c=F("em"),h=rt("Correct Answer: "),m=rt(d),E=F("br"),b=rt(`
          Your Answer: `),D=rt(R),x=K(),S=F("div"),B=F("b"),B.textContent="Rationale:",L=F("br"),N=new Bl(!1),M=K(),j=F("p"),y=F("a"),p=rt("Learn more"),v=K(),T=F("div"),N.a=null,O(y,"class","link"),O(y,"href",_=n[3].source),O(y,"target","_blank"),O(y,"rel","noopener noreferrer"),O(T,"class","divider divider-info")},m(Q,lt){ut.m(Q,lt),z(Q,t,lt),z(Q,e,lt),V(e,s),z(Q,o,lt),z(Q,l,lt),V(l,c),V(c,h),V(c,m),V(c,E),V(c,b),V(c,D),z(Q,x,lt),z(Q,S,lt),V(S,B),V(S,L),N.m(U,S),z(Q,M,lt),z(Q,j,lt),V(j,y),V(y,p),z(Q,v,lt),z(Q,T,lt)},p(Q,lt){g===(g=A(Q))&&ut?ut.p(Q,lt):(ut.d(1),ut=g(Q),ut&&(ut.c(),ut.m(t.parentNode,t))),lt&1&&r!==(r=Q[3].prompt+"")&&xt(s,r),lt&1&&d!==(d=Q[3].answers[Q[3].correct]+"")&&xt(m,d),lt&1&&R!==(R=Q[3].answers[Q[3].userChoice]+"")&&xt(D,R),lt&1&&U!==(U=Q[3].rationale+"")&&N.p(U),lt&1&&_!==(_=Q[3].source)&&O(y,"href",_)},d(Q){ut.d(Q),Q&&q(t),Q&&q(e),Q&&q(o),Q&&q(l),Q&&q(x),Q&&q(S),Q&&q(M),Q&&q(j),Q&&q(v),Q&&q(T)}}}function yd(n){let t,e,r,s,o,l,c,h,d,m,E=n[0].length+"",b,R,D,x,S,B,L,N,U=n[0],M=[];for(let j=0;j<U.length;j+=1)M[j]=ko(Co(n,U,j));return{c(){t=F("button"),t.textContent="Print Results",e=K(),r=F("article"),s=F("div"),o=F("h1"),o.textContent="Results",l=K(),c=F("h3"),h=rt("Your Score is "),d=rt(n[1]),m=rt(" out of "),b=rt(E),R=K(),D=F("div"),D.textContent=`${n[2].toString()}`,x=K(),S=F("hr"),B=K();for(let j=0;j<M.length;j+=1)M[j].c();O(t,"class","btn"),O(o,"class","bg-slate-600 text-neutral-50 p-2 text-center"),O(D,"class","text-sm mb-4"),O(s,"class","container p-2"),O(r,"class","prose"),O(r,"id","printArea")},m(j,y){z(j,t,y),z(j,e,y),z(j,r,y),V(r,s),V(s,o),V(s,l),V(s,c),V(c,h),V(c,d),V(c,m),V(c,b),V(s,R),V(s,D),V(s,x),V(s,S),V(s,B);for(let p=0;p<M.length;p+=1)M[p]&&M[p].m(s,null);L||(N=Rt(t,"click",vd),L=!0)},p(j,[y]){if(y&2&&xt(d,j[1]),y&1&&E!==(E=j[0].length+"")&&xt(b,E),y&1){U=j[0];let p;for(p=0;p<U.length;p+=1){const _=Co(j,U,p);M[p]?M[p].p(_,y):(M[p]=ko(_),M[p].c(),M[p].m(s,null))}for(;p<M.length;p+=1)M[p].d(1);M.length=U.length}},i:at,o:at,d(j){j&&q(t),j&&q(e),j&&q(r),nr(M,j),L=!1,N()}}}function vd(){const n=document.getElementById("printArea").innerHTML,t=window.open("","_blank","width=800,height=600");t.document.write(`
        <html>
            <head>
                <title>Print Results</title>
            </head>
            <body>
                ${n}
            </body>
        </html>
    `),t.document.close(),t.focus(),t.print(),t.close()}function Ed(n,t,e){let{selectedQs:r=[{id:"001",prompt:"This is sample question 1. Just for testing the results page.",answers:["First answer","second one","third answer","fourth choice"],correct:3,userChoice:2,source:"https://www.thecohenreview.com",Domain:"Diagnose","Age Group":"Child (6-12)","ANCC Body System":"Musculoskeletal","Pharmacology?":"FALSE"},{id:"002",prompt:"This is sample question 2. Just for testing the results page.",answers:["First answer","second one","third answer","fourth choice"],correct:0,userChoice:0,source:"https://www.thecohenreview.com",Domain:"Diagnose","Age Group":"Child (6-12)","ANCC Body System":"Musculoskeletal","Pharmacology?":"FALSE"}]}=t,s=0;const o=new Date;return r.forEach(l=>{l.correct===l.userChoice&&e(1,s++,s)}),n.$$set=l=>{"selectedQs"in l&&e(0,r=l.selectedQs)},[r,s,o]}class Td extends Fe{constructor(t){super(),Le(this,t,Ed,yd,xe,{selectedQs:0})}}function No(n){let t,e,r,s,o,l,c,h,d,m,E,b,R,D,x,S,B,L,N;return{c(){t=F("form"),e=F("div"),r=F("label"),r.textContent="Question Number:",s=K(),o=F("input"),l=K(),c=F("div"),h=F("label"),h.textContent="[optional] Email:",d=K(),m=F("input"),E=K(),b=F("div"),R=F("textarea"),D=K(),x=F("button"),x.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"></path></svg>
        Submit Feedback`,S=K(),B=F("div"),O(r,"class",""),O(r,"for","qNumber"),O(o,"class","input input-bordered mb-2"),O(o,"type","text"),O(o,"id","qNumber"),O(h,"class",""),O(h,"for","email"),O(m,"class","input input-bordered mb-4"),O(m,"type","email"),O(m,"id","email"),O(R,"class","textarea textarea-bordered mb-2"),O(R,"id","message"),O(R,"placeholder","Type your feedback here. Thank you."),R.required=!0,O(x,"class","btn btn-sm"),O(B,"class","loading loading-spinner loading-lg"),rr(B,"hidden",n[4]),O(t,"class","border p-4 m-4")},m(U,M){z(U,t,M),V(t,e),V(e,r),V(e,s),V(e,o),Te(o,n[0]),V(t,l),V(t,c),V(c,h),V(c,d),V(c,m),Te(m,n[1]),V(t,E),V(t,b),V(b,R),Te(R,n[2]),V(t,D),V(t,x),V(t,S),V(t,B),L||(N=[Rt(o,"input",n[8]),Rt(m,"input",n[9]),Rt(R,"input",n[10]),Rt(x,"click",n[6]),Rt(t,"submit",xl(n[7]))],L=!0)},p(U,M){M&1&&o.value!==U[0]&&Te(o,U[0]),M&2&&m.value!==U[1]&&Te(m,U[1]),M&4&&Te(R,U[2]),M&16&&rr(B,"hidden",U[4])},d(U){U&&q(t),L=!1,ee(N)}}}function wd(n){let t,e,r,s,o,l,c,h,d,m,E=n[3]&&No(n);return{c(){t=F("div"),e=K(),r=F("div"),s=F("p"),s.innerHTML="This Question Bank is in testing mode and we&#39;d love to hear your feedback.<br/>Please send us your comments and report any bugs.",o=K(),l=F("div"),c=F("button"),c.textContent="Click here to send us feedback.",h=K(),E&&E.c(),O(t,"class","divider"),O(s,"class","text-sm"),O(c,"class","btn btn-neutral"),O(r,"class","container")},m(b,R){z(b,t,R),z(b,e,R),z(b,r,R),V(r,s),V(r,o),V(r,l),V(l,c),V(r,h),E&&E.m(r,null),d||(m=Rt(c,"click",n[5]),d=!0)},p(b,[R]){b[3]?E?E.p(b,R):(E=No(b),E.c(),E.m(r,null)):E&&(E.d(1),E=null)},i:at,o:at,d(b){b&&q(t),b&&q(e),b&&q(r),E&&E.d(),d=!1,m()}}}function Ad(n,t,e){let{qNumber:r=0}=t,s="",o="",l=!1,c=!0;const h=()=>{e(3,l=!l)};async function d(){e(4,c=!1);const D={email:s,qNumber:r,message:o};try{const x=await td(Bf(id,"feedback"),D);alert("Thank you for your feedback."),console.log("Fedback written with ID: ",x.id)}catch(x){console.error("Error adding feedback: ",x),alert(`${x}... Please email this message to support@thecohenreview.com`)}e(4,c=!0),e(3,l=!1)}function m(D){jl.call(this,n,D)}function E(){r=this.value,e(0,r)}function b(){s=this.value,e(1,s)}function R(){o=this.value,e(2,o)}return n.$$set=D=>{"qNumber"in D&&e(0,r=D.qNumber)},[r,s,o,l,c,h,d,m,E,b,R]}class Id extends Fe{constructor(t){super(),Le(this,t,Ad,wd,xe,{qNumber:0})}}function Oo(n,t,e){const r=n.slice();return r[20]=t[e],r[22]=e,r}function Mo(n,t,e){const r=n.slice();return r[23]=t[e],r}function bd(n){let t,e,r,s,o,l,c;return{c(){t=F("div"),e=Ut("svg"),r=Ut("path"),s=K(),o=F("span"),l=rt("ERROR: "),c=rt(n[3]),O(r,"stroke-linecap","round"),O(r,"stroke-linejoin","round"),O(r,"stroke-width","2"),O(r,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),O(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"class","h-6 w-6 shrink-0 stroke-current"),O(e,"fill","none"),O(e,"viewBox","0 0 24 24"),O(t,"role","alert"),O(t,"class","alert alert-error")},m(h,d){z(h,t,d),V(t,e),V(e,r),V(t,s),V(t,o),V(o,l),V(o,c)},p(h,d){d&8&&xt(c,h[3])},i:at,o:at,d(h){h&&q(t)}}}function Rd(n){let t,e;return t=new Td({props:{selectedQs:n[5]}}),{c(){hn(t.$$.fragment)},m(r,s){Pe(t,r,s),e=!0},p(r,s){const o={};s&32&&(o.selectedQs=r[5]),t.$set(o)},i(r){e||(Kt(t.$$.fragment,r),e=!0)},o(r){ue(t.$$.fragment,r),e=!1},d(r){Se(t,r)}}}function Pd(n){let t,e,r,s,o,l;return t=new ud({props:{QNumber:n[4]+1,bookmarked:n[5][n[4]].bookmarked,totalQuestions:n[1],useTimer:n[2]}}),t.$on("abort",n[10]),t.$on("bookmark",n[14]),r=new fd({props:{curQuestion:n[5][n[4]]}}),r.$on("chosenAnswer",n[13]),o=new md({}),o.$on("nextQuestion",n[8]),o.$on("prevQuestion",n[9]),{c(){hn(t.$$.fragment),e=K(),hn(r.$$.fragment),s=K(),hn(o.$$.fragment)},m(c,h){Pe(t,c,h),z(c,e,h),Pe(r,c,h),z(c,s,h),Pe(o,c,h),l=!0},p(c,h){const d={};h&16&&(d.QNumber=c[4]+1),h&48&&(d.bookmarked=c[5][c[4]].bookmarked),h&2&&(d.totalQuestions=c[1]),h&4&&(d.useTimer=c[2]),t.$set(d);const m={};h&48&&(m.curQuestion=c[5][c[4]]),r.$set(m)},i(c){l||(Kt(t.$$.fragment,c),Kt(r.$$.fragment,c),Kt(o.$$.fragment,c),l=!0)},o(c){ue(t.$$.fragment,c),ue(r.$$.fragment,c),ue(o.$$.fragment,c),l=!1},d(c){Se(t,c),c&&q(e),Se(r,c),c&&q(s),Se(o,c)}}}function Sd(n){let t,e,r,s,o,l,c,h,d,m,E,b,R,D,x=n[6],S=[];for(let N=0;N<x.length;N+=1)S[N]=xo(Mo(n,x,N));let B=Array(n[0]),L=[];for(let N=0;N<B.length;N+=1)L[N]=Lo(Oo(n,B,N));return{c(){t=F("div"),t.innerHTML=`<h1 class="text-center">Welcome to our Question Bank!</h1> 
      <h3>Here&#39;s a list of features to expect:</h3> 
      <ul><li>Choose a topic to focus, or take the general FNP simulation which
          includes everything.</li> 
        <li>Choose the number of questions, keeping in mind that you are alloted
          70 seconds per questions.</li> 
        <li>You can bookmark questions.</li> 
        <li>You will see your results at the end of the quiz and have an option to
          print them before losing the data.</li> 
        <li>READ THE INSTRUCTIONS 👇</li></ul>`,e=K(),r=F("div"),r.innerHTML=`<div class="text-xl"><strong>Instructions</strong></div> 
      <ol><li><p><strong>Select Quiz Type:</strong> Choose the quiz category that best
            suits your study needs.</p></li> 
        <li><p><strong>Start the Quiz:</strong> Begin answering the questions. You&#39;ll
            have 70secs per question, simulating real exam conditions, try to complete
            each question with time to spare.</p></li> 
        <li><p><strong>Complete the Quiz:</strong> Aim to answer all the questions with
            plenty of time to spare. You may click the ABORT button at any time.
            Your results and rationales will be displayed, and you&#39;ll have the
            option to print them before your data is reset.</p></li> 
        <li><p><strong>Restart the Quiz:</strong> Refresh the page to clear your answers
            and start over from the beginning.</p></li></ol> 
      <em>Please leave us your feedback. Good luck!</em>`,s=K(),o=F("select"),l=F("option"),l.textContent="Choose a quiz option";for(let N=0;N<S.length;N+=1)S[N].c();c=K(),h=F("select"),d=F("option"),d.textContent="How many questions?";for(let N=0;N<L.length;N+=1)L[N].c();m=K(),E=F("div"),b=F("button"),b.textContent="START",O(r,"class","border bg-gray-200 font-mono rounded-md p-2 m-2"),l.disabled=!0,l.selected=!0,l.__value="Choose a quiz option",l.value=l.__value,O(o,"class","select select-bordered m-2"),d.disabled=!0,d.selected=!0,d.__value="How many questions?",d.value=d.__value,O(h,"class","select select-bordered m-2"),rr(h,"hidden",n[0]===0),O(b,"class","btn btn-accent"),O(E,"class","m-2")},m(N,U){z(N,t,U),z(N,e,U),z(N,r,U),z(N,s,U),z(N,o,U),V(o,l);for(let M=0;M<S.length;M+=1)S[M]&&S[M].m(o,null);z(N,c,U),z(N,h,U),V(h,d);for(let M=0;M<L.length;M+=1)L[M]&&L[M].m(h,null);z(N,m,U),z(N,E,U),V(E,b),R||(D=[Rt(o,"change",n[11]),Rt(h,"change",n[12]),Rt(b,"click",n[7])],R=!0)},p(N,U){if(U&64){x=N[6];let M;for(M=0;M<x.length;M+=1){const j=Mo(N,x,M);S[M]?S[M].p(j,U):(S[M]=xo(j),S[M].c(),S[M].m(o,null))}for(;M<S.length;M+=1)S[M].d(1);S.length=x.length}if(U&1){B=Array(N[0]);let M;for(M=0;M<B.length;M+=1){const j=Oo(N,B,M);L[M]?L[M].p(j,U):(L[M]=Lo(j),L[M].c(),L[M].m(h,null))}for(;M<L.length;M+=1)L[M].d(1);L.length=B.length}U&1&&rr(h,"hidden",N[0]===0)},i:at,o:at,d(N){N&&q(t),N&&q(e),N&&q(r),N&&q(s),N&&q(o),nr(S,N),N&&q(c),N&&q(h),nr(L,N),N&&q(m),N&&q(E),R=!1,ee(D)}}}function xo(n){let t,e=n[23]+"",r;return{c(){t=F("option"),r=rt(e),t.__value=n[23],t.value=t.__value},m(s,o){z(s,t,o),V(t,r)},p:at,d(s){s&&q(t)}}}function Lo(n){let t,e=n[22]+1+"",r;return{c(){t=F("option"),r=rt(e),t.__value=n[22]+1,t.value=t.__value},m(s,o){z(s,t,o),V(t,r)},p:at,d(s){s&&q(t)}}}function Cd(n){let t,e,r,s,o,l;const c=[Sd,Pd,Rd,bd],h=[];function d(m,E){return m[3]==="question-bank"?0:m[3]==="running"?1:m[3]==="results"?2:3}return e=d(n),r=h[e]=c[e](n),o=new Id({props:{qNumber:n[4]+1}}),{c(){t=F("article"),r.c(),s=K(),hn(o.$$.fragment),O(t,"class","prose")},m(m,E){z(m,t,E),h[e].m(t,null),V(t,s),Pe(o,t,null),l=!0},p(m,[E]){let b=e;e=d(m),e===b?h[e].p(m,E):(Ql(),ue(h[b],1,1,()=>{h[b]=null}),Gl(),r=h[e],r?r.p(m,E):(r=h[e]=c[e](m),r.c()),Kt(r,1),r.m(t,s));const R={};E&16&&(R.qNumber=m[4]+1),o.$set(R)},i(m){l||(Kt(r),Kt(o.$$.fragment,m),l=!0)},o(m){ue(r),ue(o.$$.fragment,m),l=!1},d(m){m&&q(t),h[e].d(),Se(o)}}}function Vd(){let n=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const r=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),(e==="x"?r:r&3|8).toString(16)})}function Dd(n){for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}function kd(n,t,e){let r,s,o,l=0,c=0,h=["1. FNP","2. Pharmacology","3. Gerontology"],d="",m=!1,E=typeof questionList>"u"?[]:questionList,b=localStorage.getItem("qbankUserId");Ul(()=>{E.length||e(3,r="GRAVE ERROR! Questions did not load."),typeof quizType>"u"?e(3,r="GRAVE ERROR! Quiz type did not load."):(e(3,r=quizType),e(2,m=quizType==="question-bank")),E=Dd(E),e(5,o=E),e(1,c=E.length),b===null&&(b=Vd(),localStorage.setItem("qbankUserId",b)),M()}),Uo(()=>{M()});function R(){l===0||c===0?e(3,r="Please make a valid selection before starting. Refresh the page to retry."):(e(5,o=o.slice(0,c)),e(3,r="running")),M()}function D(){s<c-1?e(4,s=s+1):S()}function x(){s>0&&e(4,s=s-1)}function S(){e(3,r="results"),M()}function B(j){switch(d=j.target.value,d){case"1. FNP":e(5,o=E);break;case"2. Pharmacology":e(5,o=E.filter(y=>y["Pharmacology?"]==="TRUE"));break;case"3. Gerontology":e(5,o=E.filter(y=>y["Age Group"]==="Elderly (65+)"||y["Age Group"]==="Older Adult and Elderly"));break;default:e(5,o=E);break}e(0,l=o.length),M()}function L(j){e(1,c=j.target.value)}function N(j){e(5,o[s].userChoice=j.detail,o)}function U(j){e(5,o[s].bookmarked=j.detail.mark,o)}async function M(j){}return e(3,r="none"),e(4,s=0),e(5,o=[]),[l,c,m,r,s,o,h,R,D,x,S,B,L,N,U]}class Nd extends Fe{constructor(t){super(),Le(this,t,kd,Cd,xe,{})}}new Nd({target:document.getElementById("qbankApp")});
