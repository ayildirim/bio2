(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},16:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),o=n.n(r),c=(n(16),n(1)),s=n.n(c),l=n(4),d=n(5),u=n(6),f=n(9),m=n(7),h=n(10),p=n(8),v=n.n(p),w=(n(21),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).initialize=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("data.json").then(function(e){return e.json()}).then(function(e){n.setState({data:e})}).catch(function(e){console.error(e)});case 2:case"end":return e.stop()}},e,this)})),n.state={data:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.data.length?i.a.createElement("div",null):i.a.createElement("div",{className:"App"},i.a.createElement("div",{style:{width:"100%",float:"left"}},this.renderList("Education",this.state.data.education),this.renderList("Profiles",this.state.data.profiles)),i.a.createElement("div",{style:{width:"100%",float:"left"}},this.renderList("Publicity",this.state.data.publicity),this.renderList("Interests & Characteristics",this.state.data.interests)),i.a.createElement("div",{style:{width:"100%",float:"left"}},i.a.createElement("h2",{id:"works"},"Finished Projects & Works"),i.a.createElement("div",{style:{width:"100%",float:"left"},align:"left"},"Due to privacy policies of some of my clients, I can not publicly share direct demos of some projects. Please contact for further information.",i.a.createElement("p",null,"This section of the portfolio was last updated on 2017 March. Please visit my LinkedIn profile for more up-to-date portfolio.")),i.a.createElement("div",{className:"App-intro"},this.state.data.projects.map(function(t,n){return e.renderProject(t.image,t.title,t.subtext,t.linkTo,n)}))),i.a.createElement("div",{style:{width:"100%",float:"left"}},i.a.createElement("h2",{id:"works"},"Experiments & Concept Projects"),i.a.createElement("div",{className:"App-intro"},this.state.data.experiments.map(function(t,n){return e.renderProject(t.image,t.title,t.subtext,t.linkTo,n)}))))}},{key:"componentDidMount",value:function(){this.initialize()}},{key:"renderProject",value:function(e,t,n,a,r){return i.a.createElement("div",{key:r},i.a.createElement("a",{href:a,className:"endislink"},i.a.createElement("div",{className:"endis"},i.a.createElement("div",{className:"resim",style:{backgroundImage:"url(\n                  ".concat(e,")")}},i.a.createElement("div",{className:"caption"},i.a.createElement("div",null,t," ",n&&i.a.createElement("span",{className:"subtext"},"(",n,")")))))))}},{key:"renderList",value:function(e,t){var n=this;return i.a.createElement("div",{style:E},i.a.createElement("h2",null,e),i.a.createElement("ul",null,t.map(function(e,t){return n.renderTextListItem(e.text,e.linkTo,t)})))}},{key:"renderTextListItem",value:function(e,t,n){return i.a.createElement("li",{key:n},t?i.a.createElement("a",{href:t},e):i.a.createElement("span",null,e))}}]),t}(a.Component)),E={width:"50%",float:"left"},g=w,k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");k?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()}},[[11,2,1]]]);
//# sourceMappingURL=main.a045503d.chunk.js.map