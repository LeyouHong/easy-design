export interface TreeRow {
  [key: string]: any;
}

export interface TableProps<R extends TreeRow> {
  rowKey: string;
  rows: R[];
  columns: TableColumnItem[];
}

export interface TableColumnItem {
  field: string;
  header:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
