var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"checkURL",(function(){return r})),n.d(t,"handleSubmit",(function(){return i}));const r=e=>null!=e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g),o=n(0),i=async e=>{e.preventDefault(),document.getElementById("subjectivity").innerHTML="",document.getElementById("score").innerHTML="",document.getElementById("confidence").innerHTML="",document.getElementById("irony").innerHTML="";let t=document.getElementById("inputURL").value;console.log(t);const n=document.getElementById("errorMessage");if(!Client.checkURL(t))return void(n.innerHTML="Not a valid URL - Invalid input");n.innerHTML="";await async function(e,t){return await o(e,{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}("http://localhost:8081/call",{url:t}).then(e=>e.json()).then(e=>{console.log(e),function(e){const t=document.getElementById("subjectivity"),n=document.getElementById("score"),r=document.getElementById("confidence"),o=document.getElementById("irony");t.innerHTML="Subjectivity - "+e.subjectivity,n.innerHTML="Positivity - "+u(e.score_tag),r.innerHTML="Confidence: "+e.confidence,o.innerHTML="Irony: "+e.irony}(e)})};const u=e=>{switch(e){case"P+":return"Strongly Positive".toUpperCase();case"P":return"Positive".toUpperCase();case"NEU":return"Neutral".toUpperCase();case"N":return"Negative".toUpperCase();case"N+":return"Strongly Negative".toUpperCase();case"NONE":return"No sentiment".toUpperCase();default:return"Invalid data".toUpperCase()}};n.p,n(1),n(2),n(3),n(4),n(5)}]);