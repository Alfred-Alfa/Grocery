import logo from './logo.svg';
import './App.css';
import AddGroce from './Components/AddGroce';
import SearchPro from './Components/SearchPro';
import Delpro from './Components/Delpro';
import Navbar from './Components/Navbar';
import View from './Components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddGroce/>} />
      <Route path="/Search" element={<SearchPro/>} />
      <Route path="/Delete" element={<Delpro/>} />
      <Route path="/View" element={<View/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
