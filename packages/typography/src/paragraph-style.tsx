import { css, string } from "@storybook/theming"

export function applyParagraphContainer(indent: boolean): string {
  if (indent) {
    return css`
      text-indent: 2em;
    `
  } else {
    return css``
  }
}

export function applyTextContainer(fontSize: string): string {
  return css`
    font-size: ${fontSize};
  `
}
