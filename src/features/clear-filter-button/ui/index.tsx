import React from 'react';

import { Button } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/store/hooks';
import { UserTypes } from '../../../entities/user/model';

export const ClearFilterButton = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch({
      type: UserTypes.CLEAR_FILTER,
    });
  };
  return <Button onClick={onClick}>Clear</Button>;
};
