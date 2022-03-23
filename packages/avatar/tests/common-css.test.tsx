import { applyShape } from "../src/style"
import "@testing-library/jest-dom"

test("Common css renders shape", () => {
  expect(applyShape("circle")).toBe("50%")
  expect(applyShape("square")).toBe("4px")
})
