(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(64),o=a.n(i),c=(a(76),a(19)),s=function(){return r.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},r.a.createElement("div",{className:"container-fluid bg-warning py-2"},r.a.createElement("h2",{className:"navbar-header site-name"},"Cookpad"),r.a.createElement("ul",{className:"nav navbar-left"},r.a.createElement("li",{className:"px-4"},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",{className:"px-4 pr-5"},r.a.createElement(c.b,{to:"/add-recipes"},"Add Recipes")))))},l=a(1),p=a(66);function m(e){var t=e.recipesList;return r.a.createElement("div",{className:"col-sm-8  col-lg-7 mx-auto"},t.map(function(e){return r.a.createElement(u,{recipe:e})}))}var u=function(e){var t=e.recipe,a=Object(n.useState)(!1),i=Object(l.a)(a,2),o=i[0],c=i[1];return r.a.createElement("div",{className:"card mx-md-2 my-4 text-center",onClick:function(){return c(!o)}},t.img?r.a.createElement("img",{className:"card-img-top my-4 img-fluid w-25 h-25 mx-auto ",src:t.img,alt:t.name}):"",t.recipeName?r.a.createElement("h3",{className:"card-header mx-auto bg-warning text-white"},t.recipeName):"",o?r.a.createElement(d,{recipe:t}):"")},d=function(e){var t=e.recipe;return r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"Ingredients"),r.a.createElement(h,{list:t.ingredients}),r.a.createElement("br",null),r.a.createElement("h4",null,"Instructions"),r.a.createElement(h,{list:t.instructions}))},h=function(e){return r.a.createElement("div",null,e.list.map(function(e){return r.a.createElement("p",{className:"card-text"},e)}))},g=a(5),b=a(20),f=a(70),E=b.a().shape({recipeName:b.b().matches(/^[aA-zZ\s]+$/," Only alphabets are allowed").required(" Enter Recipe name"),ingredient:b.b().required(" Add atleast one ingredient"),instruction:b.b().required(" Add atleast one instruction")});function v(e){var t=e.setRecipesList,a=Object(n.useState)(!1),i=Object(l.a)(a,2),o=i[0],c=i[1];return r.a.createElement("div",{className:"col-sm-8  col-lg-7 mx-auto"},r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("button",{className:"btn btn-warning navbar-btn mx-5 my-5 p-2",onClick:function(){return c(!o)}},"Add Recipe")),o&&r.a.createElement(w,{setRecipesList:t,setToggle:c}))}function w(e){var t=e.setToggle,a=e.setRecipesList,i=Object(n.useState)(""),o=Object(l.a)(i,2),c=o[0],s=o[1],p=Object(n.useState)([]),m=Object(l.a)(p,2),u=m[0],d=m[1],h=Object(n.useState)([]),b=Object(l.a)(h,2),v=b[0],w=b[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),k=y[0],x=y[1],j=Object(n.useState)(""),S=Object(l.a)(j,2),O=S[0],C=S[1],I=Object(f.a)({validationSchema:E}),L=I.register,R=I.handleSubmit,A=I.errors,P=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"col-50"}),r.a.createElement("input",{type:"text",size:"30",readOnly:!0,value:e.item}))};return r.a.createElement("form",{onSubmit:R(function(){if(0===u.length)alert("Add ingredients before saving");else if(0===v.length)alert("Add instructions before saving");else{var e=JSON.parse(localStorage.getItem("recipes")||"[]"),n=[].concat(Object(g.a)(e),[{recipeName:c,ingredients:u,instructions:v}]);localStorage.setItem("recipes",JSON.stringify(n)),a(n),t(!1)}})},r.a.createElement("div",{className:"card p-lg-5"},r.a.createElement("div",{className:"col-11 mx-auto "},r.a.createElement("label",{className:"col-50"},"Recipe Name "),r.a.createElement("input",{type:"text",name:"recipeName",placeholder:"Recipe Name",size:"30",ref:L,onChange:function(e){return s(e.target.value)}}),A.recipeName&&r.a.createElement("p",{className:"error"},A.recipeName),r.a.createElement("label",{className:"col-50"},"Ingredients "),r.a.createElement("input",{name:"ingredient",type:"text",size:"30",value:k,placeholder:"Enter Ingredient",ref:L,onChange:function(e){return x(e.target.value)}}),r.a.createElement("b",{className:"py-2 plus",onClick:function(){" "!==k&&(d([].concat(Object(g.a)(u),[k])),x(" "))}},"+"),u.map(function(e,t){return e&&r.a.createElement(P,{item:e,index:t})}),A.ingredient&&r.a.createElement("p",{className:"error"},A.ingredient),r.a.createElement("label",{className:"col-50"},"Instructions "),r.a.createElement("input",{name:"instruction",type:"text",size:"30",value:O,placeholder:"Enter Instruction",ref:L,onChange:function(e){return C(e.target.value)}}),r.a.createElement("b",{className:"py-2 plus",onClick:function(){" "!==O&&(w([].concat(Object(g.a)(v),[O])),C(" "))}},"+"),v.map(function(e,t){return e&&r.a.createElement(P,{item:e,index:t})}),A.instruction&&r.a.createElement("p",{className:"error"},A.instruction),r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("input",{type:"submit",value:"Save",className:"btn btn-warning"})))))}function N(){return r.a.createElement(m,{recipesList:p.a})}function y(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("recipes"))||[]),t=Object(l.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",null,r.a.createElement(v,{recipesList:a,setRecipesList:i}),r.a.createElement(m,{recipesList:a}))}var k=a(2);function x(){return r.a.createElement(c.a,null,r.a.createElement(s,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:N}),r.a.createElement(k.a,{exact:!0,path:"/add-recipes",component:y})))}o.a.render(r.a.createElement(x,null),document.getElementById("root"))},66:function(e){e.exports={a:[{recipeName:"Mexican Potato Pancakes",img:"https://myfoodstory.com/wp-content/uploads/2017/11/Leftover-Mashed-Potato-Ham-Cakes-3.jpg",ingredients:["2 cups diced tomatoes","\xbd small onion, chopped","1 small jalapeno pepper, seeded and chopped","5 potato, peeled and grated","salt and pepper to taste","1 dash hot pepper sauce, or to taste","1 small onion, minced","2 jalapeno pepper, seeded and minced","3 tablespoons all-purpose flour"],instructions:["Place tomatoes, onion, jalapeno, and water into the bowl of a blender; blend until smooth. Heat 1/4 cup canola oil in a saucepan over medium heat. Carefully stir in tomato puree, and cook for 15 minutes until thickened.","While the sauce is cooking, season the shredded potato to taste with salt, pepper, and hot pepper sauce. Mix in onion, eggs, and jalapeno; sprinkle with flour and mix until thoroughly combined. Heat canola oil in a large skillet over medium-high heat.","Drop potato mixture into hot oil by the heaping tablespoon. Flatten slightly, and cook until golden brown on both sides, about 2 minutes per side. Drain on paper towels, and continue with remaining potato mixture. Serve the potato pancakes with sauce spooned overtop."]},{recipeName:"Spicy Baked Sweet Potato Fries",img:"https://www.dinneratthezoo.com/wp-content/uploads/2019/07/sweet-potato-fries-5.jpg",ingredients:["6 sweet potatoes, cut into French fries","2 tablespoons canola oil","3 tablespoons taco seasoning mix","  \xbc teaspoon cayenne pepper"],instructions:[" Preheat the oven to 425 degrees F (220 degrees C).","In a plastic bag, combine the sweet potatoes, canola oil, taco seasoning, and cayenne pepper. Close and shake the bag until the fries are evenly coated. Spread the fries out in a single layer on two large baking sheets.","Bake for 30 minutes, or until crispy and brown on one side. Turn the fries over using a spatula, and cook for another 30 minutes, or until they are all crispy on the outside and tender inside. Thinner fries may not take as long."]},{recipeName:"Berry and Spinach Smoothie",img:"https://i0.wp.com/chefsavvy.com/wp-content/uploads/2014/11/20141114-DSC_0079.jpg?ssl=1",ingredients:["2 cups frozen berries","1 cup plain yogurt","\xbd cup orange juice","\xbc cup fresh spinach, or to taste","5 strawberries"],instructions:["Blend berries, yogurt, orange juice, spinach, and strawberries together in a blender until smooth."]},{recipeName:"Moist Chocolate Cake",img:"https://st2.depositphotos.com/1373322/6499/i/950/depositphotos_64998345-stock-photo-chocolate-cake-with-cherry-and.jpg",ingredients:["2 cups white sugar","1\u2009\xbe cups all-purpose flour","\xbe cup unsweetened cocoa powder","1\u2009\xbd teaspoons baking powder","1 cup milk","2 teaspoons vanilla extract"],instructions:["Preheat oven to 350 degrees F (175 degrees C). Grease and flour two nine inch round pans.","In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking soda and salt. Add milk and vanilla, mix for 2 minutes on medium speed of mixer. Stir in the boiling water last. Batter will be thin. Pour evenly into the prepared pans.","Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick. Cool in the pans for 10 minutes, then remove to a wire rack to cool completely."]}]}},71:function(e,t,a){e.exports=a(181)},76:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.2e70bd43.chunk.js.map