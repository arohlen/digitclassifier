(this.webpackJsonptftest=this.webpackJsonptftest||[]).push([[0],{100:function(t,e,n){},101:function(t,e,n){"use strict";n.r(e);var a=n(21),r=n.n(a),o=n(53),i=n.n(o),c=(n(78),n(13)),l=n(3),u=n(8),s=n(22),d=n(11),m=n(12),h=n(103),f=n(104),b=n(105),v=n(106),p=n(50),y=(n(99),n(100),null),E=!1,k=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={pred:""},a.predict=a.predict.bind(Object(s.a)(a)),a}return Object(u.a)(n,[{key:"modelP",value:function(){p.a("https://arohlen.github.io/filehosttest/tfjs_model1/model.json").then((function(t){y=t})),console.log(y)}},{key:"clear",value:function(){var t,e=document.querySelectorAll("td"),n=Object(c.a)(e);try{for(n.s();!(t=n.n()).done;){t.value.setAttribute("style","background-color: ".concat("#000000"))}}catch(a){n.e(a)}finally{n.f()}}},{key:"predict",value:function(){var t=document.querySelectorAll("td"),e=Array.from(t).map((function(t){return"rgb(0, 0, 0)"===t.style.backgroundColor?0:1})),n=p.b(e,[1,28,28,1]),a=y.predict(n).argMax(1).arraySync()[0],r="";r=8===a?"You drew an "+a.toString()+"!":"You drew a "+a.toString()+"!",this.setState((function(t){return{pred:r}}))}},{key:"mDown",value:function(){E=!0,this.setAttribute("style","background-color: ".concat("#FFFFFF"))}},{key:"mUp",value:function(){E=!1}},{key:"mEnter",value:function(){E&&this.setAttribute("style","background-color: ".concat("#FFFFFF"))}},{key:"componentDidMount",value:function(){this.modelP();for(var t=0;t<28;t++)for(var e=this.table.insertRow(t),n=0;n<28;n++){var a=e.insertCell(n);a.setAttribute("style","background-color: ".concat("#000000")),a.addEventListener("mousedown",this.mDown),a.addEventListener("mouseup",this.mUp),a.addEventListener("mouseenter",this.mEnter)}}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("h3",{id:"mnisthead"},"Draw a digit in the box and hit the predict button to see if the AI can tell what it is!"),r.a.createElement("table",{id:"tab",ref:function(e){return t.table=e}}),r.a.createElement(f.a,{id:"mnistbuttons"},r.a.createElement(b.a,{md:2},r.a.createElement(v.a,{variant:"primary",onClick:this.predict},"Predictt")),r.a.createElement(b.a,{md:2},r.a.createElement(v.a,{variant:"primary",onClick:this.clear},"Clear"))),r.a.createElement(f.a,{id:"mnistpred"},r.a.createElement(b.a,null,r.a.createElement("h2",null,this.state.pred)))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},73:function(t,e,n){t.exports=n(101)},78:function(t,e,n){},82:function(t,e){},83:function(t,e){},94:function(t,e){},97:function(t,e){},98:function(t,e){}},[[73,1,2]]]);
//# sourceMappingURL=main.03d4ffa5.chunk.js.map