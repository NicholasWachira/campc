import{P as d,c as u,w as l,o as i,a as t,u as s,X as c,f as _,t as f,p,b as a,d as w,n as g,e as x}from"./app-9ca35a02.js";import{_ as y}from"./GuestLayout-7ac49b3e.js";import{_ as b}from"./InputError-863d7ba8.js";import{_ as k}from"./InputLabel-d18d6ff9.js";import{_ as h}from"./PrimaryButton-5d698139.js";import{_ as V}from"./TextInput-1b31b370.js";import"./ApplicationLogo-4b9e951c.js";const v=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(P,r)=>(i(),u(y,null,{default:l(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(i(),_("div",N,f(o.status),1)):p("",!0),a("form",{onSubmit:x(m,["prevent"])},[a("div",null,[t(k,{for:"email",value:"Email"}),t(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(b,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",B,[t(h,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:l(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{D as default};
