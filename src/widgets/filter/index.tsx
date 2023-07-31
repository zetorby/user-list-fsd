import React from 'react';

import { cx } from '../../shared/utils';
import { FilterInput } from '../../features/filter-input';
import { ClearFilterButton } from '../../features/clear-filter-button/ui';

import './styles.scss';

type Props = {
  className?: string;
};

export const UserListFilter = ({ className }: Props) => {
  const classNames = cx('user-list-filter', className);
  return (
    <div className={classNames}>
      <FilterInput />
      <ClearFilterButton />
    </div>
  );
};
