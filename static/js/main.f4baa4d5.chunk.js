(this["webpackJsonpreact-tac-toe"]=this["webpackJsonpreact-tac-toe"]||[]).push([[0],[,,,,function(e,t,r){e.exports=r.p+"static/media/logo.f0793d9f.svg"},function(e,t,r){e.exports=r(13)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(3),l=r.n(c),o=(r(10),r(11),r(4)),i=r.n(o),u=function(){return a.a.createElement("nav",{className:"navbar navbar-light bg-light mb-5"},a.a.createElement("a",{className:"navbar-brand",href:"/"},a.a.createElement("img",{src:i.a,width:"30",height:"30",className:"d-inline-block align-top pr-1",alt:""}),"React-Tac-Toe"))},s=r(1),m=(r(12),function(){var e=Object(n.useState)(Array.from(Array(9).keys())),t=Object(s.a)(e,2),r=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),i=o[0],u=o[1],m=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],d=document.getElementsByClassName("square"),f=function(e,t){r[e]=t,document.getElementById(e).innerText=t;var n=v(r,t);n&&y(n)},v=function(e,t){var r=e.reduce((function(e,r,n){return r===t?e.concat(n):e}),[]),n=null,a=!0,c=!1,l=void 0;try{for(var o,i=m.entries()[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var u=Object(s.a)(o.value,2),d=u[0];u[1].every((function(e){return r.indexOf(e)>-1}))&&(n={index:d,player:t})}}catch(f){c=!0,l=f}finally{try{a||null==i.return||i.return()}finally{if(c)throw l}}return n},y=function(e){var t=!0,r=!1,n=void 0;try{for(var a,c=m[e.index][Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=a.value;document.getElementById(l).style.backgroundColor="X"===e.player?"blue":"red"}}catch(o){r=!0,n=o}finally{try{t||null==c.return||c.return()}finally{if(r)throw n}}u(!0),g("X"===e.player?"You Win":"You Lose")},g=function(e){document.querySelector(".endgame .text").style.display="block",document.querySelector(".endgame .text").innerText=e},b=function(){return r.filter((function(e){return"number"==typeof e}))},E=function(){return p(r,"O").index},h=function(){if(0===b().length){for(var e=0;e<d.length;e++)d[e].style.backgroundColor="green";return u(!0),g("Tie Game!"),!0}return!1},p=function e(t,r){var n=b();if(v(t,"X"))return{score:-10};if(v(t,"O"))return{score:20};if(0===n.length)return{score:0};for(var a,c=[],l=0;l<n.length;l++){var o={};if(o.index=t[n[l]],t[n[l]]=r,"O"===r){var i=e(t,"X");o.score=i.score}else{var u=e(t,"O");o.score=u.score}t[n[l]]=o.index,c.push(o)}if("O"===r)for(var s=-1e4,m=0;m<c.length;m++)c[m].score>s&&(s=c[m].score,a=m);else for(var d=1e4,f=0;f<c.length;f++)c[f].score<d&&(d=c[f].score,a=f);return c[a]};return a.a.createElement("div",{id:"game"},a.a.createElement("div",{id:"board",onClick:function(e){return t=e,void(i||"number"==typeof r[t.target.id]&&(f(t.target.id,"X"),h()||setTimeout((function(){f(E(),"O")}),500)));var t}},a.a.createElement("div",{className:"square",id:"0"}),a.a.createElement("div",{className:"square",id:"1"}),a.a.createElement("div",{className:"square",id:"2"}),a.a.createElement("div",{className:"square",id:"3"}),a.a.createElement("div",{className:"square",id:"4"}),a.a.createElement("div",{className:"square",id:"5"}),a.a.createElement("div",{className:"square",id:"6"}),a.a.createElement("div",{className:"square",id:"7"}),a.a.createElement("div",{className:"square",id:"8"})),a.a.createElement("div",{className:"endgame"},a.a.createElement("div",{className:"text"}),a.a.createElement("button",{type:"button",onClick:function(){c(Array.from(Array(9).keys())),u(!1);for(var e=0;e<d.length;e++)d[e].innerText="",d[e].style.removeProperty("background-color");document.querySelector(".endgame .text").style.display="none",document.querySelector(".endgame .text").innerText=""},className:"theButton"},"Replay")))});var d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement(m,null))};l.a.render(a.a.createElement(d,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f4baa4d5.chunk.js.map