import React, { ChangeEvent, HTMLProps } from 'react';

import { cx } from '../../utils';

import './styles.scss';

type Props = {
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & HTMLProps<HTMLInputElement>;

export const Input = ({ className, value, onChange, ...props }: Props) => {
  const classNames = cx('input', className);
  return <input {...props} className={classNames} value={value} onChange={onChange} />;
};
