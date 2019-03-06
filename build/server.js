!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(u,o){try{var a=t[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var u=t.FETCH_USERS="fetch_users",o=(t.fetchUsers=function(){return e=r(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/users");case 2:o=e.sent,t({type:u,payload:o});case 4:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_CURRENT_USER="fetch_current_user"),a=(t.fetchCurrentUser=function(){return e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/current_user");case 2:u=e.sent,t({type:o,payload:u});case 4:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_ADMINS="fetch_admins");t.fetchAdmins=function(){return e=r(regeneratorRuntime.mark(function e(t,n,r){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/admins");case 2:u=e.sent,t({type:a,payload:u});case 4:case"end":return e.stop()}},e,void 0)})),function(t,n,r){return e.apply(this,arguments)};var e}},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-frontload")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){n(8),e.exports=n(9)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){"use strict";var r=c(n(10)),u=c(n(11)),o=c(n(12)),a=c(n(13)),i=c(n(19));function c(e){return e&&e.__esModule?e:{default:e}}var l,f,s=(0,r.default)(),d="https://react-ssr-api.herokuapp.com";s.use("/api",(0,o.default)(d,{proxyReqOptDecorator:function(e){return e.headers["x-forwarded-host"]="localhost:8080",e}})),s.use(r.default.static("public")),s.get("*",(l=regeneratorRuntime.mark(function e(t,n){var r,o,c,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.default.create({baseURL:d,headers:{cookie:t.get("cookie")||""}}),o=(0,a.default)({},r),c={},e.next=5,(0,i.default)(t,o,c);case 5:if(l=e.sent,!c.url){e.next=8;break}return e.abrupt("return",n.redirect(301,c.url));case 8:c.notFound&&n.status(404),n.send(l);case 10:case"end":return e.stop()}},e,void 0)}),f=function(){var e=l.apply(this,arguments);return new Promise(function(t,n){return function r(u,o){try{var a=e[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});t(i)}("next")})},function(e,t){return f.apply(this,arguments)})),s.listen(8080,function(){console.log("Listen on port 8080")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("express-http-proxy")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),u=a(n(14)),o=a(n(15));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return(0,r.createStore)(o.default,e,(0,r.applyMiddleware)(u.default.withExtraArgument(t)))}},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),u=i(n(16)),o=i(n(17)),a=i(n(18));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.combineReducers)({users:u.default,auth:o.default,admins:a.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_USERS:return t.payload.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1],n=t.payload;switch(t.type){case r.FETCH_CURRENT_USER:return n.data||!1;default:return e}};var r=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_ADMINS:return t.payload.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(0)),u=n(20),o=n(4),a=n(2),i=n(5),c=s(n(21)),l=n(6),f=s(n(22));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){return(0,i.frontloadServerRender)(function(){return(0,u.renderToString)(r.default.createElement(a.Provider,{store:t},r.default.createElement(o.StaticRouter,{location:e.path,context:n},r.default.createElement(i.Frontload,{isServer:!0},r.default.createElement(f.default,null)))))}).then(function(e){var n=(0,c.default)(t.getState()),r=l.Helmet.renderStatic();return"\n            <html>\n                <head>\n                    "+r.title.toString()+"\n                    "+r.meta.toString()+'\n                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n                </head>\n                <body>\n                    <div id="root">'+e+"</div>\n                    <script>\n                        window.__INIT_STATE__= "+n+';      \n                    <\/script>\n                    <script src="bundle.js"><\/script>\n                </body>\n            </html>\n        '})}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(0)),u=n(4),o=f(n(23)),a=f(n(25)),i=f(n(26)),c=f(n(27)),l=f(n(29));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(o.default,null,r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{exact:!0,path:"/",component:a.default}),r.default.createElement(u.Route,{path:"/users",component:i.default}),r.default.createElement(u.Route,{path:"/admins",component:c.default}),r.default.createElement(u.Route,{component:l.default})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),u=n(5),o=n(3),a=n(2),i=l(n(24)),c=n(1);function l(e){return e&&e.__esModule?e:{default:e}}var f,s,d=(f=regeneratorRuntime.mark(function e(t){var n=t.fetchCurrentUser;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)}),s=function(){var e=f.apply(this,arguments);return new Promise(function(t,n){return function r(u,o){try{var a=e[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});t(i)}("next")})},function(e){return s.apply(this,arguments)});t.default=(0,a.connect)(null,function(e){return(0,o.bindActionCreators)({fetchCurrentUser:c.fetchCurrentUser},e)})((0,u.frontloadConnect)(d,{onMount:!0,onUpdate:!1})(function(e){var t=e.children;return r.default.createElement("div",null,r.default.createElement(i.default,null),t)}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r},a=n(4),i=n(2);t.default=(0,i.connect)(function(e){return{auth:e.auth}})(function(e){var t=e.auth?o.default.createElement("a",{href:"/api/logout"},"Logout"):o.default.createElement("a",{href:"/api/auth/google"},"Login");return o.default.createElement("nav",{className:"nav-wrapper"},o.default.createElement(a.Link,{to:"/",className:"brand-logo"},"React SSR"),o.default.createElement("ul",{className:"right"},o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/users"},"Users")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/admins"},"Admins")),o.default.createElement("li",null,t)))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("div",{className:"center-align",style:{marginTop:"200px"}},o.default.createElement("h3",null,"Welcome"),o.default.createElement("p",null,"Check out these awesome features"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Userlist=void 0;var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r},i=n(3),c=n(2),l=n(6),f=n(5),s=n(1);var d,p,v=t.Userlist=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),u(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){var e=this.props.users;return a.default.createElement("div",null,a.default.createElement(l.Helmet,null,a.default.createElement("title",null,"Users list"),a.default.createElement("meta",{property:"og:title",content:"Users list"})),a.default.createElement("span",null,"List of users:"),a.default.createElement("ul",null,e.map(function(e){return a.default.createElement("li",{key:e.id},e.name)})))}}]),t}(),m=(d=regeneratorRuntime.mark(function e(t){var n=t.fetchUsers;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)}),p=function(){var e=d.apply(this,arguments);return new Promise(function(t,n){return function r(u,o){try{var a=e[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});t(i)}("next")})},function(e){return p.apply(this,arguments)});t.default=(0,c.connect)(function(e){return{users:e.users}},function(e){return(0,i.bindActionCreators)({fetchUsers:s.fetchUsers},e)})((0,f.frontloadConnect)(m,{onMount:!0,onUpdate:!1})(v))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdminsList=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),o=s(u),a=n(3),i=n(2),c=n(5),l=n(1),f=s(n(28));function s(e){return e&&e.__esModule?e:{default:e}}var d,p,v=t.AdminsList=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.PureComponent),r(t,[{key:"componentDidMount",value:function(){this.props.fetchAdmins()}},{key:"render",value:function(){var e=this.props.admins;return o.default.createElement("div",null,o.default.createElement("span",null,"Protected list of admins:"),o.default.createElement("ul",null,e.map(function(e){return o.default.createElement("li",{key:e.id},e.name)})))}}]),t}(),m=(d=regeneratorRuntime.mark(function e(t){var n=t.fetchAdmins;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)}),p=function(){var e=d.apply(this,arguments);return new Promise(function(t,n){return function r(u,o){try{var a=e[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});t(i)}("next")})},function(e){return p.apply(this,arguments)});t.default=(0,i.connect)(function(e){return{admins:e.admins}},function(e){return(0,a.bindActionCreators)({fetchAdmins:l.fetchAdmins},e)})((0,c.frontloadConnect)(m,{onMount:!0,onUpdate:!1})((0,f.default)(v)))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r},i=n(2),c=n(4);t.default=function(e){var t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.PureComponent),u(n,[{key:"render",value:function(){switch(this.props.auth){case null:return a.default.createElement("div",null,"Loading...");case!1:return a.default.createElement(c.Redirect,{to:"/"});default:return a.default.createElement(e,this.props)}}}]),n}();return(0,i.connect)(function(e){return{auth:e.auth}})(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorPage=void 0;var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};var a=t.ErrorPage=function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,o.default.createElement("h1",null,"Oooops, not found anything! Sorry.")};t.default=a}]);