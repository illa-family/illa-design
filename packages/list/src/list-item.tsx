import { forwardRef } from "react"
import { ListItemProps } from "./interface"
import {
  applyListItemActionsStyle,
  applyListItemContainer,
  applyListItemExtraStyle,
  applyListItemInner,
} from "./style"
import { cx } from "@emotion/css"

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (props, ref) => {
    const { actions, extra, className, ...otherProps } = props
    return (
      <div
        className={cx(applyListItemContainer, className)}
        ref={ref}
        {...otherProps}
      >
        <div className={applyListItemInner}>
          {props.children}
          {actions && (
            <div className={applyListItemActionsStyle}>{actions}</div>
          )}
        </div>
        {extra && <div className={applyListItemExtraStyle}>{extra}</div>}
      </div>
    )
  },
)

ListItem.displayName = "ListItem"
