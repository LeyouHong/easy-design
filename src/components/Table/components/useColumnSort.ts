import { useContext, useMemo } from 'react';
import { SortConfig, TableColumnItem, TreeRow } from '../types';
import EventContext from '../context/eventConext';

type UseColumnSortProps<R extends TreeRow> = [
  column: TableColumnItem<R>,
  sort?: SortConfig,
];

interface UseSortReturn {
  direction: 'asc' | 'desc' | '';
  handleChangeSort: () => void;
}

const useColumnSort: <R extends TreeRow>(
  ...args: UseColumnSortProps<R>
) => UseSortReturn = (column, sort) => {
  const { field } = column;
  const { $event } = useContext(EventContext);
  const direction: 'asc' | 'desc' | '' = useMemo(() => {
    if (sort?.asc === field) return 'asc';
    if (sort?.desc === field) return 'desc';
    return '';
  }, [sort, field]);

  const handleChangeSort = (): void => {
    if (direction === '') {
      //unsort ---> desc
      sort?.onSortChange?.({ asc: '', desc: field.toString() });
    } else if (direction === 'desc') {
      //desc ---> asc
      sort?.onSortChange?.({ asc: field.toString(), desc: '' });
    } else if (direction === 'asc') {
      // asc ---> unsort
      sort?.onSortChange?.({ asc: undefined, desc: undefined });
    }
    $event?.sortChange?.(column.field, direction);
  };

  return { direction, handleChangeSort };
};

export default useColumnSort;
