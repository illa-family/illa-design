import * as React from "react"
import { forwardRef } from "react"
import { DividerProps } from "./interface"
import {
  applyDividerContainerHorizontal,
  applyDividerContainerVertical,
} from "./style"
import { cx } from "@emotion/css"

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      direction = "horizontal",
      variant = "solid",
      className,
      ...otherProps
    } = props

    let dividerCss: string
    switch (direction) {
      case "vertical":
        dividerCss = applyDividerContainerVertical(variant)
        break
      case "horizontal":
        dividerCss = applyDividerContainerHorizontal(variant)
        break
    }

    return (
      <div ref={ref} className={cx(dividerCss, className)} {...otherProps} />
    )
  },
)

Divider.displayName = "Divider"
