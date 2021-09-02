import './App.css';
import { Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={ItemListContainer} />
    </div>
  );
}

export default App;
