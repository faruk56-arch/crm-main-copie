(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c057"],{"/AE+":function(n,t,e){},"83FQ":function(n,t,e){"use strict";var o=e("Mera");e.n(o).a},"MN/A":function(n,t,e){"use strict";var o=e("/AE+");e.n(o).a},Mera:function(n,t,e){},c11S:function(n,t,e){"use strict";var o=e("gTgX");e.n(o).a},gTgX:function(n,t,e){},ntYl:function(n,t,e){"use strict";e.r(t);var o=e("ETGp"),s={name:"SocialSignin",methods:{wechatHandleClick:function(n){alert("ok")},tencentHandleClick:function(n){alert("ok")}}},a=(e("83FQ"),e("KHd+")),i=Object(a.a)(s,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(t){n.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v(" 微信\n  ")]),n._v(" "),e("div",{staticClass:"sign-btn",on:{click:function(t){n.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v(" QQ\n  ")])])},[],!1,null,"e89b5c7a",null);i.options.__file="socialsignin.vue";var r=i.exports,c={name:"Login",components:{LangSelect:o.a,SocialSign:r},data:function(){return{loginForm:{username:"",password:"",code:""},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:function(n,t,e){t.length<6?e(new Error("The password can not be less than 6 digits")):e()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(n){this.redirect=n.query&&n.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return n.loading=!1,!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:n.redirect||"/"})}).catch(function(){n.loading=!1}),n.loading=!1})}}},l=(e("c11S"),e("MN/A"),Object(a.a)(c,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[n._v("Identification")])]),n._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),e("el-input",{attrs:{placeholder:"Email",name:"username",type:"email","auto-complete":"on"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),e("el-input",{attrs:{type:n.passwordType,placeholder:n.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.handleLogin(t):null}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),n._v(" "),e("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),e("el-input",{attrs:{placeholder:"Google Auth Code",name:"code",type:"text","auto-complete":"off"},model:{value:n.loginForm.code,callback:function(t){n.$set(n.loginForm,"code",t)},expression:"loginForm.code"}})],1),n._v(" "),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v("S'identifier")])],1)],1)},[],!1,null,"af97faea",null));l.options.__file="index.vue";t.default=l.exports}}]);