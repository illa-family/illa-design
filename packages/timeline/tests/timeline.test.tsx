import "@testing-library/jest-dom"
import { Timeline, TimelineItem } from "../src"
import { render, screen, within } from "@testing-library/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("vertical Timeline", () => {
  render(
    <Timeline>
      <TimelineItem>The first milestone</TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("The first milestone")).toBeInTheDocument()
  render(
    <Timeline mode={"right"}>
      <TimelineItem>The right mode text</TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("The right mode text")).toHaveStyle({
    textAlign: "right",
  })
  render(
    <Timeline mode={"alternate"}>
      <TimelineItem>The alternate mode left text</TimelineItem>
      <TimelineItem>The alternate mode right text</TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("The alternate mode left text")).toHaveStyle({
    left: "50%",
  })
  expect(screen.getByText("The alternate mode right text")).toHaveStyle({
    textAlign: "right",
  })
})

test("horizontal Timeline", () => {
  render(
    <Timeline direction={"horizontal"} mode={"top"}>
      <TimelineItem>The horizontal & top line</TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("The horizontal & top line")).toBeInTheDocument()
  render(
    <Timeline direction={"horizontal"} mode={"bottom"}>
      <TimelineItem>The horizontal & bottom line</TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("The horizontal & bottom line")).toBeInTheDocument()
  render(
    <Timeline direction={"horizontal"} mode={"alternate"}>
      <TimelineItem>The first milestone</TimelineItem>
      <TimelineItem>The second milestone</TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("The second milestone")).toHaveStyle({
    "margin-top": "16px",
  })
})

test("reverse Timeline", () => {
  render(
    <Timeline reverse={true} data-testid="wrap">
      <TimelineItem>
        <div data-testid="child">first</div>
      </TimelineItem>
      <TimelineItem>
        <div data-testid="child">second</div>
      </TimelineItem>
    </Timeline>,
  )

  const test = within(screen.getByTestId("wrap")).getAllByTestId("child")[0]
    .firstChild
  expect(test).toHaveTextContent("second")
})

test("label & relative position", () => {
  render(
    <Timeline>
      <TimelineItem label={"test label"} autoFixDotSize={true}></TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("test label")).toBeInTheDocument()
  expect(screen.getByText("test label")).toHaveStyle({
    "font-size": "14px",
  })

  render(
    <Timeline mode={"alternate"} direction={"horizontal"}>
      <TimelineItem></TimelineItem>
      <TimelineItem data-testid={"relative target"} labelPosition={"relative"}>
        target line
      </TimelineItem>
      <TimelineItem></TimelineItem>
    </Timeline>,
  )
  expect(screen.getByTestId("relative target").lastChild).toHaveStyle({
    "margin-bottom": "16px",
  })
})

test("pending & pendingDot", () => {
  render(
    <Timeline pending={true}>
      <TimelineItem></TimelineItem>
    </Timeline>,
  )
  expect(screen.getByTitle("LoadingIcon")).toBeInTheDocument()
  render(
    <Timeline pending={true} pendingDot={<div>dot</div>}>
      <TimelineItem></TimelineItem>
    </Timeline>,
  )
  expect(screen.getByText("dot")).toBeInTheDocument()
})

test("custom dot & line style", () => {
  // dot
  render(
    <Timeline>
      <TimelineItem data-testid="test dotColor" dotColor={"#ccc"} />
    </Timeline>,
  )
  expect(
    screen.getByTestId("test dotColor").firstChild?.lastChild?.lastChild,
  ).toHaveStyle({
    "background-color": "#ccc",
  })
  render(
    <Timeline>
      <TimelineItem
        data-testid="test dotType"
        dotColor={"#ddd"}
        dotType={"hollow"}
      />
    </Timeline>,
  )
  expect(
    screen.getByTestId("test dotType").firstChild?.lastChild?.firstChild,
  ).toHaveStyle({
    border: "1px solid #ddd",
  })

  // line
  render(
    <Timeline pending>
      <TimelineItem
        data-testid="test lineColor"
        lineColor={"#abcdef"}
      ></TimelineItem>
    </Timeline>,
  )
  expect(
    screen.getByTestId("test lineColor").firstChild?.firstChild,
  ).toHaveStyle({
    "border-left": "1px solid #abcdef",
  })

  render(
    <Timeline pending>
      <TimelineItem
        data-testid="test lineType"
        lineType={"dashed"}
      ></TimelineItem>
    </Timeline>,
  )
  expect(
    screen.getByTestId("test lineType").firstChild?.firstChild,
  ).toHaveStyle({
    "border-left": `1px dashed ${globalColor(`--${illaPrefix}-grayBlue-08`)}`,
  })
})
