import React, { forwardRef } from "react"
import { CardGridProps } from "./interface"
import { applyCardGrid } from "./style"
import { cx } from "@emotion/css"

export const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  (props, ref) => {
    const { hoverable = false, children, className, ...restProps } = props
    return (
      <div
        ref={ref}
        className={cx(applyCardGrid(hoverable), className)}
        {...restProps}
      >
        {children}
      </div>
    )
  },
)

CardGrid.displayName = "CardGrid"
