export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  pluralizeOptions: (value: Option[]) => string;
};

export type MultiDropdownOptionsListProps = {
  options: Option[];
  selected: Option[];
  onSelected: (option: Option, selected: boolean) => void;
};

export type OptionProps = {
  option: Option;
  selected: boolean;
  onSelected: (option: Option, selected: boolean) => void;
};
