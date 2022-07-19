"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[2842],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,v=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(v,i(i({ref:t},m),{},{components:n})):r.createElement(v,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:8},l="Erros Gerais",p={unversionedId:"remote-transaction/general-errors",id:"remote-transaction/general-errors",title:"Erros Gerais",description:"C\xf3digos retornados em caso de erro, identificando o motivo do erro e suas respectivas mensagens.",source:"@site/docs/remote-transaction/general-errors.md",sourceDirName:"remote-transaction",slug:"/remote-transaction/general-errors",permalink:"/evoluservices-developer/docs/remote-transaction/general-errors",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"remoteTransaction",previous:{title:"Bandeira",permalink:"/evoluservices-developer/docs/remote-transaction/value-table/brand"}},m={},c=[],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"erros-gerais"},"Erros Gerais"),(0,o.kt)("p",null,"C\xf3digos retornados em caso de erro, identificando o motivo do erro e suas respectivas mensagens."),(0,o.kt)("p",null,"Os erros desse m\xe9todo s\xe3o do tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 401")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 500")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Status: 401")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Mensagem"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"REVOKED_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"O token foi revogado antes da data de expira\xe7\xe3o.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INVALID_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"O token informado n\xe3o \xe9 igual ao cadastrado.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"EXPIRED_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"O token n\xe3o tem mais validade.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "success": "false",\n   "error": "<Error message>"\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"informa\xe7\xf5es")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Para qualquer um dos casos acima pe\xe7a um novo token de ",(0,o.kt)("a",{parentName:"p",href:"../remote-transaction/autentication"},"token")))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Status: 500")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Mensagem"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MERCHANT_NOT_FOUND")),(0,o.kt)("td",{parentName:"tr",align:null},"Estabelecimento n\xe3o encontrado.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "success": "false",\n   "error": "<Error message>"\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"informa\xe7\xf5es")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Verifique se o ID do estabelecimento est\xe1 correto. Se o problema persistir, entre em contato com o suporte."))))}u.isMDXComponent=!0}}]);