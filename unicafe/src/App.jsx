import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercent, setPositivePercent]= useState(0)

  const handelGoodClick = () => {
    const updatedGood = good + 1
    const updatedTotal = updatedGood + neutral + bad
    setGood(updatedGood)
    setTotal(updatedTotal)
    setAverage((updatedGood * 1 + neutral * 0 + bad * -1) / updatedTotal)
    setPositivePercent((updatedGood / updatedTotal ) * 100)
  }
  const handelNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = good + updatedNeutral + bad
    setNeutral(updatedNeutral)
    setTotal(updatedTotal)
    setAverage((good * 1 + updatedNeutral * 0 + bad * -1) / updatedTotal)
    setPositivePercent((good / updatedTotal ) * 100)
  }
  const handelBadClick = () => {
    const updatedbad = bad + 1
    const updatedTotal = good + neutral + updatedbad
    setBad(updatedbad)
    setTotal(updatedTotal)
    setAverage((good * 1 + neutral * 0 + updatedbad * -1) / updatedTotal)
    setPositivePercent((good / updatedTotal ) * 100)
  }
  
  return (
    <div>
      <h1>give feedback</h1> 
      <button onClick = {handelGoodClick}>good</button>
      <button onClick = {handelNeutralClick}>neutral</button>
      <button onClick = {handelBadClick}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positivePercent} % </p>

    </div>
  )
}

export default App