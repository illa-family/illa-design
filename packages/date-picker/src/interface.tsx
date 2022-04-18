import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { Dayjs } from "dayjs"
import { SerializedStyles } from "@emotion/react"
import { TimePickerProps, RangePickerProps } from "@illa-design/time-picker"

export type PickerPosition = "top" | "tl" | "tr" | "bottom" | "bl" | "br"
export type ShortcutType = {
  text: ReactNode
  value: () => Dayjs | Dayjs[]
} & Record<string, any>
export type PickerSize = "small" | "medium" | "large"
export type CalendarValue = number | string | Date | Dayjs
export type DisabledTimeProps = {
  disabledHours?: () => number[]
  disabledMinutes?: () => number[]
  disabledSeconds?: () => number[]
}
export type RangePickerMode = "date" | "month" | "week" | "year" | "quarter"
export interface PickerProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "placeholder" | "onChange" | "onSelect"
  > {
  disabled?: boolean | boolean[]
  allowClear?: boolean
  position?: PickerPosition
  placeholder?: string | string[]
  shortcuts?: ShortcutType[]
  shortcutsPlacementLeft?: boolean
  error?: boolean
  size?: PickerSize
  popupVisible?: boolean
  onVisibleChange?: (visible?: boolean) => void
  onChange?: (dateString: string, date: Dayjs) => void
  onSelect?: (dateString: string, date: Dayjs) => void
  onClear?: () => void
  editable?: boolean
  onSelectShortcut?: (shortcut: ShortcutType) => void
  locale?: Record<string, any>
  separator?: ReactNode
  disabledDate?: (current?: Dayjs) => boolean
  onOk?: (dateString: string, date: Dayjs) => void
  defaultPickerValue?: CalendarValue
  _css?: SerializedStyles
  utcOffset?: number
  timezone?: string
}

export interface DatePickerProps extends Omit<PickerProps, "defaultValue"> {
  format?: string | ((value: Dayjs) => string)
  defaultValue?: CalendarValue
  value?: CalendarValue
  showTime?: boolean | TimePickerProps
  timepickerProps?: TimePickerProps
  showNowBtn?: boolean
  disabledTime?: (current?: Dayjs) => DisabledTimeProps
}

export interface MonthPickerProps extends Omit<PickerProps, "defaultValue"> {
  format?: string | ((value: Dayjs) => string)
  defaultValue?: CalendarValue
  value?: CalendarValue
}

export interface YearPickerProps extends Omit<PickerProps, "defaultValue"> {
  format?: string | ((value: Dayjs) => string)
  defaultValue?: CalendarValue
  value?: CalendarValue
}

export interface CommonRangeProps
  extends Omit<
    PickerProps,
    "onChange" | "defaultValue" | "onOk" | "defaultPickerValue" | "onSelect"
  > {
  disabled?: boolean | boolean[]
  format?: string | ((value: Dayjs) => string)
  onChange?: (dateString: string[], date: Dayjs[]) => void
  onSelect?: (dateString: string[], date: Dayjs[]) => void
  defaultValue?: CalendarValue[]
  value?: CalendarValue[]
  mode?: RangePickerMode
  showTime?: boolean | RangePickerProps
  placeholder?: string[]
  timepickerProps?: RangePickerProps
  onOk?: (dateString: string[], date: Dayjs[]) => void
  disabledTime?: (current: Dayjs, type: "start" | "end") => DisabledTimeProps
  defaultPickerValue?: CalendarValue[]
}

export interface CommonSingleProps extends DatePickerProps {
  type: "day" | "month" | "year"
}

export interface CommonPickerProps extends PickerProps {
  pickerContent: ReactNode
  size?: PickerSize
  inputVal?: string
  onClearDate?: () => void
  onChangeInputVal?: (value: string) => void
  onChangeVisible?: (visible: boolean) => void
}

export interface PickerContextProps {
  inputVal?: string
}

export interface RangePickerBodyProps extends CommonRangeProps {
  pickerContent: ReactNode
  inputVal?: string[]
  onClearDate?: () => void
  onChangeInputVal?: (value: string[]) => void
  onChangeVisible?: (visible: boolean) => void
}
