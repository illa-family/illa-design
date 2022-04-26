"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3643],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7378);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=o(n),s=l,g=k["".concat(p,".").concat(s)]||k[s]||m[s]||r;return n?a.createElement(g,u(u({ref:e},d),{},{components:n})):a.createElement(g,u({ref:e},d))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,u=new Array(r);u[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,u[1]=i;for(var o=2;o<r;o++)u[o]=n[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4352:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var a=n(3117),l=n(102),r=(n(7378),n(3905)),u=["components"],i={},p="InputTag",o={unversionedId:"Components/DATA INPUT/input-tag",id:"Components/DATA INPUT/input-tag",title:"InputTag",description:"The InputTag component is used to get users input tags in it.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA INPUT/input-tag.md",sourceDirName:"Components/DATA INPUT",slug:"/Components/DATA INPUT/input-tag",permalink:"/docs/Components/DATA INPUT/input-tag",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InputNumber",permalink:"/docs/Components/DATA INPUT/input-number"},next:{title:"input",permalink:"/docs/Components/DATA INPUT/input"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Input Basic Properties",id:"input-basic-properties",level:3},{value:"Input Events",id:"input-events",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set size and suffix",id:"set-size-and-suffix",level:3},{value:"Set default value",id:"set-default-value",level:3},{value:"Set clear event",id:"set-clear-event",level:3}],k={toc:m};function s(t){var e=t.components,n=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inputtag"},"InputTag"),(0,r.kt)("p",null,"The InputTag component is used to get users input tags in it."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/inputTag\n")),(0,r.kt)("h2",{id:"import-component"},"Import component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { InputTag } from "@illa-design/inputTag"\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"input-basic-properties"},"Input Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the InputTag is read only"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"The placeholder show on the input box"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|","string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoFocus"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the box is auto focused"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Default value"),(0,r.kt)("td",{parentName:"tr",align:null},"T[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the input box status is disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the input box status is error"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the box"),(0,r.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",'"large"'),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the input box"),(0,r.kt)("td",{parentName:"tr",align:null},"T[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inputValue"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the input tag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelInValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the input and output values in ",(0,r.kt)("inlineCode",{parentName:"td"},"{ label: '', value: ''}")," format."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowClear"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the delete button to clear the value"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},"The custom icon"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"Suffix of the box"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validate"),(0,r.kt)("td",{parentName:"tr",align:null},"Check function"),(0,r.kt)("td",{parentName:"tr",align:null},"(inputValue: string, values: T[]) => boolean ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise<boolean>")),(0,r.kt)("td",{parentName:"tr",align:null},"(inputValue, values) => inputValue && values.every((item) => item !== inputValue)")))),(0,r.kt)("h3",{id:"input-events"},"Input Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when content change"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPressEnter"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when press the Enter"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClear"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when click the delete button"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onFocus"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when the input box on focus"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onBlur"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when the input box on blur"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onInputChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when the input tag change"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when click"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPaste"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when paste"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRemove"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when remove tags"),(0,r.kt)("td",{parentName:"tr",align:null},"(event) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputTag placeholder={"input-tag"} />\n')),(0,r.kt)("h3",{id:"set-size-and-suffix"},"Set size and suffix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputTag placeholder="size-small" size="small" suffix="suffix" />\n')),(0,r.kt)("h3",{id:"set-default-value"},"Set default value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputTag defaultValue={["default value"]} />\n')),(0,r.kt)("h3",{id:"set-clear-event"},"Set clear event"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<InputTag\n  placeholder="test-input-event"\n  onClear={clearEvent}\n  onRemove={removeEvent}\n  allowClear\n/>\n')))}s.isMDXComponent=!0}}]);