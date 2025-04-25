import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StyledPage from './pages/StyledPage';
import TailwindPage from './pages/TailwindPage';
import './index.css';
import './App.css';
import './input.css';
import './output.css';

const sizedBox = {
  height: '50px',
};
const sizedBox2 = {
  width: '50px',
};

function App() {
  
  return (
    <BrowserRouter>

      <div className="flex flex-col items-center gap-4 p-6">
        
        <h1 className="text-3xl font-bold">Projeto Prático</h1>
        <div style={sizedBox}>
        </div>
      
        {location.pathname === "/" && (
        <><nav className="flex gap-4">
            <Link to="/tailwind" className="text-blue-600 hover:underline">Tailwind Card</Link>
            <div style={sizedBox2}>
            </div>
            <Link to="/styled" className="text-blue-600 hover:underline">Styled Card</Link>
          </nav><div style={sizedBox}>
            </div></>
        )}
        <Routes>
          <Route path="/tailwind" element={<TailwindPage />} />
          <Route path="/styled" element={<StyledPage />} />
          <Route path="*" element={<div>Escolha uma das opções acima ☝️</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
