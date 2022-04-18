import "@testing-library/jest-dom"
import { Calendar, CalendarDays } from "../src"
import { render, screen, fireEvent } from "@testing-library/react"
import dayjs from "dayjs"
import { globalColor, illaPrefix } from "@illa-design/theme"

const curDay = dayjs().date()
const curMonth = dayjs().month()
const curYear = dayjs().year()

const monthListLocale = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

test("base Calendar", () => {
  render(<Calendar />)
  render(
    <CalendarDays
      data-testid="base days cmpt"
      componentMode={false}
      componentMonth={curMonth}
    />,
  )
  expect(
    screen.getByText(`${curYear} ${monthListLocale[curMonth]}`),
  ).toBeInTheDocument()
  expect(screen.getByTestId("base days cmpt").childNodes.length).toBe(42)

  render(<Calendar data-testid="year container" mode="year" />)
  expect(screen.getByText(`${curYear}`)).toBeInTheDocument()
  expect(
    screen.getByTestId("year container").children[1].children[0].children
      .length,
  ).toBe(12)
})

test("panel Calendar", () => {
  render(<Calendar data-testid="panel & day" panel={true} mode={"day"} />)
  expect(screen.getByTestId("panel & day")).toHaveStyle({
    display: "inline-block",
  })
  expect(
    screen.getByText(`${curYear} ${monthListLocale[curMonth]}`),
  ).toBeInTheDocument()
  expect(screen.getByText("Sun")).toBeInTheDocument()

  render(<Calendar data-testid="panel & month" panel={true} mode={"month"} />)
  expect(screen.getByText(`${curYear}`)).toBeInTheDocument()
  expect(
    screen.getByTestId("panel & month").children[1].children[0].children.length,
  ).toBe(12)

  render(<Calendar data-testid="panel & year" panel={true} mode={"year"} />)
  expect(screen.getByText(`${curYear - 10}-${curYear}`)).toBeInTheDocument()
  expect(
    screen.getByTestId("panel & year").children[1].children[0].children.length,
  ).toBe(12)
})

test("calendar callback", () => {
  render(<Calendar data-testid={"calendar wrap"} />)
  fireEvent.click(screen.getByTitle("PreIcon"))
  let result
  if (curMonth === 0) {
    result = `${curYear - 1} December}`
  } else {
    result = `${curYear} ${monthListLocale[curMonth - 1]}`
  }
  expect(screen.getByText(result)).toBeInTheDocument()
  render(<Calendar mode={"year"} />)
  fireEvent.click(screen.getAllByTitle("PreIcon")[1])
  expect(screen.getByText(curYear - 1)).toBeInTheDocument()
  render(<Calendar mode={"year"} />)
  fireEvent.click(screen.getAllByTitle("NextIcon")[2])
  expect(screen.getByText(curYear + 1)).toBeInTheDocument()
})

test("click one day", () => {
  render(<Calendar />)
  fireEvent.click(screen.getByText(15))
  expect(screen.getByText(15)).toHaveStyle({
    backgroundColor: globalColor(`--${illaPrefix}-blue-03`),
  })
})

test("change mode", () => {
  render(<Calendar data-testid={"container"} />)
  fireEvent.click(screen.getByText("Year"))
  expect(
    screen.getByTestId("container").children[1].children[0].children.length,
  ).toBe(12)
})

test("panel month & year", () => {
  render(<Calendar panel={true} mode={"month"} />)
  fireEvent.click(screen.getByText("January"))
  expect(screen.getByText("January")).toHaveStyle({
    backgroundColor: globalColor(`--${illaPrefix}-blue-03`),
  })

  render(<Calendar panel={true} mode={"year"} />)
  fireEvent.click(screen.getByText("2017"))
  expect(screen.getByText("2017")).toHaveStyle({
    backgroundColor: globalColor(`--${illaPrefix}-blue-03`),
  })
})

test("week start at Monday", () => {
  render(<Calendar data-testid="container" dayStartOfWeek={1} />)
  expect(
    screen.getByTestId("container").children[1].children[0].firstChild
      ?.textContent,
  ).toBe("Mon")
})

test("header type", () => {
  render(<Calendar headerType={"select"} />)
  expect(screen.getByDisplayValue(`${curYear}`)).toBeInTheDocument()
})
