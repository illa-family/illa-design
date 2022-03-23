import { css } from "@emotion/css"

export function applyTextContainer(fontSize: string): string {
  return css`
    font-size: ${fontSize};
  `
}
