"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[529],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,g=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},178:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=a(102),l=(a(7378),a(3905)),i=["components"],o={},d=void 0,p={unversionedId:"Components/DATA INPUT/radio",id:"Components/DATA INPUT/radio",title:"radio",description:"Radios are used when only one choice may be selected in a series of options.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA INPUT/radio.md",sourceDirName:"Components/DATA INPUT",slug:"/Components/DATA INPUT/radio",permalink:"/docs/Components/DATA INPUT/radio",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"input",permalink:"/docs/Components/DATA INPUT/input"},next:{title:"rate",permalink:"/docs/Components/DATA INPUT/rate"}},u={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Radio Basic Properties",id:"radio-basic-properties",level:3},{value:"Radio Events",id:"radio-events",level:3},{value:"RadioGroup Basic Props",id:"radiogroup-basic-props",level:3},{value:"RadioGroup Events",id:"radiogroup-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"RadioGroup usage",id:"radiogroup-usage",level:3},{value:"Set RadioGroup arrangement direction",id:"set-radiogroup-arrangement-direction",level:3}],s={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"radio"},"Radio"),(0,l.kt)("p",null,"Radios are used when only one choice may be selected in a series of options."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/radio\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Radio } from "@illa-design/radio"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"radio-basic-properties"},"Radio Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"Set background color"),(0,l.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},'"blue"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"The value of radio"),(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variant"),(0,l.kt)("td",{parentName:"tr",align:null},"The variant of radio"),(0,l.kt)("td",{parentName:"tr",align:null},'"button" ',"|",' "radio"'),(0,l.kt)("td",{parentName:"tr",align:null},'"radio"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the radio is disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checked"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the radio is checked (Controlled)"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultChecked"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the radio is initially selected"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"radio-events"},"Radio Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when value changes"),(0,l.kt)("td",{parentName:"tr",align:null},"(checked: boolean, event: ChangeEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"radiogroup-basic-props"},"RadioGroup Basic Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the input field in a radio"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"The value to be used in the radio button"),(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variant"),(0,l.kt)("td",{parentName:"tr",align:null},"The variant of radio"),(0,l.kt)("td",{parentName:"tr",align:null},'"button" ',"|",' "radio"'),(0,l.kt)("td",{parentName:"tr",align:null},'"radio"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"Set background color"),(0,l.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},'"blue"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the radio is disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"To set default value"),(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"Set children options"),(0,l.kt)("td",{parentName:"tr",align:null},"string[] ","|"," number[] ","|"," { label: ReactNode; value: any; disabled: boolean }[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"direction"),(0,l.kt)("td",{parentName:"tr",align:null},"Arrangement direction"),(0,l.kt)("td",{parentName:"tr",align:null},'"vertical" ',"|",' "horizontal"'),(0,l.kt)("td",{parentName:"tr",align:null},'"horizontal"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spacing"),(0,l.kt)("td",{parentName:"tr",align:null},"The spacing between the checkbox and its label text"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:null},'"24px"')))),(0,l.kt)("h3",{id:"radiogroup-events"},"RadioGroup Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when value changes"),(0,l.kt)("td",{parentName:"tr",align:null},"(checked: boolean, event: ChangeEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Radio>Radio</Radio>\n<Radio checked disabled>Disabled Radio</Radio>\n")),(0,l.kt)("h3",{id:"radiogroup-usage"},"RadioGroup usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<RadioGroup defaultValue='a' style={{ marginBottom: 20 }}>\n  <Radio value='a'>A</Radio>\n  <Radio value='b'>B</Radio>\n  <Radio value='c'>C</Radio>\n  <Radio disabled value='d'>D</Radio>\n</RadioGroup>\n<br />\n<RadioGroup options={['A', 'B', 'C', 'D']} style={{ marginBottom: 20 }} />\n<br />\n<RadioGroup\n  options={[\n    { label: 'A', value: 'a' },\n    { label: 'B', value: 'b' },\n    { label: 'C', value: 'c' },\n    { label: 'D', value: 'd', disabled: true },\n  ]} />\n")),(0,l.kt)("h3",{id:"set-radiogroup-arrangement-direction"},"Set RadioGroup arrangement direction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<RadioGroup direction="vertical" defaultValue="a">\n  <Radio value="a">A</Radio>\n  <Radio value="b">B</Radio>\n  <Radio value="c">C</Radio>\n  <Radio disabled value="d">\n    D\n  </Radio>\n</RadioGroup>\n')))}c.isMDXComponent=!0}}]);