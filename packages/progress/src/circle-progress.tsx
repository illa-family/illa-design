import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import { applyCircleStatus, applyProgressText } from "./circle-progress-style"
import { SuccessIcon, WarningIcon } from "@illa-design/icon"
import {
  applyContainer,
  applyProgressContainer,
  applyProgressContainerBg,
  applySvgContainer,
} from "./common-style"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { cx } from "@emotion/css"

export const CircleProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type = "line",
      steps,
      status = "normal",
      color = "blue",
      width = "80px",
      strokeWidth = "4px",
      trailColor = "gray",
      showText = true,
      className,
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

    let statusComponent: ReactNode
    switch (status) {
      case "success":
        statusComponent = (
          <SuccessIcon color={globalColor(`--${illaPrefix}-green-03`)} />
        )
        break
      case "error":
        statusComponent = (
          <WarningIcon color={globalColor(`--${illaPrefix}-red-03`)} />
        )
        break
    }

    return (
      <div
        className={cx(applyContainer(width), className)}
        ref={ref}
        {...otherProps}
      >
        <svg className={applySvgContainer(width)}>
          <circle
            className={applyProgressContainerBg(trailColor, width, strokeWidth)}
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
            strokeLinecap="round"
          />
        </svg>
        {status == "normal" && showText && (
          <span className={applyProgressText}>{formatText(percent)}</span>
        )}
        {status != "normal" && (
          <span className={applyCircleStatus}>{statusComponent}</span>
        )}
      </div>
    )
  },
)

CircleProgress.displayName = "CircleProgress"
