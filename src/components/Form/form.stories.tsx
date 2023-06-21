import React from "react";
import { Meta } from "@storybook/react";
import Form from "./form";
import Item from "./formItem";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

export default {
  title: "Form",
  id: "Form",
  component: Form,
  subcomponents: { Item: Item },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "550px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const ABasicForm = () => {
  return (
    <Form initialValues={{ username: "leo", agreement: true }}>
      <Item
        label="username"
        name="username"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Item>
      <Item
        label="password"
        name="password"
        rules={[{ type: "string", required: true, min: 3, max: 8 }]}
      >
        <Input type="password" />
      </Item>
      <div
        className="agreement-section"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Item
          name="agreement"
          valuePropName="checked"
          getValueFromEvent={(e) => e.target.checked}
        >
          <input type="checkbox" />
        </Item>
        <span className="agree-text">
          Click to agree<a href="www.google.com">User Agreement</a>
        </span>
      </div>
      <div className="easy-from-submit-area">
        <Button type="submit" btnType="primary">
          login
        </Button>
      </div>
    </Form>
  );
};

ABasicForm.storyName = "Basic Form";

export const BRegForm = (args) => {
  const initialValues = {
    agreement: false,
  };
  return (
    <Form {...args} initialValues={initialValues}>
      <Item
        label="email"
        name="email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Item>
      <Item
        label="password"
        name="password"
        rules={[{ type: "string", required: true, min: 3, max: 8 }]}
      >
        <Input type="password" />
      </Item>
      <Item
        label="gender"
        name="gender"
        rules={[{ type: "string", required: true }]}
        getValueFromEvent={(e) => e}
        valuePropName="defaultValue"
      >
        <Select placeholder="please select gender">
          <Select.Option value="male" />
          <Select.Option value="female" />
        </Select>
      </Item>
      <div
        className="agreement-section"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Item
          name="agreement"
          rules={[{ type: "enum", enum: [true], message: "please agree" }]}
          getValueFromEvent={(e) => e.target.checked}
          valuePropName="checked"
        >
          <input type="checkbox" />
        </Item>
        <span className="agree-text">
          Register to agree&nbsp;<a href="www.google.com">User Agreement</a>
        </span>
      </div>
      <div className="easy-form-submit-area">
        <Button type="submit" btnType="primary">
          login
        </Button>
      </div>
    </Form>
  );
};

BRegForm.storyName = "Support multiple component";
