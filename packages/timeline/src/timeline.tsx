import { Children, forwardRef } from "react"
import { TimelineProps } from "./interface"
import { Spin } from "@illa-design/spin"
import { TimelineItem } from "./timelineItem"
import { TimelineContext } from "./timeline-context"
import { applyWrapCss } from "./styles"
import { cx } from "@emotion/css"

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      style,
      className,
      reverse = false,
      mode = "left",
      direction = "vertical",
      pending,
      pendingDot = <Spin size={"small"} />,
      ...rest
    } = props

    const pendingNode = typeof pending === "boolean" ? null : pending
    const pendingItem = pending ? (
      <TimelineItem dot={pendingDot || pendingNode} />
    ) : null

    let childLiItem = Children.toArray(props.children)

    if (reverse) {
      childLiItem.reverse()
    }

    pending && childLiItem.push(pendingItem as any)

    const items = Children.map(childLiItem, (ele, index) => {
      return (
        <TimelineContext.Provider
          value={{
            direction,
            mode,
            index,
          }}
        >
          {ele}
        </TimelineContext.Provider>
      )
    })

    return (
      <div
        ref={ref}
        className={cx(applyWrapCss(direction), className)}
        {...rest}
      >
        {items}
      </div>
    )
  },
)

Timeline.displayName = "Timeline"
