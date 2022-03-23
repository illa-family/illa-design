import { forwardRef } from "react"
import { ProgressProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import {
  applyContainer,
  applyProgressContainer,
  applyProgressContainerBg,
  applySvgContainer,
} from "./common-style"
import { cx } from "@emotion/css"

export const MiniRingProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type = "line",
      steps,
      status = "normal",
      color = "blue",
      className,
      width = "16px",
      strokeWidth = "4px",
      trailColor = "gray",
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      ...otherProps
    } = props

    const radius = `calc((${width} - ${strokeWidth}) / 2)`
    const center = `calc(${width} / 2)`

    let finalColor: string

    switch (status) {
      case "normal":
        finalColor = color
        break
      case "success":
        finalColor = "green"
        break
      case "error":
        finalColor = "red"
        break
    }

    return (
      <div
        className={cx(applyContainer(width), className)}
        ref={ref}
        {...otherProps}
      >
        <Trigger disabled={!showText} content={formatText(percent)}>
          <svg className={applySvgContainer(width)}>
            <circle
              className={applyProgressContainerBg(
                trailColor,
                width,
                strokeWidth,
              )}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <circle
              className={applyProgressContainer(
                finalColor,
                width,
                strokeWidth,
                percent,
              )}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
          </svg>
        </Trigger>
      </div>
    )
  },
)

MiniRingProgress.displayName = "MiniRingProgress"
