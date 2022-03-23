import * as React from "react"
import { ChangeEvent, forwardRef, useContext } from "react"
import { RadioProps } from "./interface"
import {
  applyMergeCss,
  applyRadioButton,
  applyRadioSize,
  disappear,
} from "./style"
import { useMergeValue } from "./hook"
import { omit } from "@illa-design/system"
import { RadioGroupContext } from "./radio-group-context"
import { cx } from "@emotion/css"

export const Radio = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const context = useContext(RadioGroupContext)
  const mergeProps = { ...props }
  const {
    style,
    className,
    children,
    checked,
    disabled,
    value,
    onChange,
    ...otherProps
  } = mergeProps
  const colorScheme = props?.colorScheme
    ? props?.colorScheme
    : context?.colorScheme ?? "blue"
  if (context) {
    mergeProps.checked = context?.value === props?.value
    mergeProps.disabled = !!(context?.disabled || props?.disabled)
  }

  const [currentChecked, setCurrentChecked] = useMergeValue(false, {
    value: mergeProps.checked,
    defaultValue: mergeProps.defaultChecked,
  })

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
    if (context) {
      context.onChangeValue && context.onChangeValue(value, event)
    } else if (!("checked" in props) && !currentChecked) {
      setCurrentChecked(true)
    }
    !currentChecked && onChange && onChange(true, event)
  }

  const stateValue = {
    checked: currentChecked,
    size: context?.size,
    disabled: !!(context?.disabled || props?.disabled),
    colorScheme,
  }

  return (
    <label
      style={style}
      className={cx(
        context?.type === "button"
          ? applyRadioButton(stateValue)
          : applyMergeCss(stateValue),
        className,
      )}
      ref={ref}
      {...omit(otherProps, ["colorScheme"])}
    >
      <input
        type="radio"
        {...(context?.name ? { name: context.name } : {})}
        className={
          context?.type === "button" ? disappear : applyRadioSize(colorScheme)
        }
        value={value || ""}
        checked={currentChecked}
        disabled={disabled}
        onChange={onChangeValue}
      />
      <span>{children}</span>
    </label>
  )
})

Radio.displayName = "Radio"
