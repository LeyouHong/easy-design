import React, { useMemo } from 'react';
import { SingleActionButtonProps } from '../types';
import Button from '../../Button';

const renderIcon = (ButtonIcon: any): React.ReactNode => <ButtonIcon />;

const SingleActionButton = <R,>({
  row,
  text,
  icon,
  color,
  onClick,
  disabled,
}: SingleActionButtonProps<R>): React.ReactElement => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    return onClick ? onClick(row) : undefined;
  };

  const getButtonType = (bColor) => {
    if (bColor === 'primary' || bColor === 'danger') return bColor;
    if (bColor === 'secondary') return 'default';

    return 'primary';
  };

  const processedButtonProps = {
    disabled,
    onClick: disabled ? undefined : clickHandler,
    style: disabled || !onClick ? { cursor: 'default' } : {},
  };

  const displayText = useMemo(() => {
    if (typeof text === 'function') {
      return text(row);
    } else {
      return text;
    }
  }, [row, text]);

  return (
    <>
      {icon ? (
        renderIcon(icon)
      ) : (
        <Button
          disabled={disabled}
          onClick={processedButtonProps.onClick}
          btnType={getButtonType(color)}
          size="sm"
        >
          {displayText}
        </Button>
      )}
    </>
  );
};

export default SingleActionButton;
