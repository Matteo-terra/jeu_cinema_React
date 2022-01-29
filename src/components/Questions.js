import React, { useState } from 'react';
import {questions} from '../data/QuestionData';
import '../styles/QuestionStyle.css';
import { Routes, Route, Link } from "react-router-dom";


function Questions(){
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
    const handleAnswerOptionClick = (isCorrect, id) => {
        if (isCorrect) {
            setScore(score + 1);
            localStorage.setItem("score", score + 1);
            localStorage.setItem("answer" + id, "right");
        } else {
            localStorage.setItem("answer" + id, "false");
        }
        console.log("le score est de " + score)
    
        const nextQuestion = currentQuestion + 1;
        
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    var prenom = localStorage.getItem("prenom", prenom)

    
    const backQuestion = () => {
        const previousQuestion = currentQuestion - 1;
        console.log(currentQuestion)

        var answerResponse = localStorage.getItem("answer" + currentQuestion, answerResponse);

        if (currentQuestion > 0 && answerResponse === "right") {
            setCurrentQuestion(previousQuestion);
            
            setScore(score - 1);
            console.log("le score est de " + score)
            localStorage.setItem("score", score - 1);
        } else if (currentQuestion > 0 && answerResponse === "false") {
            setCurrentQuestion(previousQuestion);
        } else {
            setShowScore(false);
        }
    }

    return (
        <div>
        <div className="labelQuizz">
        A toi de jouer {prenom} !
        </div>
        <br/>
        <div className='app'>
            {showScore ? (
                <div>     
                    <div className='score-section'>
                        <p>Vous avez eu {score} / {questions.length}</p>
                    </div>
                    <div className='redirect-film'>
                        <nav>
                            <Link to="/listeFilm">Voir la liste de films</Link>
                        </nav>
                    </div>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect, questions[currentQuestion].id)}>{answerOption.answerText}</button>
                        ))}
                        <div>
                        <button className="back" onClick={() => backQuestion()}>Question précédente</button>
                        </div>
                    </div>
                </>
            )}
        </div>
      
    </div>
    );
}

export default Questions