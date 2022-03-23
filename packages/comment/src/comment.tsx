import { forwardRef } from "react"
import { CommentProps } from "./interface"
import {
  applyActionCss,
  applyAuthorDatetimeContainer,
  authorTextCss,
  childrenCss,
  commentContainerCss,
  contentContainerCss,
  contentCss,
  dateTimeTextCss,
  singleCommentContainerCss,
} from "./style"
import { cx } from "@emotion/css"

export const Comment = forwardRef<HTMLDivElement, CommentProps>(
  (props, ref) => {
    const {
      placeholder,
      avatar,
      actions,
      author,
      datetime,
      children,
      content,
      className,
      align,
      ...rest
    } = props

    let dateTimeAlign
    let actionAlign
    if (typeof align === "object") {
      dateTimeAlign = align?.datetime ?? "left"
      actionAlign = align?.actions ?? "left"
    } else {
      dateTimeAlign = align ?? "left"
      actionAlign = align ?? "left"
    }
    return (
      <div
        placeholder={placeholder}
        ref={ref}
        className={cx(commentContainerCss, className)}
        {...rest}
      >
        <div className={singleCommentContainerCss}>
          <span>{avatar}</span>
          <div className={contentContainerCss}>
            <div className={applyAuthorDatetimeContainer(dateTimeAlign)}>
              <span className={authorTextCss}> {author}</span>
              <span className={dateTimeTextCss}>{datetime}</span>
            </div>
            <span className={contentCss}>{content}</span>
            <span className={applyActionCss(actionAlign)}> {actions}</span>
          </div>
        </div>
        <div className={childrenCss}>{children}</div>
      </div>
    )
  },
)

Comment.displayName = "Comment"
