import{_ as v}from"./GuestLayout-86f394ff.js";import{_ as V}from"./InputError-7912237e.js";import{_ as x}from"./InputLabel-d61a4ca6.js";import{_ as I}from"./PrimaryButton-6554866b.js";import{_ as L}from"./TextInput-df183c08.js";import{X as B,g as U,P as f,c as P,w as d,l as a,o as u,a as e,b as t,h,y as q,f as c,k as E,t as C,F,d as p,n as N,e as T}from"./app-37c75056.js";import{_ as G}from"./ApplicationLogo-7727b4fb.js";const H={components:{GuestLayout:v,InputError:V,InputLabel:x,PrimaryButton:I,TextInput:L,Head:B,Link:U,useForm:f},props:{institutions:Object},setup(){const l=f({name:"",username:"",institution_id:"",email:"",password:"",password_confirmation:"",terms:!1});return{form:l,submit:()=>{l.post(route("register"),{onFinish:()=>l.reset("password","password_confirmation")})}}}},R={class:"mt-4"},S={class:"mt-4"},j={class:"mt-4"},D=["value"],M={class:"mt-4"},z={class:"mt-4"},A={class:"flex items-center justify-end mt-4"};function O(l,r,_,o,X,J){const g=a("Head"),n=a("InputLabel"),i=a("TextInput"),m=a("InputError"),w=a("Link"),y=a("PrimaryButton"),b=a("GuestLayout");return u(),P(b,null,{default:d(()=>[e(g,{title:"Register"}),t("form",{onSubmit:r[6]||(r[6]=T((...s)=>o.submit&&o.submit(...s),["prevent"]))},[t("div",null,[e(n,{for:"name",value:"Name"}),e(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:o.form.name,"onUpdate:modelValue":r[0]||(r[0]=s=>o.form.name=s),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o.form.errors.name},null,8,["message"])]),t("div",R,[e(n,{for:"username",value:"Username"}),e(i,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:o.form.username,"onUpdate:modelValue":r[1]||(r[1]=s=>o.form.username=s),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o.form.errors.username},null,8,["message"])]),t("div",S,[e(n,{for:"email",value:"Email"}),e(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":r[2]||(r[2]=s=>o.form.email=s),required:"",autocomplete:"username"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o.form.errors.email},null,8,["message"])]),t("div",j,[e(n,{for:"Institution",value:"Institution"}),h(t("select",{id:"institution",class:"border-gray-300 bg-gray-900 text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full","onUpdate:modelValue":r[3]||(r[3]=s=>o.form.institution_id=s)},[(u(!0),c(F,null,E(_.institutions,(s,k)=>(u(),c("option",{key:k,value:s.id},C(s.name),9,D))),128))],512),[[q,o.form.institution_id]]),e(m,{class:"mt-2",message:o.form.errors.institution_id},null,8,["message"])]),t("div",M,[e(n,{for:"password",value:"Password"}),e(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":r[4]||(r[4]=s=>o.form.password=s),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o.form.errors.password},null,8,["message"])]),t("div",z,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o.form.password_confirmation,"onUpdate:modelValue":r[5]||(r[5]=s=>o.form.password_confirmation=s),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o.form.errors.password_confirmation},null,8,["message"])]),t("div",A,[e(w,{href:l.route("login"),class:"underline text-sm text-gray-300 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[p(" Already registered? ")]),_:1},8,["href"]),e(y,{class:N(["ml-4",{"opacity-25":o.form.processing}]),disabled:o.form.processing},{default:d(()=>[p(" Register ")]),_:1},8,["class","disabled"])])],32)]),_:1})}const eo=G(H,[["render",O]]);export{eo as default};