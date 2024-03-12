import React from 'react';
import { TableProps, TreeRow } from './types';
import classNames from 'classnames';

const Table = <R extends TreeRow>({
  rowKey = 'id',
  rows,
  columns,
}: TableProps<R>): React.ReactElement => {
  const tableCeilHeaderClass = classNames(
    'easy-table-ceil',
    'easy-table-ceil-header',
  );

  return (
    <table className="easy-table">
      <thead className="easy-table-header">
        <tr>
          {columns.map((col, key) => (
            <th className={tableCeilHeaderClass} key={key}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[rowKey]}>
            {columns.map((col, key) => (
              <td className="easy-table-ceil" key={key}>
                {row[col.field] ?? ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
