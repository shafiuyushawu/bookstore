import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </Routers>
  );
}

export default App;
