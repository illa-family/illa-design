import {
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  KeyboardEvent,
  useEffect,
} from "react"
import { css } from "@emotion/react"
import { isArray } from "@illa-design/system"
import { ErrorIcon } from "@illa-design/icon"
import { RangeInputProps } from "./interface"
import {
  applyClearStyle,
  applyInputStyle,
  applyRangeContainer,
  applyRangeInput,
  applySuffixCls,
  pointerStyle,
  SeparatorStyle,
} from "./style"

export const RangeInput = forwardRef<HTMLDivElement, RangeInputProps>(
  (props, ref) => {
    const {
      style,
      className,
      inputGroupRef,
      allowClear,
      error,
      disabled,
      placeholder,
      value,
      borderColor = "blue",
      size = "medium",
      separator,
      format,
      suffix,
      popupVisible,
      focusedInputIndex,
      readOnly,
      // events
      onChange,
      onClear,
      onFocus,
      onBlur,
      onPressEnter,
      onPressTab,
      changeFocusedInputIndex,
      ...otherProps
    } = props

    const disabled0 = isArray(disabled) ? disabled?.[0] : disabled
    const disabled1 = isArray(disabled) ? disabled?.[1] : disabled

    const [focus0, setFocus0] = useState(false)
    const [focus1, setFocus1] = useState(false)
    const [value0, setValue0] = useState(value?.[0] || "")
    const [value1, setValue1] = useState(value?.[1] || "")

    const inputRef = useRef<HTMLInputElement>(null)
    const input1Ref = useRef<HTMLInputElement>(null)

    if (inputGroupRef) {
      useImperativeHandle(
        inputGroupRef,
        () => ({
          input0: inputRef.current,
          input1: input1Ref.current,
          focus: (index?: number) => {
            const focusedIndex =
              typeof index === "number" ? index : focusedInputIndex
            const focusElement =
              focusedIndex === 0 ? inputRef.current : input1Ref.current
            if (
              (focusedInputIndex === 0 && !disabled0) ||
              (focusedInputIndex === 1 && !disabled1)
            ) {
              focusElement?.focus()
            }
          },
          blur: () => {
            inputRef.current?.blur()
            input1Ref.current?.blur()
          },
        }),
        [],
      )
    }

    const changeFocusedInput = (index: number) => {
      if (focusedInputIndex !== index) {
        changeFocusedInputIndex?.(index)
      }
    }

    const stateValue = {
      variant: "outline",
      borderColor,
      size,
      error,
      focus: focus0 || focus1,
      disabled: disabled0 && disabled1,
    }

    const inputProps = {
      readOnly,
      onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
        const keyCode = e.keyCode || e.which
        // Enter
        if (keyCode === 13) {
          onPressEnter?.()
        }
        // Tab
        if (keyCode === 9) {
          onPressTab?.(e)
        }
      },
    }

    useEffect(() => {
      setValue0(value?.[0] ?? "")
      setValue1(value?.[1] ?? "")
    }, [value])

    return (
      <div
        ref={ref}
        css={applyRangeContainer(stateValue)}
        style={style}
        className={className}
      >
        <input
          ref={inputRef}
          css={css(applyInputStyle(), applyRangeInput())}
          value={value0}
          placeholder={placeholder?.[0]}
          disabled={disabled0}
          onFocus={(e) => {
            changeFocusedInput(0)
            setFocus0(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocus0(false)
            onBlur?.(e)
          }}
          onChange={(event: any) => {
            const value = event.target?.value
            if (!("value" in props)) {
              setValue0(value)
            }
            event?.stopPropagation()
            onChange?.([value, value1], event)
          }}
          {...otherProps}
          {...inputProps}
        />
        <span css={css({ padding: size === "small" ? "0 8px" : "0 12px" })}>
          {separator || <div css={SeparatorStyle} />}
        </span>
        <input
          ref={input1Ref}
          css={css(applyInputStyle(), applyRangeInput())}
          value={value1}
          placeholder={placeholder?.[1]}
          disabled={disabled1}
          onFocus={(e) => {
            changeFocusedInput(1)
            setFocus1(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocus1(false)
            onBlur?.(e)
          }}
          onChange={(event: any) => {
            const value = event.target?.value
            if (!("value" in props)) {
              setValue1(value)
            }
            event?.stopPropagation()
            onChange?.([value0, value], event)
          }}
          {...otherProps}
          {...inputProps}
        />
        {!disabled && allowClear && value?.length ? (
          <span
            title="InputClearIcon"
            css={css(pointerStyle, applyClearStyle(size, true))}
            onClick={(e) => {
              e.stopPropagation()
              inputRef?.current?.focus?.()
              onClear?.()
            }}
            onMouseDown={(e) => {
              e.preventDefault()
            }}
          >
            <ErrorIcon />
          </span>
        ) : null}
        <span css={applySuffixCls(stateValue)}>{suffix?.render ?? null}</span>
      </div>
    )
  },
)

RangeInput.displayName = "RangeInput"
