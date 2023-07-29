import React from 'react';

import { User } from '../../model';

import './styles.scss';

type Props = {
  data: User;
};

export const UserCard = ({ data }: Props) => {
  return (
    <div className="user-card">
      <div className="user-card__info">
        <div className="user-card__info-block">
          <span className="user-card__label">Username:</span>
          <span className="user-card__text">{data.username}</span>
        </div>
        <div className="user-card__info-block">
          <span className="user-card__label">Name:</span>
          <span className="user-card__text">{data.name}</span>
        </div>
        <div className="user-card__info-block">
          <span className="user-card__label">Email:</span>
          <span className="user-card__text">{data.email}</span>
        </div>
      </div>
      <div className="user-card__actions"></div>
    </div>
  );
};
