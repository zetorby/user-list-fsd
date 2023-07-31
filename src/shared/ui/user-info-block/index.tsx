import React, { memo, ReactNode } from 'react';

import './styles.scss';

type Props = {
  label?: string;
  text?: ReactNode;
};

const UserInfoBlock = ({ label, text }: Props) => {
  return (
    <div className="user-info-block">
      <span className="user-info-block__label">{label}</span>
      <span className="user-info-block__text">{text}</span>
    </div>
  );
};

export const UserInfoBlockMemo = memo(UserInfoBlock);
