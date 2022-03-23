import { css } from "@emotion/css"

import { PositionValue, SizeValue, AffixFixedValue } from "./interface"

export function applyFixedPosition(positionValue: PositionValue): string {
  return css`
    position: fixed;
    ${positionValue.type}: ${positionValue.offset}px
  `
}

export function applySize(sizeValue: SizeValue): string {
  return css`
    width: ${sizeValue.width}px;
    height: ${sizeValue.height}px;
  `
}

export function applyAffixFixedStyle(affixFixedValue: AffixFixedValue): string {
  if (affixFixedValue.isFixed) {
    return css`
      ${applyFixedPosition(affixFixedValue.position)};
      ${applySize(affixFixedValue.size)}
    `
  }

  return css``
}
