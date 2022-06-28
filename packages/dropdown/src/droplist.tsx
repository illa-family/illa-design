import React, {
  forwardRef,
  createContext,
  MouseEvent,
  isValidElement,
} from "react"
import { DropListComponent, DropListProps } from "./interface"
import { DropListItem } from "./item"
import { applyListCss } from "./style"

export const DropListContext = createContext<{
  onClickItem?: (key: string, event: MouseEvent) => void
}>({})

export const DropList = forwardRef<HTMLDivElement, DropListProps>(
  (props, ref) => {
    const { children, onClickItem, isDropList, ...otherProps } = props

    return (
      <div ref={ref} css={applyListCss()} {...otherProps}>
        <DropListContext.Provider
          value={{
            onClickItem,
          }}
        >
          {React.Children.map(children, (item, index) => {
            if (isValidElement(item)) {
              return React.cloneElement(item, {
                ...item.props,
                _key: item.key || `$item-${index}`,
              })
            }
            return item
          })}
        </DropListContext.Provider>
      </div>
    )
  },
) as DropListComponent

DropList.displayName = "DropList"
DropList.Item = DropListItem
DropList.defaultProps = {
  isDropList: true,
}
