import React, { useEffect } from 'react';
import classNames from 'classnames';

import './MultiDropdown.scss';
import { MultiDropdownProps, Option } from './types';
import { MultiDropdownOptionsList } from './MultiDropdownOptionsList';

export type { MultiDropdownProps, Option };

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  disabled,
  onChange,
  pluralizeOptions,
  ...props
}) => {
  const [optionsHidden, setOptionsHidden] = React.useState<boolean>(true);
  useEffect(() => setOptionsHidden(optionsHidden || !!disabled), [disabled]);

  const onSelected = (option: Option, selected: boolean) => {
    let newSelectedOptions: Option[] = value;

    if (selected && !value.find((value) => value.key === option.key)) {
      newSelectedOptions = [...value, option];
    } else {
      const optionIndex = value.findIndex((value) => value.key === option.key);
      if (optionIndex >= 0) {
        newSelectedOptions = [
          ...value.slice(0, optionIndex),
          ...value.slice(optionIndex + 1),
        ];
      }
    }

    if (newSelectedOptions !== value) {
      onChange(newSelectedOptions);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      setOptionsHidden(!optionsHidden);
    }
  };

  return (
    <div className={'multi-dropdown'}>
      <div
        className={classNames('multi-dropdown_selector', {
          'multi-dropdown_selector_disabled': disabled,
        })}
        onClick={handleClick}
      >
        <div className={'multi-dropdown_selector-content'}>
          {pluralizeOptions(value)}
        </div>
      </div>
      {!optionsHidden && (
        <MultiDropdownOptionsList
          options={options}
          selected={value}
          onSelected={onSelected}
        />
      )}
    </div>
  );
};
