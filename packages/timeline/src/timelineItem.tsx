import * as React from "react"
import { forwardRef } from "react"
import { TimelineItemProps } from "./interface"
import { TimelineContext } from "./timeline-context"
import {
  applyHorItemContentCss,
  applyHorItemDotCss,
  applyHorItemLineCss,
  applyHorPropDotCss,
  applyItemCss,
  applyVertItemContentCss,
  applyVertItemDotCss,
  applyVertItemLineCss,
  applyVertPropDotCss,
} from "./styles"
import { cx } from "@emotion/css"

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (props, ref) => {
    return (
      <TimelineContext.Consumer>
        {(value) => {
          const {
            dot,
            direction = value?.direction || "vertical",
            mode = value?.mode || "left",
            index = value?.index || 0,
            label,
            labelPosition = "same",
            dotColor,
            dotType = "solid",
            lineType = "solid",
            className,
            lineColor,
            autoFixDotSize = true,
            ...rest
          } = props

          let modeHandle = (mode: string, key: number) => {
            let classArr = ["alternate-same", "alternate-relative"]
            // if labelPosition is relative :  1 -> 0, 0 -> 1
            let classIdx = Math.abs(
              (key % 2) - (labelPosition === "relative" ? 1 : 0),
            )
            return mode === "alternate" ? classArr[classIdx] : mode
          }

          let handleLineCss: string = applyVertItemLineCss(
              mode,
              lineColor,
              lineType,
            ),
            handleDotCss: string = applyVertItemDotCss(mode, dotColor, dotType),
            handleContentCss: string = applyVertItemContentCss(
              modeHandle(mode, index),
              autoFixDotSize,
            ),
            handlePropDotCss: string = applyVertPropDotCss(mode)
          if (direction === "horizontal") {
            handleLineCss = applyHorItemLineCss(mode, lineColor, lineType)
            handleDotCss = applyHorItemDotCss(mode, dotColor, dotType)
            handlePropDotCss = applyHorPropDotCss(mode)
            handleContentCss = applyHorItemContentCss(
              modeHandle(mode, index),
              autoFixDotSize,
            )
          }

          return (
            <div
              className={cx(applyItemCss(direction, mode), className)}
              ref={ref}
              {...rest}
            >
              {!dot && <div className={handleLineCss} />}
              {dot ? (
                <div className={handlePropDotCss}>{dot}</div>
              ) : (
                <div className={handleDotCss} />
              )}
              <div className={handleContentCss}>
                {label ? label : props.children}
              </div>
            </div>
          )
        }}
      </TimelineContext.Consumer>
    )
  },
)
