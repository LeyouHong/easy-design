import React from 'react';
import { TableProps, TreeRow } from './types';
import Header from './components/header';
import ActionCell from './components/actionCell';

const Table = <R extends TreeRow>({
  rowKey = 'id',
  rows,
  columns,
  sort,
  actions,
}: TableProps<R>): React.ReactElement => {
  const hasAction = Boolean(actions && actions?.length);

  return (
    <table className="easy-table">
      <Header columns={columns} sort={sort} hasAction={hasAction} />
      <tbody>
        {rows?.map((row) => (
          <tr key={row[rowKey]}>
            {columns.map((col, key) => (
              <td className="easy-table-cell" key={key}>
                {row[col.field] ?? ''}
              </td>
            ))}
            {hasAction && <ActionCell actions={actions} row={row} />}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
