import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Icon from "./icon";

const meta = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Check = Template.bind({});
Check.args = {
  icon: "check",
  size: "3x",
};
Check.storyName = "Check Icon";

export const Times = Template.bind({});
Times.args = {
  icon: "times",
  size: "3x",
};
Times.storyName = "Times Icon";

export const Anchor = Template.bind({});
Anchor.args = {
  icon: "anchor",
  size: "3x",
};
Anchor.storyName = "Anchor Icon";

export const Trash = Template.bind({});
Trash.args = {
  icon: "trash",
  size: "3x",
};
Trash.storyName = "Trash Icon";

export const SpinnerPrimary = Template.bind({});
SpinnerPrimary.args = {
  icon: "spinner",
  size: "3x",
  spin: true,
};
SpinnerPrimary.storyName = "Spinner Primary Icon";

export const SpinnerSuccess = Template.bind({});
SpinnerSuccess.args = {
  icon: "spinner",
  size: "3x",
  pulse: true,
};
SpinnerSuccess.storyName = "Spinner Success Icon";
