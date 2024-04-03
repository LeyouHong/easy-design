import { PaginationMode } from './types';

export const DEFAULT_PAGE_SIZE = 10;

export const DEFAULT_PAGINATION_CONFIG = {
  mode: 'server' as PaginationMode,
  skip: 0,
  limit: DEFAULT_PAGE_SIZE,
  total: 0,
  rowsPerPageOptions: [],
  enableQuery: false,
  onSkipChange: () => undefined,
};
