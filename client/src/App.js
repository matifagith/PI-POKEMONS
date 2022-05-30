import './App.css';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'
import PokeDetail from './components/PokeDetail/PokeDetail';
import CreatePoke from './components/CreatePoke/CreatePoke';
import MyPokes from './components/MyPokes/MyPokes';
import AboutMe from './components/AboutMe/AboutMe';
import Experiments from './components/Experiments/Experiments';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/mypokes' component={MyPokes} />
      <Route exact path='/poke/:id' component={PokeDetail} />
      <Route exact path='/create' component={CreatePoke} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/experiments' component={Experiments} />
    </div>
  );
}

export default App;
