import { css } from "@emotion/css"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { ListSize } from "./interface"

export function applyListContainer(bordered?: boolean): string {
  let containerCss = css`
    display: inline-flex;
    min-width: 686px;
    flex-direction: column;
  `
  if (bordered) {
    containerCss = css`
      ${containerCss};
      border: solid 1px ${globalColor(`--${illaPrefix}-gray-09`)};
      border-radius: 2px;
    `
  }
  return containerCss
}

export function applyListItemOuter(
  size: ListSize,
  hoverable?: boolean,
): string {
  let sizeCss: string
  switch (size) {
    case "small":
      sizeCss = css`
        padding: 8px 24px;
      `
      break
    case "medium":
      sizeCss = css`
        padding: 12px 24px;
      `
      break
    case "large":
      sizeCss = css`
        padding: 16px 24px;
      `
      break
  }
  let hoverableCss: string = css``
  if (hoverable) {
    hoverableCss = css`
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      }
    `
  }
  return css`
    ${sizeCss};
    ${hoverableCss};
  `
}

export const applyListItemContainer = css`
  display: flex;
  flex-direction: row;
`

export const applyListItemInner = css`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
`

export const applyItemMetaContainer = css`
  display: inline-flex;
  align-items: start;
  flex-direction: row;
`

export const applyItemMetaInner = css`
  display: inline-flex;
  flex-direction: row;
`

export const applyItemMetaAvatar = css`
  margin-right: 8px;
`

export const applyTypoStyle = css`
  align-self: center;
`

export const applyItemMetaTitle = css`
  margin-bottom: 4px;
`

export const applyListItemActionsStyle = css`
  display: inline-flex;
  margin-top: 8px;
`

export const applyListItemExtraStyle = css`
  display: inline-flex;
  margin-left: 32px;
`

export function applyBarStyle(size: ListSize) {
  let sizeCss: string
  switch (size) {
    case "small":
      sizeCss = css`
        padding: 8px 24px;
      `
      break
    case "medium":
      sizeCss = css`
        padding: 12px 24px;
      `
      break
    case "large":
      sizeCss = css`
        padding: 16px 24px;
      `
      break
  }
  return css`
    ${sizeCss};
  `
}
