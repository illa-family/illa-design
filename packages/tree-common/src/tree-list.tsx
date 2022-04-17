import { FC } from "react"
import { TreeListProps, NodeInstance, NodeProps } from "./interface"
import { TreeNode } from "./tree-node"
import { List } from "../../list/src/index"
import { listCss } from "./style"
import { motion, AnimatePresence } from "framer-motion"

const item = {
  hidden: { height: 0 },
  visible: {
    height: "auto",
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
}

const DemoList = (props: any) => {
  const {
    listData = [],
    saveNodeCache,
    checkable,
    loadingMoreKeys,
    ...rest
  } = props
  return (
    <>
      {listData.map((data: any) => (
        <motion.div
          variants={item}
          animate={"visible"}
          exit={"exit"}
          initial={"hidden"}
          key={data.key}
          transition={{ duration: 0.8 }}
          // layout
          onAnimationComplete={(definition) => {
            if (definition === "exit") {
              console.log("exit")
            }
          }}
        >
          <TreeNode
            loadingMore={loadingMoreKeys && loadingMoreKeys.has(data.key)}
            _key={data.key}
            expanding={data?.expanding}
            {...data}
            checkable={data.checkable !== false && checkable}
            {...rest}
          />
        </motion.div>
      ))}
    </>
  )
}

export const TreeList: FC<TreeListProps> = (props) => {
  const {
    listData = [],
    saveNodeCache,
    checkable,
    loadingMoreKeys,
    ...rest
  } = props

  return (
    <div role={"wrapper"}>
      {/*      <List
        _css={listCss}
        data={listData}
        render={(data: NodeProps) => {
          let node: NodeInstance = (
            <AnimatePresence>
              {data.expanding && (
                <motion.div
                  variants={item}
                  animate={"visible"}
                  exit={"exit"}
                  initial={"hidden"}
                  key={data.key}
                  transition={{ duration: 0.8 }}
                  // layout
                  onAnimationComplete={(definition) => {
                    if (definition === "exit") {
                      console.log("exit")
                    }
                  }}
                >
                  <TreeNode
                    loadingMore={
                      loadingMoreKeys && loadingMoreKeys.has(data.key)
                    }
                    _key={data.key}
                    expanding={data?.expanding}
                    {...data}
                    checkable={data.checkable !== false && checkable}
                    {...rest}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )
          saveNodeCache && saveNodeCache(data.key, node)
          return node
        }}
        renderRaw={true}
        bordered={false}
        renderKey={(data, index) => {
          return data.key
        }}
      />*/}
      <AnimatePresence initial={false}>
        {/*        {listData.map((data) => (
          <motion.div
            variants={item}
            animate={"visible"}
            exit={"exit"}
            initial={"hidden"}
            key={data.key}
            transition={{ duration: 0.8 }}
            // layout
            onAnimationComplete={(definition) => {
              if (definition === "exit") {
                console.log("exit")
              }
            }}
          >
            <TreeNode
              loadingMore={loadingMoreKeys && loadingMoreKeys.has(data.key)}
              _key={data.key}
              expanding={data?.expanding}
              {...data}
              checkable={data.checkable !== false && checkable}
              {...rest}
            />
          </motion.div>
        ))}*/}
        <DemoList
          key={"Demo"}
          saveNodeCache={saveNodeCache}
          listData={listData}
          checkable={checkable}
          loadingMoreKeys={loadingMoreKeys}
          {...rest}
        />
      </AnimatePresence>
    </div>
  )
}
