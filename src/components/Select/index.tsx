import { FC } from 'react';

import Select, { SelectProps } from './select';
import Option, { SelectOptionProps } from './option';

export type SelectComponentType = FC<SelectProps> & {
  Option: FC<SelectOptionProps>;
};

const TransSelect = Select as SelectComponentType;
TransSelect.Option = Option;

export default TransSelect;
