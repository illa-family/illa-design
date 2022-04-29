"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8364],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8405:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),o=["components"],i={},u=void 0,p={unversionedId:"Components/DATA DISPLAY/table",id:"Components/DATA DISPLAY/table",title:"table",description:"Table is used to show data effectively and structuredly.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA DISPLAY/table.md",sourceDirName:"Components/DATA DISPLAY",slug:"/Components/DATA DISPLAY/table",permalink:"/docs/Components/DATA DISPLAY/table",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"statistic",permalink:"/docs/Components/DATA DISPLAY/statistic"},next:{title:"tabs",permalink:"/docs/Components/DATA DISPLAY/tabs"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Table Basic Properties",id:"table-basic-properties",level:3},{value:"Table Events",id:"table-events",level:3},{value:"TableFilter Basic Properties",id:"tablefilter-basic-properties",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Data drive",id:"data-drive",level:3}],m={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table"},"Table"),(0,l.kt)("p",null,"Table is used to show data effectively and structuredly. "),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/table\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Table } from "@illa-dedign/table"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"table-basic-properties"},"Table Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Set data of table"),(0,l.kt)("td",{parentName:"tr",align:null},"readonly D[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},"Set columns of table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadonlyArray<Column<D>>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Set size of table"),(0,l.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,l.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableLayout"),(0,l.kt)("td",{parentName:"tr",align:null},"Set layout of table"),(0,l.kt)("td",{parentName:"tr",align:null},'"auto"  ',"|",' "fixed"'),(0,l.kt)("td",{parentName:"tr",align:null},'"auto"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether table has border"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"borderCell"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether there is a divider between columns"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"striped"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether there is a divider between rows"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"align"),(0,l.kt)("td",{parentName:"tr",align:null},"Set alignment type of content in table"),(0,l.kt)("td",{parentName:"tr",align:null},'"left" ',"|",' "center" ',"|",' "right" ',"|",' "start" ',"|",' "end" ',"|",' "flex-star" ',"|",' "flex-end"'),(0,l.kt)("td",{parentName:"tr",align:null},'"left"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showHeader"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show header"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showFooter"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show footer"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableSortBy"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether disabled sort"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableFilters"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether disabled filter"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableRowSelect"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether disabled row select"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"table-events"},"Table Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRowSelectChange"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback when the selected rows is changed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(rows: Array<Row<D>>) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"tablefilter-basic-properties"},"TableFilter Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columnProps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set column's properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UseFiltersInstanceProps<D>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderFilterContent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set filter's content"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(columnProps: UseFiltersInstanceProps<D>) => ReactNode")),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Table>\n  <Thead>\n    <Tr>\n      <Th>First</Th>\n      <Th>Second</Th>\n      <Th>Third</Th>\n    </Tr>\n  </Thead>\n  <TBody>\n    <Tr>\n      <Td>1</Td>\n      <Td>2</Td>\n      <Td>3</Td>\n    </Tr>\n    <Tr>\n      <Td>4</Td>\n      <Td>5</Td>\n      <Td>6</Td>\n    </Tr>\n  </TBody>\n  <TFoot>\n    <Tr>\n      <Td>7</Td>\n      <Td>8</Td>\n      <Td>9</Td>\n    </Tr>\n  </TFoot>\n</Table>\n")),(0,l.kt)("h3",{id:"data-drive"},"Data drive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const data = useMemo(\n  () => [\n    {\n      col1: "Hello",\n      col2: "World",\n    } as DemoData,\n    {\n      col1: "react-table",\n      col2: "rocks",\n      disableRowSelect: true,\n    } as DemoData,\n    {\n      col1: "whatever",\n      col2: "you want",\n    } as DemoData,\n  ],\n  [],\n)\n\nconst columns = useMemo(\n  () => [\n    {\n      Header: "Column 1",\n      Footer: "Footer 1",\n      accessor: "col1", // accessor is the "key" in the data\n      Filter: (columnProps: UseFiltersInstanceProps<DemoData>) => {\n        const [currentInput, setCurrentInput] = useState<string>("")\n        return (\n          <TableFilter\n            _css={css`\n              margin-left: 4px;\n            `}\n            renderFilterContent={(\n              columnProps?: UseFiltersInstanceProps<DemoData>,\n            ) => {\n              return (\n                <Input\n                  value={currentInput}\n                  onChange={(value) => {\n                    setCurrentInput(value)\n                    columnProps?.setFilter("col1", value)\n                  }}\n                />\n              )\n            }}\n            columnProps={columnProps}\n          />\n        )\n      },\n      filter: "includes", // equals, between\n    },\n    {\n      Header: "Column 2",\n      Footer: "Footer 2",\n      accessor: "col2",\n      Filter: (columnProps: UseFiltersInstanceProps<DemoData>) => {\n        const [currentInput, setCurrentInput] = useState<string>("")\n        return (\n          <TableFilter\n            _css={css`\n              margin-left: 4px;\n            `}\n            renderFilterContent={(\n              columnProps?: UseFiltersInstanceProps<DemoData>,\n            ) => {\n              return (\n                <Input\n                  value={currentInput}\n                  onChange={(value) => {\n                    setCurrentInput(value)\n                      columnProps?.setFilter("col2", value)\n                  }}\n                />\n              )\n            }}\n            columnProps={columnProps}\n          />\n        )\n      },\n      filter: (\n        rows: Array<Row>,\n        columnIds: Array<String>, //\n        filterValue: string,\n      ) => {\n        if (filterValue == "") {\n          return rows\n        }\n        return rows.filter((value) => {\n          return (\n            (value.cells.find((value) => {\n              return columnIds.includes(value.column.id)\n            })?.value as string) ?? ""\n          ).includes(filterValue)\n        })\n      },\n      },\n  ],\n  [],\n)\nreturn <Table data={data} columns={columns} {...args} />\n')))}c.isMDXComponent=!0}}]);