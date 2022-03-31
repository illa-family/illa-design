import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"
import { columState } from "./time-column"

export function applyCheckboxSize(checked?: boolean) {
  let checkedCss = css()
  if (checked) {
    checkedCss = css`
      border-color: transparent;
      background-color: ${globalColor(`--${illaPrefix}-blue-01`)};

      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-blue-02`)};
      }

      &:disabled {
        background-color: ${globalColor(`--${illaPrefix}-blue-06`)};
      }
    `
  }
  return css`
    position: relative;
    appearance: none;
    border-radius: 2px;
    margin: auto 8px auto auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${globalColor(`--${illaPrefix}-gray-08`)};
    cursor: pointer;
    transition: 0.15s all linear;

    &:hover {
      border-color: ${globalColor(`--${illaPrefix}-blue-06`)};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }

    ${checkedCss}
  `
}

export function applyCheckboxContainerHorizontal(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    gap: ${currentSpacing};
    margin-right: ${currentSpacing};
  `
}

export function applyCheckboxContainerVertical(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    align-items: flex-start;
    gap: ${currentSpacing};
    margin-bottom: ${currentSpacing};
  `
}

export const triggerContentStyle: SerializedStyles = css`
  border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
  border-radius: 2px;
`

export function applyTimepickerContent() {
  return css`
    display: flex;
    box-sizing: border-box;
  `
}

export function applyTimepickerList() {
  return css`
    width: 64px;
    height: 252px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;

    &:hover {
      overflow-y: auto;
    }

    &:not(:last-child) {
      border-right: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  `
}

// time-column style
export function applyTimeColumn() {
  return css`
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 500;
    outline: 0;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 224px;
    }
  `
}

export function applyColumnItem(states: columState): SerializedStyles {
  let stateStyle: SerializedStyles = css()
  if (states?.disabled) {
    stateStyle = css`
      cursor: not-allowed;
    `
  } else {
    stateStyle = css`
      &:hover {
        cursor: pointer;
      }
    `
  }

  return css`
    padding: 4px 0 0;
    text-align: center;
    ${stateStyle}
  `
}

export function applyColumnItemText(states: columState): SerializedStyles {
  let stateStyle: SerializedStyles = css()
  if (states?.disabled) {
    stateStyle = css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  } else if (states?.selected) {
    stateStyle = css`
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    `
  }
  return css`
    line-height: 24px;
    height: 24px;

    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }

    ${stateStyle}
  `
}

export function applyContentButton(): SerializedStyles {
  return css`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-top: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
  `
}