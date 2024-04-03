import React, { useEffect } from 'react';
import { QueryPaginationProps, TablePaginationConfig } from '../types';
import { DEFAULT_PAGE_SIZE } from '../constants';
import { TablePagination, tablePaginationClasses } from '@mui/material';
import { NumberParam, withQueryParams } from 'use-query-params';

export const BasicPagination: React.FC<TablePaginationConfig> = ({
  skip = 0,
  limit = DEFAULT_PAGE_SIZE,
  total = 0,
  onSkipChange,
  onRowsPerPageChange,
  rowsPerPageOptions,
}) => {
  const onPageChange = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    onSkipChange?.(limit * page);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onRowsPerPageChange?.(parseInt(e?.target?.value));
  };

  return (
    <TablePagination
      component="div"
      count={total}
      page={total > 0 && skip >= 0 ? skip / limit : 0}
      rowsPerPage={limit}
      onPageChange={onPageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      rowsPerPageOptions={rowsPerPageOptions}
      sx={{
        [`& .${tablePaginationClasses.actions}`]: {
          ml: 2,
        },
        '& p': {
          marginBottom: 0,
        },
        '& button > svg': {
          fontSize: 16,
        },
        '& button:focus': {
          outline: 'none',
        },
      }}
    />
  );
};

// Read skip and limit from query.
export const QueryPagination = withQueryParams<any, QueryPaginationProps>(
  {
    skip: NumberParam,
    limit: NumberParam,
  },
  ({ query, setQuery, onSkipChange, ...rest }) => {
    const { skip, limit } = query;

    useEffect(() => {
      if (skip === undefined || limit === undefined) {
        setQuery({ skip: 0, limit: DEFAULT_PAGE_SIZE }, 'replaceIn');
      }
    }, [limit, query, setQuery, skip]);

    const handleSkipChange = (newSkip: number): void => {
      setQuery({ skip: newSkip });
      onSkipChange?.(newSkip);
    };

    return (
      <>
        {skip !== undefined && limit !== undefined && (
          <BasicPagination
            {...rest}
            skip={skip}
            limit={limit}
            onSkipChange={handleSkipChange}
          />
        )}
      </>
    );
  },
);
