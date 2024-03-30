import React, { useContext } from 'react';
import classNames from 'classnames';
import { SortConfig, TableColumnItem, TreeRow } from '../types';
import useColumnSort from './useColumnSort';
import EventContext from '../context/eventConext';

interface HeaderCellProps<R extends TreeRow> {
  column: TableColumnItem<R>;
  sort?: SortConfig;
}

const HeaderCell = <R extends TreeRow>({
  column,
  sort = { asc: '', desc: '' } as SortConfig,
}: HeaderCellProps<R>): React.ReactElement => {
  const isAction = column?.header === 'Action';

  const tableCellHeaderClass = classNames(
    'easy-table-cell',
    'easy-table-cell-header',
    isAction ? 'easy-table-action-cell' : '',
  );

  const { $event } = useContext(EventContext);
  const { direction, handleChangeSort } = useColumnSort(column, sort);

  return (
    <th
      className={tableCellHeaderClass}
      onClick={(e) => $event?.headerClick?.(e, column.field)}
    >
      {column.header}
      {column?.sortable && (
        <div className="easy-table-sort">
          <div
            className="easy-table-sort-wrapper-up"
            onClick={handleChangeSort}
            style={{
              borderColor: `transparent transparent ${
                direction === 'asc' ? 'var(--primary)' : 'var(--secondary)'
              } transparent`,
            }}
          />
          <div
            className="easy-table-sort-wrapper-down"
            onClick={handleChangeSort}
            style={{
              borderColor: `${
                direction === 'desc' ? 'var(--primary)' : 'var(--secondary)'
              } transparent transparent transparent`,
            }}
          />
        </div>
      )}
    </th>
  );
};

export default HeaderCell;
