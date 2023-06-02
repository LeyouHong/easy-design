import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select from "./index";

export default {
  title: "Select",
  id: "Select",
  component: Select,
  subcomponents: { Option: Select.Option },
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args} placeholder="please select">
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="disabled" disabled />
    <Select.Option value="nihao5" />
  </Select>
);

export const ADefaultSelect = Template.bind({});
ADefaultSelect.storyName = "default Select";

export const BMultipleSelect = Template.bind({});
BMultipleSelect.args = {
  multiple: true,
};
BMultipleSelect.storyName = "Multiple Select";

export const CDisabledSelect = Template.bind({});
CDisabledSelect.args = {
  disabled: true,
};
CDisabledSelect.storyName = "Disabled Select";
