import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import MainHub from './pages/MainHub';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Proiecte from './pages/Proiecte';
import Mentorat from './pages/Mentorat';
import Despre from './pages/Despre';
import Bc from './pages/Bc';
import Program from './pages/Program';

function App() {
  return (
    <div className="App">
      
      <Router>
     
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/mainhub" element={<MainHub/>}/>
        <Route exact path="/despre" element={<Despre/>}/>
        <Route exact path="/bc" element={<Bc/>}/>
        <Route exact path="/program" element={<Program/>}/>
        <Route exact path="/mentorat" element={<Mentorat/>}/>
        <Route exact path="/proiecte" element={<Proiecte/>}/>
      </Routes>

      </Router>
      
    </div>
    
  );
}

export default App;
