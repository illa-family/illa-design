import { forwardRef, useMemo, useRef, useEffect, MouseEvent } from "react"
import { NoticeProps } from "./interface"
import {
  applyNotification,
  applyNotificationTitle,
  applyNotificationAction,
  applyNotificationContent,
  applyNotificationCloseBtn,
  applyNotificationContentWrapper,
  applyNotificationIcon,
  applyMessage,
  applyMessageIcon,
  applyMessageContent,
  applyMessageCloseBtn,
} from "./style"
import {
  RightIcon,
  ErrorIcon,
  WarningCircleIcon,
  CloseIcon,
  InfoCircleIcon,
  LoadingIcon,
} from "@illa-design/icon"
import { AlertType } from "@illa-design/alert"
import { Notification } from "./notification"
const iconMap = {
  info: <InfoCircleIcon />,
  success: <RightIcon />,
  warning: <WarningCircleIcon />,
  error: <ErrorIcon />,
  loading: <LoadingIcon spin={true} />,
  normal: void 0,
}

export const Notice = forwardRef<HTMLDivElement, NoticeProps>((props, ref) => {
  const {
    title,
    action,
    closable = false,
    type = "info",
    noticeType = "Notification",
    content,
    icon,
    showIcon = true,
    closeElement,
    duration = 3000,
    position = "topLeft",
    id,
    onMouseEnter,
    onMouseLeave,
    onClose,
    afterClose,
    update,
    removeHook,
    ...restProps
  } = props
  const timerRef = useRef<number | undefined>(undefined)
  useEffect(() => {
    startTimer()
    return () => {
      removeTimer()
    }
  }, [update, duration])
  const handleClose = () => {
    onClose && onClose()
    removeHook && removeHook(id as string)
  }
  const removeTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = void 0
    }
  }
  const startTimer = () => {
    if (duration > 0) {
      timerRef.current = window.setTimeout(() => {
        handleClose()
        removeTimer()
      }, duration)
    }
  }

  const renderIcon = useMemo(() => {
    return icon ? icon : iconMap[type]
  }, [icon, type])

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    onMouseEnter && onMouseEnter(event)
    removeTimer()
  }
  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    onMouseLeave && onMouseLeave(event)
    startTimer()
  }

  if (noticeType === "Message") {
    return (
      <div
        className={applyMessage(closable)}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...restProps}
      >
        {showIcon && renderIcon && (
          <span className={applyMessageIcon(type)}>{renderIcon}</span>
        )}
        <span className={applyMessageContent()}>{content}</span>
        {closable && (
          <span className={applyMessageCloseBtn()} onClick={handleClose}>
            {closeElement || <CloseIcon />}
          </span>
        )}
      </div>
    )
  }
  return (
    <div
      className={applyNotification()}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {showIcon && renderIcon && (
        <div className={applyNotificationIcon(type as AlertType)}>
          {renderIcon}
        </div>
      )}
      <div className={applyNotificationContentWrapper()}>
        {title && <div className={applyNotificationTitle()}>{title}</div>}
        <div className={applyNotificationContent(!!title)}>{content}</div>
        {action && <div className={applyNotificationAction()}>{action}</div>}
      </div>
      {closable && (
        <div className={applyNotificationCloseBtn()} onClick={handleClose}>
          {closeElement || <CloseIcon />}
        </div>
      )}
    </div>
  )
})

Notice.displayName = "Notice"
