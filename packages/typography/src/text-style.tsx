import { css, string } from "@storybook/theming"

export function applyTextContainer(fontSize: string): string {
  return css`
    font-size: ${fontSize};
  `
}
