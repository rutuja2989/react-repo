import './App.css';
import Create from './components/Create';
import Getelement from './components/Getelement';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route  path="/getelement" element={<Getelement/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
