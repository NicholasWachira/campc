import{A as w}from"./AuthenticatedLayout-a25d5faf.js";import{J as x}from"./JoinGroupButton-8a32dada.js";import{F as b}from"./FollowButton-f0b6eed5.js";import{_ as k,A as y}from"./ApplicationLogo-d76335e7.js";import{T as L}from"./Timeline-df6dc2ea.js";import{X as B,g as A,f as r,a as o,w as l,F as c,l as a,o as n,b as e,d as m,p as D,k as G,t as u,h as $,v as C}from"./app-c8fdf46f.js";const F={components:{AuthenticatedLayout:w,ApplicationLogo:y,Head:B,Link:A,Timeline:L,FollowButton:b,JoinGroupButton:x},props:{groups:Object}},J={class:"max-w-md w-full border m-4 rounded-2xl mb-16 lg:mb-0"},N={class:"h-screen overflow-y-scroll no-scrollbar ml-3 mr-3 mt-1"},V={class:"mx-auto"},j={key:0,class:"flex justify-center mt-3"},E={class:"p-2"},H={class:"mt-6"},I=["src"],T={class:"ml-5 mt-3"},S={class:"flex items-center"},z={class:"mt-5"},M={class:"text-lg font-bold hover:underline"},O={class:"text-gray-400"},X=e("div",{class:"ml-2 mt-1"},[e("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#D3D3D3"},[e("path",{stroke:"#000000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.5 12.5L11 15l4.5-4.5m-.595-5.512l-.48-.659a3 3 0 00-4.85 0l-.48.659-.804-.127a3 3 0 00-3.43 3.43l.127.804-.659.48a3 3 0 000 4.85l.659.48-.127.804a3 3 0 003.43 3.43l.804-.127.48.659a3 3 0 004.85 0l.48-.659.804.127a3 3 0 003.43-3.43l-.127-.804.659-.48a3 3 0 000-4.85l-.659-.48.127-.804a3 3 0 00-3.43-3.43l-.804.127z"})])],-1);function q(s,i,p,K,P,Q){const _=a("Head"),d=a("Link"),h=a("JoinGroupButton"),f=a("AuthenticatedLayout");return n(),r(c,null,[o(_,{title:"Explore Groups"}),o(f,null,{default:l(()=>[e("div",J,[e("div",N,[e("div",V,[e("div",null,[s.$page.props.auth.user?(n(),r("div",j,[o(d,{href:s.route("group.create"),class:"bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-900"},{default:l(()=>[m("Create Group")]),_:1},8,["href"])])):D("",!0),e("div",E,[(n(!0),r(c,null,G(p.groups,(t,v)=>(n(),r("div",{class:"flex mb-3",key:v},[e("div",H,[e("img",{src:t.avatar,onError:i[0]||(i[0]=g=>g.target.src="/image/abc.png"),width:"70",height:"70",class:"rounded-full"},null,40,I)]),e("div",T,[e("div",S,[e("div",z,[e("p",M,[o(d,{href:s.route("group.show",t.uuid)},{default:l(()=>[m(u(t.name),1)]),_:2},1032,["href"])]),e("p",O,"@"+u(t.username),1)]),X]),$(e("div",null,[o(h,{groupId:t.id,member:t.member},null,8,["groupId","member"])],512),[[C,s.$page.props.auth.user]])])]))),128))])])])])])]),_:1})],64)}const te=k(F,[["render",q]]);export{te as default};
