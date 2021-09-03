import './App.css';
import { Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={ItemListContainer} />
      <Route exact path ='/products/:id' component={ItemDetailContainer} />
    </Switch>
    </div>
  );
}

export default App;
