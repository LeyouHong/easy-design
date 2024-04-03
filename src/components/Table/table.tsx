import React, { useMemo } from 'react';
import { PaginationMode, TableProps, TreeRow } from './types';
import Header from './components/header';
import ActionCell from './components/actionCell';
import { DEFAULT_PAGINATION_CONFIG } from './constants';
import { BasicPagination, QueryPagination } from './components/pagination';

const Table = <R extends TreeRow>({
  rowKey = 'id',
  rows,
  columns,
  pagination = DEFAULT_PAGINATION_CONFIG,
  sort,
  actions,
}: TableProps<R>): React.ReactElement => {
  const hasAction = Boolean(actions && actions?.length);

  const showRows = useMemo(() => {
    if (!pagination) return rows;

    const currentRows =
      pagination?.mode === ('server' as PaginationMode)
        ? rows
        : rows.slice(
            pagination?.skip || 0,
            (pagination?.skip || 0) + (pagination?.limit || 0),
          );
    if (
      currentRows.length &&
      currentRows.some((row) => row[rowKey] === undefined)
    ) {
      console.error('Table: rowKey is not Exist.');
      return [];
    }

    return currentRows;
  }, [pagination, rowKey, rows]);

  return (
    <>
      <table className="easy-table">
        <Header columns={columns} sort={sort} hasAction={hasAction} />
        <tbody>
          {showRows?.map((row) => (
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
      {pagination !== false && (
        <>
          {pagination.enableQuery ? (
            <QueryPagination {...pagination} />
          ) : (
            <BasicPagination {...pagination} />
          )}
        </>
      )}
    </>
  );
};

export default Table;
