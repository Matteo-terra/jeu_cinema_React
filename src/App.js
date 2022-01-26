import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions';
import MyForm from './components/FormInscription';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="inscription" element={<MyForm/>} />
      <Route path="quizz" element={<Questions/>} />
    </Routes>
  </div>
  );
}

export default App;
