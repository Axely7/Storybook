import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
  },
  tags: ["autodocs"],
} as Meta<typeof MyLabel>;

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  AllCaps: false,
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  size: "normal",
  AllCaps: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  size: "h1",
  fontColor: "#5517ac",
};

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args = {
  size: "h1",
  fontColor: "white",
  backgroundColor: "black",
};

// CustomFontColor
// fontColor: #5517ac
// size: h1
