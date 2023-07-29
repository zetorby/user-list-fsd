import React, { RefObject } from 'react';

export const useClickOutside = (ref: RefObject<any>, callback: () => void) => {
  const handleClick = (event: MouseEvent) => {
    console.log(ref);
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
