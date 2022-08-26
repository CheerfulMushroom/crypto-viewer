import React from 'react';

import './WithLoader.scss';
import { Loader } from '../Loader/Loader';

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
}) => {
  return (
    <div className={'with-loader'}>
      <Loader className={'with-loader_loader'} loading={loading} />
      {children}
    </div>
  );
};
