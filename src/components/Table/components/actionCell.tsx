import React, { useState } from 'react';
import { MenuItem, IconButton, Typography } from '@mui/material';
import { ActionButtonItem, ActionCellProps, TableActionColor } from '../types';
import Icon from '../../Icon';
import { TableActionMenu } from '../style';
import SingleActionButton from './singleActionButton';

const ActionCell = <R,>({
  actions,
  row,
}: ActionCellProps<R>): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const buttonList = actions.filter(({ show = true }) =>
    typeof show === 'function' ? show(row) : show,
  );
  const isDisabled = (disabled: ActionButtonItem<R>['disabled']): boolean =>
    (typeof disabled === 'function' ? disabled(row) : disabled) ?? false;

  const textColor = (color: ActionButtonItem<R>['color']): TableActionColor =>
    typeof color === 'function' ? color(row) : color ?? 'primary';

  const buttonText = (text: ActionButtonItem<R>['text']): string =>
    typeof text === 'function' ? text(row) : text;

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <td className="easy-table-cell easy-table-action-cell">
      {buttonList.length > 1 && (
        <>
          <IconButton
            size="small"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{
              padding: '4px',
              outline: '0 !important',
            }}
            color="primary"
            disabled={buttonList.every((item) => isDisabled(item.disabled))}
          >
            <Icon icon="ellipsis" />
          </IconButton>

          <TableActionMenu
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleMenuClose}
          >
            {buttonList.map((item, index) => (
              <MenuItem
                key={`${item.text.toString()} ${index}`}
                disabled={isDisabled(item.disabled)}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  item.onClick?.(row);
                  handleMenuClose(e);
                }}
                sx={{
                  fontSize: 14,
                  padding: '6px 16px 6px 8px',
                  minWidth: 120,
                }}
              >
                <Typography
                  variant="inherit"
                  color={textColor(item.color) || 'inherit'}
                  noWrap
                >
                  {buttonText(item.text)}
                </Typography>
              </MenuItem>
            ))}
          </TableActionMenu>
        </>
      )}
      {buttonList.length === 1 && (
        <SingleActionButton
          row={row}
          {...buttonList[0]}
          text={buttonText(buttonList[0].text)}
          color={textColor(buttonList[0].color)}
          disabled={isDisabled(buttonList[0].disabled)}
        />
      )}
      {!buttonList.length && ''}
    </td>
  );
};

export default ActionCell;
