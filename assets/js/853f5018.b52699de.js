"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[99],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7679:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},s="Listar todos os terminais",m={unversionedId:"remoteTransaction/terminals/list-all-terminals",id:"remoteTransaction/terminals/list-all-terminals",title:"Listar todos os terminais",description:"Retorna os terminais do estabelecimento que est\xe3o aptos a receber transa\xe7\xe3o remota.",source:"@site/docs/remoteTransaction/terminals/list-all-terminals.md",sourceDirName:"remoteTransaction/terminals",slug:"/remoteTransaction/terminals/list-all-terminals",permalink:"/evoluservices-developer/docs/remoteTransaction/terminals/list-all-terminals",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"remoteTransaction",previous:{title:"Terminais",permalink:"/evoluservices-developer/docs/category/terminais"},next:{title:"Listar Benefici\xe1rios do Split de Pagamentos",permalink:"/evoluservices-developer/docs/category/listar-benefici\xe1rios-do-split-de-pagamentos"}},d={},p=[{value:"Requisi\xe7\xe3o HTTP",id:"requisi\xe7\xe3o-http",level:2},{value:"Header",id:"header",level:2},{value:"Par\xe2metros da URL",id:"par\xe2metros-da-url",level:2},{value:"Resposta",id:"resposta",level:2},{value:"Erros",id:"erros",level:2}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"listar-todos-os-terminais"},"Listar todos os terminais"),(0,o.kt)("p",null,"Retorna os terminais do estabelecimento que est\xe3o aptos a receber transa\xe7\xe3o remota."),(0,o.kt)("h2",{id:"requisi\xe7\xe3o-http"},"Requisi\xe7\xe3o HTTP"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /remote/merchants/{merchantCode}/terminals")),(0,o.kt)("h2",{id:"header"},"Header"),(0,o.kt)("p",null,"Voc\xea deve especificar no cabe\xe7alho da requisi\xe7\xe3o o tipo de conte\xfado enviado no corpo, bem como o token de acesso."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Par\xe2metro"),(0,o.kt)("th",{parentName:"tr",align:null},"Valor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Content-Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Bearer")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TOKEN"))))),(0,o.kt)("h2",{id:"par\xe2metros-da-url"},"Par\xe2metros da URL"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Par\xe2metro"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"merchantCode")),(0,o.kt)("td",{parentName:"tr",align:null},"O c\xf3digo do estabelecimento (obtido junto ao suporte).")))),(0,o.kt)("h2",{id:"resposta"},"Resposta"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("div",{style:{width:100}},"Propriedade")),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"macAddress")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"O endere\xe7o f\xedsico (MAC Address) associado ao terminal.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"computerName")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"O nome do computador associado ao terminal.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"terminalId")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"O id do terminal que pode ser utilizado como par\xe2metro para ",(0,o.kt)("a",{parentName:"td",href:"../create-remote-transaction"},"iniciar uma transa\xe7\xe3o remota"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"terminalStatus")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"O status do terminal (consulte ",(0,o.kt)("a",{parentName:"td",href:"../value-table/terminal-status"},"a tabela de valores"),").")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "macAddress": "8d:c1:d3:12:14:bb",\n        "computerName": "DESKTOP",\n        "terminalId": "AA009999",\n        "terminalStatus": "ONLINE"\n    }\n]\n')),(0,o.kt)("h2",{id:"erros"},"Erros"),(0,o.kt)("p",null,"Os erros desse m\xe9todo s\xe3o do tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 401")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 500")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Status: 401 ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "success": "false",\n   "error": "<Error message>"\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Mensagem"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INVALID_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"Token inv\xe1lido.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"informa\xe7\xf5es")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Para o erro acima pe\xe7a um novo token de ",(0,o.kt)("a",{parentName:"p",href:"./category/autentica%C3%A7%C3%A3o"},"token")))))}u.isMDXComponent=!0}}]);