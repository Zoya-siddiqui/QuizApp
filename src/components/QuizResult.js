import React from 'react'
import { QuizData } from './data/QuizData'
import { Link } from 'react-router-dom'


const QuizResult = ({score,totalScore,tryAgain}) => {
    return (
        <>
        <div className='resultsection'>
             <div className='show-score' >
                
                Total Number of Question : {totalScore}<br />
                Total Marks you Obtianed : {score}
            </div>
          <Link to='/'><button id="next-button" onClick={tryAgain}>Start Again</button></Link>
        </div>
       
        </>
    )
}

export default QuizResult