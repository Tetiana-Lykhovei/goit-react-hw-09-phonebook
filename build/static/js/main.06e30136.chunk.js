(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{13:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return m}));var c=n(11),r=n.n(c),a=n(22),u=n(16),o=n.n(u),i=n(4);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,b,j,O=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){o.a.defaults.headers.common.Authorization=""},f={register:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.k)()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:c=e.sent,O(c.data.token),n(Object(i.l)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},login:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.e)()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:c=e.sent,O(c.data.token),n(Object(i.f)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.h)()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:l(),e(Object(i.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(i.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return O(a),e(Object(i.b)()),t.prev=5,t.next=8,o.a.get("/users/current");case 8:u=t.sent,e(Object(i.c)(u.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(i.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},d={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name}},h=n(3),p=n(8),g=n(5),x={name:null,email:null},v=Object(g.c)(x,(s={},Object(h.a)(s,i.l,(function(t,e){return e.payload.user})),Object(h.a)(s,i.f,(function(t,e){return e.payload.user})),Object(h.a)(s,i.i,(function(){return x})),Object(h.a)(s,i.c,(function(t,e){return e.payload})),s)),A=Object(g.c)(null,(b={},Object(h.a)(b,i.l,(function(t,e){return e.payload.token})),Object(h.a)(b,i.f,(function(t,e){return e.payload.token})),Object(h.a)(b,i.i,(function(){return null})),b)),k=Object(g.c)(!1,(j={},Object(h.a)(j,i.l,(function(){return!0})),Object(h.a)(j,i.f,(function(){return!0})),Object(h.a)(j,i.c,(function(){return!0})),Object(h.a)(j,i.j,(function(){return!1})),Object(h.a)(j,i.d,(function(){return!1})),Object(h.a)(j,i.a,(function(){return!1})),Object(h.a)(j,i.i,(function(){return!1})),j)),m=Object(p.c)({user:v,isAuthenticated:k,token:A})},29:function(t,e,n){t.exports={userMenu:"UserMenu_userMenu__2C9hX",avatar:"UserMenu_avatar__3nqpd",span:"UserMenu_span__pZRlK",icon:"UserMenu_icon__358M_"}},39:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return s.d})),n.d(e,"c",(function(){return A}));var c,r=n(11),a=n.n(r),u=n(22),o=n(16),i=n.n(o),s=n(6),b={fetchContacts:function(){return function(){var t=Object(u.a)(a.a.mark((function t(e){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(s.i)()),t.prev=1,t.next=4,i.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(s.j)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(s.h)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(u.a)(a.a.mark((function t(c){var r,u,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e,number:n},c(Object(s.b)()),t.prev=2,t.next=5,i.a.post("/contacts",r);case 5:u=t.sent,o=u.data,c(Object(s.c)(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(Object(s.a)(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(u.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(s.f)()),e.prev=1,e.next=4,i.a.delete("/contacts/".concat(t));case 4:n(Object(s.g)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(s.e)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},j=n(26),O=function(t){return t.contacts.items},l=function(t){return t.contacts.filter},f={getIsLoading:function(t){return t.contacts.loading},getAllContacts:O,getFilter:l,getFilteredContacts:Object(j.a)([O,l],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},d=n(3),h=n(31),p=n(8),g=n(5),x=Object(g.c)([],(c={},Object(d.a)(c,s.j,(function(t,e){return e.payload})),Object(d.a)(c,s.c,(function(t,e){var n=e.payload;return[].concat(Object(h.a)(t),[n])})),Object(d.a)(c,s.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),v=Object(g.c)("",Object(d.a)({},s.d,(function(t,e){return e.payload}))),A=Object(p.c)({items:x,filter:v})},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return O})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return d}));var c=n(5),r=Object(c.b)("auth/registrationRequest"),a=Object(c.b)("auth/registrationSuccess"),u=Object(c.b)("auth/registrationError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),O=Object(c.b)("auth/logoutError"),l=Object(c.b)("auth/getCurrentUserRequest"),f=Object(c.b)("auth/getCurrentUserSuccess"),d=Object(c.b)("auth/getCurrentUserError")},50:function(t,e,n){t.exports={Container:"Container_Container__2YciC"}},52:function(t,e,n){t.exports={AppBar:"AppBar_AppBar__30RAH"}},6:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return l}));var c=n(5),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),O=Object(c.b)("contacts/deleteContactError"),l=Object(c.b)("contacts/changeFilter")},64:function(t,e,n){},90:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(25),u=n.n(a),o=n(18),i=n(12),s=n(49),b=(n(64),n(7)),j=n(50),O=n.n(j),l=n(2),f=function(t){var e=t.children;return Object(l.jsx)("div",{className:O.a.Container,children:e})},d=n(27),h=n(32),p=n(13),g=function(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(h.a)(t,["isAuthenticated","redirectTo","children"]),r=Object(i.c)(p.c.getIsAuthenticated);return Object(l.jsx)(b.b,Object(d.a)(Object(d.a)({},c),{},{children:r?n:Object(l.jsx)(b.a,{to:e})}))},x=function(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(h.a)(t,["isAuthenticated","redirectTo","children"]),r=Object(i.c)(p.c.getIsAuthenticated);return Object(l.jsxs)(b.b,Object(d.a)(Object(d.a)({},c),{},{children:[r&&c.restricted?Object(l.jsx)(b.a,{to:e}):n," "]}))},v="/",A="/contacts",k="/login",m="/register",E={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#ffffff"},activeLink:{color:" rgb(255, 69, 0)"}};function C(){var t=Object(i.c)(p.c.getIsAuthenticated);return Object(l.jsxs)("nav",{children:[Object(l.jsx)(o.b,{to:v,exact:!0,style:E.link,activeStyle:E.activeLink,children:"HOME"}),t&&Object(l.jsx)(o.b,{to:A,exact:!0,style:E.link,activeStyle:E.activeLink,children:"PHONEBOOK"})]})}var y={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#ffffff"},activeLink:{color:" #ff4500"}},q=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o.b,{to:m,exact:!0,style:y.link,activeStyle:y.activeLink,children:"REGISTRATION"}),Object(l.jsx)(o.b,{to:k,exact:!0,style:y.link,activeStyle:y.activeLink,children:"LOGIN"})]})},S=n(29),R=n.n(S),M=n(51),N=n.n(M),G={svg:{fontSize:"40"}};function U(){var t=Object(i.b)(),e=Object(i.c)(p.c.getUserName),n=Object(c.useCallback)((function(){return t(p.a.logout())}),[t]);return Object(l.jsxs)("div",{className:R.a.userMenu,children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"40",className:R.a.avatar}),Object(l.jsxs)("span",{className:R.a.span,children:["Hi, ",e]}),Object(l.jsx)(N.a,{onClick:n,className:R.a.icon,style:G.svg})]})}var I=n(52),P=n.n(I);function z(){var t=Object(i.c)(p.c.getIsAuthenticated);return Object(l.jsxs)("header",{className:P.a.AppBar,children:[Object(l.jsx)(C,{}),t?Object(l.jsx)(U,{}):Object(l.jsx)(q,{})]})}n(90);var F=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,112))})),L=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,113))})),w=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,114))})),K=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,115))}));function D(){var t=Object(i.b)();return Object(c.useEffect)((function(){t(p.a.getCurrentUser())}),[t]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(z,{}),Object(l.jsx)(f,{children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("h1",{children:"Loading.."}),children:Object(l.jsxs)(b.d,{children:[Object(l.jsx)(x,{exact:!0,path:v,children:Object(l.jsx)(F,{})}),Object(l.jsx)(x,{path:m,restricted:!0,redirectTo:A,children:Object(l.jsx)(K,{})}),Object(l.jsx)(x,{path:k,restricted:!0,redirectTo:A,children:Object(l.jsx)(w,{})}),Object(l.jsx)(g,{path:A,redirectTo:k,children:Object(l.jsx)(L,{})})]})})})]})})}var H,W,B=n(31),T=n(5),Q=n(53),Y=n.n(Q),V=n(23),Z=n(39),X=n(54),J=n.n(X),_=n(3),$=n(4),tt=n(6),et=function(t,e){return e.payload},nt=Object(T.c)(null,(H={},Object(_.a)(H,$.j,et),Object(_.a)(H,$.d,et),Object(_.a)(H,$.g,et),Object(_.a)(H,$.a,et),Object(_.a)(H,tt.h,et),Object(_.a)(H,tt.a,et),Object(_.a)(H,tt.e,et),H)),ct=Object(T.c)(!1,(W={},Object(_.a)(W,tt.i,(function(){return!0})),Object(_.a)(W,tt.j,(function(){return!1})),Object(_.a)(W,tt.h,(function(){return!1})),Object(_.a)(W,tt.b,(function(){return!0})),Object(_.a)(W,tt.c,(function(){return!1})),Object(_.a)(W,tt.a,(function(){return!1})),Object(_.a)(W,tt.f,(function(){return!0})),Object(_.a)(W,tt.g,(function(){return!1})),Object(_.a)(W,tt.e,(function(){return!1})),Object(_.a)(W,$.k,(function(){return!0})),Object(_.a)(W,$.l,(function(){return!1})),Object(_.a)(W,$.j,(function(){return!1})),Object(_.a)(W,$.e,(function(){return!0})),Object(_.a)(W,$.f,(function(){return!1})),Object(_.a)(W,$.d,(function(){return!1})),Object(_.a)(W,$.h,(function(){return!0})),Object(_.a)(W,$.i,(function(){return!1})),Object(_.a)(W,$.g,(function(){return!1})),Object(_.a)(W,$.b,(function(){return!0})),Object(_.a)(W,$.c,(function(){return!1})),Object(_.a)(W,$.a,(function(){return!1})),W)),rt=[].concat(Object(B.a)(Object(T.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),[Y.a]),at={key:"auth",storage:J.a,whitelist:["token"]},ut=Object(T.a)({reducer:{auth:Object(V.g)(at,p.b),contacts:Z.c,error:nt,loading:ct},middleware:rt,devTools:!1}),ot={store:ut,persistor:Object(V.h)(ut)};u.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{store:ot.store,children:Object(l.jsx)(s.a,{loading:"Loading",persistor:ot.persistor,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(D,{})})})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.06e30136.chunk.js.map