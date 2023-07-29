import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import store from '../store/store';
import { Modal } from '../ui';
import { UserModal } from '../../entities/user';

const modalService = {
  id: 0,
  modals: {} as any,
  root: {} as any,
  open(options: any) {
    const target = document.createElement('div');
    document.body.appendChild(target);
    const { component: Component, className, props, onCancel } = options;
    const { id } = this;
    this.modals[this.id] = target;
    const close = () => {
      if (onCancel) {
        onCancel();
      }
      this.close(id);
    };
    this.root = createRoot(target);
    this.root.render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal id={id} onCancel={close} component={<Component className={className} {...props} onCancel={close} />} />
        </BrowserRouter>
      </Provider>
    );
    // eslint-disable-next-line no-plusplus
    this.id++;
    return id;
  },
  close(id: number) {
    const container: any = this.modals[id];
    if (container) {
      this.root.unmount();
      document.body.removeChild(container);
    }
    delete this.modals[id];
  },
  closeAll() {
    const keys = Object.keys(this.modals).map((key) => parseInt(key, 10));
    keys?.forEach((key) => {
      this.close(key);
    });
  },
  openUserModal: (props: any) => {
    return modalService.open({
      component: UserModal,
      props,
    });
  },
};

export default modalService;
