import React from 'react'


const Question = (props) => {

    const [options, setOptions] = React.useState([])
    const [selectedOption, setSelectedOption] = React.useState(() => {
        return {
        question: props.question,
        rightAnswer: props.correct_answer,
        wrongAnswers: props.incorrect_answers,
        selectedAnswer: ''
    }
})

    let arrayOfOptions = [props.correct_answer, ...props.incorrect_answers]

    React.useEffect(() => {
        setOptions(shuffleArray(arrayOfOptions))
    }, [])

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));          
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;
     }

    const select = (event) => {
        console.log(event.target.innerText)
        setSelectedOption(prevState => {
            return {
                ...prevState, 
                selectedAnswer: event.target.innerText
            }
        })
    }

    let listOfOptions
    if (props.submitStatus) {
        listOfOptions = options.map((item, index) => {
            if (selectedOption.selectedAnswer === selectedOption.rightAnswer && selectedOption.selectedAnswer === item) {
                return (
                    <button key={index} style={{backgroundColor: '#94D7A2', border: 'none'}}>{item}</button>
                )
            } else if (selectedOption.selectedAnswer !== selectedOption.rightAnswer && selectedOption.selectedAnswer === item) {
                return (
                    <button key={index} style={{backgroundColor: '#F8BCBC', border: 'none', color: '#7c82a4'}}>{item}</button>
                )
            } else if (item === selectedOption.rightAnswer) {
                return (
                    <button key={index} style={{backgroundColor: '#94D7A2', border: 'none'}}>{item}</button>
                )
            } else {
                return (
                    <button key={index}>{item}</button>
                )
            }
        })
    } else {
        listOfOptions = options.map((item, index) => {
            if (selectedOption.selectedAnswer === item) {
                return (
                    <button style={{backgroundColor: 'lightblue'}} onClick={select} key={index}>{item}</button>
                )
            } else {
                return <button onClick={select} key={index}>{item}</button>
            }
            
    })
    }    

    React.useEffect(() => {
        if (selectedOption.rightAnswer === selectedOption.selectedAnswer) {
            props.getCountProp(prevState => prevState + 1);
        }
    }, [selectedOption])
    

    return (
        <div className="question">
            <h2>{props.question}</h2>
            <div className="option">{listOfOptions}</div>
        </div>
    )
}

export default Question;