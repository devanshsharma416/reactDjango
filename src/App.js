// import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Login}/>
        <Route path = '/register' component = {Register}/>
      </Switch>


    </div>
  );
}

export default App;
