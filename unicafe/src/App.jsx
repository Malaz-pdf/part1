import { useState } from 'react'
const Button = (props) => {
  return(
   <button onClick={props.onClick}>
      {props.children}
    </button>  
  )
}
const StatisticLine =(props) => {
  return(
      <tr>
        <td> {props.text} </td>
        <td> {props.value} </td>
      </tr>
    
  )
}

const Statistics = ({good,neutral,bad,total,average,positivePercent}) => {
  // ...
  return (
    <div>
      <h2>statistics</h2>
      <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positivePercent + "%"}/>
      </tbody>
      </table>
    </div>
  )
}

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

  let statistics
  if(total > 0){
   statistics= (
    <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positivePercent={positivePercent}
    />
  )}
  else {
    statistics = <p> No feedback given </p>

  }
  
  return (
    <div>
      <h1>give feedback</h1> 
      <Button onClick = {handelGoodClick}> good </Button>
      <Button onClick = {handelNeutralClick}> neutral </Button>
      <Button onClick = {handelBadClick}> bad </Button>
      {statistics}
    </div>
  )
}

export default App