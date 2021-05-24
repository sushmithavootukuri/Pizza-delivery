(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),s=(a(95),a(3)),i=a(8);var o=function(e){var t=e.authentication,a=e.admin,n=e.setAdmin,c=e.setAuthentication;return r.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},r.a.createElement("div",{className:"container-fluid bg-warning py-2"},r.a.createElement("h2",{className:"navbar-header site-name"},"Pizza Paradise"),r.a.createElement("ul",{className:"nav navbar-left"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",className:"px-2"},"Home")),r.a.createElement("li",null,t&&r.a.createElement(i.b,{to:"/menu",className:"px-2 pr-3"},"Menu")),r.a.createElement("li",null,a&&r.a.createElement(i.b,{to:"/admin",className:"px-2 pr-3"},"Admin")),r.a.createElement("li",null,!t&&r.a.createElement(i.b,{to:"/login",className:"px-2 pr-3"},"Login")),r.a.createElement("li",null,t&&r.a.createElement(i.b,{to:"/login",className:"px-2 pr-3"},r.a.createElement("span",{onClick:function(){n(!1),c(!1),localStorage.removeItem("ACCESS_TOKEN")}},"Logout"))))))},m=a(2),u=a.n(m),d=a(6),p=a(36),E=a(14),b=a(88),h=a.n(b).a.create({baseURL:"https://pizza-paradise-api.herokuapp.com/"}),f=(a(82),a(7)),v=E.a().shape({fullName:E.c().matches(/^[aA-zZ\s]+$/," Only alphabets are allowed").required("Full name is required"),email:E.c().email("Invalid email").required("Email is required"),password:E.c().required("Password is required"),confirmPassword:E.c().required("Confirmation password is required").oneOf([E.b("password"),null],"Passwords must match")});function g(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),m=o[0],u=o[1];return r.a.createElement("div",{className:"col-sm-8  col-lg-7 mx-auto"},r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("button",{className:"btn btn-warning navbar-btn mx-5 my-5 p-2",onClick:function(){c(!0),u("admin")}},r.a.createElement(i.b,{to:"/registration/admin"},"Admin")),r.a.createElement("button",{className:"btn btn-warning navbar-btn mx-5 my-5 p-2",onClick:function(){c(!0),u("user")}},r.a.createElement(i.b,{to:"/registration/user"},"User"))),a&&r.a.createElement(w,{role:m}))}function w(e){var t=e.roleType,a=Object(f.g)(),c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],m=l[1],E=Object(p.a)({validationSchema:v}),b=E.register,g=E.handleSubmit,w=E.errors,N=function(){var e=Object(d.a)(u.a.mark(function e(n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r={name:n.fullName,email:n.email,password:n.password},h.post("/api/account/signup/".concat(t),r).then(function(e){alert("Pizza Paradise : Welcome ".concat(n.fullName)),a.push("/login")}).catch(function(e){e.response?m(e.response.data.error):e.request?m("Network Error!! Try again"):e.message&&console.log(e.message)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:g(N)},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"fullName"},"Full Name"),r.a.createElement("input",{name:"fullName",placeholder:"Enter Full name",ref:b})),w.fullName&&r.a.createElement("p",{className:"error-message"},w.fullName),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",placeholder:"Enter Mail address",type:"email",ref:b})),w.email&&r.a.createElement("p",{className:"error-message"},w.email),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",placeholder:"Enter Password",type:"password",ref:b})),w.password&&r.a.createElement("p",{className:"error-message"},w.password),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement("input",{name:"confirmPassword",placeholder:"Enter Password again",type:"password",ref:b})),w.confirmPassword&&r.a.createElement("p",{className:"error-message"},w.confirmPassword),o&&r.a.createElement("p",{className:"error-message"},o),r.a.createElement("input",{className:"btn btn-warning",type:"submit"}),r.a.createElement("p",{className:"mt-3 text-center"},"Already a user ?",r.a.createElement(i.b,{to:"/login",className:"text-primary d-inline font-weight-bold"},"Login here!"))))}var N=E.a().shape({email:E.c().email("Invalid email").required("Email is required"),password:E.c().required("Password is required")});function O(e){var t=e.setAdmin,a=e.setAuthentication,c=Object(f.g)(),l=Object(n.useState)(""),o=Object(s.a)(l,2),m=o[0],E=o[1],b=Object(p.a)({validationSchema:N}),v=b.register,g=b.handleSubmit,w=b.errors,O=function(){var e=Object(d.a)(u.a.mark(function e(n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={email:n.email,password:n.password},e.next=3,h.post("/api/account/signin",r).then(function(e){console.log(e),localStorage.setItem("ACCESS_TOKEN",e.data.accessToken),a(!0),"admin"===e.data.user.role?t(!0):t(!1),c.push("/menu")}).catch(function(e){E(e.response.data.message),console.log(e.response)});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:g(O)},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",placeholder:"Enter Mail address",type:"email",ref:v})),w.email&&r.a.createElement("p",{className:"error-message"},w.email),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",placeholder:"Enter Password",type:"password",ref:v})),w.password&&r.a.createElement("p",{className:"error-message"},w.password),m&&r.a.createElement("p",{className:"error-message"},m),r.a.createElement("input",{className:"btn btn-warning",type:"submit",value:"Login"}),r.a.createElement("p",{className:"mt-3 text-center"},"Not a user ?",r.a.createElement(i.b,{to:"/registration",className:"text-primary d-inline font-weight-bold"},"Register here!"))))}var x=a(21);function j(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],E=d[1],b=Object(n.useState)(0),h=Object(s.a)(b,2),f=h[0],v=h[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-5"},r.a.createElement(C,{setCartItems:c,toppings:o,meat:p,setMeat:E,setToppings:m,price:f,setPrice:v}),r.a.createElement(k,{cartItems:a,setCartItems:c,meat:p,setMeat:E,toppings:o,setToppings:m,price:f,setPrice:v})))}function C(e){var t=e.cartItems,a=e.setCartItems,c=e.meat,l=e.setMeat,i=e.toppings,o=e.setToppings,m=e.price,p=e.setPrice,E=Object(n.useState)([]),b=Object(s.a)(E,2),f=b[0],v=b[1];return Object(n.useEffect)(function(){function e(){return(e=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/pizzas");case 2:t=e.sent,console.log(t.data),v(t.data);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row col-12 mt-5"},f.map(function(e,n){return r.a.createElement(y,{pizza:e,cartItems:t,setCartItems:a,key:n,meat:c,setMeat:l,toppings:i,setToppings:o,price:m,setPrice:p})})))}var y=function(e){var t=e.pizza,a=e.setCartItems,n=e.setMeat,c=e.setToppings,l=e.setPrice;return r.a.createElement("div",{className:"col-md-4 mt-3"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("img",{src:t.url,className:"card-img-top",alt:t.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("p",{className:"card-text desc"},t.description,"         "),r.a.createElement("p",{className:"card-text"},"Price : ",t.price," rs        "),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){a(t),c([]),l(0),n("")}},"Add to cart"))))},k=function(e){var t=e.cartItems,a=e.setCartItems,n=e.toppings,c=e.meat,l=e.setMeat,s=e.setToppings,i=e.price,o=e.setPrice;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row col-md-12 mt-5"},r.a.createElement("div",{className:"card w-100"},t.name&&r.a.createElement(S,{setCartItems:a,cartItems:t,toppings:n,meat:c,setMeat:l,setToppings:s,price:i,setPrice:o}))))};function S(e){var t=e.cartItems,a=e.setCartItems,c=e.meat,l=e.setMeat,i=e.toppings,o=e.setToppings,m=e.price,u=e.setPrice,d=Object(n.useState)("Tomato sauce"),p=Object(s.a)(d,2),E=p[0],b=p[1],f=Object(n.useState)("Thin Crust"),v=Object(s.a)(f,2),g=v[0],w=v[1],N=Object(n.useState)("Add Extra Cheese"),O=Object(s.a)(N,2),j=O[0],C=O[1],y=[{value:"Olives",label:"Olives"},{value:"Tomato",label:"Tomato"},{value:"Corn",label:"Corn"},{value:"Capsicum",label:"Capsicum"}],k=[{value:"Thin Crust",label:"Thin Crust"},{value:"Hand Tossed",label:"Hand Tossed"},{value:"Stuffed Crust",label:"Stuffed Crust"}],S=[{value:"Tomato sauce",label:"Tomato sauce"},{value:"White Garlic Sauce",label:"White Garlic Sauce"},{value:"White pizza Sauce",label:"White pizza Sauce"}];return r.a.createElement("div",null,r.a.createElement("h3",{className:"mx-auto"},"Your Cart"),r.a.createElement("h6",null," Pizza : ",t.name),r.a.createElement("h6",{className:"text-center mt-3"},"Additional Toppings"),r.a.createElement(x.a,{placeholder:"Additional Veggies",isMulti:!0,value:y.filter(function(e){return i.includes(e.value)}),options:y,onChange:function(e){var t=Array.isArray(e)?e.map(function(e){return e.value}):[];o(t);var a=30*t.length;u(a+("Add Extra Cheese"===j?50:0)+(c?100:0))},className:"basic-multi-select",classNamePrefix:"select"}),r.a.createElement("h6",{className:"text-center mt-3"},"Choose sauce"),r.a.createElement(x.a,{defaultValue:S[0],options:S,onChange:function(e){b(e.value)}}),r.a.createElement("h6",{className:"text-center mt-3"},"Choose Base"),r.a.createElement(x.a,{defaultValue:k[0],options:k,onChange:function(e){w(e.value)}}),r.a.createElement("h6",{className:"text-center mt-3"},"Additional Meat"),r.a.createElement(x.a,{placeholder:"Add additional Meat",options:[{value:"Peri peri chicken",label:"Peri peri chicken"},{value:"Chicken Tikka",label:"Chicken Tikka"}],onChange:function(e){l(e.value);var t=30*i.length,a=e.value?100:0;u(t+("Add Extra Cheese"===j?50:0)+a)}}),r.a.createElement("button",{className:"btn btn-warning ml-3",onClick:function(){var e=30*i.length,t=c?100:0;"Add Extra Cheese"===j?(C("Remove Extra Cheese"),u(e+50+t)):(C("Add Extra Cheese"),u(e+0+t))}},j),r.a.createElement("p",null,"Price : ",t.price),0!==m&&r.a.createElement("p",null,"Aditional charges : ",m),r.a.createElement("p",null,"Cart Total : ",m+t.price),r.a.createElement("button",{className:"btn btn-warning w-100",onClick:function(){var e={custId:localStorage.getItem("ACCESS_TOKEN"),name:t.name,base:g,toppings:i,meat:c,sauce:E,price:m+t.price,status:"Order Confirmed"};h.post("/pizza/orders",e).then(function(e){console.log(e),a([])}).catch(function(e){e.response?console.log(e.response):e.request?console.log(e.request):e.message&&console.log(e.message)}),h.patch("/pizza/ingredients/order",e).then(function(e){console.log("Ingredients updated","Status : "+e.status)}),alert("Order Received! ".concat(t.name," is being prepared "))}},"Place Order"))}function A(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){function e(){return(e=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/pizza/ingredients");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered table-hover w-50 mx-auto mt-5"},r.a.createElement("thead",{className:"thead bg-warning"},r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"),r.a.createElement("th",{className:"w-25"},"Count"),r.a.createElement("th",{className:"w-25"},"Action"))),r.a.createElement("tbody",null,a.map(function(e,t){return r.a.createElement(P,{item:e,key:t})}))))}function P(e){var t=e.item,a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(t.count),m=Object(s.a)(o,2),p=m[0],E=m[1],b=function(){var e=Object(d.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={_id:t._id,count:p},""===p&&(a.count=0,E(0)),e.prev=2,e.next=5,h.patch("/pizza/ingredients",a);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0);case 10:i(!1);case 11:case"end":return e.stop()}},e,null,[[2,7]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.type),l?r.a.createElement("td",null,r.a.createElement("input",{className:"m-0 p-1",type:"Number",value:p,onChange:function(e){return E(e.target.value)}})):r.a.createElement("td",null,p),r.a.createElement("td",null,l?r.a.createElement("button",{className:"btn btn-warning  my-auto px-3 w-75",onClick:b},"Update"):r.a.createElement("button",{className:"btn btn-outline-warning my-auto px-2 w-75",onClick:function(){return i(!0)}},"Edit")))}function T(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){function e(){return(e=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/pizza/orders");case 2:t=e.sent,console.log(t.data),c(t.data);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),console.log(a),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered table-hover w-75 mx-auto mt-5"},r.a.createElement("thead",{className:"thead bg-warning"},r.a.createElement("tr",null,r.a.createElement("th",null,"S.no"),r.a.createElement("th",null,"Order Id"),r.a.createElement("th",null,"Order Name"),r.a.createElement("th",null,"Customer"),r.a.createElement("th",{className:"w-25"},"Status"),r.a.createElement("th",{className:"w-25"},"Action"))),r.a.createElement("tbody",null,a.map(function(e,t){return r.a.createElement(z,{order:e,index:t,key:t})}))))}function z(e){var t=e.order,a=e.index;console.log(t);var c=Object(n.useState)(!1),l=Object(s.a)(c,2),i=l[0],o=l[1],m=Object(n.useState)(t.status),p=Object(s.a)(m,2),E=p[0],b=p[1],f=function(){var e=Object(d.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={_id:t._id,status:E},e.prev=1,console.log(a),b(a.status),e.next=6,h.patch("/pizza/orders",a);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:o(!1);case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("tr",null,r.a.createElement("td",null,a+1),r.a.createElement("td",null,t._id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.custId),i?r.a.createElement("td",null,r.a.createElement(x.a,{defaultValue:t.status,options:[{value:"Order Confirmed",label:"Order Confirmed"},{value:"Order is being prepared",label:"Order is being prepared"},{value:"Order is picked up",label:"Order is picked up"},{value:"Order Delivered",label:"Order Delivered"}],onChange:function(e){b(e.value)}})):r.a.createElement("td",null,E),r.a.createElement("td",null,i?r.a.createElement("button",{className:"btn btn-warning  my-auto px-3 w-75",onClick:f},"Update"):r.a.createElement("button",{className:"btn btn-outline-warning my-auto px-2 w-75",onClick:function(){return o(!0)}},"Edit")))}function I(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),o=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"mx-auto"},r.a.createElement("button",{className:"btn-warning d-inline m-3",onClick:function(){c(!0),m(!1)}},"Ingredients Tracker"),r.a.createElement("button",{className:"btn-warning d-inline m-3",onClick:function(){m(!0),c(!1)}}," Orders Tracker")),a&&r.a.createElement(A,null),o&&r.a.createElement(T,null))}function q(){return r.a.createElement("h1",null,"Welcome to Pizza Paradise")}function M(){return r.a.createElement(g,null)}function F(){return r.a.createElement(w,{roleType:"user"})}function _(){return r.a.createElement(w,{roleType:"admin"})}function W(){return r.a.createElement(j,null)}function L(){return r.a.createElement(I,null)}function U(e){var t=e.setAdmin,a=e.setAuthentication;return r.a.createElement(O,{setAdmin:t,setAuthentication:a})}var K=a(89),R=a(4),V=a(5),D=new(function(){function e(){Object(R.a)(this,e),this.authenticated=!1,this.role=""}return Object(V.a)(e,[{key:"authentication",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("ACCESS_TOKEN")){e.next=6;break}this.authenticated=!1,this.role="",e.next=18;break;case 6:return e.prev=6,e.next=9,h.get("/api/account/auth/"+t);case 9:200===(a=e.sent).status&&(this.authenticated=!0,this.role=a.data.decoded.role),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(6),this.authenticated=!1,this.role="",console.log(e.t0.response);case 18:case"end":return e.stop()}},e,this,[[6,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(e){this.authentication(),console.log("login",this.authenticated,this.role),e()}},{key:"logout",value:function(e){this.authentication(),console.log("logout",this.authenticated,this.role),e()}},{key:"isAuthenticated",value:function(){return this.authentication(),console.log("authenticated",this.authenticated),this.authenticated}},{key:"isAdmin",value:function(){return this.authentication(),console.log("admin","admin"===this.role),"admin"===this.role}}]),e}()),H=function(e){var t=e.component,a=e.userAccess,n=e.path,c=Object(K.a)(e,["component","userAccess","path"]);return r.a.createElement(f.b,Object.assign({},c,{render:function(e){return console.log(n),!a&&D.isAdmin()&&D.isAuthenticated()?r.a.createElement(t,e):a&&D.isAuthenticated()?r.a.createElement(t,e):r.a.createElement(f.a,{to:{pathname:"/",state:{from:e.location}}})}}))};function B(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),m=Object(s.a)(l,2),u=m[0],d=m[1];return r.a.createElement(i.a,null,r.a.createElement(o,{authentication:a,admin:u,setAdmin:d,setAuthentication:c}),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:q}),r.a.createElement(f.b,{exact:!0,path:"/registration",component:M}),r.a.createElement(f.b,{exact:!0,path:"/registration/user",component:F}),r.a.createElement(f.b,{exact:!0,path:"/registration/admin",component:_}),r.a.createElement(f.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(U,{setAdmin:d,setAuthentication:c})}}),r.a.createElement(H,{exact:!0,path:"/menu",component:W,userAccess:!0}),r.a.createElement(H,{exact:!0,path:"/admin",component:L,userAccess:!1}),r.a.createElement(f.b,{path:"*",component:function(){return"404 NOT FOUND"}})))}l.a.render(r.a.createElement(B,null),document.getElementById("root"))},82:function(e,t,a){},90:function(e,t,a){e.exports=a(228)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.8d50b47e.chunk.js.map