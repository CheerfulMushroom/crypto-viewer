import React from 'react';
import classNames from 'classnames';

import './Input.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className,
  ...inputProps
}) => {
  const handleValue = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={'input'}>
      <img className={'input_icon'} src={'/search-icon.png'} />
      <input
        type={'text'}
        placeholder={'Input stuff her'}
        onChange={handleValue}
        value={value}
        className={classNames(
          'input_field',
          { input_disabled: inputProps.disabled },
          className
        )}
        {...inputProps}
      />
    </div>
  );
};
