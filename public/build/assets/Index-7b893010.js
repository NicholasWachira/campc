import{A as g,d as v,T as k}from"./AuthenticatedLayout-60283c74.js";import{X as y,g as b,f as i,a,w as u,F as A,l as o,o as n,b as t,t as l,h as r,v as c,c as B,d as F,p as m}from"./app-37c75056.js";import{T as L}from"./Timeline-6b1ee10e.js";import{F as j}from"./FollowButton-6cc3a84f.js";import{_ as C}from"./ApplicationLogo-7727b4fb.js";const T={components:{AuthenticatedLayout:g,Head:y,Link:b,Timeline:L,Navbar:v,Trending:k,FollowButton:j},props:{user:Object,follows:Boolean}},N={class:"flex ml-5 mr-5 mt-5 mb-5 lg:mb-2 text-white"},V={class:"max-w-lg w-full mx-auto text-white"},D={class:"border rounded-2xl p-5"},H=["src"],I={class:"flex justify-center items-center mt-3"},Z={class:"text-white text-center text-lg font-bold"},E={width:"15px",height:"15px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"verified",class:"icon glyph ml-1"},M=t("path",{d:"M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z",style:{fill:"#5D87FF"}},null,-1),S=[M],O={class:"text-center mt-1 text-sm font-thin"},X={class:"flex justify-center mt-2 ml-2 lg:ml-0"},q={width:"18px",height:"18px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"shrink-0",style:{"margin-top":"3px"}},z=t("circle",{cx:"12",cy:"10",r:"3",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),G=t("path",{d:"M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),J=[z,G],K={class:"ml-2 text-md font-bold"},P=t("p",{class:"text-center mt-2 font-thin"},"Lorem ipsum dolor sit amet, consectetur",-1),Q={class:"flex justify-center mt-2 gap-x-20"},R={class:"flex items-center"},U=t("p",{class:"font-bold"},"Followers ",-1),W={class:"font-thin text-sm ml-2"},Y={class:"flex items-center"},$=t("p",{class:"font-bold"},"Following ",-1),tt={class:"font-thin text-sm ml-2"},et={key:0,class:"flex justify-center mt-3 gap-x-4"},st=t("h1",{class:"text-center text-xl font-bold mt-5"},"Timeline",-1);function ot(s,d,e,nt,lt,it){const _=o("Head"),f=o("FollowButton"),h=o("Link"),x=o("timeline"),p=o("AuthenticatedLayout");return n(),i(A,null,[a(_,{title:e.user.name},null,8,["title"]),a(p,null,{default:u(()=>[t("div",N,[t("div",V,[t("div",D,[t("img",{src:e.user.avatar,onError:d[0]||(d[0]=w=>w.target.src="/image/abc.png"),width:"100",heigth:"100",class:"rounded-full mx-auto"},null,40,H),t("div",I,[t("p",Z,l(e.user.name),1),r((n(),i("svg",E,S,512)),[[c,e.user.isVerified]])]),t("div",null,[t("p",O,"@"+l(e.user.username),1)]),t("div",X,[(n(),i("svg",q,J)),t("p",K,l(e.user.institution),1)]),P,t("div",Q,[t("div",R,[U,t("p",W,l(e.user.followers),1)]),t("div",Y,[$,t("p",tt,l(e.user.following),1)])]),s.$page.props.auth.user?(n(),i("div",et,[r(a(f,{userId:e.user.id,follows:e.follows},null,8,["userId","follows"]),[[c,e.user.id!=s.$page.props.auth.user.id]]),s.$page.props.users.user?r((n(),B(h,{key:0,class:"text-gray-900 mt-1 text-sm bg-gray-100 font-bold px-5 py-2 rounded-full",href:s.route("user.profile.edit",e.user)},{default:u(()=>[F("edit profile")]),_:1},8,["href"])),[[c,e.user.id===s.$page.props.auth.user.id]]):m("",!0)])):m("",!0)]),st,t("div",null,[a(x,{posts:e.user.posts},null,8,["posts"])])])])]),_:1})],64)}const mt=C(T,[["render",ot]]);export{mt as default};
