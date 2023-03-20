import{A as b}from"./AuthenticatedLayout-3f412920.js";import{X as h,g as v,J as n,P as m,f as g,a as c,w as y,F as w,l as u,o as A,b as e,e as f,t as r,n as U,h as i,N as d}from"./app-9ca35a02.js";import{_ as E}from"./ApplicationLogo-4b9e951c.js";const N={components:{AuthenticatedLayout:b,Head:h,Link:v,router:n},props:{user:Object},setup(s){const t=m({name:s.user.name,username:s.user.username,email:s.user.email}),l=m({avatar:null});return{form:t,form2:l,submit:()=>{n.post(route("user.profile.update",s.user),{_method:"post",name:t.name,username:t.username,email:t.email}),l.reset()},uploadAvatar:()=>{n.post(route("user.profile.update.avatar",s.user),{_method:"post",avatar:l.avatar})}}}},V={class:"flex justify-center mt-2 text-white max-w-lg w-full"},j={class:"border p-6 rounded-lg max-w-md w-full ml-6 mr-6"},L=e("h1",{class:"text-center mb-3 text-2xl font-bold"},"Edit Profile",-1),k=["src"],B={class:"flex justify-center"},C={class:"text-red-700 px-2 mt-2"},H={class:"flex flex-col mt-5"},P=["disabled"],S={class:"flex flex-col mt-3"},D=e("label",{class:"mb-2 text-center"},"Name",-1),F={class:"text-red-700 px-2 mt-2"},J={class:"flex flex-col mt-3"},M=e("label",{class:"mb-2 text-center"},"Username",-1),q={class:"text-red-700 px-2 mt-2"},z={class:"flex flex-col mt-3"},I=e("label",{class:"mb-2 text-center"},"Email",-1),K={class:"text-red-700 px-2 mt-2"},O={class:"flex flex-col mt-5"},T=["disabled"];function W(s,t,l,o,x,X){const _=u("Head"),p=u("AuthenticatedLayout");return A(),g(w,null,[c(_,{title:l.user.name},null,8,["title"]),c(p,null,{default:y(()=>[e("div",V,[e("div",j,[L,e("form",{onSubmit:t[2]||(t[2]=f((...a)=>o.uploadAvatar&&o.uploadAvatar(...a),["prevent"]))},[e("img",{src:l.user.avatar,onError:t[0]||(t[0]=a=>a.target.src="/image/abc.png"),class:"mx-auto rounded-full",width:"100",height:"100"},null,40,k),e("div",B,[e("input",{type:"file",class:"mt-2 mb-2 border rounded-2xl",onInput:t[1]||(t[1]=a=>o.form2.avatar=a.target.files[0]),required:""},null,32)]),e("div",C,r(o.form2.errors.avatar),1),e("div",H,[e("button",{class:U([{"opacity-25":o.form2.processing},"bg-white text-gray-900 font-bold px-4 py-2 rounded-full"]),disabled:o.form2.processing},"Update Avatar",10,P)])],32),e("form",{onSubmit:t[6]||(t[6]=f((...a)=>o.submit&&o.submit(...a),["prevent"])),enctype:"multipart/form-data"},[e("div",S,[D,i(e("input",{type:"text",class:"bg-gray-900 rounded-full outline-none",placeholder:"Nicholas Wachira","onUpdate:modelValue":t[3]||(t[3]=a=>o.form.name=a)},null,512),[[d,o.form.name]]),e("div",F,r(o.form.errors.name),1)]),e("div",J,[M,i(e("input",{type:"text",class:"bg-gray-900 rounded-full outline-none",placeholder:"Kanjox","onUpdate:modelValue":t[4]||(t[4]=a=>o.form.username=a)},null,512),[[d,o.form.username]]),e("div",q,r(o.form.errors.username),1)]),e("div",z,[I,i(e("input",{type:"email",class:"bg-gray-900 rounded-full outline-none",placeholder:"wachiranicholas60@gmail.com","onUpdate:modelValue":t[5]||(t[5]=a=>o.form.email=a)},null,512),[[d,o.form.email]]),e("div",K,r(o.form.errors.email),1)]),e("div",O,[e("button",{class:"bg-white text-gray-900 font-bold px-4 py-2 rounded-full",disabled:o.form.processing},"Update Profile",8,T)])],32)])])]),_:1})],64)}const Y=E(N,[["render",W]]);export{Y as default};
