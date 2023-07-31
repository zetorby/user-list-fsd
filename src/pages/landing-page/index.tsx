import React from 'react';

import { UsersList } from '../../widgets/users-list';
import { UserListFilter } from '../../widgets/filter';

import './styles.scss';

export const LandingPage = () => {
  return (
    <div className="container landing-page">
      <UserListFilter className="mb-4" />
      <UsersList />
    </div>
  );
};
