import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Menu from "./index";

export default {
  title: "Menu",
  id: "Menu",
  component: Menu,
  subcomponents: { SubMenu: Menu.SubMenu, Item: Menu.Item },
} as Meta;

const Template: StoryFn<typeof Menu> = (args) => (
  <Menu defaultIndex="0" {...args}>
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item>cool link 2</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="dropdown">
      <Menu.Item>drop1</Menu.Item>
      <Menu.Item>drop2</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
export const ADefaultMenu = Template.bind({});
ADefaultMenu.storyName = "horizontal Menu";

export const BClickMenu = Template.bind({});
BClickMenu.args = {
  defaultIndex: "0",
  mode: "vertical",
};
BClickMenu.storyName = "Vertical Menu";

export const COpenedMenu = Template.bind({});
COpenedMenu.args = {
  defaultIndex: "0",
  mode: "vertical",
  defaultOpenSubMenus: ["2"],
};
COpenedMenu.storyName = "defaultOpen Menu";
