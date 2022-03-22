import { HTMLAttributes, ReactNode } from "react"

export type TreeSize = "mini" | "small" | "default" | "large"
export type CheckedStrategy = "SHOW_ALL" | "SHOW_PARENT" | "SHOW_CHILD"
export type Icons = {
  dragIcon?: ReactNode
  switcherIcon?: ReactNode
  loadingIcon?: ReactNode
}

export interface TreeProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onDragLeave" | "onDragOver" | "onDragStart" | "onDrop" | "onSelect"
  > {
  size?: TreeSize
  blockNode?: boolean
  autoExpandParent?: boolean
  // 复选框
  multiple?: boolean
  checkable?: boolean
  checkStrictly?: boolean
  checkedStrategy?: CheckedStrategy
  checkedKeys?: string[]

  selectable?: boolean
  defaultSelectedKeys?: string[]
  defaultExpandedKeys?: string[]
  // 受控
  selectedKeys?: string[]
  expandedKeys?: string[]
  // data
  treeData?: TreeDataType[]
  // value => treeData
  fieldNames?: FieldNamesType

  // drop
  allowDrop?: AllowDrop
  dragIcon?: ReactNode

  // nodeProps??
  renderExtra?: (props: NodeProps) => ReactNode
  renderTitle?: (props: NodeProps) => ReactNode

  loadMore?: (node: NodeInstance) => Promise<void>

  icons?: ReactNode
  switcherIcon?: ReactNode
  showLine?: boolean

  // actions
  onSelect?: (
    selectedKeys: string[],
    extra: {
      selected: boolean
      selectedNodes: NodeInstance[]
      node: NodeInstance
      e: Event
    },
  ) => void
  onCheck?: (
    checkedKeys: string[],
    extra: {
      node: NodeInstance
      checkedNodes: NodeInstance[]
      checked: boolean
      halfCheckedKeys: string[]
      halfCheckedNodes: NodeInstance[]
      e: Event
    },
  ) => void

  onExpand?: (
    expandedKeys: string[],
    exra?: {
      expanded: boolean
      node: NodeInstance
      expandedNodes: NodeInstance[]
    },
  ) => void

  onDrop?: (info: {
    e: DragEvent
    dragNode: NodeInstance | null
    dropNode: NodeInstance | null
    dropPosition: number
  }) => void

  onDragStart?: (e: DragEvent, node: NodeInstance) => void
  onDragOver?: (e: DragEvent, node: NodeInstance) => void
  onDragLeave?: (e: DragEvent, node: NodeInstance) => void

  placeholder?: string
}

export interface TreeDataType extends NodeProps {
  children?: TreeDataType[]
}

export interface NodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "key" | "title"> {
  checkable?: boolean
  disableCheckbox?: boolean
  disabled?: boolean
  icon?: ReactNode
  key?: string
  size?: TreeSize
  title?: string | ReactNode
  selected?: boolean
  expanding?: boolean
  isLeaf?: boolean
  _father?: NodeProps
  _level?: number
  _fatherPath?: NodeProps[]
  _key?: string
  handleExpand?: (key: string, to: boolean) => void
}

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  listData: NodeProps[]
  handleExpand?: (key: string, to: boolean) => void
  size?: TreeSize
}

export interface FieldNamesType {
  key?: string
  title?: string
  disabled?: string
  children?: string
  isLeaf?: string
  disableCheckbox?: string
  checkable?: string
}

export type Key2nodePropsType = {
  [key: string]: TreeDataType
}

export interface AllowDrop {}

export interface NodeInstance {}
