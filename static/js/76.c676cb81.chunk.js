"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{600:function(e,t){var n="a76f580e91cd6b2ed7bbe4acd57429cd";var o={fetchFilmReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No data  found"))}))},fetchFilmsOnQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&query=").concat(e,"&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Movie  not found"))}))},fetchTrendMovies:function(e){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(n,"&language=en-US")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Movie ".concat(e," not found")))}))},fetchMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Movie not found"))}))},fetchFilmCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No data  found"))}))}};t.Z=o},76:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=n(439),r=n(600),c=n(791),a=n(689),i="Cast_castImg__T4WbF",u=n(184);function s(){var e=(0,c.useState)(""),t=(0,o.Z)(e,2),n=t[0],s=t[1],h=(0,c.useState)(!1),f=(0,o.Z)(h,2),d=(f[0],f[1]),m=(0,a.UO)().movieId;return(0,c.useEffect)((function(){""!==m&&(d(!0),r.Z.fetchFilmCredits(m).then((function(e){console.log(e.cast),s(e.cast),d(!1)})))}),[m]),(0,u.jsx)(u.Fragment,{children:n&&(0,u.jsx)("ul",{children:n.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"",className:i}),(0,u.jsx)("p",{children:e.name}),(0,u.jsx)("p",{children:e.character})]},e.cast_id)}))})})}}}]);
//# sourceMappingURL=76.c676cb81.chunk.js.map