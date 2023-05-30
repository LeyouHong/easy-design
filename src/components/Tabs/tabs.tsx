import React, {
  FC,
  FunctionComponentElement,
  ReactNode,
  useState,
} from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";

export interface TabsProps {
  defaultIndex?: number;
  className?: string;
  type?: "line" | "card";
  onSelect?: (index: number) => void;
  children?: ReactNode;
}

export const Tabs: FC<TabsProps> = (props) => {
  const { defaultIndex, className, type, onSelect, children } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (
    e: React.MouseEvent,
    index: number,
    disabled: boolean | undefined
  ) => {
    if (disabled) return;
    setActiveIndex(index);
    if (onSelect) onSelect(index);
  };

  const navClass = classNames("easy-tabs-nav", {
    "nav-line": type === "line",
    "nav-card": type === "card",
  });

  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;
      const classes = classNames("easy-tabs-nav-item", {
        "is-active": activeIndex === index,
        disabled: disabled,
      });

      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={(e) => handleClick(e, index, disabled)}
        >
          {label}
        </li>
      );
    });
  };

  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (activeIndex === index) return child;
    });
  };

  return (
    <div className={`easy-tabs ${className}`}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className="easy-tabs-content">{renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
};

export default Tabs;
