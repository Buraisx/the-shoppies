(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(7),i=n.n(r),o=n(4),l=n(2),j=n(6),b=n.n(j),u=n(8),m=n(3),d=function(e){var t=e.queryTerm,n=e.term;return Object(c.jsx)("section",{className:"card search-bar",children:Object(c.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(c.jsx)("label",{htmlFor:"search-term",children:"Movie title"}),Object(c.jsxs)("div",{className:"search-bar__container",children:[Object(c.jsx)("button",{type:"submit",className:"search-bar__submit"}),Object(c.jsx)("input",{id:"search-term",name:"search-term",value:n,type:"text",className:"search-bar__input",placeholder:"Please enter a title",onChange:function(e){return t(e.target.value)}})]})]})})},h=function(e){var t=e.results,n=e.term,a=e.addNomination,s=e.nominations,r=e.isLoading;return Object(c.jsxs)("section",{className:"card results",children:[Object(c.jsx)("h2",{className:"card__title",children:n.length>0?'Results for "'.concat(n,'"'):" Search Results"}),r?Object(c.jsx)("div",{className:"spinner"}):null,Object(c.jsx)("ul",{className:"card__list",children:t.map((function(e){return Object(c.jsxs)("li",{className:"card__list-item",children:["".concat(e.Title," (").concat(e.Year,")"),Object(c.jsx)("button",{onClick:function(){return a(e)},className:e.imdbID in s?"disabled":"",children:"Nominate"})]},e.imdbID)}))})]})},O=function(e){var t=e.nominations,n=e.removeNomination;return Object(c.jsxs)("section",{className:"card nominations",children:[Object(c.jsx)("h2",{children:"Nominations"}),Object(c.jsx)("ul",{className:"card__list",children:Object.keys(t).map((function(e){return Object(c.jsxs)("li",{className:"card__list-item",children:["".concat(t[e].Title," (").concat(t[e].Year,")"),Object(c.jsx)("button",{onClick:function(){return n(e)},children:"Remove"})]},e)}))})]})},p=(n(15),function(e){var t=e.nominations;return Object.keys(t).length>=5?Object(c.jsx)("section",{className:"card banner",children:Object(c.jsx)("p",{children:"5 Nominations have been made!"})}):null}),x=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("nominations"))||{}),t=Object(m.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),i=Object(m.a)(r,2),j=i[0],x=i[1],f=Object(a.useState)(""),N=Object(m.a)(f,2),v=N[0],_=N[1],g=Object(a.useState)(!1),S=Object(m.a)(g,2),y=S[0],k=S[1],w=function(){var e=Object(u.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(t),!(t.length>0)){e.next=11;break}return k(!0),e.next=5,fetch("http://www.omdbapi.com/?s=".concat(v,"&apikey=").concat("2b3a969f","&type=movie&page=1"));case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,k(!1),"True"===c.Response&&x(c.Search);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){localStorage.setItem("nominations",JSON.stringify(n))}),[n]),Object(c.jsxs)("main",{className:"container",children:[Object(c.jsx)(p,{nominations:n}),Object(c.jsx)("h1",{children:"The Shoppies"}),Object(c.jsx)(d,{queryTerm:w,term:v}),Object(c.jsx)(h,{results:j,term:v,addNomination:function(e){e.imdbID in n||s(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e.imdbID,Object(l.a)(Object(l.a)({},e),{},{enumerable:!0}))))},nominations:n,isLoading:y}),Object(c.jsx)(O,{nominations:n,removeNomination:function(e){var t=n;delete t[e],s(Object(l.a)({},t))}})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8d931a12.chunk.js.map