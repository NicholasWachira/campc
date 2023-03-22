import{q as x,h as b,s as w,u as s,o as i,f as h,x as v,P as V,c,w as d,a as t,X as $,t as B,p as f,b as r,e as C,d as u,g,n as N}from"./app-c8fdf46f.js";import{_ as q}from"./GuestLayout-dbe3c2da.js";import{_ as p}from"./InputError-d890747d.js";import{_ as k}from"./InputLabel-ffb108b4.js";import{_ as P}from"./PrimaryButton-d7a11304.js";import{_}from"./TextInput-cc5f8356.js";import"./ApplicationLogo-d76335e7.js";const R=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const m=l,n=x({get(){return m.checked},set(o){e("update:checked",o)}});return(o,a)=>b((i(),h("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":a[0]||(a[0]=y=>v(n)?n.value=y:null),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,R)),[[w,s(n)]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},L=["onSubmit"],D={class:"mt-4"},E={class:"block mt-4 shrink-0"},F={class:"flex items-center"},M=r("span",{class:"ml-2 text-sm text-white dark:text-gray-400"},"Remember me",-1),j={class:"flex items-center justify-between mt-4"},J={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=V({email:"",password:"",remember:!1}),m=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,o)=>(i(),c(q,null,{default:d(()=>[t(s($),{title:"Log in"}),l.status?(i(),h("div",U,B(l.status),1)):f("",!0),r("div",null,[r("form",{onSubmit:C(m,["prevent"])},[r("div",null,[t(k,{for:"email",value:"Email"}),t(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=a=>s(e).email=a),required:"",autofocus:"",autocomplete:"email"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",D,[t(k,{for:"password",value:"Password"}),t(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=a=>s(e).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",E,[r("label",F,[t(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=a=>s(e).remember=a)},null,8,["checked"]),M])]),r("div",j,[t(s(g),{href:n.route("register"),class:"text-sm text-gray-300 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[u(" Need an account? ")]),_:1},8,["href"]),l.canResetPassword?(i(),c(s(g),{key:0,href:n.route("password.request"),class:"ml-2 underline text-sm text-gray-300 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):f("",!0),t(P,{class:N(["ml-4 shrink-0",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,L)])]),_:1}))}};export{J as default};