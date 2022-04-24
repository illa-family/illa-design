"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2451],{3905:function(e,t,n){n.d(t,{Zo:function(){return N},kt:function(){return u}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},N=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,N=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,c=m["".concat(o,".").concat(u)]||m[u]||k[u]||l;return n?a.createElement(c,d(d({ref:t},N),{},{components:n})):a.createElement(c,d({ref:t},N))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,d=new Array(l);d[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var p=2;p<l;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),d=["components"],i={},o=void 0,p={unversionedId:"COMPONENTS/DATA-DISPLAY/tree",id:"COMPONENTS/DATA-DISPLAY/tree",title:"tree",description:"Tree is used to show the  hierarchy of content with more levels",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-DISPLAY/tree.md",sourceDirName:"COMPONENTS/DATA-DISPLAY",slug:"/COMPONENTS/DATA-DISPLAY/tree",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tree",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tooltip",permalink:"/docs/COMPONENTS/DATA-DISPLAY/tooltip"},next:{title:"Cascader",permalink:"/docs/COMPONENTS/DATA-INPUT/cascader"}},N={},k=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Tree Basic Properties",id:"tree-basic-properties",level:3},{value:"Tree Events",id:"tree-events",level:3},{value:"TreeNode Basic Properties",id:"treenode-basic-properties",level:3},{value:"TreeDataType",id:"treedatatype",level:4},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3}],m={toc:k};function u(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tree"},"Tree"),(0,l.kt)("p",null,"Tree is used to show the  hierarchy of content with more levels"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/tree\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Tree } from "@illa-design/tree"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"tree-basic-properties"},"Tree Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"treeData"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate tree structure by structured data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TreeDataType[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Set size"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"small" \\| "medium" \\| "large"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"medium"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockNode"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether treeNode fill  the remaining horizontal space"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoExpandParent"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to automatically expand a parent treeNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"multiple"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to allow selecting multiple treeNodes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to add a Checkbox before the treeNodes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether treeNode can be selected"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"draggable"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether treeNode can be draged"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showLine"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show a connecting line between treeNodes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadingIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Customize a icon before treeNodes title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"switcherIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the switcher icon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the drag icon after treeNode title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkStrictly"),(0,l.kt)("td",{parentName:"tr",align:null},"whether associate parent treeNode and children treeNode when they are checkable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultSelectedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Set default selected treeNodes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Set selected treeNodes by treeNodes' key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultCheckedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Set default checked treeNodes by treeNodes' key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Set checked treeNodes by treeNodes' key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultExpandedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Set default expanded treeNodes by treeNodes' key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expandedKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"Set default treeNodes by treeNodes' key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadMore"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when loaded data asynchronously, returning a ",(0,l.kt)("inlineCode",{parentName:"td"},"Promise"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(node: NodeInstance) => Promise<void>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"tree-events"},"Tree Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onSelect"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when treeNode is selected"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(selectedKeys: string[],extra: {selected: boolean;selectedNodes: NodeInstance[];node: NodeInstance;e: Event;}) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onCheck"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when treeNode is checked"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(checkedKeys: string[],extra: {node: NodeInstance;checkedNodes: NodeInstance[];checked: boolean;halfCheckedKeys: string[];halfCheckedNodes: NodeInstance[];e: Event;}) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onExpand"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when treeNode is expanded"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(expandedKeys: string[],exra?: { expanded: boolean; node: NodeInstance; expandedNodes: NodeInstance[] }) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDrop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when treeNode is dropped"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(info: {e: DragEvent<HTMLSpanElement>;dragNode: NodeInstance \\| null;dropNode: NodeInstance \\| null;dropPosition: number;}) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDragStart"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when the treeNode starts dragged"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDragEnd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when the treeNode ends dragged"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDragOver"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when the treeNode is dragged onto a valid target"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDragLeave"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Callback when the treeNode leaves a valid target"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h3",{id:"treenode-basic-properties"},"TreeNode Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"Title of treeNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectable"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the treeNode can be selected"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the treeNode is disabled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableCheckbox"),(0,l.kt)("td",{parentName:"tr",align:null},"whether disable the treeNode is checkable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"set treeNode\u2019s icon before title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkable"),(0,l.kt)("td",{parentName:"tr",align:null},"whether to show checkbox before treeNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isLeaf"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the treeNode is a leaf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"draggable"),(0,l.kt)("td",{parentName:"tr",align:null},"whether the treeNode is draggable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)("h4",{id:"treedatatype"},"TreeDataType"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"key?: string\ntitle?: string\nchildren?: TreeDataType[]\nselectable?: boolean\ndisabled?: boolean\ndisableCheckbox?: boolean\nicon?: boolean\ncheckable?: boolean\nisLeaf?: boolean\ndraggable?: boolean\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const TreeData = [\n  {\n    title: 'Trunk 0-0',\n    key: '0-0',\n    children: [\n      {\n        title: 'Leaf',\n        key: '0-0-1',\n      },\n      {\n        title: 'Branch 0-0-2',\n        key: '0-0-2',\n        disableCheckbox: true,\n        children: [\n          {\n            title: 'Leaf',\n            key: '0-0-2-1'\n          }\n        ]\n      },\n    ],\n  },\n  {\n    title: 'Trunk 0-1',\n    key: '0-1',\n    children: [\n      {\n        title: 'Branch 0-1-1',\n        key: '0-1-1',\n        checkable: false,\n        children: [\n          {\n            title: 'Leaf',\n            key: '0-1-1-1',\n          },\n          {\n            title: 'Leaf',\n            key: '0-1-1-2',\n          },\n        ]\n      },\n      {\n        title: 'Leaf',\n        key: '0-1-2',\n      },\n    ],\n  },\n];\n<Tree\n  multiple\n  treeData={TreeData}\n/>\n")))}u.isMDXComponent=!0}}]);