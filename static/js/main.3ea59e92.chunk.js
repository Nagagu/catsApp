(this.webpackJsonpcatsapp=this.webpackJsonpcatsapp||[]).push([[0],{20:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(4),a=n.n(c),s=(n(20),n(2)),i="[Game] Iniciar juego",o="[Game] Answer",u="[Game] Load New Question",l="[Game] Next Question",d="[Game] Reset",j=n(9),b=n.n(j),m=n(15),O=n(13),f=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n,r,c,a,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,t){return Object(m.a)(e).sort((function(){return Math.random()>.5?1:-1})).slice(0,t)},"https://api.thecatapi.com/v1/breeds",e.next=4,fetch("https://api.thecatapi.com/v1/breeds");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.filter((function(e){var t;return null!=(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.url)})).map((function(e){return{id:e.id,catName:e.name,url:e.image.url}})),a=t(c,3),s=t(a,1)[0],i={quizOptions:a,correctAnswer:s},e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=n(14),h=n.n(p),w=n(1),v=function(){var e=Object(s.c)((function(e){return e.game})),t=e.correctAnswersCount,n=e.totalQuestions,c=Object(s.b)(),a="https://cataas.com/cat/says/"+(t<=4?"You know nothing":t<=7?"Must improve":"You are a Meowster!")+"?t="+Date.now();return Object(r.useEffect)((function(){h.a.fire({imageUrl:a,imageAlt:"Custom image",customClass:"swal-style",text:"Score: "+t+"/"+n,width:600,padding:"3em",background:"#fff url(/images/trees.png)",backdrop:"\n              rgba(0,0,123,0.4)\n              left top\n              no-repeat\n            ",confirmButtonColor:"#3085d6",confirmButtonText:"Try again",allowOutsideClick:!1}).then((function(e){e.isConfirmed&&c({type:d})}))}),[t]),Object(w.jsx)("div",{})},x=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.game})),n=t.counter,r=t.totalQuestions,c=t.idCorrectAnswer,a=t.idUserAnswer,i=t.quizObject,u=function(t){e(function(e){return{type:o,payload:{idUserAnswer:e}}}(t.target.id)),n!==r&&setTimeout((function(){e({type:l})}),1e3)};return Object(w.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[n===r&&null!==a&&Object(w.jsx)(v,{}),Object(w.jsxs)("div",{className:"game-container",children:[Object(w.jsxs)("div",{className:"question-number",children:[" ",Object(w.jsxs)("span",{className:"contador",children:[n," of ",r]})]}),Object(w.jsx)("div",{className:"image-questions",children:i&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"image-card",children:Object(w.jsx)("img",{src:null!=i.correctAnswer.url&&null!=i.correctAnswer.url?i.correctAnswer.url:"",width:"200px"})}),Object(w.jsx)("div",{className:"form-container",children:i.quizOptions.map((function(e){return Object(w.jsxs)("button",{id:e.id,className:"option-box "+(null!==a&&e.id===c?"correcto":null!==a&&e.id!==c&&"incorrecto"),onClick:u,children:[" ",e.catName]},e.id)}))})]})})]})]})},g=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.game})).counter;return Object(r.useEffect)((function(){f().then((function(t){e(function(e){return{type:u,payload:e}}(t))}))}),[t]),Object(w.jsx)(x,{})},A=function(){var e=Object(s.b)();return Object(w.jsx)("div",{className:"startGame-btn",children:Object(w.jsx)("button",{onClick:function(){f().then(e({type:i}))},children:"START"})})},N=n(10),_=n(3),y={quizObject:null,idCorrectAnswer:null,idUserAnswer:null,counter:1,startedGame:!1,correctAnswersCount:0,totalQuestions:10},C=Object(N.a)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(_.a)(Object(_.a)({},e),{},{startedGame:!0});case u:return Object(_.a)(Object(_.a)({},e),{},{quizObject:t.payload,idCorrectAnswer:t.payload.correctAnswer.id});case o:var n=t.payload.idUserAnswer===e.idCorrectAnswer?1:0;return Object(_.a)(Object(_.a)({},e),{},{idUserAnswer:t.payload.idUserAnswer,correctAnswersCount:e.correctAnswersCount+n});case l:return Object(_.a)(Object(_.a)({},e),{},{counter:e.counter<e.totalQuestions?e.counter+1:e.counter=0,idUserAnswer:null});case d:return y;default:return e}}}),k=Object(N.b)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=function(){var e=Object(s.c)((function(e){return e.game})).startedGame;return Object(w.jsxs)("div",{className:"heroCat animate__animated animate__fadeIn",children:[" ",Object(w.jsxs)("div",{className:"header ",children:[Object(w.jsx)("div",{className:"cat-image-container",children:Object(w.jsx)("div",{className:"cat-image"})}),Object(w.jsx)("div",{className:"title",children:Object(w.jsx)("h1",{children:"Cat Quiz"})}),Object(w.jsxs)("div",{className:"title-question",children:[" ",Object(w.jsx)("h3",{children:"How much do you know about cats?"})]})]}),e?Object(w.jsx)(g,{}):Object(w.jsx)(A,{})]})};var U="./sw.js";navigator.serviceWorker&&(window.location.href.includes("localhost")&&(U="./catsApp/sw.js"),navigator.serviceWorker.register(U));var G=function(){return Object(w.jsx)(s.a,{store:k,children:Object(w.jsx)(E,{})})};a.a.render(Object(w.jsx)(G,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3ea59e92.chunk.js.map