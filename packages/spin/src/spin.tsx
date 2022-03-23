import React, { forwardRef, ReactElement } from "react"
import { SpinProps } from "./interface"
import { LoadingIcon } from "@illa-design/icon"
import { isObject } from "@illa-design/system"
import {
  applySizeCss,
  applySpinContainerCss,
  containerCss,
  tipCss,
} from "./styles"
import { cx } from "@emotion/css"

export const Spin = forwardRef<HTMLDivElement, SpinProps>((props, ref) => {
  const {
    loading = true,
    size = "medium",
    icon,
    element,
    className,
    tip,
    children,
    placeholder,
    ...rest
  } = props

  let loadingIcon
  if (icon) {
    loadingIcon = React.cloneElement(icon as ReactElement, {
      css: applySizeCss(size, loading),
    })
  } else if (element) {
    loadingIcon = element
  } else {
    loadingIcon = <LoadingIcon className={applySizeCss(size, loading)} />
  }
  let tipView
  if (isObject(tip)) {
    tipView = <span>{tip}</span>
  } else {
    tipView = <span className={tipCss}>{tip}</span>
  }

  return (
    <div
      placeholder={placeholder}
      className={cx(containerCss, className)}
      ref={ref}
      {...rest}
    >
      {children}
      {loading && (
        <div className={applySpinContainerCss(loading)}>
          <span>{loadingIcon}</span>
          <span>{tip && tipView} </span>
        </div>
      )}
    </div>
  )
})
