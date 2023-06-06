/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { config } from "react-transition-group";
import { render, screen, fireEvent } from "@testing-library/react";

import Alert, { AlertProps } from "./alert";
config.disabled = true;

jest.mock("../Icon/icon", () => {
  return (props: any) => {
    return <span>{props.icon}</span>;
  };
});

const testProps: AlertProps = {
  title: "title",
  onClose: jest.fn(),
};

const typeProps: AlertProps = {
  ...testProps,
  type: "success",
  description: "hello",
  closable: false,
};
describe("test Alert Component", () => {
  it("should render the correct default Alert", () => {
    const { container } = render(<Alert {...testProps} />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(container.querySelector(".easy-alert")).toHaveClass(
      "easy-alert-default"
    );
    fireEvent.click(screen.getByText("times"));
    expect(testProps.onClose).toHaveBeenCalled();
    expect(screen.queryByText("title")).not.toBeInTheDocument();
  });
  it("should render the correct Alert based on different type and description", () => {
    const { container } = render(<Alert {...typeProps} />);
    expect(screen.getByText("title")).toHaveClass("bold-title");
    expect(container.querySelector(".easy-alert")).toHaveClass(
      "easy-alert-success"
    );
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(screen.queryByText("times")).not.toBeInTheDocument();
  });
});
