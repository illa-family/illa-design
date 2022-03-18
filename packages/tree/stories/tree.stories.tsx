import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tree, TreeProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tree",
  component: Tree,

  argTypes: {},
} as Meta

const Template: Story<TreeProps> = (args) => {
  return <Tree />
}

export const Basic = Template.bind({})
