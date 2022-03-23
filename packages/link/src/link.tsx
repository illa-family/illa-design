import { forwardRef } from "react"
import { LinkProps } from "./interface"
import { applyDisable, applyLeftIcon, applyLinkContainer } from "./style"
import { LinkIcon } from "@illa-design/icon"
import { css } from "@emotion/css"
import { cx } from "@emotion/css"

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    disabled,
    className,
    icon,
    colorScheme = "blue",
    hoverable = true,
    ...otherProps
  } = props

  const leftIcon = typeof icon == "boolean" && icon ? <LinkIcon /> : icon

  const finalCss = css`
    ${applyLinkContainer(colorScheme, hoverable)};
    ${applyDisable(colorScheme, disabled)};
  `

  return (
    <a
      ref={ref}
      className={cx(finalCss, className)}
      {...otherProps}
    >
      {leftIcon && <span className={applyLeftIcon}>{leftIcon}</span>}
      {props.children}
    </a>
  )
})

Link.displayName = "Link"
