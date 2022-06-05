import { useState } from 'react'

const Button = ({titre,handleClick}) => {
  return (
    <button onClick={handleClick}>{titre}</button>
  )
}

const Statistic= (props) => {
  if(props.titre==="positive")
  {return (
    <tr>
    <td>{props.titre}</td>
    <td>{props.value}%</td>
    </tr>
  )
  }
  return (
    <tr>
    <td>{props.titre}</td>
    <td>{props.value}</td>
    </tr>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  let totale =  good + neutral + bad
  let average = (good - bad) / totale
  let positive = (good / totale) * 100

  if (totale === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic titre='good' value={good} />
        <Statistic titre='neutral' value={neutral} />
        <Statistic titre='bad' value={bad} />
        <Statistic titre='all' value={totale} />
        <Statistic titre='average' value={average} />
        <Statistic titre='positive' value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [totale,setAll] = useState(0)

  const setToGood = () => {
    setGood(good+1)
    setAll(totale+1)
  }
  const setToNeutral = () => {
    setNeutral(neutral+1)
    setAll(totale+1)
  }
  const setToBad = () => {
    setBad(bad+1)
    setAll(totale+1)
  }
  
  
  
  return (
    <div>
    <h1>give feedback</h1>
    <Button titre="good" handleClick={setToGood} />
    <Button titre="neutral" handleClick={setToNeutral} />
    <Button titre="bad" handleClick={setToBad} />
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
  


}

export default App;