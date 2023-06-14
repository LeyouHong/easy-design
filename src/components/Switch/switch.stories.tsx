import type { Meta, StoryFn } from "@storybook/react";
import Switch from "./switch";
import Icon from "../Icon";
import React from "react";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const ADefaultSwitch = Template.bind({});
ADefaultSwitch.storyName = "default switch";

export const BDisabledSwitch = Template.bind({});
BDisabledSwitch.args = {
  checked: true,
  disabled: true,
};
BDisabledSwitch.storyName = "disabled switch";

export const CWithTextSwitch = Template.bind({});
CWithTextSwitch.args = {
  defaultChecked: true,
  size: "lg",
  checkedComponent: "open",
  unCheckedComponent: "close",
};
CWithTextSwitch.storyName = "with text switch ";

export const CWithIconSwitch = Template.bind({});
CWithIconSwitch.args = {
  defaultChecked: true,
  size: "sm",
  checkedComponent: <Icon icon="times" />,
  unCheckedComponent: <Icon icon="search" />,
};
CWithIconSwitch.storyName = "with icon switch ";
