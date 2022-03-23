import { css } from "@emotion/css"
import { TagColorScheme, TagVariant } from "./interface"

import { globalColor, illaPrefix } from "@illa-design/theme"

export const tagContainer = css`
  display: inline-flex;
  vertical-align: middle;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
`

export function applyTagSizeLarge(variant: TagVariant): string {
  return css`
    padding: ${variant == "outline" ? "4px 7px" : "5px 8px"};
  `
}

export function applyTagSizeMedium(variant: TagVariant): string {
  return css`
    padding: ${variant == "outline" ? "2px 7px" : "3px 8px"};
  `
}

export function applyTagSizeSmall(variant: TagVariant): string {
  return css`
    padding: ${variant == "outline" ? "0px 7px" : "1px 8px"};
  `
}

export const leftIcon = css`
  width: 12px;
  font-size: 12px;
  height: 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`

export const closeIcon = css`
  font-size: 7px;
  margin-left: 4px;
`

export const colors: TagColorScheme[] = [
  "white",
  "blackAlpha",
  "gray",
  "grayBlue",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "cyan",
  "purple",
]

export function tagOutlinePrepare(color: TagColorScheme): string {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-01`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

export function tagFillPrepare(color: TagColorScheme): string {
  return css`
    background-color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 1px;
  `
}

export function tagLightPrepare(color: TagColorScheme): string {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-06`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

export function tagFillNormal(color: Extract<TagColorScheme, string>): string {
  return css`
    border-radius: 1px;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    background-color: ${color};
  `
}

export function tagOutlineNormal(
  color: Extract<TagColorScheme, string>,
): string {
  return css`
    border-radius: 1px;
    color: ${color};
    border: solid 1px ${color};
  `
}
