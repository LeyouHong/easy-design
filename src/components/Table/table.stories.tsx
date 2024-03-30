import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import Table from './index';
import Icon from '../Icon';

export default {
  title: 'Table',
  id: 'Table',
  component: Table,
  tags: ['autodocs'],
} as Meta;

const sortTableRows = (
  dataList: Record<string, unknown>[],
  asc?: string,
  desc?: string,
) => {
  if (
    typeof asc !== 'string' ||
    typeof desc !== 'string' ||
    (asc === '' && desc === '')
  ) {
    return dataList;
  }

  const factor = asc !== '' ? 1 : -1;
  const target = asc !== '' ? asc : desc;

  return [...dataList].sort(
    (a, b) =>
      factor *
      `${a[target]}`.localeCompare(`${b[target]}`, undefined, {
        numeric: true,
      }),
  );
};

const BasicTableComponent: StoryFn<typeof Table> = (args) => {
  const [sortConfig, setSortConfig] = useState({ asc: '', desc: '' });

  const sort = {
    asc: sortConfig.asc,
    desc: sortConfig.desc,
    onSortChange: (sortParams) =>
      setSortConfig({ asc: sortParams.asc, desc: sortParams.desc }),
  };

  return (
    <>
      <Table
        {...args}
        sort={sort}
        rows={sortTableRows(args?.rows || [], sort.asc, sort.desc)}
        actions={[
          { text: 'delete', color: 'error' },
          { text: 'add', onClick: () => alert('add clicked') },
          { text: 'disabled', color: 'info', disabled: true },
        ]}
      />
    </>
  );
};

export const BasicTable = BasicTableComponent.bind({});

BasicTable.args = {
  rowKey: 'id',
  rows: [
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
  ],
  columns: [
    {
      header: 'Name',
      field: 'name',
      sortable: true,
    },
    {
      header: 'Age',
      field: 'age',
      sortable: true,
    },
    {
      header: 'Address',
      field: 'address',
    },
    {
      header: <Icon icon="dollar-sign" theme="primary" />,
      field: 'money',
    },
  ],
};

BasicTable.storyName = 'Basic Table';
