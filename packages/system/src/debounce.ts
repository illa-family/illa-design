export function debounce(func: () => void, wait: number, immediate?: boolean) {
  let timeout: NodeJS.Timeout | null
  return function (this: any, ...args: any) {
    const context = this
    const later = function () {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
}
