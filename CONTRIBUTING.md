# Contributing

在提交贡献之前，请阅读下面指南。

项目成员和外部贡献者的 pull requests 都需要经过相同的 code review 流程。

## 如何创建一个新的组件

```bash
$ yarn plop
component name: enter your component name here!
````

### 有关plop模板配置

```bash
module.exports = (plop) => {
  plop.setGenerator("new", {
    description: "create a component",
    #命令式交互配置,其中name的值即为组件名称,可在模版文件.hbs中通过{{name}}使用
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
      },
    ],
    #根据需要自行在actions中添加映射关系，需要在plop-templates文件夹下添加对应模板
    actions: [
      {
        type: "add",
        path: "packages/{{name}}/src/index.ts",
        templateFile: "./plop-templates/src/index.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/src/{{name}}.tsx",
        templateFile: "./plop-templates/src/component.hbs",
      }
    ],
  })
}
````

[有关plop更多用法请参考](https://github.com/plopjs/plop)

## 常用命令

```bash
# 本地启动 storybook 预览组件
$ yarn storybook

# 格式化代码
$ yarn lint

# 组件构建
$ yarn build-all-components

# 对所有组件运行测试
$ yarn test

# 使用 chrome 浏览器运行 e2e 测试
$ npx cypress run-ct -b chrome

# 创建新组件
$ yarn plop

# 合并 jest 与 cypress 覆盖率报告
$ yarn report:combined
```

## 单元测试

单元测试是本项目的重要组成部分, 添加到本库的功能代码都需要写对应的单元测试。 用法可参考以下文档

- [jest](https://testing-library.com/docs/react-testing-library/intro/)
- [cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)

## Pull Request

1. Fork [本仓库](https://github.com/illa-family/illa-design) ，从 `develop` 创建新分支。
2. 用 `yarn` 下载本项目依赖, 启动项目, 详细操作参考 [Readme](https://github.com/illa-family/illa-design#readme) 。
3. 对代码库进行更改, 如果新增功能, 需要写对应的测试脚本, 保证代码覆盖率。
4. 确认所有的测试都通过后, 提交 git commit, 请同时遵守 [Commit 规范](#commit-规范)。
5. 提交 pull request, 等待 review

## Commit 规范

Commit messages 请遵循[conventional 标准](https://www.conventionalcommits.org/en/v1.0.0/)

### Commit 类型

- feat: 新特性或功能
- fix: 缺陷修复
- docs: 文档更新
- style: 组件样式更新
- test: 有关测试的更新
- refactor: 代码重构，既不是修复也不引入新功能

## 项目结构

### 组件目录

> packages/componentName

```
├── README.md
├── src 
│   ├── index.ts (组件导出)
│   ├── demo.tsx (组件功能)
│   ├── style.tsx (组件样式)
│   ├── interface.ts (组件定义)
│   └── vite-env.d.ts （环境变量声明）
├── stories
│   └── demo.stories.tsx (组件展示)
├── tests
│   ├── __snapshots__  (快照测试)
│   │   └── demo.test.tsx.snap
│   ├── demo.e2e.tsx (e2e测试)
│   └── demo.test.tsx （单元测试）
├── dist
├── .gitignore
├── CHANGELOG.md（组件发版记录）
├── tsconfig.json (ts配置)
├── vite.config.ts (vite配置)
└── package.json (库和依赖)
```
