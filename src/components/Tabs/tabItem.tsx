import { FC, ReactNode } from 'react';

export interface TabItemProps {
  label: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="easy-tab-panel">{children}</div>;
};

export default TabItem;
