import store from './store';
import reducers from './reducers';

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Action<Type extends string, Payload = void | any> {
  readonly type: Type;
  readonly payload?: Payload;
}
