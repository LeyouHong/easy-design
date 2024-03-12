import { Meta, StoryFn } from '@storybook/react';
import Table from './index';
import Icon from '../Icon';

export default {
  title: 'Table',
  id: 'Table',
  component: Table,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

const rows = [
  {
    id: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    money: 100,
  },
  {
    id: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    money: 1000,
  },
  {
    id: '3',
    name: 'Leo',
    age: 42,
    address: '10 Downing Street',
    money: 1000000,
  },
];

const columns = [
  {
    header: 'Name',
    field: 'name',
  },
  {
    header: 'Age',
    field: 'age',
  },
  {
    header: 'Address',
    field: 'address',
  },
  {
    header: <Icon icon="dollar-sign" theme="primary" />,
    field: 'money',
  },
];

export const BasicTable = Template.bind({});
BasicTable.args = {
  rows,
  columns,
};
BasicTable.storyName = 'Basic Table';
