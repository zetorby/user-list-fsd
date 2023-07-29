import React, { memo } from 'react';

import { User } from '../../model';
import modalService from '../../../../shared/services/modalService';
import { UserInfoBlockMemo } from '../../../../shared/ui';

import './styles.scss';

type Props = {
  data: User;
};

const UserCard = ({ data }: Props) => {
  const onClick = () => {
    modalService.openUserModal({
      data,
    });
  };

  return (
    <div role="button" className="user-card" onClick={onClick}>
      <div className="user-card__info">
        <UserInfoBlockMemo label="Username:" text={data.username} />
        <UserInfoBlockMemo label="Name:" text={data.name} />
        <UserInfoBlockMemo label="Email:" text={data.email} />
      </div>
      <div className="user-card__actions"></div>
    </div>
  );
};

export const UserCardMemo = memo(UserCard);
