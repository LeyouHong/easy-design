/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { config } from "react-transition-group";
import { render, fireEvent } from "@testing-library/react";

import Select, { SelectProps } from "./select";
import Option from "./option";
config.disabled = true;

// jest.mock("../Icon/icon", () => {
//   return (props: any) => {
//     return <span onClick={props.onClick}>{props.icon}</span>;
//   };
// });

const testProps: SelectProps = {
  defaultValue: "",
  placeholder: "test",
  onChange: jest.fn(),
  onVisibleChange: jest.fn(),
};

const multipleProps: SelectProps = {
  ...testProps,
  multiple: true,
};
describe("test Select component", () => {
  it("should render the correct Select component", () => {
    const { getByPlaceholderText, getByText } = render(
      <Select {...testProps}>
        <Option value="id1" label="nihao" />
        <Option value="id2" label="nihao2" />
        <Option value="id3" disabled label="disabled" />
      </Select>
    );
    const inputEle = getByPlaceholderText("test") as HTMLInputElement;
    expect(inputEle).toBeInTheDocument();
    fireEvent.click(inputEle);
    const firstItem = getByText("nihao");
    const disabledItem = getByText("disabled");
    expect(firstItem).toBeInTheDocument();
    expect(testProps.onVisibleChange).toHaveBeenCalledWith(true);
    fireEvent.click(disabledItem);
    expect(disabledItem).toBeInTheDocument();
    fireEvent.click(firstItem);
    expect(firstItem).not.toBeInTheDocument();

    expect(testProps.onVisibleChange).toHaveBeenCalledWith(false);
    expect(testProps.onChange).toHaveBeenCalledWith("id1", ["id1"]);
    expect(inputEle.value).toEqual("id1");
    expect(document.activeElement).toEqual(inputEle);
  });
  it("Select in multiple mode should works fine", () => {
    const { getByPlaceholderText, getByText, container } = render(
      <Select {...multipleProps}>
        <Option value="id1" label="first" />
        <Option value="id2" label="second" />
        <Option value="id3" label="third" />
      </Select>
    );
    const inputEle = getByPlaceholderText("test") as HTMLInputElement;
    fireEvent.click(inputEle);
    const firstItem = getByText("first");
    const secondItem = getByText("second");

    fireEvent.click(firstItem);
    expect(firstItem).toBeInTheDocument();
    expect(firstItem).toHaveClass("is-selected");
    //expect(getByText("check")).toBeInTheDocument();
    expect(multipleProps.onChange).toHaveBeenCalledWith("id1", ["id1"]);
    expect(container.querySelectorAll(".easy-tag").length).toEqual(1);
    expect(inputEle.placeholder).toEqual("");
    fireEvent.click(secondItem);
    expect(multipleProps.onChange).toHaveBeenLastCalledWith("id2", [
      "id1",
      "id2",
    ]);
    expect(container.querySelectorAll(".easy-tag").length).toEqual(2);
    fireEvent.click(secondItem);
    expect(secondItem).not.toHaveClass("is-selected");
    expect(container.querySelectorAll(".easy-tag").length).toEqual(1);
    expect(multipleProps.onChange).toHaveBeenLastCalledWith("id2", ["id1"]);
    // fireEvent.click(getByText("times"));
    // expect(multipleProps.onChange).toHaveBeenLastCalledWith("id1", []);
    // expect(container.querySelectorAll(".easy-tag").length).toEqual(0);
    // expect(inputEle.placeholder).toEqual("test");
  });
});
