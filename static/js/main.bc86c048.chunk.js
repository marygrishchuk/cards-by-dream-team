(this["webpackJsonpcards-by-dream-team"]=this["webpackJsonpcards-by-dream-team"]||[]).push([[0],{18:function(e,t,r){e.exports={header:"Header_header__10VB5",active:"Header_active__3B1Kt"}},20:function(e,t,r){e.exports={login:"Login_login__2ck6i",error:"Login_error__1oq8R"}},28:function(e,t,r){e.exports={forgot:"Forgot_forgot__3iT7N"}},31:function(e,t,r){e.exports={register:"Register_register__298wP"}},32:function(e,t,r){e.exports={setPassword:"SetPassword_setPassword__ji0HF"}},45:function(e,t,r){e.exports={profile:"Profile_profile__OylV9"}},52:function(e,t,r){},53:function(e,t,r){},77:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(21),a=r.n(s),c=(r(52),r(53),r(4)),o=r(14),i=r(28),u=r.n(i),l=r(6),d=r(7),j=r(2),b=r(42),O=r.n(b).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0/"}),f=function(){return O.post("auth/me")},h=function(e){return O.post("auth/login",e)},p=function(e){return O.post("auth/register",e)},g=function(){return O.delete("auth/me")},S=function(e){return O.post("auth/forgot",{email:e,from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\">\n                 password recovery link:\n                 <a href='http://marygrishchuk.github.io/cards-by-dream-team/#/set-new-password/$token$'>\n                 Reset Password</a></div>"})},m=function(e){return O.post("auth/set-new-password",e)},x={requestStatus:"idle",error:"",info:""},v=function(e){return{type:"FORGOT/SET-REQUEST-STATUS",requestStatus:e}},T=r(1),E=function(){var e=Object(d.c)((function(e){return e.forgot})),t=e.requestStatus,r=e.error,s=e.info,a=Object(d.b)(),c=Object(n.useState)(""),i=Object(o.a)(c,2),j=i[0],b=i[1];return Object(T.jsxs)("div",{className:u.a.forgot,children:["Please enter your email, and we'll send you a link to reset your password.","loading"===t?Object(T.jsx)("div",{style:{color:"green"},children:"loading..."}):s&&Object(T.jsx)("i",{children:s}),r&&Object(T.jsx)("div",{style:{color:"red"},children:r}),Object(T.jsx)("input",{type:"email",value:j,onChange:function(e){b(e.currentTarget.value.trim())}}),Object(T.jsx)("button",{onClick:function(){a(function(e){return function(t){t(v("loading")),S(e).then((function(e){t({type:"FORGOT/SET-INFO",info:e.data.info}),t(v("success"))})).catch((function(e){var r=e.response?e.response.data.error:e.message+", more details in the console";t(function(e){return{type:"FORGOT/SET-ERROR",error:e}}(r)),t(v("failed"))}))}}(j))},disabled:"loading"===t,children:"Send"}),Object(T.jsx)(l.b,{to:"/login",activeClassName:u.a.active,children:"Log in"})]})},R=r(20),w=r.n(R),y=r(47),P={_id:"",email:"",name:"",error:"",isLoggedIn:!1,requestStatus:"idle"},_=function(e,t,r,n){return{type:"AUTH/SET-AUTH-USER-DATA",payload:{_id:e,email:t,name:r,isLoggedIn:n}}},N=function(e){return{type:"AUTH/SET-REQUEST-STATUS",requestStatus:e}},C=function(e){return{type:"AUTH/SET-ERROR",error:e}},A=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.auth.isLoggedIn})),r=Object(y.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var r;e((r=t,function(e){e(N("loading")),h(r).then((function(t){e(_(t.data._id,t.data.email,t.data.name,!0)),e(N("success"))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(C(r)),e(N("failed"))}))}))}});return t?Object(T.jsx)(c.a,{to:"/profile"}):Object(T.jsx)("form",{onSubmit:r.handleSubmit,children:Object(T.jsxs)("div",{className:w.a.login,children:[Object(T.jsx)("label",{children:"Email"}),Object(T.jsx)("input",Object(j.a)({type:"email"},r.getFieldProps("email"))),r.errors.email?Object(T.jsx)("div",{className:w.a.error,children:r.errors.email}):null,Object(T.jsx)("label",{children:"Password"}),Object(T.jsx)("input",Object(j.a)({type:"password"},r.getFieldProps("password"))),r.errors.password?Object(T.jsx)("div",{className:w.a.error,children:r.errors.password}):null,Object(T.jsx)(l.b,{to:"/forgot",activeClassName:w.a.active,children:"Forgot password?"}),Object(T.jsxs)("label",{children:["Remember Me",Object(T.jsx)("input",Object(j.a)(Object(j.a)({type:"checkbox"},r.getFieldProps("rememberMe")),{},{checked:r.values.rememberMe}))]}),Object(T.jsx)("button",{type:"submit",color:"primary",children:"Login"}),Object(T.jsx)(l.b,{to:"/register",activeClassName:w.a.active,children:"Registration"})]})})},U=r(31),F=r.n(U),q={responseText:"",isRegistration:!1},k=function(e){return{type:"REGISTER/SUCCESS_REGISTER",text:e}},I=function(){var e=Object(d.c)((function(e){return e.register.responseText})),t=Object(d.c)((function(e){return e.register.isRegistration})),r=Object(d.b)(),s=Object(n.useState)(""),a=Object(o.a)(s,2),i=a[0],u=a[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),O=b[0],f=b[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),S=g[0],m=g[1],x={email:i,password:O},v=O!==S;return t?Object(T.jsx)(c.a,{to:"/login"}):Object(T.jsxs)("div",{className:F.a.register,children:[Object(T.jsx)("h1",{children:e}),"Register",Object(T.jsx)("input",{type:"email",placeholder:"email",onChange:function(e){return u(e.currentTarget.value)}}),Object(T.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return f(e.currentTarget.value)}}),Object(T.jsx)("input",{type:"password",placeholder:"confirm password",onChange:function(e){return m(e.currentTarget.value)}}),Object(T.jsx)("button",{onClick:function(){r(function(e){return function(t){p(e).then((function(e){t(k("success")),setTimeout((function(){t({type:"REGISTER/SET-LOGIN"})}),3e3)})).catch((function(e){t(k(e.response.data.error)),setTimeout((function(){t(k(""))}),3e3)}))}}(x))},disabled:v,children:"Register"}),Object(T.jsx)(l.b,{to:"/login",activeClassName:F.a.active,children:"Log in"})]})},L=r(32),G=r.n(L),H={requestStatus:"idle",error:"",info:""},D=function(e){return{type:"SET-PASSWORD/SET-REQUEST-STATUS",requestStatus:e}},W=function(){var e=Object(d.c)((function(e){return e.setPassword})),t=e.requestStatus,r=e.error,s=e.info,a=Object(d.b)(),i=Object(c.g)().token,u=Object(n.useState)(""),j=Object(o.a)(u,2),b=j[0],O=j[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),p=h[0],g=h[1],S=Object(n.useState)(""),x=Object(o.a)(S,2),v=x[0],E=x[1];return"success"===t?Object(T.jsx)(c.a,{to:"/login"}):Object(T.jsxs)("div",{className:G.a.setPassword,children:["Please enter your new password in each field.","loading"===t?Object(T.jsx)("div",{style:{color:"green"},children:"loading..."}):s&&Object(T.jsx)("i",{children:s}),r&&Object(T.jsx)("div",{style:{color:"red"},children:r}),v&&Object(T.jsx)("div",{style:{color:"red"},children:v}),Object(T.jsx)("input",{type:"password",value:b,onChange:function(e){O(e.currentTarget.value)},onKeyPress:function(){return E("")}}),Object(T.jsx)("input",{type:"password",value:p,onChange:function(e){g(e.currentTarget.value)},onKeyPress:function(){return E("")}}),Object(T.jsx)("button",{onClick:function(){var e,t;b===p?a((e=b,t=i,function(r){r(D("loading")),m({password:e,resetPasswordToken:t}).then((function(e){r({type:"SET-PASSWORD/SET-INFO",info:e.data.info}),r(D("success"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";r(function(e){return{type:"SET-PASSWORD/SET-ERROR",error:e}}(t)),r(D("failed"))}))})):E("Passwords don't match.")},disabled:"loading"===t,children:"Submit"}),Object(T.jsx)(l.b,{to:"/login",activeClassName:G.a.active,children:"Log in"})]})},Q=r(45),B=r.n(Q),M=function(){var e=Object(d.c)((function(e){return e.auth})),t=e.email,r=e.name,s=e.error,a=e.isLoggedIn,o=e.requestStatus,i=Object(d.b)();Object(n.useEffect)((function(){a||i((function(e){e(N("loading")),f().then((function(t){e(_(t.data._id,t.data.email,t.data.name,!0)),e(N("success"))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(C(r)),e(N("failed"))}))}))}),[]);return a?Object(T.jsxs)("div",{className:B.a.profile,children:["Welcome!","loading"===o&&Object(T.jsx)("div",{style:{color:"green"},children:"loading..."}),s&&Object(T.jsx)("div",{style:{color:"red"},children:s}),Object(T.jsx)("div",{children:r}),Object(T.jsx)("div",{children:t}),Object(T.jsx)("button",{onClick:function(){i((function(e){e(N("loading")),g().then((function(){e(_("","","",!1)),e(N("success"))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(C(r)),e(N("failed"))}))}))},disabled:"loading"===o,children:"Log out"})]}):Object(T.jsx)(c.a,{to:"/login"})},K=r(18),V=r.n(K),J=function(){return Object(T.jsxs)("div",{className:V.a.header,children:[Object(T.jsx)(l.b,{to:"/login",activeClassName:V.a.active,children:"Login"}),Object(T.jsx)(l.b,{to:"/register",activeClassName:V.a.active,children:"Register"}),Object(T.jsx)(l.b,{to:"/forgot",activeClassName:V.a.active,children:"Forgot"}),Object(T.jsx)(l.b,{to:"/set-new-password",activeClassName:V.a.active,children:"Set New Password"}),Object(T.jsx)(l.b,{to:"/profile",activeClassName:V.a.active,children:"Profile"})]})},$=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(J,{}),Object(T.jsxs)(c.d,{children:[Object(T.jsx)(c.b,{exact:!0,path:["/","/login"],render:function(){return Object(T.jsx)(A,{})}}),Object(T.jsx)(c.b,{path:"/register",render:function(){return Object(T.jsx)(I,{})}}),Object(T.jsx)(c.b,{path:"/forgot",render:function(){return Object(T.jsx)(E,{})}}),Object(T.jsx)(c.b,{path:"/set-new-password/:token?",render:function(){return Object(T.jsx)(W,{})}}),Object(T.jsx)(c.b,{path:"/profile",render:function(){return Object(T.jsx)(M,{})}}),Object(T.jsx)(c.b,{path:"/404",render:function(){return Object(T.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(T.jsx)(c.a,{from:"*",to:"/404"})]})]})},z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,78)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))},X=r(25),Y=r(46),Z={},ee=Object(X.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-AUTH-USER-DATA":return Object(j.a)(Object(j.a)({},e),t.payload);case"AUTH/SET-REQUEST-STATUS":return Object(j.a)(Object(j.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"AUTH/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/SUCCESS_REGISTER":return Object(j.a)(Object(j.a)({},e),{},{responseText:t.text});case"REGISTER/SET-LOGIN":return Object(j.a)(Object(j.a)({},e),{},{isRegistration:!0});default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/SET-REQUEST-STATUS":return Object(j.a)(Object(j.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"FORGOT/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error,info:""});case"FORGOT/SET-INFO":return Object(j.a)(Object(j.a)({},e),{},{info:t.info,error:""});default:return e}},setPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-PASSWORD/SET-REQUEST-STATUS":return Object(j.a)(Object(j.a)({},e),{},{requestStatus:t.requestStatus,error:"success"===t.requestStatus?"":e.error});case"SET-PASSWORD/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error,info:""});case"SET-PASSWORD/SET-INFO":return Object(j.a)(Object(j.a)({},e),{},{info:t.info,error:""});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),te=Object(X.c)(ee,Object(X.a)(Y.a));window.store=te,a.a.render(Object(T.jsx)(d.a,{store:te,children:Object(T.jsx)(l.a,{children:Object(T.jsx)($,{})})}),document.getElementById("root")),z()}},[[77,1,2]]]);
//# sourceMappingURL=main.bc86c048.chunk.js.map