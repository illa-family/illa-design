import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Modal, ModalProps } from "../src"
import { Space } from "@illa-design/space"
import { Button } from "@illa-design/button"
import { Input } from "@illa-design/input"
import { Message } from "@illa-design/message"
import { InfoCircleIcon, SuccessIcon } from "@illa-design/icon"

import { ConfigProvider, zhCN, enUS } from "@illa-design/config-provider"

export default {
  title: "FEEDBACK/Modal",
  component: Modal,
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [locale, setLocale] = React.useState(zhCN)
  const ConfigContext = React.createContext({})
  const [modal, contextHolder] = Modal.useModal()
  const sleep = async (time: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
  function onOk() {
    Promise.resolve().then((res) => {
      setConfirmLoading(true)
      setTimeout(() => {
        Message.success("Success !")
        setVisible(false)
        setConfirmLoading(false)
      }, 1500)
    })
  }
  return (
    <Space size={"large"}>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        Open Modal
      </Button>
      <ConfigProvider locale={locale}>
        <Modal
          {...args}
          visible={visible}
          confirmLoading={confirmLoading}
          onCancel={() => setVisible(false)}
          onOk={onOk}
          afterClose={() => console.log("close")}
          afterOpen={() => console.log("open")}
        >
          I don't know if we each have a destiny, or if we're all just floating
          around accidentally―like on a breeze.
        </Modal>
      </ConfigProvider>

      <ConfigContext.Provider value="Jarvey">
        {contextHolder}
        <Space size={"large"} direction={"vertical"}>
          <Space>
            <Button onClick={() => setLocale(zhCN)}>zhCN</Button>
            <Button onClick={() => setLocale(enUS)}>enUS</Button>
          </Space>
          <Button
            onClick={() =>
              modal.info({
                content: (
                  <ConfigContext.Consumer>
                    {(name) => `Current user: ${name}`}
                  </ConfigContext.Consumer>
                ),
                title: "Context",
              })
            }
          >
            Get context
          </Button>
          <Button
            onClick={() =>
              Modal.confirm({ content: <Input />, title: "Confirm" })
            }
          >
            Confirm
          </Button>
          <Button onClick={() => Modal.warning({ title: "Warning" })}>
            Warning
          </Button>
          <Button
            onClick={async () => {
              const modalIns = Modal.confirm({
                title: "Submitting...",
                icon: <InfoCircleIcon />,
                content: <span>This modal will be successful after 1.5s.</span>,
                footer: false,
                isNotice: true,
                noticeType: "info",
              })

              await sleep(1500)

              modalIns.update({
                icon: <SuccessIcon />,
                title: "Success",
                content: "This modal will be closed after 1.5s.",
                noticeType: "success",
              })

              await sleep(1500)

              modalIns.close()
            }}
          >
            Update & Remove
          </Button>
        </Space>
      </ConfigContext.Provider>
    </Space>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Modal Title",
}
