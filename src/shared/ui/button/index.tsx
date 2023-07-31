import React, { ReactNode } from 'react';

import { cx } from '../../utils';

import './styles.scss';

type Props = {
  className?: string;
  variant?: 'default' | 'icon';
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({ className, variant = 'default', children, ...props }: Props) => {
  const classNames = cx('button', className, {
    [`button--${variant}`]: variant,
  });
  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};
