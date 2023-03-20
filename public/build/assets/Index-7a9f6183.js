import{A as y}from"./AuthenticatedLayout-3f412920.js";import{F as A}from"./FollowButton-797c9b18.js";import{_ as b,A as k}from"./ApplicationLogo-4b9e951c.js";import{T as L}from"./Timeline-a74d598b.js";import{X as B,g as F,f as l,a as o,w as a,F as u,l as n,o as r,b as e,d,k as E,t as p,h,v as _}from"./app-9ca35a02.js";const j={components:{AuthenticatedLayout:y,ApplicationLogo:k,Head:B,Link:F,Timeline:L,FollowButton:A},props:{users:Object,groups:Object}},V={class:"max-w-lg w-full"},$={class:"h-screen overflow-y-scroll no-scrollbar m-4 mb-12 lg:mb-0"},D=e("input",{type:"search",class:"w-full bg-gray-900 rounded-full outline-none"},null,-1),H={class:"pt-5"},I={class:"flex itemse-center justify-around ml-5 mr-5"},N={class:"mx-auto"},T={class:"p-2 flex items-center justify-between"},C={class:"flex items-center"},O=["src"],S={class:"ml-2 text-md hover:underline shrink-0"},U={width:"15px",height:"15px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"verified",class:"icon glyph ml-1 shrink-0"},Z=e("path",{d:"M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z",style:{fill:"#EAEF4D"}},null,-1),G=[Z],M={class:"ml-2 text-sm shrink-0"};function X(t,c,f,q,z,J){const m=n("Head"),i=n("Link"),g=n("FollowButton"),w=n("AuthenticatedLayout");return r(),l(u,null,[o(m,{title:"Explore Users"}),o(w,null,{default:a(()=>[e("div",V,[e("div",$,[D,e("div",H,[e("div",I,[o(i,{class:"px-4 py-1 font-bold hover:bg-gray-900 bg-gray-700 rounded-full",href:t.route("explore.users")},{default:a(()=>[d("Users")]),_:1},8,["href"]),o(i,{class:"px-4 py-1 font-bold hover:bg-gray-900 bg-gray-700 rounded-full",href:t.route("explore.all.groups")},{default:a(()=>[d("Groups")]),_:1},8,["href"])])]),e("div",N,[(r(!0),l(u,null,E(f.users,(s,v)=>(r(),l("div",{key:v,class:"p-2"},[e("div",T,[e("div",C,[e("img",{src:s.avatar,onError:c[0]||(c[0]=x=>x.target.src="/image/abc.png"),width:"50",height:"50",class:"rounded-full"},null,40,O),e("p",S,[o(i,{href:t.route("user.profile",s)},{default:a(()=>[d(p(s.name),1)]),_:2},1032,["href"])]),h((r(),l("svg",U,G,512)),[[_,s.isVerified]]),e("p",M,"@"+p(s.username),1)]),h(o(g,{class:"ml-10",userId:s.id,follows:s.follows},null,8,["userId","follows"]),[[_,s.id!=t.$page.props.auth.user.id]])])]))),128))])])])]),_:1})],64)}const Y=b(j,[["render",X]]);export{Y as default};
