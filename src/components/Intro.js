import React from 'react'
import topImage from '../images/shape-1.png'
import bottomImage from '../images/shape-2.png'

export default function Intro(props) {

    return (
        <div className="intro">
            <img className="topImage" src={topImage}></img>
            <div className="intro-container">
                <h1>Quizzical</h1>
                <h4>Ready to get your mind blown?</h4>
                <button onClick={props.startQuiz}>Start Quiz</button>
            </div>
            <img className="bottomImage" src={bottomImage}></img>
        </div>
    )
}