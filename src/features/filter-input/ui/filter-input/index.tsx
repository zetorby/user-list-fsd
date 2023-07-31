import React, { ChangeEvent } from 'react';

import { Input } from '../../../../shared/ui';
import { useAppDispatch, useAppSelector } from '../../../../shared/store/hooks';
import { UserTypes } from '../../../../entities/user/model';

export const FilterInput = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.user.search);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: UserTypes.SET_SEARCH_TEXT,
      payload: e.target.value,
    });
  };

  return <Input placeholder="Enter text" value={value} onChange={handleChange} />;
};
