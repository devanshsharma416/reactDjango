// import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Article from './components/Article';
import Topics from './components/Topics';
import {CookiesProvider} from 'react-cookie'

function App() {
  return (
    <div>
    <CookiesProvider>
      <Navbar/>
      <Switch>
        <Route exact path = '/' component = {Topics}/>
        <Route exact path = '/register' component = {Register}/>
        <Route exact path = '/article' component = {Article}/>
        <Route exact path = '/login' component = {Login}/>
      </Switch>

      </CookiesProvider>
    </div>
  );
}

export default App;
