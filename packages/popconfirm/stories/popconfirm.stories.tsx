import { Meta, Story } from "@storybook/react"
import { PopConfirm, PopconfirmProps } from "../src"
import { Button } from "@illa-design/button"

//👇 This default export determines where your story goes in the story list
export default {
  title: "FEEDBACK/PopConfirm",
  component: PopConfirm,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

export const Basic: Story<PopconfirmProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <PopConfirm {...args}>
      <Button>Click</Button>
    </PopConfirm>
  </div>
)
