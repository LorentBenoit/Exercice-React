import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from './components/Employee';
import Salaire from './components/Salaire';
import Conge from './components/Conge';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Employee />}>    </Route>
    <Route path="/fact" element={<Salaire />}>    </Route>
    <Route path="/pgcd" element={<Conge />}>    </Route>
    </Routes>
    </Router>
    );
    
}

export default App;