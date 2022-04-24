"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2446],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=l,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},520:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(3117),l=n(102),r=(n(7378),n(3905)),i=["components"],o={},d=void 0,p={unversionedId:"COMPONENTS/DATA-DISPLAY/timeline",id:"COMPONENTS/DATA-DISPLAY/timeline",title:"timeline",description:"The timeline component is used to display information in chronological order.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-DISPLAY/timeline.md",sourceDirName:"COMPONENTS/DATA-DISPLAY",slug:"/COMPONENTS/DATA-DISPLAY/timeline",permalink:"/docs/COMPONENTS/DATA-DISPLAY/timeline",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tag",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tag"},next:{title:"tooltip",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tooltip"}},m={},u=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Timeline Basic Properties",id:"timeline-basic-properties",level:3},{value:"Timeline.Item Basic Properties",id:"timelineitem-basic-properties",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set mode as alternate",id:"set-mode-as-alternate",level:3},{value:"Set the label",id:"set-the-label",level:3},{value:"Set the pending dot",id:"set-the-pending-dot",level:3}],s={toc:u};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"timeline"},"Timeline"),(0,r.kt)("p",null,"The timeline component is used to display information in chronological order."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/timeline\n")),(0,r.kt)("h2",{id:"import-component"},"Import component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Timeline } from "@illa-design/timeline"\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"timeline-basic-properties"},"Timeline Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the timeline is reversed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direction"),(0,r.kt)("td",{parentName:"tr",align:null},"The direction of the timeline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"horizontal" \\| "vertical"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vertical"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"The display mode of the timeline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"left" \\| "right" \\| "alternate"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"left"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pending"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, show the pending dot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pendingDot"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom pending dot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'<Spin size={12} />"'))))),(0,r.kt)("h3",{id:"timelineitem-basic-properties"},"Timeline.Item Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dotColor"),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the dot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dotType"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the dot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"hollow" \\| "solid" ')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"solid"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dot"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom dot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| ReactNode ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineType"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the line"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"solid" \\| "dashed" \\| "dotted ')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"solid"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineColor"),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the line"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"The label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| ReactNode ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"The position of the label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"relative" \\| "same" ')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoFixDotSize"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, auto fix dot size as 16px"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<TimelineItem>The first milestone</TimelineItem>\n")),(0,r.kt)("h3",{id:"set-mode-as-alternate"},"Set mode as alternate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'Timeline mode={"alternate"}>\n  <TimelineItem>The alternate mode left text</TimelineItem>\n  <TimelineItem>The alternate mode right text</TimelineItem>\n</Timeline>\n')),(0,r.kt)("h3",{id:"set-the-label"},"Set the label"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Timeline>\n  <TimelineItem label={"test label"} autoFixDotSize={true}></TimelineItem>\n</Timeline>\n')),(0,r.kt)("h3",{id:"set-the-pending-dot"},"Set the pending dot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Timeline pending={true}>\n  <TimelineItem></TimelineItem>\n</Timeline>\n")))}k.isMDXComponent=!0}}]);