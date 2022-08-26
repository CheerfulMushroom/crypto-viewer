import React from 'react';
import classNames from 'classnames';

import './Button.scss';
import { Loader, LoaderSize } from '../Loader/Loader';

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
  className?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  loading,
  color,
  className,
  children,
  ...buttonProps
}) => {
  const colorClassName = `button_color-${color || ButtonColor.primary}`;
  const toDisable = loading || buttonProps.disabled;
  const disabledClassName = toDisable ? 'button_disabled' : '';

  return (
    <button
      {...buttonProps}
      disabled={toDisable}
      className={classNames(
        'button',
        colorClassName,
        disabledClassName,
        className
      )}
    >
      <div className={'button_content'}>{children}</div>
      <Loader
        loading={!!loading}
        size={LoaderSize.s}
        className={'button_loader'}
      />
    </button>
  );
};
