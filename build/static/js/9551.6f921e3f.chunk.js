"use strict";(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[9551],{29551:function(e,s,r){r.r(s);var i=r(89743),l=r(2677),d=r(8396),t=r(12576),a=r(9140),n=r(55615),c=r(80184),h=function(e){var s=e.items;return(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{className:"table mb-0",children:[(0,c.jsx)("thead",{className:"table-light",children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Item"}),(0,c.jsx)("th",{children:"Quantity"}),(0,c.jsx)("th",{children:"Price"}),(0,c.jsx)("th",{children:"Total"})]})}),(0,c.jsx)("tbody",{children:(s||[]).map((function(e,s){return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:e.name}),(0,c.jsx)("td",{children:e.quantity}),(0,c.jsx)("td",{children:e.price}),(0,c.jsx)("td",{children:e.total})]},s.toString())}))})]})})},x=function(e){var s=e.summary;return(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{className:"table mb-0",children:[(0,c.jsx)("thead",{className:"table-light",children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Description"}),(0,c.jsx)("th",{children:"Price"})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Grand Total :"}),(0,c.jsx)("td",{children:s.gross_total})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Shipping Charge :"}),(0,c.jsx)("td",{children:s.shipping_charge})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Estimated Tax : "}),(0,c.jsx)("td",{children:s.tax})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Total :"}),(0,c.jsx)("td",{children:s.net_total})]})]})]})})},j=function(e){var s=e.details;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h5",{children:s.provider}),(0,c.jsxs)("address",{className:"mb-0 font-14 address-lg",children:[s.address_1,(0,c.jsx)("br",{}),s.address_2,(0,c.jsx)("br",{}),(0,c.jsx)("abbr",{title:"Phone",children:"P:"})," ",s.phone," ",(0,c.jsx)("br",{}),(0,c.jsx)("abbr",{title:"Mobile",children:"M:"})," ",s.mobile]})]})},m=function(e){var s=e.details;return(0,c.jsx)("ul",{className:"list-unstyled mb-0",children:(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{className:"mb-2",children:[(0,c.jsx)("span",{className:"fw-bold me-2",children:"Payment Type:"})," ",s.type]}),(0,c.jsxs)("p",{className:"mb-2",children:[(0,c.jsx)("span",{className:"fw-bold me-2",children:"Provider:"})," ",s.provider]}),(0,c.jsxs)("p",{className:"mb-2",children:[(0,c.jsx)("span",{className:"fw-bold me-2",children:"Valid Date:"})," ",s.valid]}),(0,c.jsxs)("p",{className:"mb-0",children:[(0,c.jsx)("span",{className:"fw-bold me-2",children:"CVV:"})," xxx"]})]})})},o=function(e){var s=e.details;return(0,c.jsxs)("div",{className:"text-center",children:[(0,c.jsx)("i",{className:"mdi mdi-truck-fast h2 text-muted"}),(0,c.jsx)("h5",{children:(0,c.jsx)("b",{children:s.provider})}),(0,c.jsxs)("p",{className:"mb-1",children:[(0,c.jsx)("b",{children:"Order ID :"})," ",s.order_id]}),(0,c.jsxs)("p",{className:"mb-0",children:[(0,c.jsx)("b",{children:"Payment Mode :"})," ",s.payment_mode]})]})};s.default=function(){var e={id:"#BM31",order_status:"Packed",items:[{id:1,name:"The Military Duffle Bag",quantity:3,price:"$128",total:"$384"},{id:2,name:"Mountain Basket Ball",quantity:1,price:"$199",total:"$199"},{id:3,name:"Wavex Canvas Messenger Bag",quantity:5,price:"$180",total:"$900"},{id:4,name:"The Utility Shirt",quantity:2,price:"$79",total:"$158"}],gross_total:"$1641",shipping_charge:"$23",tax:"$19.22",net_total:"$1683.22",shipping:{provider:"Stanley Jones",address_1:"795 Folsom Ave, Suite 600",address_2:"San Francisco, CA 94107",phone:"(123) 456-7890 ",mobile:"(+01) 12345 67890"},billing:{type:"Credit Card",provider:"Visa ending in 2851",valid:"02/2020"},delivery:{provider:"UPS Delivery",order_id:"#BM31",payment_mode:"COD"}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.V1,{breadCrumbItems:[{label:"eCommerce",path:"/apps/ecommerce/order/details"},{label:"Order Details",path:"/apps/ecommerce/order/details",active:!0}],title:"Order Details"}),(0,c.jsx)(i.Z,{children:(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(i.Z,{className:"justify-content-center",children:(0,c.jsx)(l.Z,{lg:7,md:10,sm:11,children:(0,c.jsxs)("div",{className:"horizontal-steps mt-4 mb-4 pb-5",children:[(0,c.jsxs)("div",{className:"horizontal-steps-content",children:[(0,c.jsx)("div",{className:"step-item",children:(0,c.jsx)(d.Z,{placement:"bottom",overlay:(0,c.jsx)(t.Z,{children:"20/08/2018 07:24 PM"}),children:(0,c.jsx)("span",{children:" Order Placed"})})}),(0,c.jsx)("div",{className:"step-item current",children:(0,c.jsx)(d.Z,{placement:"bottom",overlay:(0,c.jsx)(t.Z,{children:"21/08/2018 11:32 AM"}),children:(0,c.jsx)("span",{children:" Packed"})})}),(0,c.jsx)("div",{className:"step-item",children:(0,c.jsx)("span",{children:"Shipped"})}),(0,c.jsx)("div",{className:"step-item",children:(0,c.jsx)("span",{children:"Delivered"})})]}),(0,c.jsx)("div",{className:"process-line",style:{width:"33%"}})]})})}),(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(l.Z,{lg:8,children:(0,c.jsx)(a.Z,{children:(0,c.jsxs)(a.Z.Body,{children:[(0,c.jsxs)("h4",{className:"header-title mb-3",children:["Items from Order ",e.id]}),(0,c.jsx)(h,{items:e.items})]})})}),(0,c.jsx)(l.Z,{lg:4,children:(0,c.jsx)(a.Z,{children:(0,c.jsxs)(a.Z.Body,{children:[(0,c.jsx)("h4",{className:"header-title mb-3",children:"Order Summary"}),(0,c.jsx)(x,{summary:e})]})})})]}),(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(l.Z,{lg:4,children:(0,c.jsx)(a.Z,{children:(0,c.jsxs)(a.Z.Body,{children:[(0,c.jsx)("h4",{className:"header-title mb-3",children:"Shipping Information"}),(0,c.jsx)(j,{details:e.shipping})]})})}),(0,c.jsx)(l.Z,{lg:4,children:(0,c.jsx)(a.Z,{children:(0,c.jsxs)(a.Z.Body,{children:[(0,c.jsx)("h4",{className:"header-title mb-3",children:"Billing Information"}),(0,c.jsx)(m,{details:e.billing})]})})}),(0,c.jsx)(l.Z,{lg:4,children:(0,c.jsx)(a.Z,{children:(0,c.jsxs)(a.Z.Body,{children:[(0,c.jsx)("h4",{className:"header-title mb-3",children:"Delivery Info"}),(0,c.jsx)(o,{details:e.delivery})]})})})]})]})})]})}}}]);
//# sourceMappingURL=9551.6f921e3f.chunk.js.map