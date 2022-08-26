import React from 'react';

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
    <div className={'card'} onClick={onClick}>
      <img className={'card_image'} src={image} alt={'Image'} />
      <div className={'card_description'}>
        <div className={'card_title'}>{title}</div>
        <div className={'card_subtitle'}>{subtitle}</div>
      </div>
      <div className={'card_content'}>{content}</div>
    </div>
  );
};
