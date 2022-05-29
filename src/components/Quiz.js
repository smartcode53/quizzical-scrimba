import React from 'react'
import topImage from '../images/shape-1.png'
import bottomImage from '../images/shape-2.png'
import Question from './Question'

const Quiz = (props) => {

    const [hasSubmitted, setHasSubmitted] = React.useState(false)
    const [ansCount, setAnsCount] = React.useState(0)

    const submit = () => {
        setHasSubmitted(prevHasSubmitted => !prevHasSubmitted)
    }

    let listOfQuestions = props.questions.map((item, index) => {
        return (
            <Question 
                key={index}
                {...item}
                submitStatus={hasSubmitted}
                getCountProp={setAnsCount}
            />
        )
    })

    const restart = () => {
        props.didItStart(prevState => !prevState)
    }

    return (
        <div className="quiz-container">
            <img className="topImage"  alt="topImage" src={topImage}></img>
            <div className="secondQuizContainer">
                {listOfQuestions}
                <div className="buttonContainer">
                    {hasSubmitted && <span>You scored {ansCount}/5 correct answers</span>}
                    {hasSubmitted ? <button className="submitButton" onClick={restart}>Restart Quiz</button> : <button className="submitButton" onClick={submit}>Submit Quiz</button>}
                </div>
            </div>
            <img className="bottomImage" alt="bottomImage" src={bottomImage}></img>
        </div>
    )
}

export default Quiz;