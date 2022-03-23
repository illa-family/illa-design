import { DeleteIcon, SuccessIcon } from "@illa-design/icon"
import { deleteIconCss, rightIconCss, tryTextCss } from "./styles"
import { Progress } from "@illa-design/progress"

import { UploadItem, UploadStatus } from "./interface"

export const getRightIcon = (
  statusStr: UploadStatus,
  item: UploadItem,
  percent?: number,
  reUpload?: (file: UploadItem) => void,
) => {
  let rightView
  switch (statusStr) {
    case "done":
      rightView = <SuccessIcon className={rightIconCss} />
      break
    case "error":
      rightView = (
        <span
          className={tryTextCss}
          onClick={() => {
            reUpload && reUpload(item)
          }}
        >
          Click to retry
        </span>
      )
      break
    default:
      rightView = (
        <Progress
          className={rightIconCss}
          type="miniCircle"
          percent={percent}
        />
      )
  }
  return rightView
}

export const getDeleteButton = (
  item: UploadItem,
  deleteEvent?: (item: UploadItem) => void,
) => {
  return (
    <DeleteIcon
      onClick={() => {
        deleteEvent && deleteEvent(item)
      }}
      className={deleteIconCss}
    />
  )
}
