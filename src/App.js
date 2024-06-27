import {BrowserRRoute, Routes} from 'react-router-dom'

import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
