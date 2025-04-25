import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
