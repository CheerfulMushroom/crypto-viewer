import React from 'react';
import classNames from 'classnames';

import './MultiDropdown.scss';
import { MultiDropdownOptionsListProps } from './types';
import { MultiDropdownOption } from './MultiDropdownOption';

export const MultiDropdownOptionsList: React.FC<
  MultiDropdownOptionsListProps
> = (props) => {
  return (
    <ul className={classNames('multi-dropdown_options-list')}>
      {props.options.map((option) => (
        <MultiDropdownOption
          key={option.key}
          option={option}
          selected={!!props.selected.find((value) => option.key === value.key)}
          onSelected={props.onSelected}
        />
      ))}
    </ul>
  );
};
