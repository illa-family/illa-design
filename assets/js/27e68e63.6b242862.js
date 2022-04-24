"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3403],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,N=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(N,i(i({ref:t},o),{},{components:n})):a.createElement(N,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),i=["components"],p={},d=void 0,u={unversionedId:"COMPONENTS/DATA-INPUT/slider",id:"COMPONENTS/DATA-INPUT/slider",title:"slider",description:"It is a number inpuit component that input value by slide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-INPUT/slider.md",sourceDirName:"COMPONENTS/DATA-INPUT",slug:"/COMPONENTS/DATA-INPUT/slider",permalink:"/docs/COMPONENTS/DATA-INPUT/slider",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Select",permalink:"/docs/COMPONENTS/DATA-INPUT/select"},next:{title:"Switch",permalink:"/docs/COMPONENTS/DATA-INPUT/switch"}},o={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Slider Basic Properties",id:"slider-basic-properties",level:3},{value:"Slider Events",id:"slider-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set step",id:"set-step",level:3},{value:"Set input range",id:"set-input-range",level:3},{value:"Set tick&#39;s mark",id:"set-ticks-mark",level:3},{value:"Show number input",id:"show-number-input",level:3}],s={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"slider"},"Slider"),(0,l.kt)("p",null,"It is a number inpuit component that input value by slide"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/slider\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Slider } from "@illa-dedign/slider"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"slider-basic-properties"},"Slider Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showTicks"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show ticks"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showInput"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show number input"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reverse"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether reverse ticks"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"marks"),(0,l.kt)("td",{parentName:"tr",align:null},"set ticks\u2018 mark"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Record<number, ReactNode>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vertical"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether make silder vertical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tooltipVisible"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether always show tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tooltipPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"top" \\| "tl" \\| "tr" \\| "bottom" \\| "bl" \\| "br" \\| "left" \\| "lt" \\| "lb" \\| "right" \\| "rt" \\| "rb"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether disable the component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"Set minimum value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"Set maxmum value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"step"),(0,l.kt)("td",{parentName:"tr",align:null},"Set step of every tick"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onlyMarkValue"),(0,l.kt)("td",{parentName:"tr",align:null},"whether only marked value can be selected"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Set defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \\| number[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formatTooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(value: number) => string \\| ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"slider-events"},"Slider Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onAfterChange"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback after value is changed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(val: number \\| number[]) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback when value is changed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(val: number \\| number[]) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Slider\n  value={value}\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  style={{ width: 400 }}\n/>\n")),(0,l.kt)("h3",{id:"set-step"},"Set step"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Slider\n  defaultValue={0}\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  step={2}\n  showTicks\n  style={{ width: 400 }}\n/>\n")),(0,l.kt)("h3",{id:"set-input-range"},"Set input range"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = React.useState(0)\n<Slider\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  min={0}\n  max={20}\n  step={2}\n  showTicks\n  style={{ width: 400 }}\n/>\n")),(0,l.kt)("h3",{id:"set-ticks-mark"},"Set tick's mark"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const [value, setValue] = React.useState(0)\n<Slider\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  step={2}\n  marks={{\n    0: "0km",\n    5: "5km",\n    10: "10km",\n    15: "15km",\n}}\n  style={{ width: 400 }}\n/>\n')),(0,l.kt)("h3",{id:"show-number-input"},"Show number input"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const [value, setValue] = React.useState(0)\n<Slider\n    showInput\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  step={1}\n  marks={{\n    0: "0km",\n    5: "5km",\n    10: "10km",\n    15: "15km",\n}}\n  style={{ width: 400 }}\n/>\n')))}k.isMDXComponent=!0}}]);