import React, { useEffect } from 'react';

import { UserCardMemo, userModel } from '../../entities/user';
import { useAppSelector } from '../../shared/store/hooks';
import { User } from '../../entities/user/model';

import './styles.scss';

export const UsersList = () => {
  const loading = useAppSelector((state) => state.user.isLoading);
  const list = useAppSelector((state) => state.user.list);

  console.log(loading, list);

  const { getUserList } = userModel;

  useEffect(() => {
    void getUserList();
  }, []);

  return <div className="user-list">{list?.map((item: User) => <UserCardMemo key={item.id} data={item} />)}</div>;
};
