import { ProgressColorScheme } from "./interface"
import { SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { css } from "@emotion/react"

const colorSchemes: ProgressColorScheme[] = [
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

export function applySvgContainer(width: string): SerializedStyles {
  return css`
    width: ${width};
    height: ${width};
  `
}

export function applyContainer(width: string): SerializedStyles {
  return css`
    position: relative;
    width: ${width};
    height: ${width};
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    display: inline-flex;
  `
}

export function applyProgressContainer(
  colorScheme: ProgressColorScheme,
  width: string,
  strokeWidth: string,
  percent: number,
): SerializedStyles {
  const perimeter = `calc(${Math.PI} * 2 * (${width} - ${strokeWidth}) / 2)`

  let color
  if (colorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${colorScheme}-02`)
  } else {
    color = colorSchemes.includes(colorScheme)
      ? globalColor(`--${illaPrefix}-${colorScheme}-03`)
      : colorScheme
  }

  return css`
    transition: all 200ms;
    stroke: ${color};
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: ${perimeter};
    stroke-dashoffset: calc(${perimeter} - (${percent} / 100 * ${perimeter}));
  `
}

export function applyProgressContainerBg(
  trailColorScheme: ProgressColorScheme,
  width: string,
  strokeWidth: string,
): SerializedStyles {
  const perimeter = `calc(${Math.PI} * 2 * (${width} - ${strokeWidth}) / 2)`

  let color
  if (trailColorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${trailColorScheme}-08`)
  } else {
    color = colorSchemes.includes(trailColorScheme)
      ? globalColor(`--${illaPrefix}-${trailColorScheme}-06`)
      : trailColorScheme
  }

  return css`
    stroke: ${color};
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: ${perimeter};
  `
}
