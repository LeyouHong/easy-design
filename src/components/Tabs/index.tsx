import { FC } from 'react';
import Tabs, { TabsProps } from './tabs';
import TabItem, { TabItemProps } from './tabItem';

export type TabsComponentType = FC<TabsProps> & {
  Item: FC<TabItemProps>;
};
const TransTabs = Tabs as TabsComponentType;
TransTabs.Item = TabItem;

export default TransTabs;
