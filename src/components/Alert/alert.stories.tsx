import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./alert";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
    title: "success alert",
  },
};

export const Default: Story = {
  args: {
    type: "default",
    title: "default alert",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    title: "danger alert",
  },
};
export const Warning: Story = {
  args: {
    type: "warning",
    title: "warning alert",
  },
};
