import React, { Fragment } from 'react';

type Props = {
  text: string;
  highlight?: string;
};

export const HighlightedText = ({ text, highlight }: Props) => {
  const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts?.map((part, index) => (
        <Fragment key={index}>{part.toLowerCase() === highlight?.toLowerCase() ? <mark>{part}</mark> : part}</Fragment>
      ))}
    </>
  );
};
