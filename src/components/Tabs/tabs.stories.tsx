import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tabs from "./index";

export default {
  title: "Tabs",
  id: "Tabs",
  component: Tabs,
  subcomponents: { Item: Tabs.Item },
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs defaultIndex={0} {...args}>
    <Tabs.Item label="lab1">This is lab1</Tabs.Item>
    <Tabs.Item label="lab2">This is lab2</Tabs.Item>
    <Tabs.Item label="lab3" disabled>
      This is lab3
    </Tabs.Item>
  </Tabs>
);

export const lineTabs = Template.bind({});
lineTabs.storyName = "line tabs";

export const cardTabs = Template.bind({});
cardTabs.args = {
  type: "card",
};
cardTabs.storyName = "card tabs";
