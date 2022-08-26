import React from 'react';
import classNames from 'classnames';

import './Card.scss';

export type CardProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
}) => {
  return (
    <div
      className={classNames('card', { card_interactive: !!onClick })}
      onClick={onClick}
    >
      <img className={'card__image'} src={image} alt={'Image'} />
      <div className={'card__description'}>
        <div className={'card__title'}>{title}</div>
        <div className={'card__subtitle'}>{subtitle}</div>
      </div>
      <div className={'card__content'}>{content}</div>
    </div>
  );
};
