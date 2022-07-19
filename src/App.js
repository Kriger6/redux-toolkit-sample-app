import './App.css';
import { Form } from './components/form/';
import { List } from './components/list';
import { Toggle } from './components/toggle';

function App() {
  return (
    <div className="App">
      <List />
      <Form />
      <Toggle />
    </div>
  );
}

export default App;
