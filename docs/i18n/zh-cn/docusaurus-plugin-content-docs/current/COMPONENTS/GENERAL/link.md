# 链接 Link

链接的基本样式。

## 安装

```bash
yarn add @illa-design/link
```

## 引用组件

```jsx
import { Link } from "@illa-design/link"
```

## 组件接口（API）

### Link 基础属性

| Props       | Desc                                 | Type                                                                                                                      | Default |
| ----------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| colorScheme | 设置字体颜色                         | "white"｜"blackAlpha" ｜ "gray" ｜ "grayBlue" ｜ "red" ｜ "orange" ｜ "yellow" ｜ "green" ｜ "blue" ｜ "cyan" ｜ "purple" | "blue"  |
| icon        | 显示图标，设置为 true 时展示默认图标 | ReactNode ｜ boolean                                                                                                      | -       |
| disabled    | 是否禁用                             | boolean                                                                                                                   | "small" |
| hoverable   | 悬浮状态是否有底色                   | boolean                                                                                                                   | -       |

## 使用方法

### 基础用法

```jsx
<Link />
```

### 禁用

```jsx
<Link disabled>Link</Link>
```

### 设置链接颜色

```jsx
<Link colorScheme="yellow">Link</Link>
```

## 悬浮状态样式

```jsx
<Link hoverable>Link</Link>
```
