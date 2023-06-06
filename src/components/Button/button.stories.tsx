import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    btnType: "primary",
    children: "primary",
  },
};

export const Default: Story = {
  args: {
    btnType: "default",
    children: "default",
  },
};

export const Danger: Story = {
  args: {
    btnType: "danger",
    children: "danger",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "disabled",
  },
};

export const Link: Story = {
  args: {
    btnType: "link",
    href: "www.google.com",
    children: "link",
  },
};

export const Large: Story = {
  args: {
    btnType: "primary",
    size: "lg",
    children: "Large",
  },
};

export const Small: Story = {
  args: {
    btnType: "primary",
    size: "sm",
    children: "Small",
  },
};
