import React from 'react';

import { UserInfoBlockMemo } from '../../../../shared/ui';
import { User } from '../../model';

import './styles.scss';

type Props = {
  data: User;
};

export const UserModal = ({ data }: Props) => {
  return (
    <div className="user-modal">
      <span className="user-modal__label">Address</span>
      <UserInfoBlockMemo label="City:" text={data.address.city} />
      <UserInfoBlockMemo label="Street:" text={data.address.street} />
      <UserInfoBlockMemo label="Zipcode:" text={data.address.zipcode} />
      <UserInfoBlockMemo label="Suite:" text={data.address.suite} />
      <span className="user-modal__label">Company</span>
      <UserInfoBlockMemo label="Company:" text={data.company.name} />
      <UserInfoBlockMemo label="BS:" text={data.company.bs} />
      <UserInfoBlockMemo label="Catchphrase:" text={data.company.catchPhrase} />
    </div>
  );
};
