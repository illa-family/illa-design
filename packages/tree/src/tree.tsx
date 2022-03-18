/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { TreeProps } from "./interface"

export const Tree = forwardRef<HTMLDivElement, TreeProps>((props, ref) => {
  const { ...rest } = props

  return (
    <div ref={ref} {...rest}>
      Tree
    </div>
  )
})

Tree.displayName = "Tree"
