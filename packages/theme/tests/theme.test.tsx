import { globalColor, illaPrefix } from "../src"
import "@testing-library/jest-dom"

test("Theme get color", () => {
  expect(globalColor("null")).toBe("")
  expect(globalColor(`--${illaPrefix}-green-01`)).toBe("#007a41")
  expect(globalColor("transparent")).toBe("transparent")
})
