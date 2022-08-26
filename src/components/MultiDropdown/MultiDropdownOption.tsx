import React from 'react';
import classNames from 'classnames';

import './MultiDropdown.scss';
import { OptionProps } from './types';

export const MultiDropdownOption: React.FC<OptionProps> = (props) => {
  const handleClicked = () => {
    props.onSelected(props.option, !props.selected);
  };

  return (
    <li
      onClick={handleClicked}
      className={classNames('multi-dropdown_option', {
        'multi-dropdown_option_selected': props.selected,
      })}
    >
      <span className={'multi-dropdown_option-content'}>
        {props.option.value}
      </span>
    </li>
  );
};
