(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{48:function(e,t,a){e.exports=a.p+"static/media/sneakers1.349d636b.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/sneakers2.51787fb7.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/sneakers3.17e95534.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/comein.ea51a632.jpg"},55:function(e,t,a){e.exports=a(90)},60:function(e,t,a){},61:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(60),a(61),a(14)),i=a(94),m=a(95),s=a(96),u=a(97),d=a(98),E=a(109),p=a(17),f=a(25),g=a(33),v=a(26),h=a(48),b=a.n(h),y=a(49),j=a.n(y),x=a(50),O=a.n(x),N=[{Title:"Awesome product",Price:3.98,Img:b.a,Id:"1",isFavorite:!1},{Title:"Another Awesome product",Price:3.98,Img:j.a,Id:"2",isFavorite:!1},{Title:"A miracle product",Price:3.98,Img:O.a,Id:"3",isFavorite:!1}],C=r.a.createContext();function I(e){var t=e.children,a=Object(n.useState)(N),l=Object(o.a)(a,2),c=l[0],i=l[1],m=Object(n.useState)([]),s=Object(o.a)(m,2),u=s[0],d=s[1];return r.a.createElement(C.Provider,{value:{allProducts:c,toggleFavourite:function(e){var t=c.map((function(t){return t.Id===e?Object(g.a)(Object(g.a)({},t),{},{isFavorite:!t.isFavorite}):t}));i(t)},cartItems:u,addToCart:function(e){d((function(t){return[].concat(Object(f.a)(t),[e])})),v.b.success("You've added item to cart!")},removeFromCart:function(e){d((function(t){return t.filter((function(t){return t.Id!==e}))})),console.log("remove")},emptyCart:function(){d([])}}},t)}function k(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],c=a[1],f=Object(n.useContext)(C).cartItems,g=0===f.length?r.a.createElement("i",{className:"ri-shopping-cart-2-line"}):r.a.createElement("i",{className:"ri-shopping-cart-2-fill",style:{color:"#4BB543"}});return r.a.createElement(i.a,{className:"navbar-dark bg-dark text-white",light:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mr-auto companyName"},r.a.createElement(p.b,{to:"/webshop",style:{fontSize:"34px"}},"Web",r.a.createElement("span",{style:{color:"#4BB543"}},"Shop"))),r.a.createElement(m.a,{onClick:function(){return c(!l)},className:"mr-2"}),r.a.createElement(s.a,{isOpen:!l,navbar:!0},r.a.createElement(u.a,{className:"mr-auto"}),r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement(p.b,{className:"test",to:"/webshop/cart",style:{fontSize:"34px"}},g)),f.length>0?r.a.createElement("span",{className:" rounded-circle bg-success",href:"#",id:"UncontrolledTooltipExample"},f.length,r.a.createElement(E.a,{placement:"right",target:"UncontrolledTooltipExample"},"You have ",f.length," ",f.length>1?"items":"item"," in your cart")):""))))}var T=a(8),w=a(99),F=a(100),P=a(101),S=a(102),A=a(103),U=a(104),B=a(105);function L(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),i=Object(o.a)(c,2),m=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,Object(f.a)(Array(5)).map((function(e,t){var n=t+1;return r.a.createElement("label",{key:t},r.a.createElement("input",{type:"radio",name:"rating",value:n,onClick:function(){return l(n)}}),r.a.createElement("i",{className:"ri-star-fill star",style:n<=(m||a)?{color:"#4BB543"}:{color:"#e4e5e9"},onMouseEnter:function(){return s(n)},onMouseLeave:function(){return s(null)}}))})))}a(47);function W(e){var t=e.Title,a=e.Price,l=e.Img,c=e.Id,i=e.isFavorite,m=e.Product,s=Object(n.useState)(!1),u=Object(o.a)(s,2),d=u[0],p=u[1],f=Object(n.useContext)(C),g=f.toggleFavourite,v=f.addToCart;return r.a.createElement(w.a,{className:"mt-2 card",onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},r.a.createElement(F.a,null,r.a.createElement("span",null,t," ")," ",r.a.createElement("span",{className:"float-right"},i?r.a.createElement("i",{href:"#",id:"UncontrolledTooltipExample",className:"ri-heart-2-fill",style:{cursor:"pointer",color:"crimson"},onClick:function(){return g(c)}}):d?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{href:"#",id:"UncontrolledTooltipExample",className:"ri-heart-2-line",style:{cursor:"pointer",color:"crimson"},onClick:function(){return g(c)}}),r.a.createElement(E.a,{placement:"right",target:"UncontrolledTooltipExample"},"Add product as favourite")):void 0)),r.a.createElement(P.a,null,r.a.createElement(S.a,null,"Special Title Treatment"),r.a.createElement(A.a,null,r.a.createElement("img",{src:l,alt:""}),r.a.createElement("span",{className:"pt-5",style:{display:"block"}},"With supporting text below as a natural lead-in to additional content."),r.a.createElement("br",null),r.a.createElement("span",{className:"mt-1"},"Price: $",a)),r.a.createElement(U.a,{outline:!0,color:"success",onClick:function(){return v(m)}},"Add to Cart")),r.a.createElement(B.a,null,r.a.createElement("div",null,"Rate product:"),r.a.createElement(L,null)))}var M=a(106),q=a(107),z=a(108),J=a(54),R=a.n(J);function Y(){var e=Object(n.useContext)(C).allProducts.map((function(e){return r.a.createElement(M.a,{key:e.Id,md:"6",lg:"4",className:"text-center"},r.a.createElement(W,{Title:e.Title,Price:e.Price,Img:e.Img,Id:e.Id,isFavorite:e.isFavorite,Product:e}))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"info "},r.a.createElement(q.a,null,r.a.createElement(z.a,{className:"infoRow"},r.a.createElement(M.a,{md:"6"},r.a.createElement("img",{src:R.a,alt:""})),r.a.createElement(M.a,{md:"6"},r.a.createElement("h3",null,"Welcome"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dicta modi doloremque ipsam magnam molestiae."),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dicta modi doloremque ipsam magnam molestiae."))))),r.a.createElement(q.a,null,r.a.createElement("h3",{className:"mt-5"},"Trending products")),r.a.createElement(q.a,{className:"mb-5"},r.a.createElement(v.a,{style:{marginTop:"3.1rem"}}),r.a.createElement(z.a,null,e)))}function $(e){var t=e.item,a=Object(n.useContext)(C).removeFromCart;return r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",null,t.Title),r.a.createElement("img",{src:t.Img,style:{width:"150px"},alt:"product"}),r.a.createElement("br",null),r.a.createElement(U.a,{className:"mt-3",outline:!0,color:"success",onClick:function(){return a(t.Id)}},"remove"))}function D(){var e=Object(n.useContext)(C),t=e.cartItems,a=e.emptyCart,l=Object(n.useState)("Place Order"),c=Object(o.a)(l,2),i=c[0],m=c[1],s=(3.98*t.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),u=t.map((function(e){return r.a.createElement($,{key:e.Id,item:e})})),d=t.length>0?r.a.createElement(U.a,{outline:!0,color:"success",style:{marginLeft:"3rem"},onClick:function(){m("Ordering..."),setTimeout((function(){console.log("order placed"),m("Place Order"),a()}),3e3)}},i):null;return r.a.createElement("div",{className:"mt-4",style:{textAlign:"center"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h4",null,"Checkout")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("h4",null,"Total: ",s," ")," ",d),u)}var G=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("div",null,r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/webshop"},r.a.createElement(Y,null)),r.a.createElement(T.a,{path:"/webshop/cart"},r.a.createElement(D,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(89);c.a.render(r.a.createElement(I,null,r.a.createElement(p.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.afd20b5d.chunk.js.map