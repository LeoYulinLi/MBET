(this.webpackJsonpmbet=this.webpackJsonpmbet||[]).push([[0],{155:function(e,t,a){},189:function(e,t,a){e.exports=a(235)},235:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(155),a(14)),i=a(12),u=a(266),m=a(10),s=a(269),E=a(171),d=a(268),b=a(267),f=a(56),p=a.n(f),v=a(270);function g(e){return{type:"ADD_EXPENSE",action:{opened:!0,providedExpense:e}}}function O(e){return{type:"OPEN_EDIT_ACCOUNT",action:{opened:!0,providedAccount:e}}}function y(e){return{type:"OPEN_EDIT_CATEGORY",action:{opened:!0,providedCategory:e}}}function j(e){var t=e.account,a=Object(i.b)(),n=p()(u.a)({background:t.color,color:Object(m.e)("#000",t.color)<8?"white":"black"});return c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(n,null,c.a.createElement(d.a,{onClick:function(){return a(O(t))}},c.a.createElement(s.a,null,c.a.createElement(b.a,{container:!0,justify:"space-between",spacing:1},c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(b.a,{container:!0,alignItems:"center",spacing:1},c.a.createElement(b.a,{item:!0},c.a.createElement(v.a,null,t.icon)),c.a.createElement(b.a,{item:!0},c.a.createElement(E.a,{variant:"h5"},t.title)),c.a.createElement(b.a,{item:!0},c.a.createElement(E.a,{variant:"subtitle2"},t.type)))))))))}var h=a(271),C=a(272);function x(){var e=Object(i.c)((function(e){return e.accounts})),t=Object(i.b)();return c.a.createElement(h.a,{m:4},c.a.createElement(b.a,{container:!0,spacing:2,justify:"space-between"},c.a.createElement(b.a,{item:!0},c.a.createElement(E.a,{variant:"h4"},"Accounts")),c.a.createElement(b.a,{item:!0},c.a.createElement(C.a,{color:"primary",variant:"contained",onClick:function(){return t(O())}},"New Account"))),c.a.createElement(b.a,{container:!0,spacing:2},Object.entries(e).map((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];return c.a.createElement(j,{account:n,key:a})}))))}var I=a(157),S=a(158),A=a(285),_=a(66),T=a(18);function k(){return c.a.createElement("h1",null,"Overview")}var D=a(302),w=a(303),N=a(308),P=a(273),F=a(274),R=a(311),W=a(281),M=a(94),B=a.n(M);function L(e){return{type:"CREATE_ACCOUNT",account:e}}var Y=a(277);function X(e){return{type:"DELETE_EXPENSE",expenseId:e}}var z=a(24),G=a(305),U=a(93);function V(e){return{type:"CREATE_CATEGORY",category:e}}function q(e){return{type:"DELETE_CATEGORY",categoryId:e}}var J=a(309),$=a(275),K=a(280),H=a(74),Q=a.n(H);function Z(){var e=Object(i.c)((function(e){return e.ui.addExpense})),t=e.opened,a=e.providedExpense,r=Object(n.useState)(""),l=Object(o.a)(r,2),u=l[0],m=l[1],s=Object(n.useState)(0),E=Object(o.a)(s,2),d=E[0],b=E[1],f=Object(n.useState)(null),p=Object(o.a)(f,2),v=p[0],g=p[1],O=Object(n.useState)(null),y=Object(o.a)(O,2),j=y[0],h=y[1],x=Object(n.useState)(new Date(Date.now())),I=Object(o.a)(x,2),S=I[0],A=I[1],_=Object(i.c)((function(e){return e.categories})),T=Object(i.c)((function(e){return e.accounts}));Object(n.useEffect)((function(){a&&(m(a.title),b(a.amount),g(T[a.accountId]),h(_[a.categoryId]),A(a.date))}),[a,T,_]);var k=Object(n.useRef)(null),D=Object(i.b)();function w(){D({type:"ADD_EXPENSE",action:{opened:!1}})}return c.a.createElement(N.a,{open:t,onClose:w},c.a.createElement(Q.a,{p:1},c.a.createElement("form",{id:"addExpenseForm",onSubmit:function(e){!function(e){if(e.preventDefault(),!S||!v||!j)return;D(a?{type:"EDIT_EXPENSE",expense:{id:a.id,accountId:v.id,amount:d,categoryId:j.id,date:S,title:u}}:function(e){return{type:"CREATE_EXPENSE",expense:e}}({accountId:v.id,amount:d,categoryId:j.id,date:S,title:u}))}(e),function(){var e;m(""),b(0),g(null),h(null),A(new Date(Date.now())),null===(e=k.current)||void 0===e||e.focus()}(),a&&w()}},c.a.createElement(P.a,null,a?"Edit":"Add"," Expense"),c.a.createElement(F.a,null,c.a.createElement(R.a,{autoFocus:!0,id:"expense-title",label:"Title",value:u,onChange:function(e){return m(e.target.value)},type:"text",fullWidth:!0,required:!0,ref:k}),c.a.createElement(Y.a,{fullWidth:!0},c.a.createElement(J.a,{htmlFor:"standard-adornment-amount"},"Amount"),c.a.createElement($.a,{id:"standard-adornment-amount",value:d,onChange:function(e){return b(+(+e.target.value).toFixed(2))},type:"number",inputProps:{step:.01},startAdornment:c.a.createElement(K.a,{position:"start"},"$"),required:!0})),c.a.createElement(ee,{account:v,setAccount:g}),c.a.createElement(te,{category:j,setCategory:h}),c.a.createElement(z.a,{utils:U.a},c.a.createElement(G.a,{disableToolbar:!0,variant:"inline",format:"yyyy-MM-dd",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:S,onChange:function(e){return A(e)},KeyboardButtonProps:{"aria-label":"change date"},required:!0}))),c.a.createElement(W.a,null,c.a.createElement(C.a,{onClick:w,color:"default"},"Cancel"),c.a.createElement(C.a,{color:"primary",type:"submit",variant:"contained"},"Submit")))))}function ee(e){var t=e.account,a=e.setAccount,n=Object(i.b)(),r=Object(i.c)((function(e){return e.accounts})),l=Object(M.createFilterOptions)();return c.a.createElement(B.a,{id:"account-selector",value:t,options:Object.values(r),onChange:function(e,t){if(null===t||void 0===t?void 0:t.message){var c={id:Math.random(),title:t.title,color:"#fff",icon:"account_balance",type:""};n(L(c)),a(c)}else t&&a(t)},filterOptions:function(e,t){var a=l(e,t);return""!==t.inputValue&&a.push({message:'Add "'.concat(t.inputValue,'"'),title:t.inputValue}),a},getOptionLabel:function(e){return e.message||e.title},renderInput:function(e){return c.a.createElement(R.a,Object.assign({},e,{label:"Account"}))}})}function te(e){var t=e.category,a=e.setCategory,n=Object(i.b)(),r=Object(i.c)((function(e){return e.categories})),l=Object(M.createFilterOptions)();return c.a.createElement(B.a,{id:"account-selector",value:t,options:Object.values(r),onChange:function(e,t){if(null===t||void 0===t?void 0:t.message){var c={id:Math.random(),title:t.title,color:"#fff",icon:"account_balance_wallet"};n(V(c)),a(c)}else t&&a(t)},filterOptions:function(e,t){var a=l(e,t);return""!==t.inputValue&&a.push({message:'Add "'.concat(t.inputValue,'"'),title:t.inputValue}),a},getOptionLabel:function(e){return e.message||e.title},renderInput:function(e){return c.a.createElement(R.a,Object.assign({},e,{label:"Category"}))}})}var ae=a(283),ne=a(121),ce=a(73),re=Object(ce.a)({palette:{primary:{main:"#34a007"},secondary:{main:"#e23500"},error:{main:ne.a.A400},background:{default:"#ffffff"}}}),le=a(284),oe=a(306),ie=a(292),ue=a(286),me=a(287),se=a(288),Ee=a(289),de=a(290),be=a(291),fe=a(282);function pe(){var e=Object(ae.a)(re.breakpoints.down("sm")),t=Object(T.g)(),a=Object(T.f)(),n=function(e,t){a.push(t)};function r(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var l=Object(I.a)((function(e){return Object(S.a)({bottomNav:{width:"100%",position:"fixed",bottom:0,background:"#f0f0f0",zIndex:5}})}))();return e?c.a.createElement(c.a.Fragment,null,c.a.createElement(le.a,{position:"sticky"},c.a.createElement(A.a,{maxWidth:"lg"},c.a.createElement(fe.a,null,c.a.createElement(E.a,{variant:"h6"},"MBET")))),c.a.createElement(ue.a,{value:t.pathname,onChange:n,className:l.bottomNav},c.a.createElement(me.a,{label:"Overview",value:"/overview",icon:c.a.createElement(se.a,null)}),c.a.createElement(me.a,{label:"Accounts",value:"/accounts",icon:c.a.createElement(Ee.a,null)}),c.a.createElement(me.a,{label:"Categories",value:"/categories",icon:c.a.createElement(de.a,null)}),c.a.createElement(me.a,{label:"Expenses",value:"/expenses",icon:c.a.createElement(be.a,null)}))):c.a.createElement(le.a,{position:"static"},c.a.createElement(A.a,{maxWidth:"lg"},c.a.createElement(b.a,{container:!0,justify:"space-between",alignItems:"center"},c.a.createElement(E.a,{variant:"h6"},"MBET"),c.a.createElement(oe.a,{value:t.pathname,onChange:n},c.a.createElement(ie.a,Object.assign({component:_.b,to:"/overview",label:"Overview"},r("/overview"))),c.a.createElement(ie.a,Object.assign({component:_.b,to:"/accounts",label:"Accounts"},r("/accounts"))),c.a.createElement(ie.a,Object.assign({component:_.b,to:"/categories",label:"Categories"},r("/categories"))),c.a.createElement(ie.a,Object.assign({component:_.b,to:"/expenses",label:"Expenses"},r("/expenses")))))))}var ve=a(293),ge=a(159),Oe=a(161),ye=a(294),je=a(296),he=a(295),Ce=a(297),xe=a(279),Ie=a(242),Se=a(168),Ae=a(300),_e=a(298),Te=a(299),ke=a(307),De=a(92),we=function(){var e=Object(i.c)((function(e){return e.expenses})),t=Object(i.c)((function(e){return e.accounts})),a=Object(i.c)((function(e){return e.categories})),r=Object(n.useState)(Object.values(e)),l=Object(o.a)(r,2),u=l[0],m=l[1],s=Object(n.useState)([]),d=Object(n.useState)([]),f=Object(n.useState)(null),p=Object(o.a)(f,2),v=p[0],O=p[1],y=Object(n.useState)(null),j=Object(o.a)(y,2),C=j[0],x=j[1],I=Object(n.useState)("date"),S=Object(n.useState)("desc"),A=Object(o.a)(s,1)[0],_=Object(o.a)(d,1)[0],T=Object(o.a)(I,1)[0],k=Object(o.a)(S,1)[0];Object(n.useEffect)((function(){var n=new U.a;m(Object.values(e).filter((function(e){return!(A.length>0&&!A.includes(e.accountId))&&(!(_.length>0&&!_.includes(e.categoryId))&&((!v||!n.isBefore(e.date,v))&&(!C||!n.isAfter(e.date,C))))})).sort((function(e,n){function c(e,t){return e<t?-1:e>t?1:0}var r=e[T],l=n[T];return"accountId"===T?(r=t[r].title,l=t[l].title):"categoryId"===T&&(r=a[r].title,l=a[l].title),"asc"===k?c(r,l):-c(r,l)})))}),[A,_,T,k,e,v,C,t,a]);var D=Object(i.b)(),w=function(e){return function(){D(g(e))}},N=Object(ae.a)(re.breakpoints.down("sm"));return c.a.createElement(h.a,{my:4},c.a.createElement(De.a,{elevation:0,style:{background:"#efefef"}},c.a.createElement(h.a,{p:2},c.a.createElement(E.a,{variant:"h6"},"Filters"),c.a.createElement(b.a,{container:!0,spacing:2},c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(Pe,{values:t,label:"Account",valueState:s})),c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(Pe,{values:a,label:"Category",valueState:d}))),c.a.createElement(z.a,{utils:U.a},c.a.createElement(b.a,{container:!0,spacing:2},c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(G.a,{disableToolbar:!0,variant:"inline",format:"yyyy-MM-dd",margin:"normal",id:"date-picker-inline",label:"Start Date",value:v,onChange:function(e){return O(e)},KeyboardButtonProps:{"aria-label":"set start date"},style:{width:"100%"}})),c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(G.a,{disableToolbar:!0,variant:"inline",format:"yyyy-MM-dd",margin:"normal",id:"date-picker-inline",label:"End Date",value:C,onChange:function(e){return x(e)},KeyboardButtonProps:{"aria-label":"set end date"},style:{width:"100%"}})))),c.a.createElement(Ne,{options:["title","date","account","category","amount"],sortByState:I,orderState:S}))),0===u.length?c.a.createElement(b.a,{container:!0,justify:"center"},c.a.createElement(b.a,{item:!0},c.a.createElement(E.a,{variant:"h4"},"Empty"))):c.a.createElement(c.a.Fragment,null,N?c.a.createElement(xe.a,null,u.map((function(e){return c.a.createElement(Re,{expense:e},c.a.createElement(Ie.a,{divider:!0},c.a.createElement(b.a,{container:!0,spacing:1},c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(b.a,{container:!0,justify:"space-between",alignItems:"baseline"},c.a.createElement(b.a,{item:!0,xs:9},c.a.createElement(E.a,{variant:"h5"},e.title)),c.a.createElement(b.a,{item:!0,xs:3},c.a.createElement(E.a,{variant:"h6",align:"right"},"$",e.amount.toFixed(2))))),c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(b.a,{container:!0,spacing:2,alignItems:"center"},c.a.createElement(b.a,{item:!0,xs:9},c.a.createElement(b.a,{container:!0,spacing:1},c.a.createElement(b.a,{item:!0},c.a.createElement(Fe,{value:t[e.accountId]})),c.a.createElement(b.a,{item:!0},c.a.createElement(Fe,{value:a[e.categoryId]})))),c.a.createElement(b.a,{item:!0,xs:3},c.a.createElement(E.a,{variant:"subtitle2",align:"right"},e.date.toLocaleDateString())))))))}))):c.a.createElement(ve.a,null,c.a.createElement(ye.a,null,c.a.createElement(he.a,null,c.a.createElement(je.a,null,"Title"),c.a.createElement(je.a,null,"Date"),c.a.createElement(je.a,null,"Account"),c.a.createElement(je.a,null,"Category"),c.a.createElement(je.a,null,"Amount"),c.a.createElement(je.a,null,"Edit"),c.a.createElement(je.a,null,"Delete"))),c.a.createElement(Ce.a,null,u.map((function(e){return c.a.createElement(he.a,null,c.a.createElement(je.a,null,e.title),c.a.createElement(je.a,null,e.date.toLocaleDateString()),c.a.createElement(je.a,null,c.a.createElement(Fe,{value:t[e.accountId]})),c.a.createElement(je.a,null,c.a.createElement(Fe,{value:a[e.categoryId]})),c.a.createElement(je.a,null,"$",e.amount.toFixed(2)),c.a.createElement(je.a,null,c.a.createElement(ge.a,{color:"primary",size:"small","aria-label":"edit expense ".concat(e.title),component:"span",onClick:w(e)},c.a.createElement(_e.a,null))),c.a.createElement(je.a,null,c.a.createElement(ge.a,{color:"secondary",size:"small","aria-label":"delete expense ".concat(e.title),component:"span",onClick:(n=e.id,function(){D(X(n))})},c.a.createElement(Te.a,null))));var n})))),c.a.createElement(b.a,{container:!0,justify:"flex-end"},c.a.createElement(b.a,{item:!0},c.a.createElement(E.a,{variant:"h6"},"Total: $".concat(u.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2)))))))};function Ne(e){var t=e.options,a=Object(o.a)(e.sortByState,2),n=a[0],r=a[1],l=Object(o.a)(e.orderState,2),i=l[0],u=l[1];return c.a.createElement(b.a,{container:!0,spacing:2},c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(Y.a,{style:{width:"100%"}},c.a.createElement(J.a,{id:"sortLabel"},"Sort By"),c.a.createElement(ke.a,{labelId:"sortLabel",id:"sort",value:n,onChange:function(e){return r(e.target.value)}},Object.values(t).map((function(e){return c.a.createElement(Ae.a,{value:e},e)}))))),c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(Y.a,{style:{width:"100%"}},c.a.createElement(J.a,{id:"orderLabel"},"Order"),c.a.createElement(ke.a,{labelId:"orderLabel",id:"order",value:i,onChange:function(e){return u(e.target.value)}},c.a.createElement(Ae.a,{value:"asc"},"Ascending"),c.a.createElement(Ae.a,{value:"desc"},"Descending")))))}function Pe(e){var t=e.values,a=e.label,n=Object(o.a)(e.valueState,2),r=n[0],l=n[1];return c.a.createElement(Y.a,{style:{minWidth:"100%"}},c.a.createElement(J.a,{id:"filter".concat(a,"Label")},a),c.a.createElement(ke.a,{labelId:"filter".concat(a,"Label"),id:"filter".concat(a),multiple:!0,value:r,onChange:function(e){return l(e.target.value)},input:c.a.createElement($.a,{id:"selectMultiple".concat(a)}),renderValue:function(e){return c.a.createElement(b.a,{container:!0,spacing:1},e.map((function(e){return c.a.createElement(b.a,{item:!0},c.a.createElement(Fe,{value:t[e]}))})))}},Object.values(t).map((function(e){return c.a.createElement(Ae.a,{key:e.id,value:e.id},c.a.createElement(Fe,{value:e}))}))))}function Fe(e){var t=e.value,a=p()(Oe.a)({background:t.color,color:Object(m.e)("#000",t.color)<8?"white":"black"}),n=p()(v.a)({color:Object(m.e)("#000",t.color)<8?"white":"black"});return c.a.createElement(a,{size:"small",label:t.title,icon:c.a.createElement(n,{fontSize:"small"},t.icon)})}var Re=function(e){var t,a=e.children,r=e.expense,l=Object(i.b)(),u={mouseX:null,mouseY:null},m=Object(n.useState)(u),s=Object(o.a)(m,2),E=s[0],d=s[1],b=function(){d(u)};return c.a.createElement("div",{onContextMenu:function(e){e.preventDefault(),d({mouseX:e.clientX-2,mouseY:e.clientY-4})},style:{cursor:"context-menu"}},a,c.a.createElement(Se.a,{keepMounted:!0,open:null!==E.mouseY,onClose:b,anchorReference:"anchorPosition",anchorPosition:null!==E.mouseY&&null!==E.mouseX?{top:E.mouseY,left:E.mouseX}:void 0},c.a.createElement(Ae.a,{onClick:function(e){return function(){l(g(e)),b()}}(r)},c.a.createElement(_e.a,null),"Edit"),c.a.createElement(Ae.a,{onClick:(t=r.id,function(){l(X(t)),b()})},c.a.createElement(Te.a,null),"Delete")))},We=a(167),Me=a.n(We),Be=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#1776d7","#2196f3","#03a9f4","#00bcd4","#009688","#3e951b","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b","#000000"],Le=["account_balance","access_time","audiotrack","attachment","book","build","check","clear","cloud","create","directions_bus","directions_car","flight_takeoff","kitchen","laptop_mac","local_parking","local_pizza","location_on","music_note","navigation","payment","person","pets","phone_android","poll","print","sim_card","star","videogame_asset","visibility","work"],Ye=a(301);function Xe(){var e=Object(i.c)((function(e){return e.ui.editAccount})),t=e.opened,a=e.providedAccount,r=Object(i.c)((function(e){return e.expenses})),l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],s=u[1],d=Object(n.useState)("#fff"),f=Object(o.a)(d,2),p=f[0],g=f[1],O=Object(n.useState)("account_balance"),y=Object(o.a)(O,2),j=y[0],h=y[1],x=Object(n.useState)(""),I=Object(o.a)(x,2),S=I[0],A=I[1],_=Object(i.b)();function T(){_({type:"OPEN_EDIT_ACCOUNT",action:{opened:!1}})}function k(){s(""),g("#fff"),h("account_balance"),A("")}function D(){_(q(a.id)),T()}return Object(n.useEffect)((function(){if(a){var e=a.title,t=a.color,n=a.icon,c=a.type;s(e),g(t),h(n),A(c)}else k()}),[a]),c.a.createElement(N.a,{open:t,onClose:T},c.a.createElement(Q.a,{p:1},c.a.createElement("form",{id:"addExpenseForm",onSubmit:function(e){!function(e){if(e.preventDefault(),!m||!p||!j||!S)return;_(a?{type:"EDIT_ACCOUNT",account:{id:a.id,title:m,color:p,icon:j,type:S}}:L({id:Math.random(),title:m,color:p,icon:j,type:S}))}(e),k(),a&&T()}},c.a.createElement(P.a,null,a?"Edit":"Add"," Account"),c.a.createElement(F.a,null,c.a.createElement(R.a,{autoFocus:!0,id:"expense-title",label:"Title",value:m,onChange:function(e){return s(e.target.value)},type:"text",fullWidth:!0,required:!0}),c.a.createElement(Y.a,{fullWidth:!0},c.a.createElement(J.a,{id:"account-color"},"Color"),c.a.createElement(ke.a,{labelId:"account-color",id:"account-color-select",value:p,onChange:function(e){return g(e.target.value)}},Be.map((function(e){return c.a.createElement(Ae.a,{value:e},c.a.createElement(E.a,{style:{color:e}},e))})))),c.a.createElement(Y.a,{fullWidth:!0},c.a.createElement(J.a,{id:"account-icon"},"Icon"),c.a.createElement(ke.a,{labelId:"account-icon",id:"account-icon-select",value:j,onChange:function(e){return h(e.target.value)}},Le.map((function(e){return c.a.createElement(Ae.a,{value:e},c.a.createElement(b.a,{container:!0,spacing:1,alignItems:"center"},c.a.createElement(b.a,{item:!0},c.a.createElement(v.a,{fontSize:"small"},e)),c.a.createElement(b.a,{item:!0},e)))})))),c.a.createElement(R.a,{autoFocus:!0,id:"expense-type",label:"Type",value:S,onChange:function(e){return A(e.target.value)},type:"text",fullWidth:!0,required:!0})),c.a.createElement(W.a,null,a?Object.values(r).some((function(e){return e.accountId===a.id}))?c.a.createElement(Ye.a,{title:"There are still expenses using this category, please delete them first"},c.a.createElement("span",null,c.a.createElement(C.a,{color:"secondary",disabled:!0},"Delete"))):c.a.createElement(C.a,{onClick:D,color:"secondary"},"Delete"):null,c.a.createElement(C.a,{onClick:T,color:"default"},"Cancel"),c.a.createElement(C.a,{color:"primary",type:"submit",variant:"contained"},"Submit")))))}function ze(e){var t=e.category,a=Object(i.b)(),n=p()(u.a)({background:t.color,color:Object(m.e)("#000",t.color)<8?"white":"black"});return c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(n,null,c.a.createElement(d.a,{onClick:function(){return a(y(t))}},c.a.createElement(s.a,null,c.a.createElement(b.a,{container:!0,justify:"space-between",spacing:1},c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(b.a,{container:!0,alignItems:"center",spacing:1},c.a.createElement(b.a,{item:!0},c.a.createElement(v.a,null,t.icon)),c.a.createElement(b.a,{item:!0},c.a.createElement(E.a,{variant:"h5"},t.title)))))))))}function Ge(){var e=Object(i.c)((function(e){return e.categories})),t=Object(i.b)();return c.a.createElement(h.a,{m:4},c.a.createElement(b.a,{container:!0,spacing:2,justify:"space-between"},c.a.createElement(b.a,{item:!0},c.a.createElement(E.a,{variant:"h4"},"Categories")),c.a.createElement(b.a,{item:!0},c.a.createElement(C.a,{color:"primary",variant:"contained",onClick:function(){return t(y())}},"New Category"))),c.a.createElement(b.a,{container:!0,spacing:2},Object.entries(e).map((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];return c.a.createElement(ze,{category:n,key:a})}))))}function Ue(){var e=Object(i.c)((function(e){return e.ui.editCategory})),t=e.opened,a=e.providedCategory,r=Object(i.c)((function(e){return e.expenses})),l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],s=u[1],d=Object(n.useState)("#fff"),f=Object(o.a)(d,2),p=f[0],g=f[1],O=Object(n.useState)("category_balance"),y=Object(o.a)(O,2),j=y[0],h=y[1],x=Object(i.b)();function I(){x({type:"OPEN_EDIT_CATEGORY",action:{opened:!1}})}function S(){s(""),g("#fff"),h("category_balance")}function A(){x(q(a.id)),I()}return Object(n.useEffect)((function(){if(a){var e=a.title,t=a.color,n=a.icon;s(e),g(t),h(n)}else S()}),[a]),c.a.createElement(N.a,{open:t,onClose:I},c.a.createElement(Q.a,{p:1},c.a.createElement("form",{id:"addExpenseForm",onSubmit:function(e){!function(e){if(e.preventDefault(),!m||!p||!j)return;x(a?{type:"EDIT_CATEGORY",category:{id:a.id,title:m,color:p,icon:j}}:V({id:Math.random(),title:m,color:p,icon:j}))}(e),S(),a&&I()}},c.a.createElement(P.a,null,a?"Edit":"Add"," Category"),c.a.createElement(F.a,null,c.a.createElement(R.a,{autoFocus:!0,id:"expense-title",label:"Title",value:m,onChange:function(e){return s(e.target.value)},type:"text",fullWidth:!0,required:!0}),c.a.createElement(Y.a,{fullWidth:!0},c.a.createElement(J.a,{id:"category-color"},"Color"),c.a.createElement(ke.a,{labelId:"category-color",id:"category-color-select",value:p,onChange:function(e){return g(e.target.value)}},Be.map((function(e){return c.a.createElement(Ae.a,{value:e},c.a.createElement(E.a,{style:{color:e}},e))})))),c.a.createElement(Y.a,{fullWidth:!0},c.a.createElement(J.a,{id:"category-icon"},"Icon"),c.a.createElement(ke.a,{labelId:"category-icon",id:"category-icon-select",value:j,onChange:function(e){return h(e.target.value)}},Le.map((function(e){return c.a.createElement(Ae.a,{value:e},c.a.createElement(b.a,{container:!0,spacing:1,alignItems:"center"},c.a.createElement(b.a,{item:!0},c.a.createElement(v.a,{fontSize:"small"},e)),c.a.createElement(b.a,{item:!0},e)))}))))),c.a.createElement(W.a,null,a?Object.values(r).some((function(e){return e.categoryId===a.id}))?c.a.createElement(Ye.a,{title:"There are still expenses using this category, please delete them first"},c.a.createElement("span",null,c.a.createElement(C.a,{color:"secondary",disabled:!0},"Delete"))):c.a.createElement(C.a,{onClick:A,color:"secondary"},"Delete"):null,c.a.createElement(C.a,{onClick:I,color:"default"},"Cancel"),c.a.createElement(C.a,{color:"primary",type:"submit",variant:"contained"},"Submit")))))}function Ve(){return c.a.createElement(h.a,{m:4},c.a.createElement(E.a,{variant:"h4"},"Instruction for now"),c.a.createElement(E.a,null,'Click on "expenses" to see demo expenses. Click on the green button at the bottom right to start adding expense.'))}var qe=function(){var e=Object(I.a)((function(e){return Object(S.a)({fab:{position:"fixed",bottom:e.spacing(12),right:e.spacing(4),zIndex:5}})}))(),t=Object(i.b)();return c.a.createElement(_.a,null,c.a.createElement(Z,null),c.a.createElement(Xe,null),c.a.createElement(Ue,null),c.a.createElement(pe,null),c.a.createElement(Me.a,{title:"Add new expense (ctrl+N)"},c.a.createElement(D.a,{color:"primary","aria-label":"add",className:e.fab,onClick:function(){t(g())}},c.a.createElement(w.a,null))),c.a.createElement(A.a,{maxWidth:"lg"},c.a.createElement(h.a,{pb:20},c.a.createElement(T.c,null,c.a.createElement(T.a,{exact:!0,path:"/overview",component:k}),c.a.createElement(T.a,{exact:!0,path:"/accounts",component:x}),c.a.createElement(T.a,{exact:!0,path:"/categories",component:Ge}),c.a.createElement(T.a,{exact:!0,path:"/expenses",component:we}),c.a.createElement(T.a,{path:"/",component:Ve})))))},Je=a(22),$e=a(50),Ke=a(51);var He=Object($e.b)({addExpense:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{opened:!1},t=arguments.length>1?arguments[1]:void 0;return"ADD_EXPENSE"===t.type?t.action:e},editAccount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{opened:!1},t=arguments.length>1?arguments[1]:void 0;return"OPEN_EDIT_ACCOUNT"===t.type?t.action:e},editCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{opened:!1},t=arguments.length>1?arguments[1]:void 0;return"OPEN_EDIT_CATEGORY"===t.type?t.action:e}}),Qe=Object($e.b)({accounts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ACCOUNT":case"EDIT_ACCOUNT":return Object(Je.a)(Object(Je.a)({},e),{},Object(Ke.a)({},t.account.id,t.account));case"DELETE_ACCOUNT":var a=Object(Je.a)({},e);return delete a[t.accountId],a;default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CATEGORY":case"EDIT_CATEGORY":return Object(Je.a)(Object(Je.a)({},e),{},Object(Ke.a)({},t.category.id,t.category));case"DELETE_CATEGORY":var a=Object(Je.a)({},e);return delete a[t.categoryId],a;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_EXPENSE":var a=Math.random();return Object(Je.a)(Object(Je.a)({},e),{},Object(Ke.a)({},a,Object(Je.a)(Object(Je.a)({},t.expense),{},{id:a})));case"EDIT_EXPENSE":return Object(Je.a)(Object(Je.a)({},e),{},Object(Ke.a)({},t.expense.id,t.expense));case"DELETE_EXPENSE":var n=Object(Je.a)({},e);return delete n[t.expenseId],n;default:return e}},ui:He});var Ze=a(265),et=a(304),tt=function(e){var t=localStorage.getItem("storeData"),a=function(){if(t){var a=JSON.parse(t),n=Object(Je.a)({},a);Object.values(a.expenses).forEach((function(e){n.expenses[e.id].date=new Date(e.date)}));var c=localStorage.getItem("storeVersion");return localStorage.setItem("storeVersion","1"),Object($e.c)(Qe,"1"===c?n:e)}return Object($e.c)(Qe,e)}();return a.subscribe((function(){localStorage.setItem("storeData",JSON.stringify(a.getState()))})),a}({accounts:{1345:{id:1345,title:"BankBank",color:"#000",icon:"account_balance",type:"saving"},1234:{id:1234,title:"Bank of the Bank",color:"#1776d7",icon:"star",type:"checking"},3576:{id:3576,title:"Bank of the Fish",color:"#009688",icon:"navigation",type:"credit"}},categories:{1024:{id:1024,title:"Food",color:"#ffc107",icon:"local_pizza"},46:{id:46,title:"Server",color:"#673ab7",icon:"cloud"},690:{id:690,title:"Cat",color:"#3e951b",icon:"pets"},869:{id:869,title:"Travel",color:"#f44336",icon:"flight_takeoff"}},expenses:{582:{id:582,title:"Unagi",amount:10.24,accountId:1234,categoryId:1024,date:new Date("2020-02-02")},2456:{id:2456,title:"Cat food",amount:20.48,accountId:1345,categoryId:690,date:new Date("2020-09-24")},648:{id:648,title:"AWS",amount:40.96,accountId:3576,categoryId:46,date:new Date("2020-06-24")},3576:{id:3576,title:"AWS",amount:30.72,accountId:3576,categoryId:46,date:new Date("2020-07-24")},2345:{id:2345,title:"AWS",amount:655.36,accountId:3576,categoryId:46,date:new Date("2020-08-24")},145:{id:145,title:"AWS",amount:.16,accountId:3576,categoryId:46,date:new Date("2020-09-24")}},ui:{addExpense:{opened:!1},editAccount:{opened:!1},editCategory:{opened:!1}}});l.a.render(c.a.createElement(Ze.a,{theme:re},c.a.createElement(et.a,null),c.a.createElement(i.a,{store:tt},c.a.createElement(qe,null))),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.10c5238d.chunk.js.map