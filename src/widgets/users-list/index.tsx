import React, { useEffect } from 'react';

import { UserCardMemo, userModel } from '../../entities/user';
import { useAppSelector } from '../../shared/store/hooks';
import { User } from '../../entities/user/model';
import { RemoveUserButton } from '../../features/remove-user-button/ui';
import { getFilteredUserList } from '../../features/filter-input';

import './styles.scss';

export const UsersList = () => {
  const list = useAppSelector((state) => state.user.list);
  const search = useAppSelector((state) => state.user.search);

  const { getUserList } = userModel;

  useEffect(() => {
    void getUserList();
  }, []);

  return (
    <div className="user-list">
      {getFilteredUserList(search, list)?.map((item: User) => (
        <UserCardMemo key={item.id} data={item} actions={[<RemoveUserButton userId={item.id} key="remove" />]} />
      ))}
    </div>
  );
};
