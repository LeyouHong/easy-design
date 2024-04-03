import React, { useState } from 'react';
import classNames from 'classnames';
import Transition from '../Transition';
import Icon from '../Icon';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
}

export const Alert: React.FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false);
  const { title, description, type, onClose, closable } = props;
  const classes = classNames('easy-alert', {
    [`easy-alert-${type}`]: type,
  });
  const titleClass = classNames('easy-alert-title', {
    'bold-title': description,
  });
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };
  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="easy-alert-desc">{description}</p>}
        {closable && (
          <span
            className="easy-alert-close"
            onClick={handleClose}
            title="alert-fire-event"
          >
            <Icon icon="times" />
          </span>
        )}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  type: 'default',
  closable: true,
};
export default Alert;
