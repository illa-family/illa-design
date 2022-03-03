/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useEffect, useMemo, useRef, useState } from "react"
import { UploadItem, UploadProps, UploadRefType } from "./interface"
import { UploadElement } from "./upload-element"
import { fileListContainerCss, uploadContainerCss } from "./styles"
import { FileListTextItem } from "./file-list-text-item"
import { FileListPicItem } from "./file-list-pic-item"
import { List } from "@illa-design/list"

const isFunction = (obj?: object) => typeof obj === "function"

export const Upload = forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
  const {
    listType = "text",
    showUploadList = true,
    fileList,
    defaultFileList,
    customRequest,
    onChange,
    onReupload,
    onRemove,
    disabled,
    onProgress,
    pictureUpload,
    ...rest
  } = props

  const processFile = (
    fileList?: UploadItem[],
  ): { [key: string]: UploadItem } => {
    const res: { [key: string]: UploadItem } = {}
    const isArray = Object.prototype.toString.call(fileList) == "[object Array]"
    if (!isArray) return {}
    fileList?.forEach((file, index) => {
      if (file.uid) {
        res[file.uid] = {
          ...file,
          status: "done",
          percent: 100,
        }
      } else {
        const uid = `${String(new Date())}+${index}`
        res[uid] = {
          ...file,
          uid,
          status: "done",
          percent: 100,
        }
      }
    })
    return res
  }

  const uploaderRef = useRef<UploadRefType>({} as UploadRefType)
  const uploadState = useRef<{ [key: string]: UploadItem }>({})
  const [innerUploadState, setInnerUploadState] = useState<{
    [key: string]: UploadItem
  }>(fileList ? processFile(fileList) : processFile(defaultFileList))
  const hasUploadedSet = new Set<string>()

  uploadState.current = fileList ? processFile(fileList) : innerUploadState

  const getFileList = (
    obj?: { [key: string]: UploadItem },
    source?: string,
  ): UploadItem[] => {
    if (!obj || !uploadState) return []
    return Object.keys(obj).map((x) => obj[x as keyof UploadItem])
  }

  const _fileList = useMemo(() => {
    return getFileList(uploadState.current, "useMemo")
  }, [innerUploadState])

  const deleteUpload = (file: UploadItem) => {
    if (file) {
      Promise.resolve(
        onRemove && isFunction(onRemove) ? onRemove(file, _fileList) : onRemove,
      ).then((value) => {
        if (value !== false) {
          const obj = { ...uploadState.current }
          file.uid && delete obj[file.uid]
          if (!fileList) {
            setInnerUploadState(obj)
          }
          uploaderRef.current && uploaderRef.current.deleteUpload(file)
        }
      })
    }
  }

  const reUploadFile = (file: UploadItem) => {
    uploaderRef.current && uploaderRef.current.reUpload(file)
    onReupload && onReupload(file)
  }

  const updateFileList = (file?: UploadItem, e?: ProgressEvent) => {
    if (!file) return
    const list = getFileList(uploadState.current, "updateFileList")

    const targetFile = list?.find((item) => item["uid"] === file["uid"]) ?? file
    if (!targetFile.uid) return
    setInnerUploadState((v) => {
      return {
        ...v,
        [targetFile.uid ?? ""]: file,
      }
    })
    if (file?.status != "uploading") {
      onChange && onChange(list, file)
    } else if (!hasUploadedSet.has(targetFile?.uid)) {
      onChange && onChange(list, file)
      hasUploadedSet.add(targetFile?.uid)
    }
    if (file?.status === "uploading") {
      onProgress && onProgress(file, e)
    }
  }

  return (
    <div css={uploadContainerCss}>
      <UploadElement
        pictureUpload={pictureUpload}
        updateTargetItem={updateFileList}
        ref={uploaderRef}
        getFileList={() => getFileList(uploadState.current, "element")}
        disabled={disabled}
        customRequest={customRequest}
        {...rest}
      />
      {showUploadList && pictureUpload !== true && (
        <List
          data={getFileList(uploadState.current, "element-list")}
          bordered={false}
          split={false}
          renderRaw={true}
          css={fileListContainerCss}
          render={(item) => {
            return listType === "text" ? (
              <FileListTextItem
                item={item}
                deleteUpload={deleteUpload}
                reUpload={(item) => reUploadFile(item)}
              />
            ) : (
              <FileListPicItem
                item={item}
                deleteUpload={deleteUpload}
                reUpload={(item) => reUploadFile(item)}
              />
            )
          }}
          renderKey={(item) => {
            return item.uid
          }}
        />
      )}
    </div>
  )
})
