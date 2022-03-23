import { css } from "@emotion/css"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyStatistic(): string {
  return css`
    display: inline-block;
    line-height: 1.33;
  `
}

export function applyStatisticTitle(): string {
  return css`
    margin-bottom: 4px;
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
  `
}

export function applyStatisticContent(): string {
  return css`
    font-family: HelveticaNeue;
    font-size: 24px;
    font-weight: 500;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export function applyStatisticDecorator(
  isPrefix: boolean,
  isText: boolean,
): string {
  const spacing = isText ? 4 : 8
  const margin = isPrefix
    ? `margin-right:${spacing}px;`
    : `margin-left:${spacing}px;`
  const restStyle = isText
    ? `font-size: 14px;line-height: 1.57;`
    : `vertical-align: text-bottom;`
  return css`
    display: inline-block;
    ${margin + restStyle}
  `
}

export function applyStatisticValue(): string {
  return css`
    display: inline-block;
    direction: ltr;
  `
}
