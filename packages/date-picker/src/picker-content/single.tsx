import { forwardRef, useCallback, cloneElement, useState } from "react"
import { throttleByRaf } from "@illa-design/system"
import { Button } from "@illa-design/button"
import {
  DatePickerProps,
  MonthPickerProps,
  YearPickerProps,
  CommonSingleProps,
} from "../interface"
// import { Calendar } from "@illa-design/calendar"
import { Calendar } from "../../../calendar/src/index"
import { TimePickerPopup } from "../../../time-picker/src/time-picker-popup"
import { Dayjs } from "dayjs"
import { dayjs } from "@illa-design/system"
import utc from "dayjs/plugin/utc"
import tz from "dayjs/plugin/timezone"
import { Picker } from "../picker"
import {
  triContentCommonCss,
  applyShortContainerCss,
  shortCutsCss,
  singlePickerContentCss,
  showTimeContainerCss,
  showTimeHeaderCss,
  popupCss,
  horShortcuts,
  vertShortcuts,
  nowButtonCss,
} from "../style"

const CommonPicker = forwardRef<HTMLDivElement, CommonSingleProps>(
  (props, ref) => {
    const {
      type,
      _css,
      disabled = false,
      allowClear = true,
      position = "bl",
      placeholder = "",
      shortcuts,
      shortcutsPlacementLeft = false,
      error,
      size = "medium",
      popupVisible = false,
      onVisibleChange,
      onChange,
      onSelect,
      onClear,
      editable = true,
      onSelectShortcut,
      disabledDate,
      defaultPickerValue,
      showTime = true,
      onOk,
      format,
      value,
      defaultValue,
      showNowBtn = true,
      // disabledTime, // TODO

      ...restProps
    } = props

    // dayjs.extend(utc)
    // dayjs.extend(tz)
    // dayjs.tz.setDefault("Asia/Tokyo")

    let initValue =
      value || defaultValue
        ? dayjs(value || defaultValue).format(format as string)
        : ""
    const [inputVal, setInputVal] = useState<string>(initValue)
    const [calendarShortCuts, setCalendarShortCuts] = useState<
      dayjs.Dayjs | "clear"
    >()
    const [shortcutSwitch, setShortcutSwitch] = useState<string>("")
    const [showTrigger, setShowTrigger] = useState<boolean>(popupVisible)
    const mergedDefaultValue = value || defaultPickerValue
    const showTimeMerged = showTime && type === "day"

    const [valueShow, setValueShow] = useState<Dayjs | Dayjs[]>()

    const [calendarValue, setCalendarValue] = useState<Dayjs>(dayjs())

    const initFormat = () => {
      let result
      switch (type) {
        case "day":
          result = showTime ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD"
          break
        case "month":
          result = "YYYY-MM"
          break
        case "year":
          result = "YYYY"
          break
      }
      return result
    }
    let finalFormat = format || initFormat()

    const finalValue = (calendar?: Dayjs | null, timePicker?: Dayjs | null) => {
      calendar = calendar || calendarValue
      timePicker = timePicker || dayjs()
      return dayjs(
        `${calendar.format("YYYY-MM-DD")} ${timePicker.format("hh:mm:ss")}`,
      )
    }

    const changeDate = (date: dayjs.Dayjs) => {
      let value = finalValue(date)
      let valueFormat = value.format(finalFormat as string)
      onSelect?.(valueFormat, value)
      if (!showTimeMerged) {
        onChange?.(valueFormat, value)
        setShowTrigger(false)
        setInputVal(valueFormat)
      } else {
        setCalendarValue(date)
      }
    }
    const clearDate = () => {
      setInputVal("")
      setCalendarValue(dayjs())
      setCalendarShortCuts("clear")

      onClear?.()
      setShowTrigger(false)
    }

    const clickNow = () => {
      let current = dayjs()
      setInputVal(current.format(finalFormat as string))
      onChange?.(current.format(finalFormat as string), current)
      setShowTrigger(false)
    }

    const handleShortEnter = useCallback(
      throttleByRaf((item: any) => {
        if (item.text === shortcutSwitch) return
        setCalendarShortCuts(item.value())
      }),
      [calendarShortCuts],
    )

    const handleShortLeave = (item: any) => {
      if (item.text === shortcutSwitch) return
      setCalendarShortCuts("clear")
    }

    const changeInputVal = (value: string) => {
      setInputVal(value)
    }

    const onConfirmValue = (time: Dayjs) => {
      let value = finalValue(calendarValue, time)
      let valueFormat = value.format(finalFormat as string)
      onChange?.(valueFormat, value)
      onOk?.(valueFormat, value)
      setShowTrigger(false)
      setInputVal(valueFormat)
      setCalendarValue(dayjs())
    }

    function ShortcutsCompt() {
      return shortcuts ? (
        <div css={applyShortContainerCss(shortcutsPlacementLeft)}>
          {shortcuts.map((item, key) => {
            return (
              <div
                css={shortCutsCss}
                key={key}
                onMouseEnter={() => handleShortEnter(item)}
                onMouseLeave={() => handleShortLeave(item)}
                onClick={() => {
                  if (shortcutSwitch !== item.text) {
                    setShortcutSwitch(
                      typeof item.text === "string" ? item.text : "",
                    )
                  }
                  changeDate(item.value() as dayjs.Dayjs)
                  onSelectShortcut?.(item)
                }}
              >
                {item.text}
              </div>
            )
          })}
        </div>
      ) : null
    }

    return (
      <div ref={ref} css={_css} {...restProps}>
        <Picker
          disabled={disabled}
          allowClear={allowClear}
          position={position}
          placeholder={placeholder}
          inputVal={inputVal}
          onClearDate={clearDate}
          error={error}
          size={size}
          popupVisible={showTrigger}
          onChangeVisible={setShowTrigger}
          onClear={onClear}
          onVisibleChange={onVisibleChange}
          editable={editable}
          onChangeInputVal={changeInputVal}
          pickerContent={
            <div css={singlePickerContentCss}>
              {shortcutsPlacementLeft && (
                <div css={vertShortcuts}>
                  <ShortcutsCompt />
                </div>
              )}
              <div>
                <Calendar
                  panel={true}
                  mode={type}
                  panelTodayBtn={false}
                  css={triContentCommonCss}
                  onChange={(date: dayjs.Dayjs) => {
                    changeDate(date)
                    setShortcutSwitch("")
                  }}
                  disabledDate={disabledDate}
                  selectDayFromProps={calendarShortCuts}
                  defaultPickerValue={dayjs(mergedDefaultValue)}
                />
                <div css={horShortcuts}>
                  {shortcuts && !shortcutsPlacementLeft ? (
                    <ShortcutsCompt />
                  ) : showNowBtn ? (
                    <Button
                      colorScheme="gray"
                      css={nowButtonCss}
                      onClick={() => {
                        clickNow()
                      }}
                    >
                      Now
                    </Button>
                  ) : null}
                  {shortcuts && !shortcutsPlacementLeft && <ShortcutsCompt />}
                </div>
              </div>

              {showTimeMerged && (
                <div css={showTimeContainerCss}>
                  <div css={showTimeHeaderCss}>time</div>
                  <div css={popupCss}>
                    {cloneElement(<TimePickerPopup />, {
                      isRangePicker: false,
                      format: "hh:mm:ss",
                      valueShow: valueShow,
                      setValueShow,
                      popupVisible: showTrigger,
                      onConfirmValue,
                      showNowBtn: false,
                      ...restProps,
                    })}
                  </div>
                </div>
              )}
            </div>
          }
        />
      </div>
    )
  },
)

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    return <CommonPicker {...props} ref={ref} type={"day"} />
  },
)

DatePicker.displayName = "DatePicker"

export const MonthPicker = forwardRef<HTMLDivElement, MonthPickerProps>(
  (props, ref) => {
    return <CommonPicker {...props} ref={ref} type={"month"} />
  },
)

MonthPicker.displayName = "MonthPicker"

export const YearPicker = forwardRef<HTMLDivElement, YearPickerProps>(
  (props, ref) => {
    return <CommonPicker {...props} ref={ref} type={"year"} />
  },
)

YearPicker.displayName = "YearPicker"