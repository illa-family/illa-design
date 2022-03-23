import React, { forwardRef, useState } from "react"
import { SwitchProps } from "./interface"
import {
  applySwitch,
  applySwitchDot,
  applySwitchIcon,
  applySwitchText,
} from "./style"
import { isObject } from "@illa-design/system"
import { cx } from "@emotion/css"

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    const {
      colorScheme = "blue",
      disabled = false,
      size = "medium",
      checkedText = "",
      uncheckedText = "",
      checkedIcon,
      uncheckedIcon,
      className,
      checked: propsChecked,
      defaultChecked = false,
      onChange,
      onClick,
      ...restProps
    } = props

    const [checked, setChecked] = useState<boolean>(defaultChecked)
    const mergedChecked = propsChecked !== void 0 ? propsChecked : checked

    const onHandleClick: React.MouseEventHandler<HTMLButtonElement> = (
      event,
    ) => {
      if (propsChecked === void 0) {
        setChecked(!mergedChecked)
        onChange && onChange(!mergedChecked, event)
      }
      onClick && onClick(event)
    }

    const renderText = mergedChecked ? checkedText : uncheckedText

    return (
      <button
        ref={ref}
        className={cx(applySwitch(colorScheme, mergedChecked, size), className)}
        onClick={onHandleClick}
        disabled={disabled}
        type="button"
        {...restProps}
      >
        <div className={applySwitchDot(size, mergedChecked, disabled)}>
          {(checkedIcon || uncheckedIcon) && (
            <div className={applySwitchIcon()}>
              {mergedChecked ? checkedIcon : uncheckedIcon}
            </div>
          )}
        </div>
        <div className={applySwitchText(mergedChecked, size)}>
          {isObject(renderText) ? (
            <div className={applySwitchIcon()}>{renderText}</div>
          ) : (
            renderText
          )}
        </div>
      </button>
    )
  },
)

Switch.displayName = "Switch"
