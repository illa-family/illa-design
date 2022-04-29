"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5278],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),i=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(r),c=a,b=s["".concat(m,".").concat(c)]||s[c]||d[c]||l;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2774:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return d}});var n=r(3117),a=r(102),l=(r(7378),r(3905)),o=["components"],u={},m=void 0,i={unversionedId:"Components/NAVIGATION/breadcrumb",id:"Components/NAVIGATION/breadcrumb",title:"breadcrumb",description:"Breadcrumb is  used to dislay the location of the current page and return previous page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/NAVIGATION/breadcrumb.md",sourceDirName:"Components/NAVIGATION",slug:"/Components/NAVIGATION/breadcrumb",permalink:"/docs/Components/NAVIGATION/breadcrumb",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"space",permalink:"/docs/Components/LAYOUT/space"},next:{title:"Dropdown",permalink:"/docs/Components/NAVIGATION/dropdown"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Breadcrumb Basic Properties",id:"breadcrumb-basic-properties",level:3},{value:"BreadcrumbItem Basic Properties",id:"breadcrumbitem-basic-properties",level:3},{value:"RouteProps Properties",id:"routeprops-properties",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set separator and size",id:"set-separator-and-size",level:3},{value:"Set maximum show number of item",id:"set-maximum-show-number-of-item",level:3}],s={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"breadcrumb"},"Breadcrumb"),(0,l.kt)("p",null,"Breadcrumb is  used to dislay the location of the current page and return previous page."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/breadcrumb\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Breadcrumb, BreadcrumbItem } from "@illa-design/breadcrumb"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"breadcrumb-basic-properties"},"Breadcrumb Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"separator"),(0,l.kt)("td",{parentName:"tr",align:null},"Set separator"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"routes"),(0,l.kt)("td",{parentName:"tr",align:null},"Set breadcrumb content"),(0,l.kt)("td",{parentName:"tr",align:null},"RouteProps"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxCount"),(0,l.kt)("td",{parentName:"tr",align:null},"Set maximum show number of item"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"breadcrumbitem-basic-properties"},"BreadcrumbItem Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"droplist"),(0,l.kt)("td",{parentName:"tr",align:null},"Set droplist of BreadcrumbItem"),(0,l.kt)("td",{parentName:"tr",align:null},"Menu ","|"," ()=>Menu"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropdownProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Set droplist properties"),(0,l.kt)("td",{parentName:"tr",align:null},"DropdownProps"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"routeprops-properties"},"RouteProps Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"Set route path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"breadcrumbName"),(0,l.kt)("td",{parentName:"tr",align:null},"Set  breadcrumb item's title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"Set breadcrumb item 's children"),(0,l.kt)("td",{parentName:"tr",align:null},"Array<{path: string;breadcrumbName: string;}>"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const routes = [\n  {\n    path: "/",\n    breadcrumbName: "Home",\n  },\n  {\n    path: "/Channel",\n    breadcrumbName: "Channel",\n    children: [\n      {\n        path: "/users",\n        breadcrumbName: "Users",\n      },\n      {\n        path: "/permission",\n        breadcrumbName: "Permission",\n      },\n    ],\n  },\n  {\n    path: "/news",\n    breadcrumbName: "News",\n  },\n]\n<Breadcrumb routes={routes} />\n')),(0,l.kt)("h3",{id:"set-separator-and-size"},"Set separator and size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Breadcrumb routes={routes} separator={<RightIcon />} style={{ fontSize: 12 }}/>\n")),(0,l.kt)("h3",{id:"set-maximum-show-number-of-item"},"Set maximum show number of item"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Breadcrumb maxCount={2}>\n  <BreadcrumbItem>Home</BreadcrumbItem>\n  <BreadcrumbItem>Sub Home</BreadcrumbItem>\n  <BreadcrumbItem>All Channel</BreadcrumbItem>\n  <BreadcrumbItem>Channel</BreadcrumbItem>\n  <BreadcrumbItem>News</BreadcrumbItem>\n</Breadcrumb>\n")))}c.isMDXComponent=!0}}]);