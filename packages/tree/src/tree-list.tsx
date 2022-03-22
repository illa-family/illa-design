/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { ListProps } from "./interface"
import { TreeNode } from "./tree-node"
import { List } from "@illa-design/list"

export const TreeList = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { listData = [], handleExpand, size = "default" } = props

  return (
    <div ref={ref}>
      <List
        data={listData}
        render={(data) => {
          return (
            <TreeNode
              handleExpand={handleExpand}
              size={size}
              key={data.key}
              {...data}
            />
          )
        }}
        renderRaw={true}
        bordered={false}
        renderKey={(data, index) => {
          return data.key
        }}
      />
    </div>
  )
})
