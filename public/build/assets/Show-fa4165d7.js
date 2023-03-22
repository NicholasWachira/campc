import{A}from"./AuthenticatedLayout-a25d5faf.js";import{_ as y,A as k}from"./ApplicationLogo-d76335e7.js";import{T as L}from"./Timeline-df6dc2ea.js";import{X as E,g as V,P as h,f as i,a as d,w as c,F as g,l as u,o as r,b as t,d as p,t as l,h as m,v as f,e as B,N as F,k as D}from"./app-c8fdf46f.js";const M={components:{AuthenticatedLayout:A,ApplicationLogo:k,Head:E,Link:V,Timeline:L,useForm:h},props:{post:Object},setup(n){const e=h({message:"",image:null});return{form:e,submit:()=>{e.post(route("comment.store",n.post.uuid)),e.reset()}}}},N={class:"p-5 mb-12 lg:mb-0"},S={class:"rounded-lg max-w-md w-full"},T={class:"flex items-center p-2"},Z=["src"],C={width:"15px",height:"15px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"verified",class:"shrink-0 icon glyph ml-1"},H=t("path",{d:"M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z",style:{fill:"#EAEF4D"}},null,-1),j=[H],I={class:"font-thin text-xs ml-2"},O={class:"text-xs ml-5"},P={class:"mt-2 mb-1"},R={class:"mb-5"},U={class:"pl-2 pr-2 whitespace-pre-wrap"},X=["src"],q=t("hr",null,null,-1),z={class:"p-2 mt-3"},G={class:"flex"},J=["disabled"],K={class:"mt-3"},Q=t("h1",{class:"mt-5 ml-3 text-lg font-bold"},"Comments",-1),W={class:"mt-3 flex items-center"},Y=["src"],$={width:"15px",height:"15px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"verified",class:"icon glyph ml-1"},t1=t("path",{d:"M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z",style:{fill:"#EAEF4D"}},null,-1),s1=[t1],e1={class:"ml-2 text-sm font-thin"},o1={class:"text-xs ml-2 font-thin"},l1={class:"mt-2"},a1=["src"];function i1(n,e,o,a,r1,n1){const x=u("Head"),_=u("Link"),b=u("AuthenticatedLayout");return r(),i(g,null,[d(x,{title:o.post.title},null,8,["title"]),d(b,null,{default:c(()=>[t("div",N,[t("div",S,[t("div",T,[t("img",{src:o.post.user.avatar,onError:e[0]||(e[0]=s=>s.target.src="/image/abc.png"),class:"rounded-full w-12 lg:w-14"},null,40,Z),d(_,{class:"font-extrabold text-md ml-3 hover:underline shrink-0",href:n.route("user.profile",o.post.user)},{default:c(()=>[p(l(o.post.user.name),1)]),_:1},8,["href"]),m((r(),i("svg",C,j,512)),[[f,o.post.user.isVerified]]),t("p",I,"@"+l(o.post.user.username),1),t("p",O,l(o.post.created_at),1)]),t("div",P,[t("div",R,[t("p",U,l(o.post.title),1),t("img",{src:o.post.image,class:"mt-3 rounded-2xl"},null,8,X)]),q,t("div",z,[t("form",{onSubmit:e[3]||(e[3]=B((...s)=>a.submit&&a.submit(...s),["prevent"]))},[t("div",G,[m(t("input",{type:"text",class:"w-full bg-gray-900 rounded-full","onUpdate:modelValue":e[1]||(e[1]=s=>a.form.message=s)},null,512),[[F,a.form.message]]),t("button",{class:"px-2 py-1 bg-gray-200 text-gray-900 font-extrabold ml-3 rounded-2xl",type:"submit",disabled:a.form.processing},"Reply",8,J)]),t("div",K,[t("input",{type:"file",class:"block w-1/2 text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-900 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",onInput:e[2]||(e[2]=s=>a.form.image=s.target.files[0])},null,32)])],32)]),Q,(r(!0),i(g,null,D(o.post.comments,(s,v)=>(r(),i("div",{class:"p-2",key:v},[t("div",W,[t("img",{src:s.user.avatar,onError:e[4]||(e[4]=w=>w.target.src="/image/abc.png"),class:"rounded-full w-12 lg:w-14"},null,40,Y),d(_,{class:"ml-2 font-semibold shrink-0 hover:underline",href:n.route("user.profile",s.user)},{default:c(()=>[p(l(s.user.name),1)]),_:2},1032,["href"]),m((r(),i("svg",$,s1,512)),[[f,s.user.isVerified]]),t("p",e1,"@"+l(s.user.username),1),t("p",o1,l(s.created_at),1)]),t("div",l1,[t("p",null,l(s.message),1),t("img",{src:s.image,class:"mt-2 rounded-2xl"},null,8,a1)])]))),128))])])])]),_:1})],64)}const _1=y(M,[["render",i1]]);export{_1 as default};