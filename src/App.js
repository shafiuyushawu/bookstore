import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Routers>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </Routers>
  );
}

export default App;
