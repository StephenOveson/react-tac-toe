(this["webpackJsonpreact-tac-toe"]=this["webpackJsonpreact-tac-toe"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/logo.f0793d9f.svg"},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),l=a.n(c),o=(a(10),a(11),a(4)),u=a.n(o),i=function(){return n.a.createElement("nav",{className:"navbar navbar-light bg-light mb-5"},n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("img",{src:u.a,width:"30",height:"30",className:"d-inline-block align-top pr-1",alt:""}),"React-Tac-Toe"))},s=a(1),m=(a(12),function(){var e=Object(r.useState)(Array.from(Array(9).keys())),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(!1),o=Object(s.a)(l,2),u=o[0],i=o[1],m=Object(r.useState)(0),d=Object(s.a)(m,2),f=d[0],v=d[1],y=Object(r.useState)(0),b=Object(s.a)(y,2),g=b[0],E=b[1],h=Object(r.useState)(0),p=Object(s.a)(h,2),O=p[0],x=p[1],N=Object(r.useState)("X"),j=Object(s.a)(N,2),q=j[0],S=j[1],k=Object(r.useState)("O"),C=Object(s.a)(k,2),T=C[0],B=C[1],w=Object(r.useState)(!0),A=Object(s.a)(w,2),X=A[0],I=A[1],J=q,L=T,R=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],W=document.getElementsByClassName("square"),Y=function(e,t){a[e]=t,document.getElementById(e).innerText=t;var r=F(a,t);r&&G(r)},F=function(e,t){var a=e.reduce((function(e,a,r){return a===t?e.concat(r):e}),[]),r=null,n=!0,c=!1,l=void 0;try{for(var o,u=R.entries()[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var i=Object(s.a)(o.value,2),m=i[0];i[1].every((function(e){return a.indexOf(e)>-1}))&&(r={index:m,player:t})}}catch(d){c=!0,l=d}finally{try{n||null==u.return||u.return()}finally{if(c)throw l}}return r},G=function(e){var t=!0,a=!1,r=void 0;try{for(var n,c=R[e.index][Symbol.iterator]();!(t=(n=c.next()).done);t=!0){var l=n.value;document.getElementById(l).style.backgroundColor=e.player===J?"blue":"red",e.player===J?v(f+1):E(g+1)}}catch(o){a=!0,r=o}finally{try{t||null==c.return||c.return()}finally{if(a)throw r}}i(!0),P(e.player===J?"You Win":"You Lose")},P=function(e){document.querySelector(".endgame .text").style.display="block",document.querySelector(".endgame .text").innerText=e},z=function(){return a.filter((function(e){return"number"==typeof e}))},D=function(){return K(a,L).index},H=function(){if(0===z().length){for(var e=0;e<W.length;e++)W[e].style.backgroundColor="green";return i(!0),x(O+1),P("Tie Game!"),!0}return!1},K=function e(t,a){var r=z();if(F(t,J))return{score:-10};if(F(t,L))return{score:20};if(0===r.length)return{score:0};for(var n,c=[],l=0;l<r.length;l++){var o={};if(o.index=t[r[l]],t[r[l]]=a,a===L){var u=e(t,J);o.score=u.score}else{var i=e(t,L);o.score=i.score}t[r[l]]=o.index,c.push(o)}if(a===L)for(var s=-1e4,m=0;m<c.length;m++)c[m].score>s&&(s=c[m].score,n=m);else for(var d=1e4,f=0;f<c.length;f++)c[f].score<d&&(d=c[f].score,n=f);return c[n]};return n.a.createElement("div",{id:"game"},n.a.createElement("h3",{className:"score"},"Wins: ",f," Ties: ",O," Losses: ",g),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"theButton",onClick:function(){X&&(S("X"),B("O"))}},"Choose X"),n.a.createElement("button",{type:"button",className:"theButton",onClick:function(){X&&(S("O"),B("X"))}},"Choose O")),n.a.createElement("div",{id:"board",onClick:function(e){return t=e,X&&I(!1),void(u||"number"==typeof a[t.target.id]&&(Y(t.target.id,J),H()||Y(D(),L)));var t}},n.a.createElement("div",{className:"square",id:"0"}),n.a.createElement("div",{className:"square",id:"1"}),n.a.createElement("div",{className:"square",id:"2"}),n.a.createElement("div",{className:"square",id:"3"}),n.a.createElement("div",{className:"square",id:"4"}),n.a.createElement("div",{className:"square",id:"5"}),n.a.createElement("div",{className:"square",id:"6"}),n.a.createElement("div",{className:"square",id:"7"}),n.a.createElement("div",{className:"square",id:"8"})),n.a.createElement("div",{className:"endgame"},n.a.createElement("div",{className:"text"}),n.a.createElement("button",{onClick:function(){c(Array.from(Array(9).keys())),i(!1),I(!0);for(var e=0;e<W.length;e++)W[e].innerText="",W[e].style.removeProperty("background-color");document.querySelector(".endgame .text").style.display="none",document.querySelector(".endgame .text").innerText=""},className:"theButton"},"Replay")))});var d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(m,null))};l.a.render(n.a.createElement(d,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.79d976eb.chunk.js.map