(this.webpackJsonptrial=this.webpackJsonptrial||[]).push([[0],{159:function(e,a,t){e.exports=t(316)},164:function(e,a,t){},166:function(e,a,t){},316:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(36),l=t.n(c),o=(t(164),t(38)),i=t.n(o),s=t(71),m=t(39),u=(t(166),t(72)),d=t.n(u),E=t(332),h=function(e){return console.log(e),null!==e.alert&&r.a.createElement(E.a,{color:e.alert.color,inverted:!0},e.alert.msg,"!!")},p=t(333),f=t(323),b=function(){return r.a.createElement("div",null,r.a.createElement(p.a,{as:"h1"},"This app finds and displays Github Profiles."),r.a.createElement(p.a,{as:"h5"},"Made with"," ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," ","by Raghu"),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(p.a,{as:"h3"},"v1.0.0"))},g=t(330),v=t(324),y=t(325),w=t(334),k=t(150),j=t(29),O=t(317),x=t(328),_=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a.Item,{as:"a",href:e.repo.html_url},e.repo.name))};var C=function(e){var a=e.repos;return console.log(a.length),r.a.createElement("div",null,a.length>0&&r.a.createElement(E.a,{padded:"very"},r.a.createElement(p.a,{as:"h3"},"Public Repos"),r.a.createElement(x.a,{horizontal:!0},a.map((function(e){return r.a.createElement(_,{key:e.id,repo:e})})))),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(f.a,{hidden:!0}))},S=t(32),F=function(e){var a=e.getUser,t=e.getRepos,c=e.repos,l=e.user,o=e.match,i=e.loading;Object(n.useEffect)((function(){a(o.params.login),t(o.params.login)}),[]),console.log(c);var s=l.name,m=l.avatar_url,u=l.location,d=l.bio,h=l.blog,b=l.login,x=l.company,_=l.followers,F=l.following,G=l.public_repos,I=l.public_gists,P=l.hireable;return i?r.a.createElement(E.a,{basic:!0},r.a.createElement(f.a,{hidden:!0}),r.a.createElement(g.a,{active:!0,inverted:!0},r.a.createElement(v.a,{inverted:!0},"Getting that for you!"))):r.a.createElement(y.a,null,s?r.a.createElement(p.a,{as:"h2"},s,"'s profile"):r.a.createElement(p.a,{as:"h2"},b,"'s profile"),r.a.createElement(E.a,{padded:"very"},r.a.createElement(w.a,{centered:!0,stackable:!0},r.a.createElement(w.a.Column,{width:4},r.a.createElement(k.a,{src:m})),r.a.createElement(w.a.Column,{width:7},r.a.createElement(p.a,{as:"h4"},"Hireable :"," ",P?r.a.createElement(j.a,{name:"check"}):r.a.createElement(j.a,{name:"close"})),u&&r.a.createElement(p.a,{as:"h4"},"Location: ",u),d&&r.a.createElement(p.a,{as:"h4"},"Bio: ",d),h&&r.a.createElement(p.a,{as:"h4"},"Blog: ",h),x&&r.a.createElement(p.a,{as:"h4"},"Company: ",x)),r.a.createElement(w.a.Column,{width:5},G&&r.a.createElement(p.a,{as:"h4"},"Public Repos: ",G),I&&r.a.createElement(p.a,{as:"h4"},"Public Gists: ",I),_&&r.a.createElement(p.a,{as:"h4"},"Followers: ",_),F&&r.a.createElement(p.a,{as:"h4"},"Following: ",F))),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(S.b,{to:"/"},r.a.createElement(O.a,{color:"black"},"Back"))),r.a.createElement(C,{repos:c}))},G=t(15),I=t(331),P=t(326),R=t(329),B=function(e){var a=e.user,t=a.login,n=a.avatar_url;a.html_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(R.a.Content,null,r.a.createElement(k.a,{size:"mini",src:n,rounded:!0}),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(R.a.Header,null,t)),r.a.createElement(R.a.Content,{extra:!0}," ",r.a.createElement(S.b,{to:"/user/".concat(t)},r.a.createElement(O.a,{basic:!0,color:"green"},"More")))))};var U=function(e){var a=e.loading,t=e.users;return e.user,e.getUser,a?r.a.createElement(E.a,{basic:!0},r.a.createElement(f.a,{hidden:!0}),r.a.createElement(g.a,{active:!0,inverted:!0},r.a.createElement(v.a,{inverted:!0},"Getting that for you!"))):r.a.createElement(E.a,{basic:!0,padded:"very"},r.a.createElement(R.a.Group,null,t.map((function(e){return r.a.createElement(B,{key:e.id,user:e})}))))},A=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),u=o[0],g=o[1],v=Object(n.useState)(null),k=Object(m.a)(v,2),x=k[0],_=k[1],C=Object(n.useState)(""),R=Object(m.a)(C,2),B=R[0],A=R[1],H=Object(n.useState)([]),M=Object(m.a)(H,2),N=M[0],W=M[1],z=Object(n.useState)({}),J=Object(m.a)(z,2),T=J[0],q=J[1],D=function(e,a){_({msg:e,color:a}),setTimeout((function(){return _(null)}),2500)},L=function(){var e=Object(s.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==B){e.next=5;break}D("Please Enter Something","red"),e.next=12;break;case 5:return c(!0),e.next=8,d.a.get("https://api.github.com/search/users?q=".concat(B,"&client_id=").concat("1bd0849ed7e8f30872d2","&client_secret=").concat("0c8aa9a2d886fbaffb82a81a0bd262a9edf61a96"));case 8:t=e.sent,g(t.data.items),A(""),c(!1);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),$=function(e){A(e.target.value)},K=function(){g([])},Q=function(){var e=Object(s.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,d.a.get("https://api.github.com/users/".concat(a,"?client_id=").concat("1bd0849ed7e8f30872d2","&client_secret=").concat("0c8aa9a2d886fbaffb82a81a0bd262a9edf61a96"));case 3:t=e.sent,q(t.data),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,d.a.get("https://api.github.com/users/".concat(a,"/repos?per_page=5&sort=created:asc&client_id=").concat("1bd0849ed7e8f30872d2","&client_secret=").concat("0c8aa9a2d886fbaffb82a81a0bd262a9edf61a96"));case 3:t=e.sent,W(t.data),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(S.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y.a,null,r.a.createElement(f.a,{hidden:!0}),r.a.createElement(I.a,{borderless:!0},r.a.createElement(y.a,null,r.a.createElement(I.a.Item,{header:!0},r.a.createElement(p.a,null,r.a.createElement(j.a,{name:"github",style:{display:"inline"}}),"Github Finder")),r.a.createElement(I.a.Item,null," ",r.a.createElement(S.b,{style:{color:"#212121"},to:"/"},"Home")),r.a.createElement(I.a.Item,null," ",r.a.createElement(S.b,{style:{color:"#212121"},to:"/about"},"About"))))),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(G.c,null,r.a.createElement(G.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(y.a,{text:!0},r.a.createElement(E.a,{padded:!0,very:!0,color:"green"},r.a.createElement(w.a,null,r.a.createElement(w.a.Row,{style:{alignItems:"center"}},r.a.createElement(w.a.Column,{textAlign:"center"},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(p.a,{className:"ui header"},r.a.createElement(p.a,null,r.a.createElement("span",{style:{color:"#1c77c3"}},"Welcome!"," ")),"Search for a"," ",r.a.createElement(j.a,{name:"github",style:{display:"inline"}}),"profile")),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(P.a,{focus:!0,onChange:$,placeholder:"Enter Profile Name",value:B}),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(O.a,{onClick:L,primary:!0},"Search"),r.a.createElement(O.a,{secondary:!0,onClick:K},"\xa0Clear \xa0"),r.a.createElement(f.a,{hidden:!0}),r.a.createElement(h,{alert:x}))))),r.a.createElement(U,{getUser:Q,user:T,users:u,loading:t})))}}),r.a.createElement(G.a,{exact:!0,path:"/about",component:b}),r.a.createElement(G.a,{exact:!0,path:"/user/:login",render:function(e){return r.a.createElement(F,Object.assign({},e,{getUser:Q,getRepos:V,user:T,repos:N,loading:t}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[159,1,2]]]);
//# sourceMappingURL=main.8e17033a.chunk.js.map