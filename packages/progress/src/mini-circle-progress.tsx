import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import { SuccessIcon, WarningCircleIcon } from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
import { applyContainer } from "./common-style"
import {
  applyCircleProgressContainer,
  applyCircleStatus,
  applyCircleSvgContainer,
} from "./mini-circle-progress-style"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { cx } from "@emotion/css"

export const MiniCircleProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      type = "line",
      status = "normal",
      color = "blue",
      width = "16px",
      strokeWidth = "4px",
      trailColor = "gray",
      className,
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      steps,
      ...otherProps
    } = props

    const radius = `calc(${width} / 2)`
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
          <WarningCircleIcon color={globalColor(`--${illaPrefix}-red-03`)} />
        )
        break
    }

    return (
      <div
        className={cx(applyContainer(width), className)}
        ref={ref}
        {...otherProps}
      >
        <Trigger disabled={!showText} content={formatText(percent)}>
          {(status == "normal" || status == "error") && (
            <svg className={applyCircleSvgContainer(width, trailColor)}>
              <circle
                className={applyCircleProgressContainer(
                  finalColor,
                  width,
                  percent,
                )}
                fill="none"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={width}
              />
            </svg>
          )}
          {status == "success" && (
            <span className={applyCircleStatus}>{statusComponent}</span>
          )}
        </Trigger>
      </div>
    )
  },
)

MiniCircleProgress.displayName = "MiniCircleProgress"
