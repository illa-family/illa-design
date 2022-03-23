import { forwardRef, HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { Tag } from "@illa-design/tag"
import { ObjectValueType, RenderTagsProps } from "./interface"
import { tagStyle } from "./style"
import { css } from "@emotion/css"

export const RenderTags = forwardRef<HTMLElement, RenderTagsProps>(
  (props, ref) => {
    const {
      value,
      size = "medium",
      disabled,
      readOnly,
      // events
      onRemove,
      valueChangeHandler,
    } = props

    const tagCloseHandler = (itemValue: ObjectValueType, index: number) => {
      onRemove?.(itemValue, index)
      valueChangeHandler?.([
        ...value?.slice(0, index),
        ...value?.slice(index + 1),
      ])
    }

    return (
      <>
        {value?.map((item, index) => {
          const { value: itemValue, label } = item
          const closable = !readOnly && !disabled && item.closable !== false
          return (
            <motion.div
              className={css`
                display: inline-grid;
              `}
              initial="initial"
              animate={"show"}
              exit={"hidden"}
              key={index}
            >
              <Tag
                className={tagStyle}
                visible
                size={size}
                closable={closable}
                onClose={() => {
                  tagCloseHandler(item, index)
                }}
              >
                <span>
                  {typeof label === "string"
                    ? label.replace(/\s/g, "\u00A0")
                    : label}
                </span>
              </Tag>
            </motion.div>
          )
        })}
      </>
    )
  },
)

RenderTags.displayName = "RenderTags"
