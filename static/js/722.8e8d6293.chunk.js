"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[722,15],{600:function(e,t){var n="a76f580e91cd6b2ed7bbe4acd57429cd";var r={fetchFilmReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No data  found"))}))},fetchFilmsOnQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&query=").concat(e,"&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Movie  not found"))}))},fetchTrendMovies:function(e){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(n,"&language=en-US")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Movie ".concat(e," not found")))}))},fetchMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Movie not found"))}))},fetchFilmCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No data  found"))}))}};t.Z=r},94:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(689),o=n(87),c="List_item__WqTbr",i="List_list__AK7hC",a=n(184);function u(e){var t=e.films;console.log(t);var n=(0,r.TH)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,r=e.name,i=e.title;return(0,a.jsx)(o.rU,{to:"/movies/".concat(t),state:{from:n},children:r?(0,a.jsx)("li",{className:c,children:r}):(0,a.jsx)("li",{className:c,children:i})},t)}))})})}},15:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(184);function o(){return(0,r.jsx)("div",{children:"Loading..."})}},722:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(439),o=n(791),c=n(87),i=n(686),a=n.n(i),u=n(94),s=n(600),l=n(15),f="SearchForm_form__o80os",h="SearchForm_input__HOxJo",m="SearchForm_button__UXY06",d=n(184);function v(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],i=t[1],u=(0,c.lr)(),s=(0,r.Z)(u,2),l=(s[0],s[1]);return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===n.trim()&&a().Notify.failure("Enter your  query"),l({query:n}),i("")},className:f,children:[(0,d.jsx)("label",{children:(0,d.jsx)("input",{type:"text",value:n,placeholder:"Enter  your query",onChange:function(e){console.log(e.target.value),i(e.target.value)},className:h})}),(0,d.jsx)("button",{type:"submit",className:m,children:"Search"})]})}function g(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],f=(0,o.useState)(null),h=(0,r.Z)(f,2),m=(h[0],h[1]),g=(0,o.useState)(!1),p=(0,r.Z)(g,2),j=p[0],_=p[1],y=(0,c.lr)(),b=(0,r.Z)(y,2),k=b[0],x=b[1],S=k.get("query")||"";(0,o.useEffect)((function(){""!==S&&(console.log("\u0437\u0430\u043f\u0438\u0442 \u0437\u043c\u0456\u043d\u0438\u0432\u0441\u044f"),w(S))}),[S]);var w=function(e){var t=s.Z.fetchFilmsOnQuery;e&&(console.log("query  film for render"),_(!0),t(e).then((function(e){if(0===e.results.length)return console.log("no  films"),void a().Notify.failure("No  films  found");console.log(e.results),i(e.results),_(!1),x({query:S})})).catch((function(e){return m(e)})))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{}),j&&(0,d.jsx)(l.default,{}),n&&(0,d.jsx)(u.Z,{films:n})]})}}}]);
//# sourceMappingURL=722.8e8d6293.chunk.js.map