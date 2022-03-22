/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useEffect, useState } from "react"
import { TreeProps } from "./interface"
import { loopNode, loopNodeWithExpand } from "./utils"
import { TreeList } from "./tree-list"

export function getNodeList() {}
// treeData is default
export const Tree = forwardRef<HTMLDivElement, TreeProps>((props, ref) => {
  const {
    treeData: defaultTreeData = [],
    onDragOver,
    onDragLeave,
    onDragStart,
    onDrop,
    onSelect,
    size = "default",
    ...rest
  } = props

  const [treeData, setTreeData] = useState(() => {
    return loopNode(defaultTreeData)
  })
  useEffect(() => {
    console.log("useEffect", treeData)
  }, [treeData])

  function handleExpand(key: string, to: boolean) {
    const newValue = loopNodeWithExpand(defaultTreeData, key, to)
    setTreeData(newValue)
  }

  return (
    <div ref={ref} {...rest}>
      <TreeList listData={treeData} handleExpand={handleExpand} />
    </div>
  )
})

Tree.displayName = "Tree"
