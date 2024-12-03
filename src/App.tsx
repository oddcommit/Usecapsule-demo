import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <main className='font-borna'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
