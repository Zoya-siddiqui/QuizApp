import React, { useEffect, useState } from 'react'
import { QuizData } from '../components/data/QuizData'
import QuizResult from '../components/QuizResult';
import Start from './Start';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const value = ["A", "B", "C", "D"];
    const timePerQuestion = 15;
    const [timer, setTimer] = useState(timePerQuestion);

    useEffect(() => {
        
        const timerId = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000); 

        return () => {
            clearInterval(timerId);
        };
    }, [currentQuestion]);

    useEffect(() => {
        if (timer === 0) {
            changeQuestion();

        }
    }, [timer]);



    const changeQuestion = () => {

        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
            setTimer(timePerQuestion)
        } else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {

        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
        setTimer(timePerQuestion);
    }

    return (
        <div>
            <div className="container" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "start" }}>
                {showResult ? (
                    <>
                        <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                    </>
                ) : (
                    <>
                        <div className="question">
                            <span style={{ color: "gray", fontSize: "12px", marginBottom: "50px" }}>Question 6 of 10</span><br></br>
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            <div style={{ color: "white", textAlign: "right", marginBottom: "10px" }}><span>Timer: {timer} seconds</span></div>
                            {QuizData[currentQuestion].options.map((option, i) => {
                                const isCorrect = i + 1 === QuizData[currentQuestion].answer;
                                const isClicked = i + 1 === clickedOption;

                                let optionClass = "option-btn";
                                if (isClicked) {
                                    optionClass += isCorrect ? " correct" : " incorrect" 
                                   
                                }
                                return (

                                    <button style={{ background: "#43424a", color: "white", padding: "10px 10px 10px 10px", marginBottom: "10px", textAlign: "start" }}
                                        className={optionClass}
                                        key={i}
                                        onClick={() => {
                                            if (!clickedOption) {
                                                setClickedOption(i + 1);
                                                setTimer(timePerQuestion);
                                            }
                                        }}
                                      

                                    >
                                        <div style={{ marginRight: "10px" }}>{value[i]}. </div>


                                        {option}
                                    </button>
                                )
                            })}
                            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                        </div>

                    </>)}
            </div>
        </div>
    )
}

export default Quiz