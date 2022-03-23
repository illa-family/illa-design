import React, { forwardRef, Children, cloneElement, ReactElement } from "react"
import { CardGrid } from "./card-grid"
import { Meta } from "./meta"
import { CardProps } from "./interface"
import { Spin } from "@illa-design/spin"
import {
  applyCardActionItem,
  applyCard,
  applyCardActions,
  applyCardBody,
  applyCardCover,
  applyCardHeader,
  applyCardHeaderExtra,
  applyCardHeaderTitle,
  applyCardActionsRight,
} from "./style"
import { cx } from "@emotion/css"

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    title,
    actions,
    extra,
    size = "medium",
    hoverable = false,
    cover,
    className,
    loading = false,
    bordered = true,
    children,
    ...restProps
  } = props

  let isContainGrid = false
  let isContainMeta = false

  Children.forEach(children, (element) => {
    if (element && (element as ReactElement).type) {
      if ((element as ReactElement).type === CardGrid) {
        isContainGrid = true
      } else if ((element as ReactElement).type === Meta) {
        isContainMeta = true
      }
    }
  })

  const actionList =
    actions && actions.length ? (
      <div className={applyCardActions(isContainMeta)}>
        <div className={applyCardActionsRight}>
          {actions.map((action, index) => (
            <span key={`action-${index}`} className={applyCardActionItem}>
              {action}
            </span>
          ))}
        </div>
      </div>
    ) : null

  const handledChildren = Children.map(
    children as ReactElement,
    (element: JSX.Element) => {
      if (element && element.type && element.type === Meta) {
        return cloneElement(element, { actionList })
      }
      return element
    },
  )

  return (
    <div
      ref={ref}
      className={cx(applyCard(bordered, hoverable), className)}
      {...restProps}
    >
      {title || extra ? (
        <div className={applyCardHeader(size)}>
          {title && <div className={applyCardHeaderTitle}>{title}</div>}
          {extra && <div className={applyCardHeaderExtra}>{extra}</div>}
        </div>
      ) : null}

      {cover ? <div className={applyCardCover}>{cover}</div> : null}

      <div className={applyCardBody(size, loading, isContainGrid)}>
        {loading ? <Spin /> : handledChildren}
        {isContainMeta ? null : actionList}
      </div>
    </div>
  )
})

Card.displayName = "Card"
