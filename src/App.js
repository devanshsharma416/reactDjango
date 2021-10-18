// import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Article from './components/Article';
import Topics from './components/Topics';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path = '/' component = {Topics}/>
        <Route exact path = '/register' component = {Register}/>
        <Route exact path = '/article' component = {Article}/>
        <Route exact path = '/login' component = {Login}/>
      </Switch>


    </div>
  );
}

export default App;
