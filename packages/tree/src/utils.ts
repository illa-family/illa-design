import { NodeProps, TreeDataType } from "./interface"

export const loopNode = (nodeArr?: TreeDataType[]) => {
  if (!nodeArr) return []
  const nodeList: NodeProps[] = []
  const _loop = (nodeArr: TreeDataType[], father: NodeProps) => {
    if (father.expanding === false) return
    nodeArr.map((node) => {
      const nodeProps: NodeProps & { children?: NodeProps[] } = {
        _key: node.key,
        title: node.title,
        disabled: node.disabled,
        isLeaf: node.children == null,
        expanding: node.expanding ?? true,
        _father: father,
        _fatherPath: father?._fatherPath
          ? [...father?._fatherPath, father]
          : [father],
        _level: father?._level !== undefined ? father._level + 1 : 0,
      }
      nodeList.push(nodeProps)
      if (node.children) {
        _loop(node.children, nodeProps)
      }
    })
  }
  _loop(nodeArr, {})
  return nodeList
}

export const loopNodeWithExpand = (
  nodeArr: TreeDataType[],
  key: string,
  targetExpand: boolean,
) => {
  if (!nodeArr) return []
  const _loop = (nodeArr: TreeDataType[]) => {
    nodeArr.every((node) => {
      if (node.key === key) {
        node.expanding = targetExpand
        return false
      }
      if (node.children) {
        _loop(node.children)
      }
      return true
    })
  }
  _loop(nodeArr)
  return loopNode(nodeArr)
}
