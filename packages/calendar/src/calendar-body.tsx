import { FC, Fragment, useCallback, useEffect, useMemo, useState } from "react"
import { CalendarBodyProps } from "./interface"
import {
  bodyCoverCss,
  blockPaddingCss,
  panelPaddingCss,
  twelveMonthsContainer,
  panelMonthContainerCss,
  weekTitleCss,
  panelMonthTextCss,
  dayBodyCss,
  dayModeTodayButton,
  panelGridCss,
  monthBlockCss,
  applyPanelGridItemCss,
  bodyContentCss,
} from "./styles"
import { CalendarDays } from "./calendar-days"
import dayjs from "dayjs"

export const CalendarBody: FC<CalendarBodyProps> = (props) => {
  const {
    allowSelect,
    panel,
    panelTodayBtn,
    dayStartOfWeek,
    mode,
    disabledDate,
    onChange,
    dateRender,
    monthRender,
    dateInnerContent,
    currentDay,
    selectDay,
    onClickDay,
    onToToday,
    locale,
    monthListLocale,
    rangeValueFirst,
    rangeValueSecond,
    rangeValueHover,
    handleRangeVal,
    isTodayTarget,
  } = props

  // start of month data
  const currentYear = useMemo(() => {
    return currentDay.year()
  }, [currentDay])
  const currentMonth = useMemo(() => {
    return currentDay.month()
  }, [currentDay])

  // month | year mode select value
  const [cmptSelectYear, setCmptSelectYear] = useState<number>()
  const [cmptSelectMonth, setCmptSelectMonth] = useState<number>()

  const showPanelMode = panel || mode === "year"
  // week text
  let weekTitleText = [
    locale?.Sunday,
    locale?.Monday,
    locale?.Tuesday,
    locale?.Wednesday,
    locale?.Thursday,
    locale?.Friday,
    locale?.Saturday,
  ]
  if (dayStartOfWeek === 1) {
    // start with monday
    weekTitleText.push(weekTitleText.shift() as string)
  }

  const clickCmptItem = (value: number, type: "month" | "year") => {
    if (type === "month") {
      !cmptSelectYear && setCmptSelectYear(currentYear)
      setCmptSelectMonth(value)
      onChange?.(dayjs(`${currentYear}-${value + 1}-1`))
    } else if (type === "year") {
      setCmptSelectYear(value)
      onChange?.(dayjs(`${value}-${currentMonth}-1`))
    }
  }

  // week title ele
  const WeekTitleContent = useCallback(() => {
    return (
      <div css={weekTitleCss}>
        {weekTitleText.map((item, key) => {
          return (
            <div
              css={showPanelMode ? panelPaddingCss : blockPaddingCss}
              key={key}
            >
              {item}
            </div>
          )
        })}
      </div>
    )
  }, [weekTitleText])

  return (
    <div css={bodyContentCss}>
      {!allowSelect && <div css={bodyCoverCss} />}
      {mode === "month" &&
        (panel ? (
          <div css={panelGridCss}>
            {monthListLocale.map((item, idx) => (
              <div
                onClick={() => clickCmptItem(idx, "month")}
                css={monthBlockCss}
                key={idx}
              >
                <div
                  css={applyPanelGridItemCss(
                    currentYear === cmptSelectYear && idx === cmptSelectMonth,
                  )}
                >
                  {monthRender ? monthRender(dayjs().set("month", idx)) : item}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Fragment>
            <WeekTitleContent />
            <CalendarDays
              componentYear={currentYear}
              componentMonth={currentMonth}
              componentMode={false}
              dayStartOfWeek={dayStartOfWeek}
              selectDay={selectDay}
              onClickDay={onClickDay}
              disabledDate={disabledDate}
              dateRender={dateRender}
              dateInnerContent={dateInnerContent}
            />
          </Fragment>
        ))}
      {mode === "year" &&
        (panel ? (
          <div css={panelGridCss}>
            {new Array(12)
              .fill(1)
              .map((item, idx) => {
                return currentYear - 10 + idx
              })
              .map((yItem: any) => (
                <div
                  key={yItem}
                  css={applyPanelGridItemCss(yItem === cmptSelectYear)}
                  onClick={() => clickCmptItem(yItem, "year")}
                >
                  {yItem}
                </div>
              ))}
          </div>
        ) : (
          <div css={twelveMonthsContainer}>
            {new Array(12)
              .fill(1)
              .map((arrItem, arrIndex) => arrIndex)
              .map((item) => {
                return (
                  <div css={panelMonthContainerCss} key={item}>
                    <div css={panelMonthTextCss}>{item + 1}???</div>
                    <WeekTitleContent />
                    <CalendarDays
                      componentYear={currentYear}
                      componentMonth={+item}
                      componentMode={true}
                      dayStartOfWeek={dayStartOfWeek}
                      selectDay={selectDay}
                      onClickDay={onClickDay}
                      disabledDate={disabledDate}
                      dateRender={dateRender}
                      dateInnerContent={dateInnerContent}
                    />
                  </div>
                )
              })}
          </div>
        ))}
      {mode === "day" && (
        <Fragment>
          <div css={dayBodyCss}>
            <WeekTitleContent />
            <CalendarDays
              componentYear={currentYear}
              componentMonth={currentMonth}
              componentMode={true}
              dayStartOfWeek={dayStartOfWeek}
              selectDay={selectDay}
              onClickDay={onClickDay}
              disabledDate={disabledDate}
              dateRender={dateRender}
              rangeValueFirst={rangeValueFirst}
              rangeValueSecond={rangeValueSecond}
              rangeValueHover={rangeValueHover}
              handleRangeVal={handleRangeVal}
              isTodayTarget={isTodayTarget}
            />
          </div>
          {panelTodayBtn && (
            <div css={dayModeTodayButton} onClick={() => onToToday()}>
              Today
            </div>
          )}
        </Fragment>
      )}
    </div>
  )
}
