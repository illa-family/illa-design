import { forwardRef, useMemo } from "react"
import { StatisticProps } from "./interface"
import dayjs from "dayjs"

import {
  applyStatistic,
  applyStatisticContent,
  applyStatisticDecorator,
  applyStatisticTitle,
  applyStatisticValue,
} from "./style"
import { isObject } from "@illa-design/system"
import { cx } from "@emotion/css"

export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  (props, ref) => {
    const {
      title,
      value = 0,
      className,
      decimalSeparator = ".",
      format,
      groupSeparator = ",",
      loading,
      precision,
      suffix,
      prefix,
      ...restProps
    } = props
    const renderValue = useMemo(() => {
      if (format) {
        return dayjs(value).format(format)
      }
      let temp: number | string = Number(value)
      if (!isFinite(temp)) {
        return value
      }
      if (precision !== void 0) {
        temp = temp.toFixed(precision)
      }
      let [int, decimal] = String(temp).split(".")
      int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)
      return decimal !== void 0 ? int + decimalSeparator + decimal : int
    }, [format, value, groupSeparator, decimalSeparator, precision])
    return (
      <div className={cx(applyStatistic(), className)} ref={ref} {...restProps}>
        {title && <div className={applyStatisticTitle()}>{title}</div>}
        <div className={applyStatisticContent()}>
          {prefix && (
            <span className={applyStatisticDecorator(true, !isObject(prefix))}>
              {prefix}
            </span>
          )}
          <span className={applyStatisticValue()}>{renderValue}</span>
          {suffix && (
            <span className={applyStatisticDecorator(false, !isObject(suffix))}>
              {suffix}
            </span>
          )}
        </div>
      </div>
    )
  },
)

Statistic.displayName = "Statistic"
