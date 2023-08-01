import React, { memo, ReactNode, SyntheticEvent, useRef } from 'react';

import { User } from '../../model';
import modalService from '../../../../shared/services/modalService';
import { UserInfoBlockMemo } from '../../../../shared/ui';
import { useHover } from '../../../../shared/hooks';
import { HighlightedText } from '../highlight-text';
import { useAppSelector } from '../../../../shared/store/hooks';

import './styles.scss';

type Props = {
  data: User;
  actions?: ReactNode[];
};

const UserCard = ({ data, actions }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [cardRef, isHover] = useHover<HTMLDivElement>();
  const search = useAppSelector((state) => state.user.search);

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
        <UserInfoBlockMemo label="Username:" text={<HighlightedText text={data.username} highlight={search} />} />
        <UserInfoBlockMemo label="Name:" text={<HighlightedText text={data.name} highlight={search} />} />
        <UserInfoBlockMemo label="Email:" text={<HighlightedText text={data.email} highlight={search} />} />
      </div>
      <div ref={ref} className="user-card__actions">
        {isHover ? actions : null}
      </div>
    </div>
  );
};

export const UserCardMemo = memo(UserCard);
