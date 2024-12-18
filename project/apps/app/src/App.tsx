import { List } from 'ui';
import {Provider } from 'ui/node_modules/react-redux';
import store from 'ui/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Pokemon list:</h1>
      <List />
    </Provider>
  );
};

export default App;
