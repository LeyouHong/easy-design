import { styled } from '@mui/material/styles';
import { Menu, MenuProps } from '@mui/material';

export const TableActionMenu = styled(Menu)<MenuProps>(() => ({
  boxShadow: '0 2px 8px 0 rgba(37, 37, 37, 0.16)',

  '& .MuiMenu-list': {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));
