import { forwardRef, HTMLAttributes } from "react"
import { applyTypoContainer } from "./typograph-style"
import { cx } from "@emotion/css"

export const Typography = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const { className, ...otherProps } = props
    return (
      <article
        ref={ref}
        className={cx(applyTypoContainer(), className)}
        {...otherProps}
      >
        {props.children}
      </article>
    )
  },
)

Typography.displayName = "Typography"
