import React, { memo, ReactNode, SyntheticEvent, useRef } from 'react';

import { User } from '../../model';
import modalService from '../../../../shared/services/modalService';
import { UserInfoBlockMemo } from '../../../../shared/ui';
import { useHover } from '../../../../shared/hooks';

import './styles.scss';

type Props = {
  data: User;
  actions?: ReactNode[];
};

const UserCard = ({ data, actions }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [cardRef, isHover] = useHover<HTMLDivElement>();

  const onClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    if (ref.current && !ref.current.contains(target)) {
      modalService.openUserModal({
        data,
      });
    }
  };

  return (
    <div ref={cardRef} role="button" className="user-card" onClick={onClick}>
      <div className="user-card__info">
        <UserInfoBlockMemo label="Username:" text={data.username} />
        <UserInfoBlockMemo label="Name:" text={data.name} />
        <UserInfoBlockMemo label="Email:" text={data.email} />
      </div>
      {isHover ? (
        <div ref={ref} className="user-card__actions">
          {actions}
        </div>
      ) : null}
    </div>
  );
};

export const UserCardMemo = memo(UserCard);
