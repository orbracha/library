(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(4),a=n.n(s),o=(n(9),n(2)),l=(n(10),n.p+"static/media/openlibrary-logo.edbdeb34.svg"),r=(n(11),n.p+"static/media/empy-book.5f1c0d66.png"),d=n(0);function u(e){var t=e.bookDetails,n=e.onSelected,i=t.title,c=t.img;return Object(d.jsxs)("div",{onClick:function(){return n(t)},className:"book-container",children:[Object(d.jsx)("h1",{title:i,className:"book-title",children:i}),Object(d.jsx)("img",{alt:"book-img",className:"book-img",src:c||r})]})}n(13);function j(e){var t=e.onSearch,n=function(e,t,n){var i;return function(){var c=this,s=arguments,a=function(){i=null,n||e.apply(c,s)},o=n&&!i;clearTimeout(i),i=setTimeout(a,t),o&&e.apply(c,s)}}((function(e){t(e.trim())}),300);return Object(d.jsx)("div",{className:"search-container",children:Object(d.jsx)("input",{placeholder:"Let Me Find Your Book...",className:"search-input",onChange:function(e){var t=e.target;return n(t.value)}})})}n(14);function b(e){var t=e.book,n=e.onClose,i=t.authors,c=t.title,s=t.publishedDate,a=t.description;return Object(d.jsx)("div",{onClick:n,className:"warp",children:Object(d.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"book-preview-container",children:[Object(d.jsx)("h1",{className:"title",children:c}),Object(d.jsxs)("div",{className:"details",children:[a&&Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("span",{className:"alias",children:"description:"}),Object(d.jsx)("span",{children:a})]}),i&&Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("span",{className:"alias",children:"authors:"}),Object(d.jsx)("span",{children:i})]}),s&&Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("span",{className:"alias",children:"published-Date:"}),Object(d.jsx)("span",{children:s})]})]}),Object(d.jsx)("div",{onClick:n,className:"btn-container",children:Object(d.jsx)("button",{className:"close-btn",children:"Close"})})]})})}n(15);var h=n.p+"static/media/loading.02cf15cc.gif";function m(){return Object(d.jsx)("div",{className:"loading-container",children:Object(d.jsx)("img",{alt:"loading",src:h})})}var v=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)([]),a=Object(o.a)(s,2),r=a[0],h=a[1],v=Object(i.useState)(""),p=Object(o.a)(v,2),O=p[0],f=p[1],x=Object(i.useState)(null),g=Object(o.a)(x,2),N=g[0],k=g[1],S=function(e){k(e)};return Object(i.useEffect)((function(){O?(c(!0),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(O)).then((function(e){return e.json()})).then((function(e){var t;if(null===e||void 0===e||null===(t=e.items)||void 0===t?void 0:t.length){var n=function(e){return e.map((function(e){var t=e.volumeInfo,n=t.title,i=t.imageLinks,c=t.authors,s=t.publishedDate,a=t.description;return{id:e.id,title:n,img:null===i||void 0===i?void 0:i.thumbnail,authors:null===c||void 0===c?void 0:c.join(" ,"),publishedDate:s,description:a}}))}(null===e||void 0===e?void 0:e.items);h(n)}})).finally((function(){return c(!1)}))):(c(!1),h([]))}),[O]),Object(d.jsxs)("div",{className:"App",children:[N&&Object(d.jsx)(b,{onClose:function(){k(null)},book:N}),Object(d.jsx)("div",{className:"logo-container",children:Object(d.jsx)("img",{className:"logo",alt:"book-logo",src:l})}),Object(d.jsx)(j,{onSearch:f}),n?Object(d.jsx)(m,{}):Object(d.jsx)("div",{className:"books-container",children:null===r||void 0===r?void 0:r.map((function(e){return Object(d.jsx)(u,{onSelected:S,bookDetails:e},e.id)}))})]})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.7f3fe6bc.chunk.js.map