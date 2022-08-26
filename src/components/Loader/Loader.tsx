import React from 'react';
import classNames from 'classnames';

import './Loader.scss';

export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size,
  className,
}) => {
  if (!loading) {
    return null;
  }

  const loaderSizeClass = `loader_size-${size || LoaderSize.m}`;
  const loaderRingSizeClass = `loader_ring_size-${size || LoaderSize.m}`;

  return (
    <div className={classNames(className, 'loader', loaderSizeClass)}>
      <div className={classNames('loader_ring', loaderRingSizeClass)} />
    </div>
  );
};
