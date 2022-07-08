"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[9138],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6393:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],i={sidebar_position:1},l="Introdu\xe7\xe3o",d={unversionedId:"paymentLink/intro-payment-link",id:"paymentLink/intro-payment-link",title:"Introdu\xe7\xe3o",description:"A API Evoluservices Orders facilita a cria\xe7\xe3o de links de pagamento para clientes pagarem os estabelecimentos por servi\xe7os ou produtos adquiridos digitalmente. Ela tamb\xe9m permite a consulta dos status dos pagamentos, a data estipulada para a liquida\xe7\xe3o das transa\xe7\xf5es realizadas e os m\xe9todos de pagamento dispon\xedveis. Para demonstra\xe7\xe3o, use as credenciais orders:123mudar para testar os filtros de autoriza\xe7\xe3o.",source:"@site/docs/paymentLink/intro-payment-link.md",sourceDirName:"paymentLink",slug:"/paymentLink/intro-payment-link",permalink:"/evoluservices-developer/docs/paymentLink/intro-payment-link",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"paymentLink",next:{title:"Refer\xeancia Orders API",permalink:"/evoluservices-developer/docs/category/refer\xeancia-orders-api"}},p={},u=[{value:"Come\xe7ando a integrar",id:"come\xe7ando-a-integrar",level:2},{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",level:3},{value:"Postman",id:"postman",level:3},{value:"Ambiente de testes",id:"ambiente-de-testes",level:3},{value:"Cart\xf5es de teste",id:"cart\xf5es-de-teste",level:4}],c={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,o.kt)("p",null,"A API Evoluservices Orders facilita a cria\xe7\xe3o de links de pagamento para clientes pagarem os estabelecimentos por servi\xe7os ou produtos adquiridos digitalmente. Ela tamb\xe9m permite a consulta dos status dos pagamentos, a data estipulada para a liquida\xe7\xe3o das transa\xe7\xf5es realizadas e os m\xe9todos de pagamento dispon\xedveis. Para demonstra\xe7\xe3o, use as credenciais ",(0,o.kt)("inlineCode",{parentName:"p"},"orders:123mudar")," para testar os filtros de autoriza\xe7\xe3o."),(0,o.kt)("h2",{id:"come\xe7ando-a-integrar"},"Come\xe7ando a integrar"),(0,o.kt)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),(0,o.kt)("p",null,"A API utiliza o modo de autentica\xe7\xe3o basicAuth, mais comum no protocolo HTTP. A autentica\xe7\xe3o \xe9 feita atrav\xe9s de um credencial na codifica\xe7\xe3o base 64 e uma senha no formato ",(0,o.kt)("inlineCode",{parentName:"p"},"credencial:senha")," inserido no campo Authorization do Header."),(0,o.kt)("p",null,"Al\xe9m disso, \xe9 necess\xe1rio merchantCode que \xe9 um c\xf3digo \xfanico para cada estabelecimento cadastrado no API."),(0,o.kt)("p",null,"O credencial, a senha e o merchantCode s\xe3o adquiridos no processo homologat\xf3rio."),(0,o.kt)("h3",{id:"postman"},"Postman"),(0,o.kt)("p",null,"O Postman \xe9 uma ferramenta cujo objetivo \xe9 testar e desenvolver APIs que utilizam requisi\xe7\xf5es HTTP para extrair, inserir, postar e deletar dados (RESTful APIs). Al\xe9m disso, ele analisa as respostas da API e as exibe de forma clara e agrad\xe1vel, o Postman tamb\xe9m permite a configura\xe7\xe3o de testes para as Interface de Programa\xe7\xe3o de Aplica\xe7\xf5es."),(0,o.kt)("p",null,"Para saber mais informa\xe7\xf5es sobre o Postman, acesse o site do ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," que ser\xe1 poss\xedvel encontrar diversos conte\xfados e diversas formas de se utilizar o mesmo."),(0,o.kt)("p",null,"No Postman, \xe9 poss\xedvel importar Collections que s\xe3o um conjunto de exemplos de requisi\xe7\xf5es que podem ser utilizadas para fins de teste. Para import\xe1-la clique no bot\xe3o abaixo:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.getpostman.com/run-collection/5da5c26a20c0e076c7c2"},(0,o.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,o.kt)("h3",{id:"ambiente-de-testes"},"Ambiente de testes"),(0,o.kt)("p",null,"Para uma boa integra\xe7\xe3o, disponibilizamos um ambiente de testes encontrado pela seguinte url: ",(0,o.kt)("a",{parentName:"p",href:"https://sandbox.evoluservices.com"},"https://sandbox.evoluservices.com"),"."),(0,o.kt)("p",null,"Para ter acesso a esse ambiente de teste, ser\xe1 recebido um e-mail com as credenciais de acesso no endere\xe7o de e-mail cadastrado assim que o processo homologat\xf3rio for iniciado."),(0,o.kt)("h4",{id:"cart\xf5es-de-teste"},"Cart\xf5es de teste"),(0,o.kt)("p",null,"Para ser poss\xedvel realizar testes, seguimos um conjunto de regras definidas pelos adquirentes. S\xe3o elas:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status da transa\xe7\xe3o"),(0,o.kt)("th",{parentName:"tr",align:null},"Final do cart\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Autorizado"),(0,o.kt)("td",{parentName:"tr",align:null},"1 e 4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"N\xe3o autorizado"),(0,o.kt)("td",{parentName:"tr",align:null},"2, 3, 5, 6, 7 e 8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Autoriza\xe7\xe3o aleat\xf3ria"),(0,o.kt)("td",{parentName:"tr",align:null},"9")))),(0,o.kt)("p",null,"\xc9 poss\xedvel encontrar geradores de cart\xe3o de cr\xe9dito de teste na internet para auxiliar,\npois \xe9 conferido se o n\xfamero do cart\xe3o respeita o algoritmo de Luhn. A\ndata de vencimento do cart\xe3o deve ser futura, ou seja, caso inserido datas passadas, ser\xe1 considerado\ncomo falha de transa\xe7\xe3o. O c\xf3digo de seguran\xe7a n\xe3o ser\xe1 verificado para fins de testes."),(0,o.kt)("p",null,"Para aprovar transa\xe7\xf5es com cart\xe3o Hiper e HiperCard, deve ser usado especificamente\nos seguintes n\xfameros:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hipercard"),(0,o.kt)("td",{parentName:"tr",align:null},"6062825624254001")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hiper"),(0,o.kt)("td",{parentName:"tr",align:null},"6370950847866501")))),(0,o.kt)("p",null,"Para simular erros com esses dois \xfaltimos cart\xf5es, basta realizar transa\xe7\xf5es com o valor ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," com valor de ",(0,o.kt)("inlineCode",{parentName:"p"},"10300")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"10400"),"."))}m.isMDXComponent=!0}}]);