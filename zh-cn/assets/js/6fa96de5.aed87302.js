"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2377],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7378);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),k=p(n),s=l,c=k["".concat(o,".").concat(s)]||k[s]||d[s]||r;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6305:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(3117),l=n(102),r=(n(7378),n(3905)),i=["components"],u={},o=void 0,p={unversionedId:"Components/DATA INPUT/slider",id:"Components/DATA INPUT/slider",title:"slider",description:"\u901a\u8fc7\u6ed1\u52a8\u6761\u8f93\u5165\u6570\u503c\uff0c\u80fd\u5c55\u793a\u5f53\u524d\u503c\u548c\u53ef\u9009\u8303\u56f4\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/Components/DATA INPUT/slider.md",sourceDirName:"Components/DATA INPUT",slug:"/Components/DATA INPUT/slider",permalink:"/zh-cn/docs/Components/DATA INPUT/slider",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u5668 Select",permalink:"/zh-cn/docs/Components/DATA INPUT/select"},next:{title:"\u5f00\u5173 Switch",permalink:"/zh-cn/docs/Components/DATA INPUT/switch"}},m={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3(API)",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"Slider \u57fa\u7840\u5c5e\u6027",id:"slider-\u57fa\u7840\u5c5e\u6027",level:3},{value:"Slider \u4e8b\u4ef6",id:"slider-\u4e8b\u4ef6",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6e\u6b65\u957f",id:"\u8bbe\u7f6e\u6b65\u957f",level:3},{value:"\u8bbe\u7f6e\u53ef\u9009\u8303\u56f4",id:"\u8bbe\u7f6e\u53ef\u9009\u8303\u56f4",level:3},{value:"\u6dfb\u52a0\u6807\u7b7e\u6587\u672c",id:"\u6dfb\u52a0\u6807\u7b7e\u6587\u672c",level:3},{value:"\u663e\u793a\u8f93\u5165\u6846",id:"\u663e\u793a\u8f93\u5165\u6846",level:3}],k={toc:d};function s(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6ed1\u52a8\u8f93\u5165-slider"},"\u6ed1\u52a8\u8f93\u5165 Slider"),(0,r.kt)("p",null,"\u901a\u8fc7\u6ed1\u52a8\u6761\u8f93\u5165\u6570\u503c\uff0c\u80fd\u5c55\u793a\u5f53\u524d\u503c\u548c\u53ef\u9009\u8303\u56f4\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/slider\n")),(0,r.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Slider } from "@illa-dedign/slider"\n')),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3(API)"),(0,r.kt)("h3",{id:"slider-\u57fa\u7840\u5c5e\u6027"},"Slider \u57fa\u7840\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showTicks"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u6b65\u957f\u523b\u5ea6\u7ebf"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showInput"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c55\u793a\u8f93\u5165\u6846\u3002 \u6ed1\u52a8\u6761\u6839\u636e\u8f93\u5165\u6846\u5185\u5bb9\u81ea\u52a8\u4f4d\u79fb\u5230\u5bf9\u5e94\u7684\u523b\u5ea6 onlyMarkValue \u4e3a true \u65f6\u8f93\u5165\u6846\u59cb\u7ec8\u9690\u85cf"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u5750\u6807\u8f74"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"marks"),(0,r.kt)("td",{parentName:"tr",align:null},"\u523b\u5ea6\u6807\u7b7e\u3002\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002key \u4e3a\u5728","[min, max]","\u5185\u7684\u6574\u6570\u3002\u8bbe\u7f6e\u7684\u523b\u5ea6\u5728\u6ed1\u52a8\u7ebf"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<number, ReactNode>")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertical"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7ad6\u76f4\u65b9\u5411"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236 tooltip \u7684\u5c55\u793a\u3002\u8bbe\u7f6e\u4e3aundefined\u65f6\uff0c\u9f20\u6807\u5728\u5f53\u524d\u503c\u505c\u7559\u6216\u8005\u62d6\u52a8\u65f6\u5c55\u793atooltip\uff0c\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u5c06\u4e00\u76f4\u5c55\u793a tooltip\u3002\u8bbe\u7f6e\u4e3a false \u65f6\uff0c\u5c06\u4e00\u76f4\u9690\u85cf tooltip\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"tooltip \u7684\u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},'"top" ',"|",' "tl" ',"|",' "tr" ',"|",' "bottom" ',"|",' "bl" ',"|",' "br" ',"|",' "left" ',"|",' "lt" ',"|",' "lb" ',"|",' "right" ',"|",' "rt" ',"|",' "rb"'),(0,r.kt)("td",{parentName:"tr",align:null},'"top"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ed1\u52a8\u8303\u56f4\u6700\u5c0f\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ed1\u52a8\u8303\u56f4\u6700\u5927\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"step"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b65\u957f"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onlyMarkValue"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u80fd\u9009\u62e9\u6807\u7b7e\u503c\uff0c\u6b64\u65f6step\u5c06\u4f1a\u88ab\u5ffd\u7565 \u70b9\u51fb\u6807\u7b7e\u4e2d\u95f4\u7684\u523b\u5ea6\u6309\u7167\u5c31\u8fd1\u539f\u5219\uff0c\u5b9a\u4f4d\u5230\u79bb\u5f97\u8fd1\u7684\u6807\u7b7e\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formatTooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"\u683c\u5f0f\u5316 tooltip \u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => string ","|"," ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"slider-\u4e8b\u4ef6"},"Slider \u4e8b\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onAfterChange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89e6\u53d1\u65f6\u673a\u5728 mouseup\uff0c\u53c2\u6570\u662f\u5f53\u524d\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"(val: number ","|"," number[]) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u503c\u53d8\u5316\u65f6\u89e6\u53d1"),(0,r.kt)("td",{parentName:"tr",align:null},"(val: number ","|"," number[]) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Slider\n  value={value}\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  style={{ width: 400 }}\n/>\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u6b65\u957f"},"\u8bbe\u7f6e\u6b65\u957f"),(0,r.kt)("p",null,"\u901a\u8fc7step\u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u6b65\u957f,\u901a\u8fc7showticks\u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u5c55\u793a\u523b\u5ea6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Slider\n  defaultValue={0}\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  step={2}\n  showTicks\n  style={{ width: 400 }}\n/>\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u53ef\u9009\u8303\u56f4"},"\u8bbe\u7f6e\u53ef\u9009\u8303\u56f4"),(0,r.kt)("p",null,"\u901a\u8fc7min\u548cmax\u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u53ef\u9009\u8303\u56f4\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = React.useState(0)\n<Slider\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  min={0}\n  max={20}\n  step={2}\n  showTicks\n  style={{ width: 400 }}\n/>\n")),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u6807\u7b7e\u6587\u672c"},"\u6dfb\u52a0\u6807\u7b7e\u6587\u672c"),(0,r.kt)("p",null,"\u901a\u8fc7marks\u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u523b\u5ea6\u7684\u6807\u7b7e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const [value, setValue] = React.useState(0)\n<Slider\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  step={2}\n  marks={{\n    0: "0km",\n    5: "5km",\n    10: "10km",\n    15: "15km",\n}}\n  style={{ width: 400 }}\n/>\n')),(0,r.kt)("h3",{id:"\u663e\u793a\u8f93\u5165\u6846"},"\u663e\u793a\u8f93\u5165\u6846"),(0,r.kt)("p",null,"\u901a\u8fc7shouInput\u63a5\u53e3\u914d\u7f6e\u662f\u5426\u5c55\u793a\u8f93\u5165\u6846\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const [value, setValue] = React.useState(0)\n<Slider\n  showInput\n  onChange={(val: number | number[]) => {\n    setValue(val as number)\n  }}\n  step={1}\n  marks={{\n    0: "0km",\n    5: "5km",\n    10: "10km",\n    15: "15km",\n}}\n  style={{ width: 400 }}\n/>\n')))}s.isMDXComponent=!0}}]);