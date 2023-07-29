import React, { memo, ReactNode, SyntheticEvent, useRef } from 'react';

import { User } from '../../model';
import modalService from '../../../../shared/services/modalService';
import { UserInfoBlockMemo } from '../../../../shared/ui';

import './styles.scss';

type Props = {
  data: User;
  actions?: ReactNode[];
};

const UserCard = ({ data, actions }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    if (ref.current && !ref.current.contains(target)) {
      modalService.openUserModal({
        data,
      });
    }
  };

  return (
    <div role="button" className="user-card" onClick={onClick}>
      <div className="user-card__info">
        <UserInfoBlockMemo label="Username:" text={data.username} />
        <UserInfoBlockMemo label="Name:" text={data.name} />
        <UserInfoBlockMemo label="Email:" text={data.email} />
      </div>
      <div ref={ref} className="user-card__actions">
        {actions}
      </div>
    </div>
  );
};

export const UserCardMemo = memo(UserCard);
