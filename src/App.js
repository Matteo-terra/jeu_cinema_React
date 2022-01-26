import logo from './logo.svg';
import './App.css';
import Questions from './components/Questions';
import MyForm from './components/FormInscription';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import TestFilmDetail from './components/TestFilmDetail';
import InTheaterFilms from './components/InTheaterFilms';

function App() {
  return (
    <div> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="inscription" element={<MyForm/>} />
      <Route path="quizz" element={<Questions/>} />
      <Route path="Filmd" element={<TestFilmDetail/>} />
      <Route path="listeFilm" element={<InTheaterFilms />} />

    </Routes>
  </div>
  );
}

export default App;
