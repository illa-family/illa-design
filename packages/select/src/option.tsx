import * as React from "react"
import { forwardRef } from "react"
import { OptionProps } from "./interface"
import { applyOptionStyle } from "./style"
import { omit } from "@illa-design/system"
import { Checkbox } from "@illa-design/checkbox"
import { cx } from "@emotion/css"

export const Option = forwardRef<HTMLLIElement, OptionProps>((props, ref) => {
  const {
    children,
    value,
    className,
    defaultValue,
    size = "medium",
    disabled,
    valueActive,
    valueSelect,
    isMultipleMode,
    // events
    onChange,
    onMouseEnter,
    onMouseLeave,
    onClickOption,
    ...otherProps
  } = props

  const currentValue = "value" in props ? value : children?.toString()
  const isChecked = isMultipleMode
    ? (valueSelect as any[])?.indexOf(value) !== -1
    : valueSelect === value

  const optionProps = {
    onMouseEnter: () => onMouseEnter?.(value),
    onMouseLeave: () => onMouseLeave?.(),
    onClick: (event: any) => {
      onClickOption && onClickOption(currentValue, disabled)
      otherProps.onClick?.(event)
    },
    ...omit(otherProps, ["_key", "extra", "isSelectOption", "onClick"]),
  }

  return (
    <>
      {isMultipleMode ? (
        <li
          className={cx(applyOptionStyle(size), className)}
          ref={ref}
          {...optionProps}
        >
          <Checkbox
            checked={isChecked}
            disabled={disabled}
            onChange={optionProps.onClick}
          />
          <span>{children}</span>
        </li>
      ) : (
        <li
          className={cx(applyOptionStyle(size), className)}
          ref={ref}
          {...optionProps}
        >
          {children}
        </li>
      )}
    </>
  )
})

Option.defaultProps = {
  isSelectOption: true,
}

Option.displayName = "Option"
