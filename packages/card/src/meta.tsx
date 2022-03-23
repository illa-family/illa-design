import React, { forwardRef } from "react"
import { CardMetaProps } from "./interface"
import {
  applyCardMetaDescription,
  applyCardMetaFooter,
  applyCardMetaTitle,
} from "./style"

export const Meta = forwardRef<HTMLDivElement, CardMetaProps>((props, ref) => {
  const { title, description, actionList, avatar, ...restProps } = props
  return (
    <div ref={ref} {...restProps}>
      {title || description ? (
        <div>
          {title && <div className={applyCardMetaTitle()}>{title}</div>}
          {description && (
            <div className={applyCardMetaDescription()}>{description}</div>
          )}
        </div>
      ) : null}
      {avatar || actionList ? (
        <div className={applyCardMetaFooter()}>
          {avatar ? <div>{avatar}</div> : null}
          {actionList}
        </div>
      ) : null}
    </div>
  )
})

Meta.displayName = "Meta"
