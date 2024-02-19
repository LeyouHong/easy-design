import { FC, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

type SwitchSizeType = 'lg' | 'sm';

export interface SwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: SwitchSizeType;
  onChange?: (value: boolean) => void;
  checkedComponent?: ReactNode;
  unCheckedComponent?: ReactNode;
}

export const Switch: FC<SwitchProps> = (props) => {
  const {
    defaultChecked,
    checked,
    className,
    disabled,
    loading,
    size,
    onChange,
    checkedComponent,
    unCheckedComponent,
  } = props;

  const shouldDisabled = loading || disabled;
  //   console.log("checked:", checked);
  const [currentStatus, setCurrentStatus] = useState<boolean>(
    !!(checked !== undefined ? checked : defaultChecked),
  );

  useEffect(() => {
    if (checked !== undefined && currentStatus !== checked) {
      setCurrentStatus(checked);
    }
  }, [checked, currentStatus]);

  const swithClass = classNames('easy-switch', className, {
    'is-checked': currentStatus,
    'not-checked': !currentStatus,
    'is-disabled': shouldDisabled,
    [`switch-${size}`]: size,
  });

  const switchLeftClass = classNames('easy-switch-left', {
    'is-checked': currentStatus,
    'is-disabled': shouldDisabled,
  });

  const switchRightClass = classNames('easy-switch-right', {
    'is-checked': !currentStatus,
    'is-disabled': shouldDisabled,
  });

  return (
    <button
      className={swithClass}
      disabled={shouldDisabled}
      onClick={() => {
        onChange?.(!currentStatus);
        setCurrentStatus(!currentStatus);
      }}
    >
      <div style={{ display: 'flex' }}>
        <div className={switchLeftClass}>
          {currentStatus && checkedComponent}
        </div>
        <div className="inner">
          {loading && (
            <Icon
              icon="spinner"
              spin
              theme={currentStatus ? 'primary' : 'secondary'}
            />
          )}
        </div>
        <div className={switchRightClass}>
          {!currentStatus && unCheckedComponent}
        </div>
      </div>
    </button>
  );
};

Switch.defaultProps = {
  defaultChecked: true,
  disabled: false,
  loading: false,
  size: 'sm',
  checkedComponent: <>&nbsp;&nbsp;</>,
  unCheckedComponent: <>&nbsp;&nbsp;</>,
};

Switch.displayName = 'Switch';

export default Switch;
