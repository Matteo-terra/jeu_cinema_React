import './App.css';
import Questions from './components/Questions';
import MyForm from './components/FormInscription';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import InTheaterFilms from './components/InTheaterFilms';
import ListeEnvie from './components/ListeEnvie';
import Recap from './components/Recap';
import Remerciement from './components/Remerciement';

function App() {
  return (
    <div> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="inscription" element={<MyForm/>} />
      <Route path="quizz" element={<Questions/>} />
      <Route path="listeFilm" element={<InTheaterFilms />} />
      <Route path="listeEnvie" element={<ListeEnvie />} />
      <Route path="recap" element={<Recap />} />
      <Route path="remerciement" element={<Remerciement />} />

    </Routes>
  </div>
  );
}

export default App;
