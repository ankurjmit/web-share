(this["webpackJsonpweb-share"]=this["webpackJsonpweb-share"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o);n(8),n(9);var c=function(){return Object(a.useEffect)((function(){var e=document.querySelector(".share-button"),t=document.querySelector(".share-dialog"),n=document.querySelector(".close-button");e.addEventListener("click",(function(e){navigator.share?navigator.share({title:"WebShare API Demo",url:window.location.href}).then((function(){console.log("Thanks for sharing!")})).catch(console.error):t.classList.add("is-open")})),n.addEventListener("click",(function(e){t.classList.remove("is-open")}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{class:"share-dialog"},r.a.createElement("header",null,r.a.createElement("h3",{class:"dialog-title"},"To Share it on We Chat, use broswer share option"),r.a.createElement("button",{class:"close-button"},r.a.createElement("svg",null,r.a.createElement("use",{href:"#close"}))))),r.a.createElement("button",{class:"share-button",type:"button",title:"Share this article"},r.a.createElement("svg",null,r.a.createElement("use",{href:"#share-icon"})),r.a.createElement("span",null,"Share")),r.a.createElement("svg",{class:"hidden"},r.a.createElement("defs",null,r.a.createElement("symbol",{id:"share-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-share"},r.a.createElement("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),r.a.createElement("polyline",{points:"16 6 12 2 8 6"}),r.a.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"15"})),r.a.createElement("symbol",{id:"close",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x-square"},r.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),r.a.createElement("line",{x1:"15",y1:"9",x2:"9",y2:"15"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.75bd2f6e.chunk.js.map