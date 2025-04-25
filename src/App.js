import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/body' element={<Body />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
