import React, { ReactNode, useRef } from 'react';

import { ModalHeader } from './ModalHeader';

type Props = {
  id: number;
  component: ReactNode;
  onCancel: () => void;
};

export const Modal = ({ id, component, onCancel }: Props) => {
  const anchor = useRef(null);
  return (
    <div id={`${id}`} className="modal">
      <div className="modal-mask"></div>
      <div className="modal-wrap">
        <div ref={anchor} className="modal-content">
          <ModalHeader title="User details" onClose={onCancel} />
          {component}
        </div>
      </div>
    </div>
  );
};
