import React from 'react';
import { SortConfig, TableColumnItem, TreeRow } from '../types';
import HeaderCell from './headerCell';

interface TableHeaderProps<R extends TreeRow> {
  columns: TableColumnItem<R>[];
  sort?: SortConfig;
  hasAction: boolean;
}

const Header = <R extends TreeRow>({
  columns,
  sort,
  hasAction,
}: TableHeaderProps<R>): React.ReactElement => {
  const newColumns = [...columns];
  if (hasAction) {
    newColumns.push({
      header: 'Action',
      field: 'action',
    });
  }
  return (
    <thead className="easy-table-header">
      <tr>
        {newColumns?.map((col) => (
          <HeaderCell column={col} sort={sort} key={col.field} />
        ))}
      </tr>
    </thead>
  );
};

export default Header;
