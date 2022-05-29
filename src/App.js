import './App.css';
import Intro from './components/Intro'
import React from 'react'
import Quiz from './components/Quiz'

function App() {

  const [hasStarted, setHasStarted] = React.useState(false)
  const [quiz, setQuiz] = React.useState([])

  function startQuiz() {
    setHasStarted(prevState => !prevState)
  }

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(response => response.json())
      .then(data => setQuiz(data.results))

  }, [])


  return (
    hasStarted 
    ? 
    <Quiz 
      questions={quiz}
      didItStart={setHasStarted}
    /> 
    : 
    <Intro 
      startQuiz={startQuiz}
    />
    
  )
}

export default App;
