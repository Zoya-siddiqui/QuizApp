import React from 'react'
import { Link } from 'react-router-dom'
import Quiz from '../components/Quiz';

const Start = () => {
  return (
    <div>
       <div className='container'>
            <h1 style={{fontFamily: "'Mrs Saint Delafield', cursive", color:"white",fontSize:"7rem",letterSpacing:"5px", fontWeight:"100",marginBottom:"0"}}>Welcome</h1>
            <p className='discription'>Elevate your knowledge with Quizzify – the ultimate quiz app! Dive into a world of captivating trivia, challenge friends, and unlock your brain's full potential. Personalized quizzes, real-time competitions, and endless fun – download now and become the Quiz Champion! </p>
            <Link to='/quiz'className='mbtn'><a>Start quiz</a></Link>
       </div>
    </div>
  )
}

export default Start