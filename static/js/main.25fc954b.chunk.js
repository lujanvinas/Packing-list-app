(this["webpackJsonpmaria-vinas-project-5"]=this["webpackJsonpmaria-vinas-project-5"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(12),r=a.n(c),o=(a(24),a(13)),s=a(14),l=a(18),u=a(17),m=a(5),p=a.n(m);a(25);p.a.initializeApp({apiKey:"AIzaSyDZchN1Zm4hZekdaZ00bZcsPw60gGhzOUs",authDomain:"packing-list-cc226.firebaseapp.com",databaseURL:"https://packing-list-cc226.firebaseio.com",projectId:"packing-list-cc226",storageBucket:"packing-list-cc226.appspot.com",messagingSenderId:"624836951041",appId:"1:624836951041:web:3a5b1b98ba30fb431f5400"});var d=p.a,h=(a(27),a(15)),f=a(16),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleClick=function(t){t.preventDefault(),d.database().ref().push(e.state.userInput),e.setState({userInput:""})},e.deleteItem=function(e){d.database().ref().child(e).remove()},e.state={items:[],userInput:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var i in a){var c={id:i,item:a[i]};n.push(c)}e.setState({items:n})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Packing List"),i.a.createElement("h2",null,"Going on a trip? Time to pack!"),i.a.createElement("h3",null,"Add items to your list:"),i.a.createElement("form",{action:"submit"},i.a.createElement("label",{htmlFor:"newItem"},"Add items to your list"),i.a.createElement("input",{onChange:this.handleChange,value:this.state.userInput,type:"text",id:"newItem",placeholder:"i.e. passport"}),i.a.createElement("button",{onClick:this.handleClick},"Add item")),i.a.createElement("ul",null,this.state.items.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("p",null,t.item,i.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)}},i.a.createElement(h.a,{className:"faicons",icon:f.a}))))}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.25fc954b.chunk.js.map