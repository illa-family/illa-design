import usePrevious from "./usePrevious"
import { CountProps } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { applyBadgeNumberOrText, applyBadgeScale } from "./style"

const defaultColor = globalColor(`--${illaPrefix}-red-03`)
export function Count(props: CountProps) {
  const {
    count,
    color = defaultColor,
    hasChildren = false,
    ...restProps
  } = props
  const oldCount = usePrevious(count)
  const isChanged = count !== oldCount

  return (
    <span
      className={applyBadgeNumberOrText(
        color,
        hasChildren,
        (count as string).length,
      )}
      {...restProps}
    >
      <span key={count as React.Key} className={applyBadgeScale(isChanged)}>
        {count}
      </span>
    </span>
  )
}
