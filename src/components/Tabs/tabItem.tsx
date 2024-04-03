import React, { ReactNode } from 'react';

export interface TabItemProps {
  label: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const TabItem: React.FC<TabItemProps> = ({ children }) => {
  return <div className="easy-tab-panel">{children}</div>;
};

export default TabItem;
