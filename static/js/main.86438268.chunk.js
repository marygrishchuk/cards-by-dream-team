(this["webpackJsonpcards-by-dream-team"]=this["webpackJsonpcards-by-dream-team"]||[]).push([[0],{126:function(e,t,n){e.exports={profile:"Profile_profile__OylV9",loading:"Profile_loading__1TdAz",error:"Profile_error__3qnVp"}},128:function(e,t,n){e.exports={learn:"Learn_learn__14aic",filter:"Learn_filter__1Z-y4",rangeContainer:"Learn_rangeContainer__3rHkm",error:"Learn_error__2DxqE",pagination:"Learn_pagination__2D1sM"}},139:function(e,t,n){e.exports={register:"Register_register__298wP"}},169:function(e,t,n){e.exports={rangeBlock:"DoubleRange_rangeBlock__eFtuj"}},188:function(e,t,n){},189:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(28),o=n.n(s),i=(n(188),n(189),n(190),n(30)),u=n(24),d=n(99),l=n.n(d),j=n(26),b=n(20),O=n(13),p=n(161),g=n.n(p).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),h=function(){return g.post("auth/me")},f=function(e){return g.post("auth/login",e)},m=function(e){return g.post("auth/register",e)},S=function(){return g.delete("auth/me")},x=function(e){return g.put("auth/me",e)},v=function(e){return g.post("auth/forgot",{email:e,from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\">\n                 password recovery link:\n                 <a href='http://marygrishchuk.github.io/cards-by-dream-team/#/set-new-password/$token$'>\n                 Reset Password</a></div>"})},C=function(e){return g.post("auth/set-new-password",e)},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.nameToSearch,n=e.maxCardsCount,a=e.minCardsCount,r=e.page,c=e.pageCount,s=e.sortDirection,o=void 0===s?"":s,i=e.propToSortBy,u=void 0===i?"":i,d=e.userId;return g.get("cards/pack",{params:{packName:t,sortPacks:o+u,min:a,max:n,page:r,pageCount:c,user_id:d}})},k=function(e,t,n){return g.post("cards/pack",{cardsPack:{name:e,private:t,deckCover:n}})},R=function(e){return g.delete("cards/pack?id=".concat(e))},P=function(e,t){return g.put("cards/pack",{cardsPack:{_id:e,name:t}})},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.question,a=t.answer,r=t.sortDirection,c=void 0===r?"":r,s=t.propToSortBy,o=void 0===s?"":s,i=t.minGrade,u=t.maxGrade,d=t.page,l=t.pageCount;return g.get("cards/card",{params:{cardsPack_id:e,cardQuestion:n,cardAnswer:a,sortCards:c+o,min:i,max:u,page:d,pageCount:l}})},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.question,a=t.answer,r=t.grade,c=t.shots,s=t.rating,o=t.answerImg,i=t.questionImg,u=t.questionVideo,d=t.answerVideo,l=t.type;return g.post("cards/card",{card:{cardsPack_id:e,question:n,answer:a,grade:r,shots:c,rating:s,answerImg:o,questionImg:i,questionVideo:u,answerVideo:d,type:l}})},_=function(e){return g.delete("cards/card?id=".concat(e))},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.question,r=t.answer,c=t.grade,s=t.shots,o=t.rating,i=t.answerImg,u=t.questionImg,d=t.questionVideo,l=t.answerVideo,j=t.type;return g.put("cards/card",{card:{_id:e,question:a,answer:r,grade:c,shots:s,rating:o,answerImg:i,questionImg:u,questionVideo:d,answerVideo:l,type:j,comments:n}})},I=function(e,t){return g.put("cards/grade",{grade:e,card_id:t})};!function(e){e[e.Up=0]="Up",e[e.Down=1]="Down"}(a||(a={}));var A={requestStatus:"idle",error:"",info:""},N=function(e){return{type:"FORGOT/SET-REQUEST-STATUS",requestStatus:e}},q=n(3),U=function(){var e=Object(b.c)((function(e){return e.forgot})),t=e.requestStatus,n=e.error,a=e.info,c=Object(b.b)(),s=Object(r.useState)(""),o=Object(u.a)(s,2),i=o[0],d=o[1];return Object(q.jsxs)("div",{className:l.a.forgot,children:["Please enter your email, and we'll send you a link to reset your password.","loading"===t?Object(q.jsx)("div",{className:l.a.loading,children:"loading..."}):a&&Object(q.jsx)("i",{children:a}),n&&Object(q.jsx)("div",{className:l.a.error,children:n}),Object(q.jsx)("input",{type:"email",value:i,onChange:function(e){d(e.currentTarget.value.trim())}}),Object(q.jsx)("button",{onClick:function(){c(function(e){return function(t){t(N("loading")),v(e).then((function(e){t({type:"FORGOT/SET-INFO",info:e.data.info}),t(N("success"))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(function(e){return{type:"FORGOT/SET-ERROR",error:e}}(n)),t(N("failed"))}))}}(i))},disabled:"loading"===t,children:"Send"}),Object(q.jsx)(j.b,{to:"/login",activeClassName:l.a.active,children:"Log in"})]})},D=n(55),L=n.n(D),G=n(175),F={_id:"",email:"",name:"",avatar:"",error:"",isLoggedIn:!1,requestStatus:"idle"},K=function(e,t,n,a,r){return{type:"AUTH/SET-AUTH-USER-DATA",payload:{_id:e,email:t,name:n,avatar:a,isLoggedIn:r}}},B=function(e){return{type:"AUTH/SET-REQUEST-STATUS",requestStatus:e}},V=function(e){return{type:"AUTH/SET-ERROR",error:e}},W=function(e){return function(t,n){t(B("loading")),x({name:e.name||n().auth.name,avatar:e.avatar||n().auth.avatar}).then((function(e){t(K(e.data.updatedUser._id,e.data.updatedUser.email,e.data.updatedUser.name,e.data.updatedUser.avatar,n().auth.isLoggedIn)),t(B("success"))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(V(n)),t(B("failed")),setTimeout((function(){t(V(""))}),3e3)}))}},z=n(289),Q=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.auth})),n=t.isLoggedIn,a=t.requestStatus,r=t.error,c=Object(G.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var n;e((n=t,function(e){e(B("loading")),f(n).then((function(t){e(K(t.data._id,t.data.email,t.data.name,t.data.avatar,!0)),e(B("success"))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(V(n)),e(B("failed")),setTimeout((function(){e(V(""))}),3e3)}))}))}});return n?Object(q.jsx)(i.a,{to:tt.PROFILE}):Object(q.jsx)("div",{children:Object(q.jsx)("form",{onSubmit:c.handleSubmit,children:Object(q.jsxs)("div",{className:L.a.login,children:[Object(q.jsxs)(z.a.Item,{className:L.a.notice,children:[Object(q.jsxs)("p",{children:["To log in, please get registered",Object(q.jsx)(j.b,{to:tt.REGISTER,activeClassName:L.a.active,children:" here,"})]}),Object(q.jsx)("p",{children:"or please use common test account credentials:"}),Object(q.jsx)("p",{children:"Email: nya-admin@nya.nya"}),Object(q.jsx)("p",{children:"Password: 1qazxcvBG"})]}),"loading"===a&&Object(q.jsx)("div",{className:L.a.loading,children:"loading..."}),r&&Object(q.jsx)("div",{className:L.a.error,children:r}),Object(q.jsx)("label",{children:"Email"}),Object(q.jsx)("input",Object(O.a)({type:"email"},c.getFieldProps("email"))),c.errors.email?Object(q.jsx)("div",{className:L.a.error,children:c.errors.email}):null,Object(q.jsx)("label",{children:"Password"}),Object(q.jsx)("input",Object(O.a)({type:"password"},c.getFieldProps("password"))),c.errors.password?Object(q.jsx)("div",{className:L.a.error,children:c.errors.password}):null,Object(q.jsx)(j.b,{to:"/forgot",activeClassName:L.a.active,children:"Forgot password?"}),Object(q.jsxs)("label",{children:["Remember Me",Object(q.jsx)("input",Object(O.a)(Object(O.a)({type:"checkbox"},c.getFieldProps("rememberMe")),{},{checked:c.values.rememberMe}))]}),Object(q.jsx)("button",{type:"submit",color:"primary",children:"Login"}),Object(q.jsx)(j.b,{to:"/register",activeClassName:L.a.active,children:"Registration"})]})})})},H=n(139),M=n.n(H),J={responseText:"",isRegistration:!1},Z=function(e){return{type:"REGISTER/SUCCESS_REGISTER",text:e}},X=function(e){return{type:"REGISTER/SET-REGISTRATION",isRegistration:e}},$=function(){var e=Object(b.c)((function(e){return e.register.responseText})),t=Object(b.c)((function(e){return e.register.isRegistration})),n=Object(b.b)(),a=Object(r.useState)(""),c=Object(u.a)(a,2),s=c[0],o=c[1],d=Object(r.useState)(""),l=Object(u.a)(d,2),O=l[0],p=l[1],g=Object(r.useState)(""),h=Object(u.a)(g,2),f=h[0],S=h[1],x=Object(r.useState)(""),v=Object(u.a)(x,2),C=v[0],T=v[1],k={email:s,password:O},R=function(){T("")};return t?Object(q.jsx)(i.a,{to:"/login"}):Object(q.jsxs)("div",{className:M.a.register,children:[Object(q.jsx)("h3",{children:e}),"Register",Object(q.jsx)("input",{type:"email",placeholder:"email",onChange:function(e){return o(e.currentTarget.value)},onKeyPress:R}),Object(q.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return p(e.currentTarget.value)},onKeyPress:R}),Object(q.jsx)("input",{type:"password",placeholder:"confirm password",onKeyPress:R,onChange:function(e){return S(e.currentTarget.value)}}),C,Object(q.jsx)("button",{onClick:function(){O===f&&O.length>=8?n(function(e){return function(t){m(e).then((function(e){t(Z("success")),setTimeout((function(){t(X(!0)),t(X(!1))}),1e3)})).catch((function(e){t(Z(e.response.data.error)),setTimeout((function(){t(Z(""))}),3e3)}))}}(k)):O!==f?T("Passwords don't match."):(O.length<8||f.length<8)&&T("Password must contain at least 8 characters.")},children:"Register"}),Object(q.jsx)(j.b,{to:"/login",activeClassName:M.a.active,children:"Log in"})]})},Y=n(90),ee=n.n(Y),te={requestStatus:"idle",error:"",info:""},ne=function(e){return{type:"SET-PASSWORD/SET-REQUEST-STATUS",requestStatus:e}},ae=function(e){return{type:"SET-PASSWORD/SET-ERROR",error:e}},re=function(){var e=Object(b.c)((function(e){return e.setPassword})),t=e.requestStatus,n=e.error,a=e.info,c=Object(b.b)(),s=Object(i.h)().token,o=Object(r.useState)(""),d=Object(u.a)(o,2),l=d[0],O=d[1],p=Object(r.useState)(""),g=Object(u.a)(p,2),h=g[0],f=g[1],m=Object(r.useState)(""),S=Object(u.a)(m,2),x=S[0],v=S[1];return"success"===t?Object(q.jsx)(i.a,{to:"/login"}):Object(q.jsxs)("div",{className:ee.a.setPassword,children:["Please enter your new password in each field.","loading"===t?Object(q.jsx)("div",{className:ee.a.loading,children:"loading..."}):a&&Object(q.jsx)("i",{children:a}),n&&Object(q.jsx)("div",{className:ee.a.error,children:n}),x&&Object(q.jsx)("div",{className:ee.a.error,children:x}),Object(q.jsx)("input",{type:"password",value:l,onChange:function(e){O(e.currentTarget.value)},onKeyPress:function(){return v("")}}),Object(q.jsx)("input",{type:"password",value:h,onChange:function(e){f(e.currentTarget.value)},onKeyPress:function(){return v("")}}),Object(q.jsx)("button",{onClick:function(){var e,t;l===h&&l.length>=8?c((e=l,t=s,function(n){n(ne("loading")),C({password:e,resetPasswordToken:t}).then((function(e){n({type:"SET-PASSWORD/SET-INFO",info:e.data.info}),n(ne("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(ae(t)),n(ne("failed")),setTimeout((function(){n(ae(""))}),3e3)}))})):l!==h?v("Passwords don't match."):(l.length<8||h.length<8)&&v("Password must contain at least 8 characters.")},disabled:"loading"===t,children:"Submit"}),Object(q.jsx)(j.b,{to:"/login",activeClassName:ee.a.active,children:"Log in"})]})},ce=n(126),se=n.n(ce),oe=n(181),ie=n(292),ue=n(293),de=n(290),le=function(){var e=Object(b.c)((function(e){return e.auth})),t=e.email,n=e.name,a=e.error,c=e.avatar,s=e.isLoggedIn,o=e.requestStatus,d=Object(b.b)(),l=de.a.Paragraph,j=Object(r.useState)(""),O=Object(u.a)(j,2),p=O[0],g=O[1],h=Object(q.jsxs)("span",{children:[Object(q.jsxs)("label",{children:["Enter avatar URL or Base64:",Object(q.jsx)("input",{onChange:function(e){return g(e.currentTarget.value)},value:p})]}),Object(q.jsx)("button",{onClick:function(){d(W({avatar:p}))},children:"Set Avatar"})]});return s?Object(q.jsxs)("div",{className:se.a.profile,children:["Welcome!","loading"===o&&Object(q.jsx)("div",{className:se.a.loading,children:"loading..."}),a&&Object(q.jsx)("div",{className:se.a.error,children:a}),c?Object(q.jsx)(oe.a,{content:h,title:"Change avatar",trigger:"hover",children:Object(q.jsx)(ie.a,{src:c,size:64})}):Object(q.jsx)(oe.a,{content:h,title:"Add avatar",trigger:"hover",children:Object(q.jsx)(ie.a,{size:64,icon:Object(q.jsx)(ue.a,{})})}),Object(q.jsx)(l,{editable:{onChange:function(e){d(W({name:e}))}},children:n}),Object(q.jsx)("div",{children:t}),Object(q.jsx)("button",{onClick:function(){d((function(e){e(B("loading")),S().then((function(){e(K("","","","",!1)),e(B("success"))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(V(n)),e(B("failed")),setTimeout((function(){e(V(""))}),3e3)}))}))},disabled:"loading"===o,children:"Log out"})]}):Object(q.jsx)(i.a,{to:tt.LOGIN})},je=n(66),be=n.n(je),Oe=function(){return Object(q.jsxs)("div",{className:be.a.header,children:[Object(q.jsx)(j.b,{to:tt.LOGIN,activeClassName:be.a.active,children:"Login"}),Object(q.jsx)(j.b,{to:tt.REGISTER,activeClassName:be.a.active,children:"Register"}),Object(q.jsx)(j.b,{to:tt.FORGOT,activeClassName:be.a.active,children:"Forgot"}),Object(q.jsx)(j.b,{to:tt.SET_PASSWORD,activeClassName:be.a.active,children:"Set New Password"}),Object(q.jsx)(j.b,{to:tt.PROFILE,activeClassName:be.a.active,children:"Profile"}),Object(q.jsx)(j.b,{to:tt.PACKS,activeClassName:be.a.active,children:"Packs"}),Object(q.jsx)(j.b,{to:tt.CARDS,activeClassName:be.a.active,children:"Cards"})]})},pe=n(62),ge=n.n(pe),he={cardPacks:[],requestStatus:"idle",error:"",cardPacksTotalCount:0,page:1,pageCount:10,sortParams:{nameToSearch:"",minCardsCount:0,maxCardsCount:100,sortDirection:a.Down,propToSortBy:void 0,page:1,pageCount:10,userId:""}},fe=function(e,t,n,a){return{type:"PACKS/SET-PACKS",cardPacks:e,cardPacksTotalCount:t,page:n,pageCount:a}},me=function(e){return{type:"PACKS/SET-REQUEST-STATUS",requestStatus:e}},Se=function(e){return{type:"PACKS/SET-ERROR",error:e}},xe=function(e){return{type:"PACKS/SET-SORT-PARAMS",sortParams:e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){e&&t(xe(e));var a=n().packs.sortParams;t(me("loading")),T(a).then((function(e){t(fe(e.data.cardPacks,e.data.cardPacksTotalCount,e.data.page,e.data.pageCount)),t(me("success"))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(Se(n)),t(me("failed"))}))}},Ce=n(291),Te=n(169),ke=n.n(Te),Re=c.a.memo((function(e){var t=e.minRangeLimit,n=void 0===t?0:t,a=e.maxRangeLimit,c=void 0===a?100:a,s=e.minValue,o=e.maxValue,i=e.onValuesChange,d=Object(r.useState)(s||0),l=Object(u.a)(d,2),j=l[0],b=l[1],O=Object(r.useState)(o||5),p=Object(u.a)(O,2),g=p[0],h=p[1],f=Object(r.useCallback)((function(e){b(e[0]),h(e[1])}),[b,h]),m=Object(r.useCallback)((function(){i([j,g])}),[i,j,g]);return Object(q.jsx)("span",{className:ke.a.rangeBlock,children:Object(q.jsx)(Ce.a,{range:{draggableTrack:!0},value:[j,g],min:n,max:c,onChange:f,onAfterChange:m,tooltipVisible:!0})})})),Pe=n(176),Ee=function(e){return Object(q.jsx)("div",{children:Object(q.jsx)(Pe.a,{showQuickJumper:!0,current:e.current,total:e.total,onChange:e.onChange,pageSize:e.pageCount,disabled:"loading"===e.requestStatus})})},ye=n(288),_e=n(120),we=function(e){var t=e.enableBackground,n=e.backgroundOnClick,a=void 0===n?function(){}:n,r=e.modalWidthPx,c=e.modalHeightPx,s=e.modalStyle,o=e.modalOnClick,i=void 0===o?function(){}:o,u=e.show,d=e.children,l="calc(50vh - ".concat(c/2,"px)"),j="calc(50vw - ".concat(r/2,"px)");return u?Object(q.jsxs)(q.Fragment,{children:[t&&Object(q.jsx)("div",{style:{position:"fixed",top:"0px",left:"0px",width:"100vw",height:"100vh",background:"black",opacity:.6,zIndex:20},onClick:a}),Object(q.jsx)("div",{style:Object(O.a)({position:"fixed",top:l,left:j,width:r,height:c,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#fafafa",borderRadius:"2px",zIndex:21},s),onClick:i,children:d})]}):null},Ie=c.a.memo((function(e){var t=e.inputLabels,n=e.itemToAdd,a=e.show,c=e.setShow,s=e.onAddBtnClick,o=Array.from(t,(function(){return""})),i=Object(r.useState)(o),d=Object(u.a)(i,2),l=d[0],j=d[1];return Object(q.jsxs)(we,{enableBackground:!0,modalHeightPx:250,modalWidthPx:395,show:a,backgroundOnClick:function(){return c(!1)},children:[Object(q.jsxs)("div",{children:["Add new ",n]}),t.map((function(e,t){return Object(q.jsx)("div",{children:Object(q.jsxs)("label",{children:[e,Object(q.jsx)("input",{value:l[t],onChange:function(e){return function(e,t){var n=Object(_e.a)(l);j(n.map((function(n,a){return a===t?e.currentTarget.value:n})))}(e,t)}})]})})})),Object(q.jsxs)("div",{children:[Object(q.jsx)("button",{onClick:function(){return c(!1)},children:"Cancel"}),Object(q.jsx)("button",{onClick:function(){s(l),c(!1)},children:"Add"})]})]})})),Ae=function(e){var t=e.cardPacks,n=e.authUserId,c=e.requestStatus,s=Object(r.useState)(!1),o=Object(u.a)(s,2),i=o[0],d=o[1],l=Object(b.b)(),O=function(e){l(function(e){return function(t){t(me("loading")),R(e).then((function(){t(ve()),t(me("success"))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(Se(n)),t(me("failed"))}))}}(e))},p=function(e){l(function(e,t){return function(n){n(me("loading")),P(e,t).then((function(){n(ve()),n(me("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(Se(t)),n(me("failed"))}))}}(e))},g=t.map((function(e){return{key:e._id,name:e.name,cardsCount:e.cardsCount,updated:e.updated,createdBy:e.user_name,buttons:{packId:e._id,packUserId:e.user_id,cardsCount:e.cardsCount}}})),h=[{title:"Name",dataIndex:"name",key:"name",sorter:!0},{title:"Learn Count",dataIndex:"cardsCount",key:"cardsCount",sorter:!0},{title:"Last Update",dataIndex:"updated",key:"updated"},{title:"Created by",dataIndex:"createdBy",key:"createdBy"},{title:function(){return Object(q.jsx)("button",{onClick:function(){return d(!0)},children:"Add"})},dataIndex:"buttons",key:"buttons",render:function(e){var t=e.packId,a=e.packUserId,r=e.cardsCount;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("button",{onClick:function(){return O(t)},disabled:a!==n,children:"Delete"}),Object(q.jsx)("button",{onClick:function(){return p(t)},disabled:a!==n,children:"Update"}),Object(q.jsx)("span",{children:Object(q.jsx)(j.b,{to:tt.CARDS+"/"+t,activeClassName:ge.a.active,children:" Cards "})}),r>0&&Object(q.jsx)("span",{children:Object(q.jsx)(j.b,{to:tt.LEARN+"/"+t,activeClassName:ge.a.active,children:" Learn "})})]})}}];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ye.a,{columns:h,dataSource:g,onChange:function(e,t,n){"name"===n.columnKey&&"ascend"===n.order?l(ve({sortDirection:a.Down,propToSortBy:"name"})):"name"===n.columnKey&&"descend"===n.order?l(ve({sortDirection:a.Up,propToSortBy:"name"})):"name"===n.columnKey&&void 0===n.order&&l(ve({sortDirection:a.Up,propToSortBy:"updated"})),"cardsCount"===n.columnKey&&"ascend"===n.order?l(ve({sortDirection:a.Down,propToSortBy:"cardsCount"})):"cardsCount"===n.columnKey&&"descend"===n.order?l(ve({sortDirection:a.Up,propToSortBy:"cardsCount"})):"cardsCount"===n.columnKey&&void 0===n.order&&l(ve({sortDirection:a.Up,propToSortBy:"updated"}))},pagination:!1,style:{width:"100%"},size:"small",loading:"loading"===c}),i&&Object(q.jsx)(Ie,{show:i,setShow:d,inputLabels:["Name: "],itemToAdd:"pack",onAddBtnClick:function(e){var t,n,a;l((t=e[0],function(e){e(me("loading")),k(t,n,a).then((function(){e(ve()),e(me("success"))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(Se(n)),e(me("failed"))}))}))}})]})},Ne=function(){var e=Object(b.c)((function(e){return e.auth.isLoggedIn})),t=Object(b.c)((function(e){return e.auth._id})),n=Object(b.c)((function(e){return e.packs.error})),a=Object(b.c)((function(e){return e.packs})),c=a.cardPacksTotalCount,s=a.page,o=a.cardPacks,d=a.pageCount,l=a.requestStatus,j=Object(b.c)((function(e){return e.packs.sortParams})),O=j.minCardsCount,p=j.maxCardsCount,g=j.userId,h=Object(b.b)(),f=Object(r.useState)(""),m=Object(u.a)(f,2),S=m[0],x=m[1];Object(r.useEffect)((function(){e&&h(ve())}),[]);var v=Object(r.useCallback)((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];h(ve({minCardsCount:n,maxCardsCount:a}))}),[h]),C=Object(r.useCallback)((function(e,t){h(ve({page:e,pageCount:t}))}),[h]);return e?Object(q.jsxs)("div",{className:ge.a.packs,children:[Object(q.jsx)("h2",{children:"Packs"}),Object(q.jsxs)("div",{className:ge.a.filter,children:[Object(q.jsxs)("label",{children:[Object(q.jsx)("input",{type:"checkbox",checked:!!g,onChange:function(e){e.currentTarget.checked?h(ve({userId:t})):h(ve({userId:""}))}}),"show my private packs"]}),Object(q.jsxs)("label",{children:["Search packs by name: ",Object(q.jsx)("input",{placeholder:"Press Enter to search",onKeyPress:function(e){"Enter"===e.key&&h(ve({nameToSearch:S}))},value:S,onChange:function(e){return x(e.currentTarget.value)}})]}),Object(q.jsxs)("div",{className:ge.a.rangeContainer,children:["Search packs by cards count:",Object(q.jsx)(Re,{minValue:O,maxValue:p,onValuesChange:v,maxRangeLimit:200})]})]}),n&&Object(q.jsx)("div",{className:ge.a.error,children:n}),Object(q.jsx)(Ae,{cardPacks:o,authUserId:t,requestStatus:l}),Object(q.jsx)("div",{className:ge.a.pagination,children:Object(q.jsx)(Ee,{current:s,pageCount:d,total:c,onChange:C,requestStatus:l})})]}):Object(q.jsx)(i.a,{to:tt.LOGIN})},qe=n(78),Ue=n.n(qe),De={requestStatus:"idle",error:"",cards:[],packUserId:"",cardsTotalCount:0,page:1,pageCount:10,sortParams:{question:"",answer:"",sortDirection:a.Down,propToSortBy:void 0,minGrade:0,maxGrade:5,page:1,pageCount:10}},Le=function(e){return{type:"CARDS/SET-REQUEST-STATUS",requestStatus:e}},Ge=function(e){return{type:"CARDS/SET-ERROR",error:e}},Fe=function(e){return{type:"CARDS/SET-SORT-PARAMS",sortParams:e}},Ke=function(e,t,n,a,r){return{type:"CARDS/SET-CARDS",cards:e,packUserId:t,page:n,cardsTotalCount:a,pageCount:r}},Be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n,a){t&&n(Fe(t));var r=a().cards.sortParams;n(Le("loading")),E(e,r).then((function(e){n(Ke(e.data.cards,e.data.packUserId,e.data.page,e.data.cardsTotalCount,e.data.pageCount)),n(Le("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(Ge(t)),n(Le("failed"))}))}},Ve=function(e){var t=e.cards,n=e.packId,c=e.packUserId,s=e.authUserId,o=e.requestStatus,i=Object(r.useState)(!1),d=Object(u.a)(i,2),l=d[0],j=d[1],O=Object(b.b)(),p=function(e){O(function(e,t){return function(n){n(Le("loading")),_(t).then((function(){n(Be(e)),n(Le("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(Ge(t)),n(Le("failed"))}))}}(n,e))},g=function(e){O(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;return function(r){r(Le("loading")),w(t,n,a).then((function(){r(Be(e)),r(Le("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";r(Ge(t)),r(Le("failed"))}))}}(n,e))},h=t.map((function(e){return{key:e._id,question:e.question,answer:e.answer,grade:e.grade,updated:e.updated,packId:e.cardsPack_id,buttons:{cardId:e._id,cardUserId:e.user_id}}})),f=[{title:"Question",dataIndex:"question",key:"question"},{title:"Answer",dataIndex:"answer",key:"answer"},{title:"Grade",dataIndex:"grade",key:"grade",sorter:!0},{title:"Last Update",dataIndex:"updated",key:"updated"},{title:"Pack ID",dataIndex:"packId",key:"packId"},{title:function(){return Object(q.jsx)("button",{onClick:function(){return j(!0)},disabled:c!==s,children:"Add"})},dataIndex:"buttons",key:"buttons",render:function(e){var t=e.cardId,n=e.cardUserId;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("button",{onClick:function(){return p(t)},disabled:n!==s,children:"Delete"}),Object(q.jsx)("button",{onClick:function(){return g(t)},disabled:n!==s,children:"Update"})]})}}];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ye.a,{columns:f,dataSource:h,onChange:function(e,t,r){"grade"===r.columnKey&&"ascend"===r.order?O(Be(n,{sortDirection:a.Down,propToSortBy:"grade"})):"grade"===r.columnKey&&"descend"===r.order?O(Be(n,{sortDirection:a.Up,propToSortBy:"grade"})):"grade"===r.columnKey&&void 0===r.order&&O(Be(n,{sortDirection:a.Up,propToSortBy:"updated"}))},pagination:!1,style:{width:"100%"},size:"small",loading:"loading"===o}),l&&Object(q.jsx)(Ie,{show:l,setShow:j,inputLabels:["Question: ","Answer: "],itemToAdd:"card",onAddBtnClick:function(e){O(function(e,t){return function(n){n(Le("loading")),y(e,t).then((function(){n(Be(e,t)),n(Le("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(Ge(t)),n(Le("failed"))}))}}(n,{question:e[0],answer:e[1]}))}})]})},We=function(){var e=Object(b.c)((function(e){return e.auth.isLoggedIn})),t=Object(b.c)((function(e){return e.auth._id})),n=Object(i.h)().packId,a=Object(b.c)((function(e){return e.cards.sortParams})),c=a.minGrade,s=a.maxGrade,o=Object(b.c)((function(e){return e.cards})),d=o.cards,l=o.packUserId,O=o.cardsTotalCount,p=o.page,g=o.pageCount,h=o.error,f=o.requestStatus,m=Object(b.c)((function(e){return e.packs.cardPacks})),S=Object(b.b)(),x=Object(r.useState)(""),v=Object(u.a)(x,2),C=v[0],T=v[1],k=Object(r.useState)(""),R=Object(u.a)(k,2),P=R[0],E=R[1];Object(r.useEffect)((function(){return e&&n&&S(Be(n)),function(){S(Ke([],"",1,0,10))}}),[]);var y=Object(r.useCallback)((function(e){var t=Object(u.a)(e,2),a=t[0],r=t[1];S(Be(n,{minGrade:a,maxGrade:r}))}),[n,S]),_=Object(r.useCallback)((function(e,t){S(Be(n,{page:e,pageCount:t}))}),[n,S]),w=m.some((function(e){return e._id===n}));return e?e&&!n||e&&!w?Object(q.jsx)(i.a,{to:tt.PACKS}):Object(q.jsxs)("div",{className:Ue.a.cards,children:[Object(q.jsx)("h2",{children:Object(q.jsx)(j.b,{to:tt.PACKS,activeClassName:Ue.a.active,children:"\u23f4 Packs"})}),Object(q.jsxs)("div",{className:Ue.a.filter,children:[Object(q.jsxs)("label",{children:["Search cards by question: ",Object(q.jsx)("input",{placeholder:"Press Enter to search",onKeyPress:function(e){"Enter"===e.key&&S(Be(n,{question:P}))},value:P,onChange:function(e){return E(e.currentTarget.value)}})]}),Object(q.jsxs)("label",{children:["Search cards by answer: ",Object(q.jsx)("input",{placeholder:"Press Enter to search",onKeyPress:function(e){"Enter"===e.key&&S(Be(n,{answer:C}))},value:C,onChange:function(e){return T(e.currentTarget.value)}})]}),Object(q.jsxs)("div",{className:Ue.a.rangeContainer,children:["Search cards by grade:",Object(q.jsx)(Re,{minValue:c,maxValue:s,onValuesChange:y,maxRangeLimit:5})]})]}),h&&Object(q.jsx)("div",{className:Ue.a.error,children:h}),Object(q.jsx)(Ve,{cards:d,packId:n,packUserId:l,authUserId:t,requestStatus:f}),Object(q.jsx)("div",{className:Ue.a.pagination,children:Object(q.jsx)(Ee,{current:p,pageCount:g,total:O,onChange:_,requestStatus:f})})]}):Object(q.jsx)(i.a,{to:tt.LOGIN})},ze={status:"idle",error:null,isInitialized:!1},Qe=function(e){return{type:"APP/SET-STATUS",status:e}},He=function(e){return{type:"APP/SET-ERROR",error:e}},Me=function(e){return{type:"APP/SET-INITIALIZED",isInitialized:e}},Je=n(172),Ze=n(58),Xe=n(128),$e=n.n(Xe),Ye=function(e){for(var t=Object(_e.a)(e),n=t.reduce((function(e,t){return e+(6-t.grade)}),0),a=Math.random()*n,r=0,c=0;c<a;)r=(c+=6-t[r].grade)>a?r++:r;return t[r]},et=function(){var e=Object(b.c)((function(e){return e.auth.isLoggedIn})),t=Object(i.g)(),n=Object(r.useState)(!1),a=Object(u.a)(n,2),c=a[0],s=a[1],o=Object(i.h)().packId,d=Object(b.c)((function(e){return e.cards})),l=d.cards,O=d.error,p=Object(b.c)((function(e){return e.packs.cardPacks})),g=Object(b.b)(),h=Object(r.useState)(!0),f=Object(u.a)(h,2),m=f[0],S=f[1],x=Object(r.useState)({_id:"",user_id:"",cardsPack_id:"",answer:"",question:"",grade:0,shots:0,type:"card",rating:0,comments:"",created:new Date,updated:new Date}),v=Object(u.a)(x,2),C=v[0],T=v[1];Object(r.useEffect)((function(){m&&(g(Be(o)),S(!1)),l.length>0&&T(Ye(l))}),[g,o,l,m]);var k=function(e){g(function(e,t){return function(n){n(Le("loading")),I(e,t).then((function(e){n(function(e,t){return{type:"CARDS/SET-NEW-GRADE",grade:e,cardId:t}}(e.data.updatedGrade.grade,e.data.updatedGrade.card_id)),n(Le("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";n(Ge(t)),n(Le("failed"))}))}}(e&&+e||0,C._id)),T(Ye(l)),s(!1)},R=p.some((function(e){return e._id===o}));return e?R?Object(q.jsxs)(we,{show:!0,enableBackground:!0,modalWidthPx:800,modalHeightPx:600,backgroundOnClick:function(){return t.goBack()},children:[Object(q.jsx)("h2",{children:Object(q.jsx)(j.b,{to:tt.PACKS,activeClassName:$e.a.active,children:"\u23f4 Packs"})}),O&&Object(q.jsx)("div",{className:$e.a.error,children:O}),Object(q.jsx)("div",{children:"Question:"}),Object(q.jsx)("div",{children:C.question}),Object(q.jsx)("button",{onClick:function(){return s(!0)},children:"Check answer"}),c&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{children:"Answer:"}),Object(q.jsx)("div",{children:C.answer}),Object(q.jsx)("button",{onClick:function(e){return k(e.currentTarget.dataset.grade)},"data-grade":"1",children:"\u041d\u0435 \u0437\u043d\u0430\u043b/Didn\u2019t know"}),Object(q.jsx)("button",{onClick:function(e){return k(e.currentTarget.dataset.grade)},"data-grade":"2",children:"\u0417\u0430\u0431\u044b\u043b/Forgot"}),Object(q.jsx)("button",{onClick:function(e){return k(e.currentTarget.dataset.grade)},"data-grade":"3",children:"\u0414\u043e\u043b\u0433\u043e \u0434\u0443\u043c\u0430\u043b/Thought too long"}),Object(q.jsx)("button",{onClick:function(e){return k(e.currentTarget.dataset.grade)},"data-grade":"4",children:"\u041f\u043e\u0447\u0442\u0438 \u0443\u0433\u0430\u0434\u0430\u043b/Nearly guessed"}),Object(q.jsx)("button",{onClick:function(e){return k(e.currentTarget.dataset.grade)},"data-grade":"5",children:"\u0417\u043d\u0430\u043b/I knew it"}),Object(q.jsxs)("div",{children:[Object(q.jsx)(j.b,{to:tt.PACKS,activeClassName:$e.a.active,children:" Cancel "}),Object(q.jsx)("button",{children:"Next"})]})]})]}):Object(q.jsx)(i.a,{to:tt.PACKS}):Object(q.jsx)(i.a,{to:tt.LOGIN})},tt={LOGIN:"/login",REGISTER:"/register",FORGOT:"/forgot",SET_PASSWORD:"/set-new-password",PROFILE:"/profile",PACKS:"/packs",CARDS:"/cards",LEARN:"/learn"},nt=function(){var e=Object(b.c)((function(e){return e.app.isInitialized})),t=Object(b.b)();Object(r.useEffect)((function(){t((function(e){e(Qe("loading")),h().then((function(t){e(K(t.data._id,t.data.email,t.data.name,t.data.avatar,!0)),e(Qe("success")),e(Me(!0))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(He(n)),e(Qe("failed")),setTimeout((function(){e(He(""))}),3e3),e(Me(!0))}))}))}),[]);var n=Object(q.jsx)(Ze.a,{style:{fontSize:24},spin:!0});return e?Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(Oe,{}),Object(q.jsxs)(i.d,{children:[Object(q.jsx)(i.b,{exact:!0,path:["/","".concat(tt.PROFILE)],render:function(){return Object(q.jsx)(le,{})}}),Object(q.jsx)(i.b,{path:tt.REGISTER,render:function(){return Object(q.jsx)($,{})}}),Object(q.jsx)(i.b,{path:tt.FORGOT,render:function(){return Object(q.jsx)(U,{})}}),Object(q.jsx)(i.b,{path:"".concat(tt.SET_PASSWORD,"/:token?"),render:function(){return Object(q.jsx)(re,{})}}),Object(q.jsx)(i.b,{path:tt.LOGIN,render:function(){return Object(q.jsx)(Q,{})}}),Object(q.jsx)(i.b,{path:tt.PACKS,render:function(){return Object(q.jsx)(Ne,{})}}),Object(q.jsx)(i.b,{path:"".concat(tt.CARDS,"/:packId?"),render:function(){return Object(q.jsx)(We,{})}}),Object(q.jsx)(i.b,{path:"".concat(tt.LEARN,"/:packId?"),render:function(){return Object(q.jsx)(et,{})}}),Object(q.jsx)(i.b,{path:"/404",render:function(){return Object(q.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(q.jsx)(i.a,{from:"*",to:"/404"})]})]}):Object(q.jsx)("div",{style:{position:"fixed",top:"50%",textAlign:"center",width:"100%"},children:Object(q.jsx)(Je.a,{indicator:n})})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,294)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},rt=n(129),ct=n(174),st={},ot=Object(rt.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-AUTH-USER-DATA":return Object(O.a)(Object(O.a)({},e),t.payload);case"AUTH/SET-REQUEST-STATUS":return Object(O.a)(Object(O.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"AUTH/SET-ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/SUCCESS_REGISTER":return Object(O.a)(Object(O.a)({},e),{},{responseText:t.text});case"REGISTER/SET-REGISTRATION":return Object(O.a)(Object(O.a)({},e),{},{isRegistration:t.isRegistration,responseText:!0===e.isRegistration?"":e.responseText});default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/SET-REQUEST-STATUS":return Object(O.a)(Object(O.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"FORGOT/SET-ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error,info:""});case"FORGOT/SET-INFO":return Object(O.a)(Object(O.a)({},e),{},{info:t.info,error:""});default:return e}},setPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PASSWORD/SET-REQUEST-STATUS":return Object(O.a)(Object(O.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"SET-PASSWORD/SET-ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error,info:""});case"SET-PASSWORD/SET-INFO":return Object(O.a)(Object(O.a)({},e),{},{info:t.info,error:""});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;return t.type,e},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PACKS/SET-PACKS":return Object(O.a)(Object(O.a)({},e),{},{cardPacks:t.cardPacks,cardPacksTotalCount:t.cardPacksTotalCount,page:t.page,pageCount:t.pageCount});case"PACKS/SET-REQUEST-STATUS":return Object(O.a)(Object(O.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"PACKS/SET-ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error});case"PACKS/SET-SORT-PARAMS":return Object(O.a)(Object(O.a)({},e),{},{sortParams:Object(O.a)(Object(O.a)({},e.sortParams),t.sortParams)});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS/SET-REQUEST-STATUS":return Object(O.a)(Object(O.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"CARDS/SET-ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error});case"CARDS/SET-SORT-PARAMS":return Object(O.a)(Object(O.a)({},e),{},{sortParams:Object(O.a)(Object(O.a)({},e.sortParams),t.sortParams)});case"CARDS/SET-CARDS":return Object(O.a)(Object(O.a)({},e),{},{cards:t.cards,packUserId:t.packUserId,page:t.page,cardsTotalCount:t.cardsTotalCount,pageCount:t.pageCount});case"CARDS/SET-NEW-GRADE":return Object(O.a)(Object(O.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t.cardId?Object(O.a)(Object(O.a)({},e),{},{grade:t.grade}):e}))});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(O.a)(Object(O.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error});case"APP/SET-INITIALIZED":return Object(O.a)(Object(O.a)({},e),{},{isInitialized:t.isInitialized});default:return e}}}),it=Object(rt.c)(ot,Object(rt.a)(ct.a));window.store=it,o.a.render(Object(q.jsx)(b.a,{store:it,children:Object(q.jsx)(j.a,{children:Object(q.jsx)(nt,{})})}),document.getElementById("root")),at()},55:function(e,t,n){e.exports={login:"Login_login__2ck6i",notice:"Login_notice__3_Xcq",loading:"Login_loading__1oP3o",error:"Login_error__1oq8R"}},62:function(e,t,n){e.exports={packs:"Packs_packs__11aat",filter:"Packs_filter__3-7jv",rangeContainer:"Packs_rangeContainer__1utv6",error:"Packs_error__3ODBf",pagination:"Packs_pagination__3tqEx"}},66:function(e,t,n){e.exports={header:"Header_header__10VB5",active:"Header_active__3B1Kt"}},78:function(e,t,n){e.exports={cards:"Cards_cards__1nz5C",filter:"Cards_filter__3iNkp",rangeContainer:"Cards_rangeContainer__1ny9W",error:"Cards_error__2Xcy8",pagination:"Cards_pagination__34Qpn"}},90:function(e,t,n){e.exports={setPassword:"SetPassword_setPassword__ji0HF",loading:"SetPassword_loading__2N13G",error:"SetPassword_error__8FOW9"}},99:function(e,t,n){e.exports={forgot:"Forgot_forgot__3iT7N",loading:"Forgot_loading__2vdJ9",error:"Forgot_error__2B138"}}},[[286,1,2]]]);
//# sourceMappingURL=main.86438268.chunk.js.map