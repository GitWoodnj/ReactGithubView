import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const reducers = { ...rootReducer };

  const store = createStore(
    reducers,
    initialState
  );

  return store;
}
