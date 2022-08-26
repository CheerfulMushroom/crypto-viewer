import React from 'react';
import classNames from 'classnames';

import './CheckBox.scss';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  checked,
  className,
  ...props
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.checked);
  };

  return (
    <input
      className={classNames(
        'check-box',
        { 'check-box_disabled': props.disabled },
        className
      )}
      type={'checkbox'}
      checked={checked}
      onChange={handleChange}
      {...props}
    />
  );
};
