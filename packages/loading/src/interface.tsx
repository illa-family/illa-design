import { HTMLAttributes } from "react"
import { SerializedStyles } from "@emotion/react"

export type LoadingSize = "small" | "medium" | "large"

export type LoadingColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  _css?: SerializedStyles
  size?: LoadingSize
  colorScheme?: LoadingColorScheme
}
