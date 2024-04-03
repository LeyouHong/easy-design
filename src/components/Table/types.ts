import {
  TypographyProps,
  ButtonProps,
  TablePaginationProps,
} from '@mui/material';

export interface TreeRow {
  [key: string]: any;
}

export interface TableProps<R extends TreeRow> {
  rowKey: string;
  rows: R[];
  columns: TableColumnItem<R>[];
  pagination?: TablePaginationConfig | false;
  sort?: SortConfig;
  actions: ActionButtonItem<R>[];
}

export interface TableColumnItem<R extends TreeRow = Record<string, unknown>> {
  field: string;
  header:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;

  sortable?: boolean;
  sorter?: (a: R, b: R) => number;
}

export interface TableSortParams {
  asc?: string;
  desc?: string;
}

export interface SortConfig {
  asc?: string;
  desc?: string;
  onSortChange: (sortParams: TableSortParams) => void;
}

export type TableEvent<R = Record<string, unknown>> = Partial<{
  rowClick: (
    e: React.MouseEvent<HTMLTableRowElement>,
    row: R,
    index: number,
  ) => void;

  rowMouseEnter: (
    e: React.MouseEvent<HTMLTableRowElement>,
    row: R,
    index: number,
  ) => void;

  rowMouseLeave: (
    e: React.MouseEvent<HTMLTableRowElement>,
    row: R,
    index: number,
  ) => void;

  cellClick: (e: React.MouseEvent<HTMLTableCellElement>, field: string) => void;

  headerClick: (
    e: React.MouseEvent<HTMLTableCellElement>,
    field: string,
  ) => void;

  sortChange: (field: string, order: 'asc' | 'desc' | '') => void;
}>;

// Action Type
export type TableActionColor = Extract<
  ButtonProps['color'],
  TypographyProps['color']
>;

export interface ActionButtonItem<R = Record<string, unknown>> {
  text: string | ((row: R) => string);
  icon?: React.ReactNode;
  onClick?: (row: R) => void;
  show?: boolean | ((row: R) => boolean);
  disabled?: boolean | ((row: R) => boolean);
  color?: TableActionColor | ((row: R) => TableActionColor);
}

export interface SingleActionButtonProps<R> extends ActionButtonItem<R> {
  row: R;
  disabled: boolean;
  color?: TableActionColor;
}

export interface ActionCellProps<R> {
  actions: ActionButtonItem<R>[];
  row: R;
}

// Pagination
export type PagerProps = {
  skip: number;
  limit: number;
  onSkipChange?: (skip: number) => void;
  onRowsPerPageChange?: (num: number) => void;
};

export type PaginationMode = 'client' | 'server';

export type PaginationModeConfig = {
  mode?: PaginationMode;
};

export type EnableQueryPagination = PaginationModeConfig & {
  enableQuery: true;
  total: number;
} & Partial<PagerProps>;

export type DisableQueryPagination = PaginationModeConfig & {
  enableQuery?: false;
  total: number;
} & PagerProps;

export type TablePaginationConfig = (
  | EnableQueryPagination
  | DisableQueryPagination
) &
  Pick<TablePaginationProps, 'rowsPerPageOptions'>;

export type QueryPaginationProps = TablePaginationConfig & {
  query: any;
  setQuery: any;
};
