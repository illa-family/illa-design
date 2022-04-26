import { css } from "@emotion/react"
import { Meta, Story } from "@storybook/react"
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import { BackTop, BackTopProps } from "../src"

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Ultricies integer quis auctor elit sed vulputate mi sit amet. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Facilisi etiam dignissim diam quis enim lobortis. Semper risus in hendrerit gravida rutrum quisque non tellus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. In eu mi bibendum neque egestas congue quisque egestas. Sodales ut etiam sit amet nisl purus in mollis.`

const loremIpsumArticle = new Array(30)
  .fill(0)
  .map(() => loremIpsum)
  .join("\n\n")

export default {
  title: "OTHERS/BackTop",
  component: BackTop,
  decorators: [
    (Story) => (
      <>
        <Story />
        <div
          css={css`
            white-space: pre-wrap;
          `}
        >
          {loremIpsumArticle}
        </div>
      </>
    ),
  ],
} as Meta

const Template: Story<BackTopProps> = (args) => <BackTop {...args} />

export const Basic = Template.bind({})
Basic.args = {}

export const Easing = Template.bind({})
Easing.args = { easing: "bounceOut", duration: 1000 }

export const CustomIcon = (args: BackTopProps) => (
  <BackTop {...args}>
    <BsFillArrowUpCircleFill />
  </BackTop>
)
CustomIcon.args = {}

export const OtherTarget = (args) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <BackTop
        target={() => document.getElementById("target")}
        style={{ position: "absolute" }}
        {...args}
      ></BackTop>
      <div
        id="target"
        css={css`
          height: 300px;
          overflow: auto;
        `}
      >
        {loremIpsumArticle}
      </div>
    </div>
  )
}
OtherTarget.args = {}
