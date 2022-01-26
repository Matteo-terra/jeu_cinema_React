import React, { useState } from 'react';
import {questions} from '../data/QuestionData';
import '../styles/QuestionStyle.css';
import { Routes, Route, Link } from "react-router-dom";


function Questions(){
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const backQuestion = () => {
        const previousQuestion = currentQuestion - 1;

        if (currentQuestion > 0) {
            setCurrentQuestion(previousQuestion);
        } else {
            setShowScore(false);
        }
    }

    return (
        <div className='app'>
            {showScore ? (
                <div>     
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
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
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                        <div>
                        <button class="back" onClick={() => backQuestion()}>Question précédente</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Questions