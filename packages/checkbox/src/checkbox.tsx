import * as React from "react"
import { forwardRef, useCallback, useContext, useEffect } from "react"
import { useMergeValue } from "@illa-design/system"
import { CheckmarkIcon, ReduceIcon } from "@illa-design/icon"
import { CheckboxProps } from "./interface"
import { applyCheckboxSize, applyCheckState, applyMergeCss } from "./style"
import { CheckboxGroupContext } from "./context"
import { cx } from "@emotion/css"

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    const context = useContext(CheckboxGroupContext)
    const { onGroupChange } = context
    const mergeProps = { ...props }
    const {
      children,
      disabled,
      value,
      onChange,
      className,
      checked,
      indeterminate,
      defaultChecked,
      ...otherProps
    } = mergeProps
    if (context.isGroup) {
      mergeProps.checked =
        context.checkboxGroupValue?.indexOf(props.value) !== -1
      mergeProps.disabled = "disabled" in props ? disabled : context?.disabled
    }

    const [currentChecked, setCurrentChecked] = useMergeValue(false, {
      value: mergeProps.checked,
      defaultValue: mergeProps.defaultChecked,
    })

    useEffect(() => {
      context.registerValue?.(value)
      return () => {
        context.unRegisterValue?.(value)
      }
    }, [value])

    return (
      <label
        ref={ref}
        className={cx(applyMergeCss(props), className)}
        {...otherProps}
      >
        <input
          type="checkbox"
          className={applyCheckboxSize(currentChecked || indeterminate)}
          value={value}
          checked={currentChecked}
          disabled={disabled}
          onChange={useCallback(
            (e) => {
              e.persist()
              e.stopPropagation()
              setCurrentChecked(e?.target?.checked)
              if (context?.isGroup) {
                onGroupChange?.(value, e?.target?.checked, e)
              }
              onChange?.(e?.target?.checked, e)
            },
            [onGroupChange, context?.isGroup, onChange, value],
          )}
          onClick={(e) => e.stopPropagation()}
        />
        {indeterminate ? (
          <ReduceIcon className={applyCheckState(true)} />
        ) : (
          <CheckmarkIcon className={applyCheckState(currentChecked)} />
        )}
        {children}
      </label>
    )
  },
)

Checkbox.displayName = "Checkbox"
