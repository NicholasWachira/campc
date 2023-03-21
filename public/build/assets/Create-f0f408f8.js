import{A as h}from"./AuthenticatedLayout-12411a1e.js";import{X as y,g as v,J as w,P as k,f as d,a as n,w as C,F as u,l as i,o as m,b as e,e as I,h as a,N as c,t as l,y as L,k as V,n as U}from"./app-acd1654f.js";import{_ as A}from"./InputError-fa2f385a.js";import{_ as E}from"./InputLabel-8b055f29.js";import{_ as F}from"./ApplicationLogo-b77676c2.js";const N={components:{AuthenticatedLayout:h,Head:y,Link:v,router:w,InputError:A,InputLabel:E},props:{institutions:Object},setup(){const r=k({name:"",username:"",institution_id:"",description:""});return{form:r,submit:()=>{r.post(route("group.store"),{onFinish:()=>r.reset("name","username","description")})}}}},B={class:"flex justify-center mt-2 text-white max-w-lg w-full lg:mb-0 mb-12"},D={class:"border p-6 rounded-lg max-w-md w-full ml-6 mr-6"},G=e("h1",{class:"text-center mb-3 text-2xl font-bold"},"Create Group",-1),H={class:"flex flex-col mt-3"},M=e("label",{class:"mb-2 text-center"},"Name",-1),S={class:"text-red-700 px-2 mt-2"},j={class:"flex flex-col mt-3"},z=e("label",{class:"mb-2 text-center"},"Username",-1),J={class:"text-red-700 px-2 mt-2"},O={class:"mt-4"},P=["value"],T={class:"flex flex-col mt-3"},W=e("label",{class:"mb-2 text-center"},"Description",-1),X={class:"text-red-700 px-2 mt-2"},q={class:"flex flex-col mt-5"},K=["disabled"];function Q(r,s,f,t,R,Y){const _=i("Head"),p=i("InputLabel"),b=i("InputError"),x=i("AuthenticatedLayout");return m(),d(u,null,[n(_,{title:"Create Group"}),n(x,null,{default:C(()=>[e("div",B,[e("div",D,[G,e("form",{onSubmit:s[4]||(s[4]=I((...o)=>t.submit&&t.submit(...o),["prevent"]))},[e("div",H,[M,a(e("input",{type:"text",class:"bg-gray-900 rounded-md outline-none",placeholder:"Creators Forum","onUpdate:modelValue":s[0]||(s[0]=o=>t.form.name=o)},null,512),[[c,t.form.name]]),e("div",S,l(t.form.errors.name),1)]),e("div",j,[z,a(e("input",{type:"text",class:"bg-gray-900 rounded-md outline-none",placeholder:"creatorsforum","onUpdate:modelValue":s[1]||(s[1]=o=>t.form.username=o)},null,512),[[c,t.form.username]]),e("div",J,l(t.form.errors.username),1)]),e("div",O,[n(p,{for:"Institution",value:"Institution"}),a(e("select",{id:"institution",class:"border-gray-300 bg-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full","onUpdate:modelValue":s[2]||(s[2]=o=>t.form.institution_id=o)},[(m(!0),d(u,null,V(f.institutions,(o,g)=>(m(),d("option",{key:g,value:o.id},l(o.name),9,P))),128))],512),[[L,t.form.institution_id]]),n(b,{class:"mt-2",message:t.form.errors.institution_id},null,8,["message"])]),e("div",T,[W,a(e("textarea",{class:"bg-gray-900 rounded-md outline-none resize-none",rows:"6",placeholder:"Where Creators come alive","onUpdate:modelValue":s[3]||(s[3]=o=>t.form.description=o)},null,512),[[c,t.form.description]]),e("div",X,l(t.form.errors.description),1)]),e("div",q,[e("button",{class:U(["bg-white text-gray-900 font-bold px-4 py-2 rounded-full",{"opacity-25":t.form.processing}]),disabled:t.form.processing},"Create Group",10,K)])],32)])])]),_:1})],64)}const se=F(N,[["render",Q]]);export{se as default};
