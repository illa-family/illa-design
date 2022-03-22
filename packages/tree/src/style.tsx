import { css } from "@emotion/react"
import { TreeSize } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const treeContainer = css`
  display: inline-flex;
  vertical-align: middle;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
`

export function applyNodePadding(size: TreeSize) {
  switch (size) {
    case "small":
      return 3
    case "large":
      return 9
    case "default":
      return 5
  }
}

export function applyNodeTextColor(disabled: boolean, selected: boolean) {
  if (disabled) {
    return css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  } else if (selected) {
    return css`
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export function applyNodeContainerCss(size: TreeSize) {
  return css`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 8px;
  `
}

export function applyNodeFoldSwitchCss(folding: boolean) {
  return css`
    display: flex;
    width: 16px;
    height: 16px;
    justify-content: center;
    align-items: center;
  `
}

export function applyNodeFoldSwitchIconCss(folding: boolean) {
  const rotate = folding ? -90 : 0
  return css`
    display: flex;
    height: 8px;
    font-size: 8px;
    width: 8px;
    transform-origin: center;
    transform: rotate(${rotate}deg);
    transition: transform 200ms;
  `
}

export function applyNodeTextCss(
  size: TreeSize,
  disabled: boolean,
  selected: boolean,
) {
  const verticalPadding = applyNodePadding(size)
  const hoverCss = !disabled
    ? css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
          cursor: pointer;
        }
      `
    : css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
          cursor: default;
        }
      `
  return css`
    padding: ${verticalPadding}px 8px;
    size: 14px;
    ${applyNodeTextColor(disabled, selected)};
    flex-grow: 2;
    ${hoverCss}
  `
}

export const indentContainerCss = css`
  display: inline-flex;
  height: 100%;
`

export const indentBlockCss = css`
  display: block;
  width: 24px;
  height: 100%;
  border-right: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
`
