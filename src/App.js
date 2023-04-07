import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  return (
    <Routers>
      <Navbar />
      <main className="bg-[#fafafa] pb-48">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={<Categories />} />
        </Routes>
      </main>
    </Routers>
  );
}

export default App;
