
import './App.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import { Component } from 'react';
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Pokemons from './pages/Pokemons'
import Pokesingle from './components/Pokesingle'

//a work-around to use class component with React router: wrapping it in a functional component (also called a 'higher order component')
const RouterWrapper = () => {
  const params = useParams();
  return <Pokesingle params={params}{...props} />
}


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/pokemons/:pokesingle" element={<RouterWrapper />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

}

export default App;
