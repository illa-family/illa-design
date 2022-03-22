/** @jsxImportSource @emotion/react */
import { forwardRef, useState } from "react"
import { NodeProps } from "./interface"
import {
  applyNodeContainerCss,
  applyNodeFoldSwitchCss,
  applyNodeFoldSwitchIconCss,
  applyNodeTextCss,
  indentBlockCss,
  indentContainerCss,
} from "./style"
import { CaretDownIcon } from "@illa-design/icon"

export const TreeNode = forwardRef<HTMLDivElement, NodeProps>((props, ref) => {
  const {
    _key = "",
    title = "title",
    _level,
    size = "default",
    disabled = false,
    selected = false,
    isLeaf,
    expanding = true,
    handleExpand,
  } = props

  console.log(expanding)

  return (
    <div css={applyNodeContainerCss(size)}>
      <span css={indentContainerCss}>
        {[...Array(_level)].map((_, index) => (
          <span css={indentBlockCss} />
        ))}
      </span>
      {!isLeaf && (
        <span
          css={applyNodeFoldSwitchCss(expanding)}
          onClick={() => {
            console.log("onClick", _key, expanding)
            handleExpand && handleExpand(_key, !expanding)
          }}
        >
          <span css={applyNodeFoldSwitchIconCss(expanding)}>
            <CaretDownIcon />
          </span>
        </span>
      )}
      <span css={applyNodeTextCss(size, disabled, selected)}>{title}</span>
    </div>
  )
})
