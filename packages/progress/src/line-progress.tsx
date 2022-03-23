import { forwardRef, ReactNode } from "react"
import { ProgressProps } from "./interface"
import {
  applyLineContainer,
  applyLineProgress,
  applyLineProgressBg,
  applyLineProgressBgStep,
  applyLineProgressStep,
  applyProgressContainer,
  applyProgressText,
  applySpace,
  applyStatusIcon,
} from "./line-progress-style"
import { SuccessIcon, WarningCircleIcon } from "@illa-design/icon"
import { Space } from "@illa-design/space"
import { cx, globalColor, illaPrefix } from "@illa-design/theme"

export const LineProgress = forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      steps = 1,
      status = "normal",
      color = "blue",
      trailColor = "gray",
      className,
      showText = true,
      formatText = (percent: number) => {
        return `${percent}%`
      },
      percent = 0,
      strokeWidth = "4px",
      width = "320px",
      ...otherProps
    } = props

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

    if (steps == 1) {
      return (
        <div
          ref={ref}
          className={cx(applyProgressContainer, className)}
          {...otherProps}
        >
          <div className={applyLineContainer(width, strokeWidth)}>
            <div className={applyLineProgressBg(strokeWidth, trailColor)} />
            <div
              className={applyLineProgress(percent, strokeWidth, finalColor)}
            />
          </div>
          {showText && (
            <span className={applyProgressText}>{formatText(percent)}</span>
          )}
          {status != "normal" && (
            <span className={applyStatusIcon}>{statusComponent}</span>
          )}
        </div>
      )
    } else {
      let lineProgressContainer = []
      let lineProgressBgContainer = []

      for (let i = 0; i < steps; i++) {
        lineProgressContainer.push(
          <div
            key={i}
            className={applyLineProgressStep(
              percent,
              strokeWidth,
              `calc((${width} - (${steps} - 1) * 4px) / ${steps})`,
              finalColor,
              steps,
              i,
            )}
          />,
        )
        lineProgressBgContainer.push(
          <div
            key={i}
            className={applyLineProgressBgStep(
              strokeWidth,
              `calc((${width} - (${steps} - 1) * 4px) / ${steps})`,
              trailColor,
            )}
          />,
        )
      }

      return (
        <div ref={ref} className={applyProgressContainer} {...otherProps}>
          <div className={applyLineContainer(width, strokeWidth)}>
            <Space className={applySpace()} size="4px">
              {lineProgressBgContainer}
            </Space>
            <Space className={applySpace()} size="4px">
              {lineProgressContainer}
            </Space>
          </div>
          {showText && (
            <span className={applyProgressText}>{formatText(percent)}</span>
          )}
          {status != "normal" && (
            <span className={applyStatusIcon}>{statusComponent}</span>
          )}
        </div>
      )
    }
  },
)

LineProgress.displayName = "LineProgress"
