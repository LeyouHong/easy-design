import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  forwardRef,
} from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type InputSize = "lg" | "sm";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  size?: InputSize;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  search?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { disabled, size, search, prepend, append, style, ...restProps } =
    props;

  const cnames = classNames("easy-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) return "";
    return value;
  };

  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return (
    <div className={cnames} style={style}>
      {prepend && <div className="easy-input-group-prepend">{prepend}</div>}
      {search && (
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      )}
      <input
        ref={ref}
        className="easy-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="easy-input-group-append">{append}</div>}
    </div>
  );
});

export default Input;
