(this.webpackJsonpcatsapp=this.webpackJsonpcatsapp||[]).push([[0],{20:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(4),a=n.n(c),s=(n(20),n(2)),i="[Game] Iniciar juego",o="[Game] Answer",u="[Game] Load New Question",l="[Game] Next Question",d="[Game] Reset",j=n(9),b=n.n(j),m=n(13),O=n(15);function f(e,t){return Object(O.a)(e).sort((function(){return Math.random()>.5?1:-1})).slice(0,t)}var p=function(){var e=Object(m.a)(b.a.mark((function e(){var t,n,r,c,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.thecatapi.com/v1/breeds",e.next=3,fetch("https://api.thecatapi.com/v1/breeds");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r=n.filter((function(e){var t;return null!=(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.url)})).map((function(e){return{id:e.id,catName:e.name,url:e.image.url}})),c=f(r,3),a=f(c,1)[0],s={quizOptions:c,correctAnswer:a},e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=n(14),w=n.n(h),v=n(1),x=function(){var e=Object(s.c)((function(e){return e.game})),t=e.correctAnswersCount,n=e.totalQuestions,c=Object(s.b)(),a="https://cataas.com/cat/says/"+(t<=4?"You know nothing":t<=7?"Must improve":"You are a Meowster!")+"?t="+Date.now();return Object(r.useEffect)((function(){w.a.fire({imageUrl:a,imageAlt:"Custom image",customClass:"swal-style",text:"Score: "+t+"/"+n,width:600,padding:"3em",background:"#fff url(/images/trees.png)",backdrop:"\n              rgba(0,0,123,0.4)\n              left top\n              no-repeat\n            ",confirmButtonColor:"#3085d6",confirmButtonText:"Try again",allowOutsideClick:!1}).then((function(e){e.isConfirmed&&c({type:d})}))}),[t]),Object(v.jsx)("div",{})},g=function(e){var t=e.quizObject,n=Object(s.b)(),r=Object(s.c)((function(e){return e.game})),c=r.counter,a=r.totalQuestions,i=r.idCorrectAnswer,u=r.idUserAnswer,d=function(e){n(function(e){return{type:o,payload:{idUserAnswer:e}}}(e.target.id)),c!==a&&setTimeout((function(){n({type:l})}),1e3)};return Object(v.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[c===a&&null!==u&&Object(v.jsx)(x,{}),Object(v.jsxs)("div",{className:"game-container",children:[Object(v.jsxs)("div",{className:"question-number",children:[" ",Object(v.jsxs)("span",{className:"contador",children:[c," of ",a]})]}),Object(v.jsx)("div",{className:"image-questions",children:t&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"image-card",children:Object(v.jsx)("img",{src:null!=t.correctAnswer.url&&null!=t.correctAnswer.url?t.correctAnswer.url:"",width:"200px"})}),Object(v.jsx)("div",{className:"form-container",children:t.quizOptions.map((function(e){return Object(v.jsx)("button",{id:e.id,className:"option-box "+(null!==u&&e.id===i?"correcto":null!==u&&e.id!==i&&"incorrecto"),onClick:d,children:e.catName},e.id)}))})]})})]})]})},A=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.game})),n=t.counter,c=t.quizObject;return Object(r.useEffect)((function(){p().then((function(t){e(function(e){return{type:u,payload:e}}(t))}))}),[n]),Object(v.jsx)(g,{quizObject:c})},N=function(){var e=Object(s.b)();return Object(v.jsx)("div",{className:"startGame-btn",children:Object(v.jsx)("button",{onClick:function(){p().then(e({type:i}))},children:"START"})})},_=n(10),y=n(3),C={quizObject:null,idCorrectAnswer:null,idUserAnswer:null,counter:1,startedGame:!1,correctAnswersCount:0,totalQuestions:10},k=Object(_.a)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(y.a)(Object(y.a)({},e),{},{startedGame:!0});case u:return Object(y.a)(Object(y.a)({},e),{},{quizObject:t.payload,idCorrectAnswer:t.payload.correctAnswer.id});case o:var n=t.payload.idUserAnswer===e.idCorrectAnswer?1:0;return Object(y.a)(Object(y.a)({},e),{},{idUserAnswer:t.payload.idUserAnswer,correctAnswersCount:e.correctAnswersCount+n});case l:return Object(y.a)(Object(y.a)({},e),{},{counter:e.counter<e.totalQuestions?e.counter+1:e.counter=0,idUserAnswer:null});case d:return C;default:return e}}}),E=Object(_.b)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),q=function(){var e=Object(s.c)((function(e){return e.game})).startedGame;return Object(v.jsxs)("div",{className:"heroCat animate__animated animate__fadeIn",children:[" ",Object(v.jsxs)("div",{className:"header ",children:[Object(v.jsx)("div",{className:"cat-image-container",children:Object(v.jsx)("div",{className:"cat-image"})}),Object(v.jsx)("div",{className:"title",children:Object(v.jsx)("h1",{children:"Cat Quiz"})}),Object(v.jsxs)("div",{className:"title-question",children:[" ",Object(v.jsx)("h3",{children:"How much do you know about cats?"})]})]}),e?Object(v.jsx)(A,{}):Object(v.jsx)(N,{})]})};var U="./sw.js";navigator.serviceWorker&&(window.location.href.includes("localhost")&&(U="./catsApp/sw.js"),navigator.serviceWorker.register(U));var G=function(){return Object(v.jsx)(s.a,{store:E,children:Object(v.jsx)(q,{})})};a.a.render(Object(v.jsx)(G,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c2a5574b.chunk.js.map