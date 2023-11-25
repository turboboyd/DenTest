"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[11],{1023:function(e,r,t){t.d(r,{Z:function(){return _}});var c="BasicModalWindow_backdrop__zF1Qa",s="BasicModalWindow_modalWrapper__z8HT4",n=t(4164),o=t(2791),a="CloseButton_button__1uWD8",d="CloseButton_iconClose__6Mb78",i=t(182),l=t(3329),u=function(e){var r=e.handleCloseModal;return(0,l.jsx)("button",{className:a,type:"button",onClick:r,children:(0,l.jsx)(i.Z,{className:d,iconId:"Close"})})},m=document.querySelector("#modal-root"),_=function(e){var r=e.children,t=e.handleModalToggle;(0,o.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,n.createPortal)((0,l.jsx)("div",{className:c,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)(u,{handleCloseModal:t}),r]})}),m)}},4112:function(e,r,t){t.d(r,{Z:function(){return n}});var c="TitlePage_title__zyjBQ",s=t(3329);function n(e){var r=e.title;return(0,s.jsx)("h1",{className:c,children:r})}},1301:function(e,r,t){var c=t(9434),s=t(3027);r.Z=function(){return{diaryProducts:(0,c.v9)(s.P3),diaryExercises:(0,c.v9)(s.KR),diaryIsLoading:(0,c.v9)(s.$x),diaryError:(0,c.v9)(s.QN)}}},1627:function(e,r,t){t.r(r),t.d(r,{default:function(){return he}});var c=t(4112),s=t(1413),n=t(3433),o=t(9439),a=t(9434),d=t(2791),i=t(1087),l=t(5294),u=t(1617),m=function(e){return e.products.items},_=function(e){return e.products.category},x=function(e){return e.products.filters},p=function(e){return e.products.isLoading},h=function(e){return e.products.error},f=function(e){return e.products.getMore},g=function(){var e=(0,a.v9)(m),r=(0,a.v9)(_);return{products:e,filters:(0,a.v9)(x),productsIsLoading:(0,a.v9)(p),productsError:(0,a.v9)(h),productsGetMore:(0,a.v9)(f),category:r}},v=t(182),j=t(1220),N=t(7834),C=t(1023),P=t(5705),Z=t(1301),y="AddProductForm_container__YBAvA",S="AddProductForm_inputContainer__1uqyJ",b="AddProductForm_inputProduct__K1YMm",A="AddProductForm_inputGrams__kcPoQ",F="AddProductForm_text__QjxaI",E="AddProductForm_textCalories__60oO9",I="AddProductForm_buttonWrapper__xC1d5",w="AddProductForm_button__Alzd8",k="AddProductForm_button2__Ipdcp",T=t(0),M=t(7120),R=t(5031),L=t(9577),B=t(3329),W=function(e){var r=e.product,t=e.handleModalProduct,c=e.handleModalSuccess,s=e.handleSelectedProduct,n=(0,a.I0)(),o=(0,Z.Z)().diaryError,d=function(e){return Math.round(e*r.calories/100)},i=(0,T.Z)(new Date);return(0,B.jsx)("div",{className:y,children:(0,B.jsx)(P.J9,{initialValues:{amount:""},validationSchema:R.Z,onSubmit:function(e){var a={date:i,product:r._id,amount:e.amount,calories:d(e.amount)};n((0,M.Re)(a)),o?console.log("Server error. Try again later"):(t(),c(),s(a))},children:function(e){return(0,B.jsxs)(P.l0,{children:[(0,B.jsxs)("div",{className:S,children:[(0,B.jsx)("label",{htmlFor:"title",children:(0,B.jsx)(P.gN,{className:b,id:"title",type:"text",name:"title",value:(0,L.Z)(r.title),disabled:!0})}),(0,B.jsx)(P.gN,{className:A,id:"grams",type:"text",name:"amount",placeholder:"grams"})]}),(0,B.jsxs)("p",{className:F,children:["Calories:"," ",(0,B.jsx)("span",{className:E,children:(0,B.jsx)(P.gN,{name:"amount",children:function(e){var r=e.field;return d(r.value)}})})]}),(0,B.jsxs)("div",{className:I,children:[(0,B.jsx)("button",{className:w,type:"submit",disabled:!e.isValid,children:"Add to diary"}),(0,B.jsx)("button",{className:k,type:"button",onClick:t,children:"Cancel"})]})]})}})})},Q="AddProductSuccess_container__AkagA",D="AddProductSuccess_image__ohi8Y",q="AddProductSuccess_title__omYwl",K="AddProductSuccess_text__UEw+f",O="AddProductSuccess_textCalories__41fIg",V="AddProductSuccess_button__GQJKQ",z="AddProductSuccess_linkWrapper__DJv+W",G="AddProductSuccess_link__O+rV3",Y="AddProductSuccess_iconArrow__WMwhk",U=t.p+"static/media/foodIcon.2edbd1522a105924ee3e.png",H=t(2041),J=function(e){var r=e.handleModalSuccess,t=e.selectedProduct;return(0,B.jsxs)("div",{className:Q,children:[(0,B.jsx)("img",{className:D,src:U,alt:"Avocado icon"}),(0,B.jsx)("strong",{className:q,children:"Well done"}),(0,B.jsxs)("p",{className:K,children:["Calories:"," ",(0,B.jsx)("span",{className:O,children:t.calories})]}),(0,B.jsx)("button",{className:V,type:"button",onClick:r,children:"Next product"}),(0,B.jsxs)("div",{className:z,children:[(0,B.jsx)(i.OL,{to:H.zw,className:G,onClick:r,children:"To the diary"}),(0,B.jsx)(v.Z,{className:Y,iconId:"Arrow"})]})]})},X=(0,d.forwardRef)((function(e,r){var t=e.product,c=(0,N.Z)().user.profileSettings.blood,s=(0,d.useState)(!1),n=(0,o.Z)(s,2),a=n[0],i=n[1],l=(0,d.useState)(!1),u=(0,o.Z)(l,2),m=u[0],_=u[1],x=(0,d.useState)(""),p=(0,o.Z)(x,2),h=p[0],f=p[1],g=function(){i((function(e){return!e})),document.body.classList.toggle("body-scroll-lock")},P=function(){_((function(e){return!e})),document.body.classList.toggle("body-scroll-lock")};return(0,B.jsxs)("div",{className:j.Z.exerciseWrapper,ref:r,children:[(0,B.jsxs)("div",{className:j.Z.productsCardTopPart,children:[(0,B.jsx)("p",{className:j.Z.exerciseCardTopDiet,children:"diet"}),t.groupBloodNotAllowed[c]?(0,B.jsxs)("div",{className:j.Z.productRecommended,children:[(0,B.jsx)("p",{className:j.Z.productRecommendedTrue}),(0,B.jsx)("p",{children:"Recommended"})]}):(0,B.jsxs)("div",{className:j.Z.productRecommended,children:[(0,B.jsx)("p",{className:j.Z.productRecommendedFalse}),(0,B.jsx)("p",{children:"Not recommended"})]}),(0,B.jsxs)("button",{className:j.Z.exerciseArrow,onClick:g,children:["Add",(0,B.jsx)(v.Z,{className:j.Z.exerciseArrowSvg,iconId:"Arrow"})]}),a&&(0,B.jsx)(C.Z,{handleModalToggle:g,children:(0,B.jsx)(W,{handleModalSuccess:P,handleModalProduct:g,product:t,handleSelectedProduct:function(e){f(e)}})}),m&&(0,B.jsx)(C.Z,{handleModalToggle:P,children:(0,B.jsx)(J,{handleModalSuccess:P,selectedProduct:h})})]}),(0,B.jsxs)("div",{className:j.Z.exerciseName,children:[(0,B.jsx)(v.Z,{className:j.Z.exerciseManSvg,iconId:"Runner"}),(0,B.jsx)("h3",{className:j.Z.exerciseNameText,children:t.title})]}),(0,B.jsxs)("ul",{className:j.Z.exerciseCardLowPart,children:[(0,B.jsxs)("li",{children:["Calories:",(0,B.jsx)("span",{children:t.calories})]}),(0,B.jsxs)("li",{className:j.Z.productCategory,children:["Category:",(0,B.jsx)("span",{className:j.Z.exerciseCardItem,children:t.category})]}),(0,B.jsxs)("li",{children:["Weight:",(0,B.jsx)("span",{className:j.Z.exerciseCardItem,children:t.weight})]})]})]})})),$=t(9971),ee=t(4152),re=t(2232),te=function(){var e=(0,a.I0)(),r=(0,i.lr)(),t=(0,o.Z)(r,1)[0],c=g(),m=c.products,_=c.filters,x=c.productsIsLoading,p=c.productsGetMore,h=(0,d.useRef)(),f=(0,d.useMemo)((function(){return Object.fromEntries((0,n.Z)(t))}),[t]),v=Object.keys(f).length>0&&(f.search!==_.search||f.category!==_.category||f.recommended!==_.recommended),j=(0,d.useCallback)((function(r){x||(h.current&&h.current.disconnect(),h.current=new IntersectionObserver((function(r){if(r[0].isIntersecting&&p){var t=_.page+1;e((0,ee.rr)({page:t}))}})),r&&h.current.observe(r))}),[x,p,e,_.page]);return(0,d.useEffect)((function(){var r=l.Z.CancelToken.source(),t=r.token,c=_;return v&&e((0,ee.rr)((0,s.Z)({},f))),e((0,u.t)({filterParams:c,cancelToken:t})),function(){return r.cancel()}}),[e,_,f,v]),(0,d.useEffect)((function(){return function(){e((0,ee.U7)()),e((0,ee.rr)({page:1}))}}),[e]),(0,B.jsxs)(B.Fragment,{children:[x&&1===_.page&&(0,B.jsx)(re.Z,{}),(0,B.jsx)("div",{className:$.Z.cardContainer,children:m.map((function(e,r){return m.length===r+1?(0,B.jsx)(X,{ref:j,product:e},e._id):(0,B.jsx)(X,{product:e},e._id)}))})]})},ce=t(4942),se=t(9334),ne="ProductsFilter_prodFilterForm__RotTv",oe="ProductsFilter_prodFilterSearchBox__lproc",ae="ProductsFilter_prodFilterSearchField__-eWaH",de="ProductsFilter_prodSearchCancelBtn__KvECn",ie="ProductsFilter_prodSearchIcon__DgQpn",le="ProductsFilter_prodSearchSubmitBtn__BZNft ProductsFilter_prodSearchCancelBtn__KvECn",ue="ProductsFilter_prodFilterSelectsWrapper__qm2KI",me="ProductsFilter_prodFilterCategorySlct__35BA-",_e="ProductsFilter_prodFilterRecSlct__2o6pX ProductsFilter_prodFilterCategorySlct__35BA-",xe=function(){var e=(0,a.I0)(),r=(0,i.lr)(),t=(0,o.Z)(r,2),c=t[0],l=t[1],m=g(),_=m.category,x=m.filters,p=(0,d.useMemo)((function(){return Object.fromEntries((0,n.Z)(c))}),[c]),h=""!==x.search||""!==x.category||""!==x.recommended,f=0===Object.keys(p).length,v=(0,P.TA)({initialValues:{search:p.search||x.search,category:p.category||x.category,recommended:p.recommended||x.recommended},onSubmit:function(e){return j(e)}});(0,d.useEffect)((function(){f&&h&&l({search:x.search,category:x.category,recommended:x.recommended}),e((0,u.w)())}),[e,h,f,x.search,x.category,x.recommended,l]);var j=function(r){l(r),e((0,ee.U7)()),e((0,ee.rr)((0,s.Z)({page:1},r)))},N=function(e){v.handleChange(e);var r=v.initialValues,t=v.values;if(e.target.value!==r[e.target.value]){var c=(0,s.Z)((0,s.Z)({},t),{},(0,ce.Z)({},e.target.name,e.target.value));j(c)}};return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)("form",{className:ne,onSubmit:v.handleSubmit,children:[(0,B.jsxs)("div",{className:oe,children:[(0,B.jsx)("input",{className:ae,type:"text",name:"search",placeholder:"Search",value:v.values.search,onChange:v.handleChange}),v.initialValues.search!==v.values.search&&(0,B.jsx)("button",{className:de,type:"button",onClick:function(){v.setFieldValue("search",""),v.handleSubmit()},children:(0,B.jsx)("svg",{className:ie,children:(0,B.jsx)("use",{href:"".concat(se.Z,"#Close")})})}),(0,B.jsx)("button",{className:le,type:"submit",children:(0,B.jsx)("svg",{className:ie,children:(0,B.jsx)("use",{href:"".concat(se.Z,"#Search")})})})]}),(0,B.jsxs)("div",{className:ue,children:[(0,B.jsxs)("select",{className:me,name:"category",value:v.values.category,onChange:N,children:[(0,B.jsx)("option",{value:"",children:"Categories"}),_.map((function(e){return(0,B.jsx)("option",{value:e,children:e},e)}))]}),(0,B.jsxs)("select",{className:_e,name:"recommended",value:v.values.recommended,onChange:N,children:[(0,B.jsx)("option",{value:"",children:"All"}),(0,B.jsx)("option",{value:!0,children:"Recommended"}),(0,B.jsx)("option",{value:!1,children:"Not recommended"})]})]})]})})},pe=t(7689),he=function(){var e=(0,N.Z)().user;return e&&null!==e.profileSettings?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{className:$.Z.containerProducts,children:[(0,B.jsx)(c.Z,{title:"Products"}),(0,B.jsx)(xe,{})]}),(0,B.jsx)(te,{})]}):(0,B.jsx)(pe.Fg,{to:H._2})}},3027:function(e,r,t){t.d(r,{$x:function(){return n},KR:function(){return s},P3:function(){return c},QN:function(){return o}});var c=function(e){return e.diary.diaryProducts},s=function(e){return e.diary.diaryExercises},n=function(e){return e.diary.isLoading},o=function(e){return e.diary.error}},9577:function(e,r){r.Z=function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}},0:function(e,r){r.Z=function(e){var r=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),c=e.getFullYear();return"".concat(c,"-").concat(t,"-").concat(r)}},5031:function(e,r,t){var c=t(8007),s=c.Ry().shape({amount:c.Rx().positive("Amount must be a positive number").required("Amount is required")});r.Z=s},1220:function(e,r){r.Z={exerciseWrapper:"ExercisesItem_exerciseWrapper__RIxrk",exerciseCardTopPart:"ExercisesItem_exerciseCardTopPart__Pqhh+",exerciseCardTopDiet:"ExercisesItem_exerciseCardTopDiet__NE2S6",exerciseArrow:"ExercisesItem_exerciseArrow__qG4Qc",exerciseName:"ExercisesItem_exerciseName__ZDurI",exerciseManSvg:"ExercisesItem_exerciseManSvg__6FfGy",exerciseArrowSvg:"ExercisesItem_exerciseArrowSvg__PllwK",exerciseNameText:"ExercisesItem_exerciseNameText__lZpBN",exerciseCardLowPart:"ExercisesItem_exerciseCardLowPart__Pd5F8",exerciseCardItem:"ExercisesItem_exerciseCardItem__hHkND",productRecommendedTrue:"ExercisesItem_productRecommendedTrue__ImE7z",productRecommendedFalse:"ExercisesItem_productRecommendedFalse__ZZ2Vd",productsCardTopPart:"ExercisesItem_productsCardTopPart__oPg19",productRecommended:"ExercisesItem_productRecommended__NqFXH",productCategory:"ExercisesItem_productCategory__w+tQU"}},9971:function(e,r){r.Z={exerciseArrowSvg:"ExercisesList_exerciseArrowSvg__eumz-",exerciseArrow:"ExercisesList_exerciseArrow__IEsFr",exercisesTitle:"ExercisesList_exercisesTitle__6FPY+",cardContainer:"ExercisesList_cardContainer__MW6u4",cardContainerBackground:"ExercisesList_cardContainerBackground__xLfR5",containerProducts:"ExercisesList_containerProducts__PcZc6"}}}]);
//# sourceMappingURL=11.dab3b711.chunk.js.map