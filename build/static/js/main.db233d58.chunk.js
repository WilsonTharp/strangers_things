(this.webpackJsonpstangers_things_react=this.webpackJsonpstangers_things_react||[]).push([[0],{65:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var s=n(18),r=n(9),c=n(0),o=n(10),a=n.n(o),i=(n(65),n(12)),l=n(15),u=n(17),j=n.n(u),d=n(24),h=n(25),m=n(110),p=n(2),b=function(e){var t=e.logInRequest,n=(e.isLoggedin,e.setIsLoggedin),s=Object(c.useState)({username:"",password:""}),o=Object(r.a)(s,2),a=o[0],u=o[1];function b(e){var t=e.target.attributes.name.value,n=Object(h.a)({},a);n[t]=e.target.value,u(n),console.log(a)}var g=Object(i.f)();function O(){return(O=Object(d.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,t(a);case 3:localStorage.getItem("token")?(n(!0),localStorage.setItem("username",a.username),g.push("/")):g.push("/message");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"loginPage",children:[Object(p.jsx)("h1",{children:"Log In"}),Object(p.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(p.jsx)("div",{className:"loginInputs",children:Object(p.jsx)(m.a,{id:"outlined-basic-1",onChange:b,label:"Username",name:"username",variant:"outlined",type:"text",style:{width:350,marginBottom:20,marginTop:10}})}),Object(p.jsx)("div",{className:"loginInputs",children:Object(p.jsx)(m.a,{id:"outlined-basic=2",onChange:b,label:"Password",name:"password",variant:"outlined",type:"password",style:{width:350,marginBottom:20}})}),Object(p.jsx)("button",{className:"loginButton",children:"Log In"})]}),Object(p.jsx)(l.b,{to:"/signup",children:"Don't have an account? Sign Up"})]})},g=n(109),O=n(5),x=function(e){var t=e.isLoggedin,n=e.setIsLoggedin;var s=Object(O.a)({root:{background:"#990033",borderRadius:3,border:0,color:"white",height:65,padding:"0 30px",boxShadow:"black",fontSize:"1rem"},label:{textTransform:"capitalize"}})(g.a),r=Object(i.f)();return Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:"Stranger Things"}),Object(p.jsxs)("div",{id:"nav-bar",children:[Object(p.jsx)(s,{component:l.b,to:"/",children:"Home"}),Object(p.jsx)(s,{component:l.b,to:"/posts",children:"Posts"}),t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s,{component:l.b,to:"/profile",children:"Profile"}),Object(p.jsx)(s,{onClick:function(){n(!1),localStorage.removeItem("message"),localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("success"),r.push("/login"),console.log(localStorage)},children:"Log Out"})]}):Object(p.jsx)(s,{component:l.b,to:"/login",children:"Log in"})]})]})},f=function(e){var t=e.isLoggedin;e.setIsLoggedin;return Object(p.jsxs)("div",{id:"homePage",children:[Object(p.jsx)("h1",{children:"Welcome to Stranger Things!"}),t?Object(p.jsx)("div",{children:Object(p.jsxs)("h3",{children:["Logged in as ",localStorage.getItem("username")]})}):Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Please login or register which can be done at the top!"})})]})},v=function(e){var t=e.createNewUser,n=e.setIsLoggedin;console.log(t);var s=Object(c.useState)({username:"",password:""}),o=Object(r.a)(s,2),a=o[0],l=o[1];function u(e){var t=e.target.attributes.name.value,n=Object(h.a)({},a);n[t]=e.target.value,l(n),console.log(a)}console.log(a);var m=Object(i.f)();function b(){return(b=Object(d.a)(j.a.mark((function e(s){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,t(a);case 3:r=localStorage.getItem("token"),console.log(r),r?(n(!0),localStorage.setItem("username",a.username),m.push("/")):m.push("/message");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{id:"signUp",children:Object(p.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(p.jsx)("h1",{children:"Sign Up"}),Object(p.jsx)("input",{type:"text",onChange:u,name:"username",value:a.username,className:"loginInput",placeholder:"Username"}),Object(p.jsx)("input",{type:"password",onChange:u,name:"password",value:a.password,className:"loginInput",placeholder:"Password"}),Object(p.jsx)("button",{className:"loginButton",children:"Sign Up"})]})})},P=n(42),y="https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/",S=localStorage.getItem("token");function w(e){return L.apply(this,arguments)}function L(){return(L=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.setItem("username",t.username),e.next=4,fetch("".concat(y,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:"".concat(t.username),password:"".concat(t.password)}})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("token",e.data.token)}));case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function C(e){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:"".concat(t.username),password:"".concat(t.password)}})});case 3:return n=e.sent,e.next=6,n.json();case 6:(s=e.sent).data&&localStorage.setItem("token",s.data.token),console.log(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function I(){return(I=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("token"),e.next=4,fetch("".concat(y,"/posts"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({post:{title:"".concat(t.title),description:"".concat(t.description),price:"".concat(t.price),location:"".concat(t.location),willDeliver:"".concat(t.willDeliver)}})}).then((function(e){return e.json()})).then((function(e){console.log(e)}));case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function T(e){fetch("".concat(y,"posts"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}}).then((function(e){return e.json()})).then((function(t){e(t.data.posts)})).catch((function(e){console.error(e)}))}function N(e){return U.apply(this,arguments)}function U(){return(U=Object(d.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(y,"users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}});case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,console.log(s),t(s.data.messages),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var F=function(e){var t=e.featuredPost,n=e.setFeaturedPost,s=e.isLoggedin,o=Object(c.useState)({content:""}),a=Object(r.a)(o,2),i=a[0],l=a[1],u=t._id,j=t.isAuthor;return Object(p.jsx)("div",{className:"featured-post",children:Object(p.jsxs)("div",{className:"post",children:[Object(p.jsx)(P.a,{style:{marginLeft:"99%",color:"red",fontSize:"1.5rem"},onClick:function(){return n(!1)}}),Object(p.jsx)("h1",{style:{marginTop:"0"},children:t.title}),Object(p.jsx)("p",{children:t.description}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("b",{children:"Price: "}),t.price]}),Object(p.jsxs)("h3",{children:[Object(p.jsx)("b",{children:"Seller: "}),t.author.username]}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("b",{children:"Location: "}),t.location]}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("b",{children:"Willing to deliver: "}),t.willDeliver?"Yes":"No"]}),s?j?Object(p.jsx)("div",{className:"post-messages",children:Object(p.jsx)("h3",{children:"MESSAGES"})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"Message User about this Post"}),Object(p.jsx)(m.a,{id:"messenger",name:"content",label:"Message",style:{width:"31.25rem"},multiline:!0,onChange:function(e){return function(e,t){var n=Object(h.a)({},i);n[t]=e.target.value,l(n)}(e,"content")}}),Object(p.jsx)(g.a,{variant:"outlined",color:"primary",onClick:function(e){var t,n;e.preventDefault(),t=u,n=i,fetch("".concat(y,"posts/").concat(t,"/messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)},body:JSON.stringify({message:{content:"".concat(n.content)}})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.error),document.getElementById("messenger").value=""},style:{marginTop:"1rem",width:"18.75rem"},children:"Send Message"})]}):null,t.messages?Object(p.jsx)(p.Fragment,{children:t.messages.map((function(e,t){return Object(p.jsxs)("div",{className:"message",children:[Object(p.jsx)("p",{children:e.content}),Object(p.jsxs)("h5",{children:["From User: ",e.fromUser.username]})]},t)}))}):""]})})},D=function(e){var t=e.getMessages,n=e.userPosts,s=e.setUserPosts,o=e.featuredPost,a=e.setFeaturedPost,i=e.isLoggedin,u=Object(c.useState)([]),j=Object(r.a)(u,2),d=j[0],h=j[1],m=[],b=[];function g(e,t){e.preventDefault(),a(t)}return Object(c.useEffect)((function(){t(h),T(s)}),[]),d.map((function(e){n.map((function(t){e.post._id===t._id&&(e.linkedPost=t)})),e.fromUser.username===localStorage.getItem("username")?m.push(e):b.push(e)})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{children:["Welcome ",localStorage.getItem("username")]}),Object(p.jsxs)("div",{id:"profile",children:[Object(p.jsxs)("div",{className:"messagesToMe",children:[Object(p.jsx)("h3",{children:"Messages To Me"}),b.map((function(e,t){return Object(p.jsxs)("div",{className:"message",children:[Object(p.jsxs)("h2",{children:["From: ",e.fromUser.username]}),Object(p.jsx)("p",{children:e.content}),e.linkedPost?Object(p.jsx)(l.b,{onClick:function(t){return g(t,e.linkedPost)},to:"/post",children:Object(p.jsxs)("h4",{children:["VIEW MY POST: ",e.post.title]})}):Object(p.jsx)("h4",{children:"User has deleted this post"})]},t)}))]}),Object(p.jsxs)("div",{className:"messagesFromMe",children:[Object(p.jsx)("h3",{children:"Messages from Me"}),m.map((function(e,t){return Object(p.jsxs)("div",{className:"message",children:[Object(p.jsxs)("h2",{children:["From: ",e.fromUser.username]}),Object(p.jsx)("p",{children:e.content}),e.linkedPost?Object(p.jsx)(l.b,{onClick:function(t){return g(t,e.linkedPost)},to:"/post",children:Object(p.jsxs)("h4",{children:["VIEW MY POST: ",e.post.title]})}):Object(p.jsx)("h4",{children:"User has deleted this post"})]},t)}))]}),o?Object(p.jsx)(F,{featuredPost:o,setFeaturedPost:a,isLoggedin:i}):Object(p.jsx)(p.Fragment,{})]})]})},M=function(e){var t=e.isLoggedin,n=e.userPosts,s=e.setUserPosts,o=e.featuredPost,a=e.setFeaturedPost,i=Object(c.useState)(!1),l=Object(r.a)(i,2),u=l[0],j=l[1],d=Object(c.useState)(""),m=Object(r.a)(d,2),b=m[0],O=m[1],x=Object(c.useState)({title:"",description:"",price:"",location:"",willDeliver:!1}),f=Object(r.a)(x,2),v=f[0],P=f[1],w=0===b.length?n:n.filter((function(e){return e.description.toLowerCase().includes(b.toLowerCase())||e.title.toLowerCase().includes(b.toLowerCase())||e.author.username.toLowerCase().includes(b.toLowerCase())||e.location.toLowerCase().includes(b.toLowerCase())||e.price.includes(b)}));function L(e,t){var n;e.preventDefault(),n=t,fetch("".concat(y,"posts/").concat(n),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),T(s)}return Object(c.useEffect)((function(){T(s)}),[]),Object(p.jsxs)("div",{id:"posts-page",children:[Object(p.jsxs)("div",{className:"posts-header",children:[Object(p.jsx)("h1",{children:"Posts"}),Object(p.jsx)(_,{userPosts:n,setUserPosts:s,search:b,setSearch:O}),t&&Object(p.jsx)(g.a,{variant:"outlined",color:"primary",style:{height:"3rem",marginTop:".8rem"},onClick:function(e){e.preventDefault(),j(!0)},children:"Create a Post"})]}),u&&Object(p.jsx)(A,{setCreatePost:j,handleSubmit:function(e){e.preventDefault(),function(e){I.apply(this,arguments)}(v),j(!1),T(s)},handleChange:function(e,t){var n=Object(h.a)({},v);n[t]="willDeliver"===t?!!e.target.checked:e.target.value,P(n)},post:v,setPost:P}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"post-list",children:w.map((function(e,t){return Object(p.jsx)(z,{post:e,title:e.title,description:e.description,price:e.price,username:e.author.username,locaion:e.location,setFeaturedPost:a,isAuthor:e.isAuthor,postId:e._id,deletePost:L,setUserPosts:s},t)}))}),o?Object(p.jsx)(F,{featuredPost:o,setFeaturedPost:a,isLoggedin:t}):Object(p.jsx)(p.Fragment,{})]})},B=n(112),E=n(111),A=function(e){var t=e.setCreatePost,n=e.handleSubmit,s=e.handleChange;return Object(p.jsx)("div",{className:"create-post",children:Object(p.jsxs)("form",{children:[Object(p.jsx)(P.a,{style:{color:"red",fontSize:"1.5rem",marginLeft:"37rem"},onClick:function(){return t(!1)}}),Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{style:{marginTop:"1rem",marginLeft:"3rem",width:"33rem"},name:"title",onChange:function(e){return s(e,"title")},variant:"outlined",label:"Title",color:"primary",required:!0}),Object(p.jsx)(m.a,{style:{marginTop:"2rem",marginLeft:"3rem",width:"33rem"},name:"description",onChange:function(e){return s(e,"description")},variant:"outlined",label:"Description",color:"primary",multiline:!0,required:!0}),Object(p.jsx)(m.a,{style:{marginTop:"2rem",marginLeft:"3rem",width:"33rem"},name:"price",onChange:function(e){return s(e,"price")},variant:"outlined",label:"Price $",color:"primary",required:!0}),Object(p.jsx)(m.a,{style:{marginTop:"2rem",marginLeft:"3rem",width:"33rem"},name:"location",onChange:function(e){return s(e,"location")},variant:"outlined",label:"Location",color:"primary"}),Object(p.jsx)("div",{children:Object(p.jsx)(B.a,{control:Object(p.jsx)(E.a,{color:"primary",name:"willDeliver",onChange:function(e){return s(e,"willDeliver")}}),label:"Willing to Deliver?",style:{marginLeft:"2rem",marginTop:"1rem"}})}),Object(p.jsx)(g.a,{style:{marginTop:"1rem",marginLeft:"3rem",width:"33rem"},onClick:n,variant:"outlined",color:"primary",children:"Create Post"})]})]})})},z=function(e){var t=e.post,n=e.title,s=e.description,r=e.price,c=e.username,o=e.location,a=e.setFeaturedPost,i=e.isAuthor,l=e.postId,u=e.deletePost,j=e.setUserPosts;return Object(p.jsxs)("div",{className:"user-post",children:[Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:s}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("b",{children:"Price: "}),r]}),Object(p.jsxs)("h3",{children:[Object(p.jsx)("b",{children:"Seller: "}),c]}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("b",{children:"Location: "}),o]}),Object(p.jsx)(g.a,{variant:"outlined",color:"primary",style:{marginBottom:"1rem"},onClick:function(e){e.preventDefault(),a(t)},children:"Expand post"}),"            ",i?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(g.a,{variant:"outlined",color:"secondary",style:{marginBottom:"1rem",marginLeft:"1rem"},onClick:function(e){u(e,l),T(j)},children:"Delete Post"})}):""]})},_=function(e){var t=e.search,n=e.setSearch;return Object(p.jsx)(m.a,{variant:"filled",label:"Search",type:"text",value:t,onChange:function(e){return n(e.target.value)},style:{marginTop:".6rem",marginLeft:"2rem",marginRight:"2rem",width:"20rem"}})},W=function(){return Object(p.jsxs)("div",{id:"message",children:[Object(p.jsx)("h3",{children:"This is an invalid Username or Password."}),Object(p.jsx)(l.b,{to:"/login",children:"Please try again"})]})},J=function(){var e,t=Object(c.useState)([]),n=Object(r.a)(t,2),o=n[0],a=n[1],l=Object(c.useState)(null),u=Object(r.a)(l,2),j=u[0],d=u[1],h=Object(c.useState)(null),m=Object(r.a)(h,2),g=m[0],O=m[1];return Object(c.useEffect)((function(){localStorage.getItem("token")?d(!0):d(!1)}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(x,{isLoggedin:j,setIsLoggedin:d}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/login",children:Object(p.jsx)(b,{logInRequest:w,isLoggedin:j,setIsLoggedin:d})}),Object(p.jsx)(i.a,{path:"/signup",children:Object(p.jsx)(v,{createNewUser:C,setIsLoggedin:d})}),Object(p.jsx)(i.a,{path:"/profile",children:Object(p.jsx)(D,{getMessages:N,userPosts:o,setUserPosts:a,featuredPost:g,setFeaturedPost:O,isLoggedin:j})}),Object(p.jsx)(i.a,{exact:!0,path:"/",children:Object(p.jsx)(f,{isLoggedin:j,setIsLoggedin:d})}),Object(p.jsx)(i.a,{path:"/posts",children:Object(p.jsx)(M,(e={isLoggedin:j,userPosts:o,setUserPosts:a},Object(s.a)(e,"userPosts",o),Object(s.a)(e,"featuredPost",g),Object(s.a)(e,"setFeaturedPost",O),e))}),Object(p.jsx)(i.a,{path:"/message",children:Object(p.jsx)(W,{})})]})]})})};a.a.render(Object(p.jsx)(l.a,{children:Object(p.jsx)(J,{})}),document.getElementById("app"))}},[[77,1,2]]]);
//# sourceMappingURL=main.db233d58.chunk.js.map