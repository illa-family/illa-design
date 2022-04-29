"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4819],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(a),m=r,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||l;return a?n.createElement(d,i(i({ref:e},u),{},{components:a})):n.createElement(d,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4031:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return g}});var n=a(3117),r=a(102),l=(a(7378),a(3905)),i=["components"],o={},p=void 0,s={unversionedId:"Components/DATA DISPLAY/tag",id:"Components/DATA DISPLAY/tag",title:"tag",description:"Tag is generally used to mark attributes, dimensions or categories of things.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA DISPLAY/tag.md",sourceDirName:"Components/DATA DISPLAY",slug:"/Components/DATA DISPLAY/tag",permalink:"/docs/Components/DATA DISPLAY/tag",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tabs",permalink:"/docs/Components/DATA DISPLAY/tabs"},next:{title:"timeline",permalink:"/docs/Components/DATA DISPLAY/timeline"}},u={},g=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Tag Basic Properties",id:"tag-basic-properties",level:3},{value:"Tag Extented Props",id:"tag-extented-props",level:3},{value:"Tag Events",id:"tag-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set Tag&#39;s size",id:"set-tags-size",level:3},{value:"Set Tag&#39;s style parttern and background",id:"set-tags-style-parttern-and-background",level:3},{value:"With left icon",id:"with-left-icon",level:3},{value:"With close button",id:"with-close-button",level:3}],c={toc:g};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tag"},"Tag"),(0,l.kt)("p",null,"Tag is generally used to mark attributes, dimensions or categories of things."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/tag\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Tag } from "@illa-design/tag"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"tag-basic-properties"},"Tag Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting backgrount color"),(0,l.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple"',"|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},'"gray"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting size"),(0,l.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,l.kt)("td",{parentName:"tr",align:null},'"small"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting whether the Tag is visiable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closable"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting whether the Tag is visiable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variant"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting style pattern"),(0,l.kt)("td",{parentName:"tr",align:null},'"outline" ',"|",' "fill" ',"|",' "light"'),(0,l.kt)("td",{parentName:"tr",align:null},'"light"')))),(0,l.kt)("h3",{id:"tag-extented-props"},"Tag Extented Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Setting Tag's left icon"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"tag-events"},"Tag Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when the Tag closed"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Tag />\n")),(0,l.kt)("h3",{id:"set-tags-size"},"Set Tag's size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag size="small">Small</Tag>\n<Tag size="medium">Medium</Tag>\n<Tag size="large">Large</Tag>\n')),(0,l.kt)("h3",{id:"set-tags-style-parttern-and-background"},"Set Tag's style parttern and background"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag variant="fill" colorScheme="red">Hello</Tag>\n')),(0,l.kt)("h3",{id:"with-left-icon"},"With left icon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag variant="fill" colorScheme="red" icon={<BsFacebook />}>Hello</Tag>\n')),(0,l.kt)("h3",{id:"with-close-button"},"With close button"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tag>Hello</Tag>\n<Tag variant="fill" colorScheme="red" icon={<BsFacebook />} closable>Hello</Tag>\n')))}m.isMDXComponent=!0}}]);