(this.webpackJsonporahi=this.webpackJsonporahi||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),o=n(18),r=n.n(o),i=(n(26),n(7)),l=n(2),j=n(11),b=n(20),u=function(e){return Object(c.jsxs)(c.Fragment,{children:[e.isLoggedIn&&Object(c.jsx)("div",{className:"logout-wrapper",children:Object(c.jsx)("button",{type:"button",className:"input-style logout-btn",onClick:function(){return e.setIsLoggedIn(!1)},children:"Logout"})}),Object(c.jsx)("h1",{children:"You are on Home Screen"}),e.isLoggedIn?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"bar-container",children:e.fetchData.data.map((function(e,t){return Object(c.jsxs)("div",{className:"bar-wrapper",children:[Object(c.jsx)("div",{className:"bar",style:{height:e.stat+"px"},children:e.stat}),Object(c.jsx)("span",{children:Object(b.a)(e.month).slice(0,3)})]},t)}))})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"You have not login first login"})," ",Object(c.jsx)(j.b,{to:"/",children:"here"})]})]})};var h=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)(""),r=Object(i.a)(o,2),b=r[0],h=r[1],d=Object(s.useState)(""),O=Object(i.a)(d,2),p=O[0],g=O[1],f=Object(s.useState)(""),m=Object(i.a)(f,2),x=m[0],y=m[1],N=Object(s.useState)(""),v=Object(i.a)(N,2),S=v[0],F=v[1],I=Object(l.f)(),L=Object(s.useState)(!1),T=Object(i.a)(L,2),C=T[0],E=T[1],M=Object(s.useState)(""),P=Object(i.a)(M,2),k=P[0],w=P[1];return Object(s.useEffect)((function(){if(console.log("Inside useEffect"),fetch("https://demo5636362.mockable.io/stats").then((function(e){return e.json()})).then((function(e){return w(e)})),""!==p){setTimeout((function(){for(var e="",t=0;t<6;t++)e+="0123456789"[Math.floor(10*Math.random())];g(""),h(e),alert("Enter otp Displayed on Top")}),5e3)}}),[p]),Object(c.jsx)("main",{children:Object(c.jsx)(j.a,{history:I,children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/Orahi-Frontend-Assignment",children:Object(c.jsxs)("div",{className:"form-wrapper",children:[Object(c.jsx)("h1",{children:"Login here"}),Object(c.jsxs)("div",{className:"form-content",children:[Object(c.jsx)("label",{className:"error",children:x}),Object(c.jsxs)("label",{className:"result",children:[p," ",b]}),Object(c.jsx)("input",{type:"number",value:n,onChange:function(e){return a(e.target.value)},className:"input-style",placeholder:"Enter 10 Digit Mobile No here ",onFocus:function(){return y("")}}),Object(c.jsx)("button",{type:"button",className:"input-style btn",onClick:function(){console.log("inside handle otp"),h(""),""!==n&&null!==n?10===n.length?(y(""),g("Wait for OTP....")):y("Mobile No Should be of 10 Digit"):y("Mobile No can't be Empty")},children:"Send OTP"}),Object(c.jsx)("input",{type:"password",className:"input-style",placeholder:"Enter OTP here",value:S,onChange:function(e){return F(e.target.value)},onFocus:function(){return y("")}}),Object(c.jsx)("button",{type:"button",className:"input-style btn",onClick:function(){S===b?(alert("Successfully Login"),E(!0),h(""),g(""),y(""),F(""),a("")):y("OTP Mismatch,Enter exact OTP")},children:"Signin"}),C&&Object(c.jsxs)(j.b,{to:"/home",children:[Object(c.jsx)("button",{type:"button",className:"input-style btn",children:"Go To Home"})," "]})]})]})}),Object(c.jsx)(l.a,{exact:!0,path:"/home",children:Object(c.jsx)(u,{isLoggedIn:C,fetchData:k,setIsLoggedIn:E})})]})})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),d()}},[[32,1,2]]]);
//# sourceMappingURL=main.b43e97dc.chunk.js.map