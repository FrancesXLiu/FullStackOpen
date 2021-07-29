import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticText = (props) => {
  return (
    <>{props.text}</>
  )
}

const StatisticValue = (props) => {
  return (
    <>{props.value}</>
  )
}

const CountAll = (good, neutral, bad) => {
  const total = good + neutral + bad
  return (
    total
  )
}

const CalcAverage = (good, neutral, bad, all) => {
  return (
    (good + 0*neutral + -1*bad) / all
  )
}

const CalcPositivePercentage = (good, all) => {
  return good / all * 100
}

const Statistics = (props) => {
  let all = CountAll(props.good, props.neutral, props.bad)
  console.log(all)
  let average = CalcAverage(props.good, props.neutral, props.bad, all)
  console.log(average)
  let positive = CalcPositivePercentage(props.good, all)
  console.log(positive)
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    /* return (
      <div>
      <h1>Statistics</h1>
      <Statistic text="good" value={props.good}/> <br></br>
      <Statistic text="Neutral" value={props.neutral}/> <br></br>
      <Statistic text="bad" value={props.bad}/> <br></br>
      <Statistic text="all" value={all}/> <br></br>
      <Statistic text="average" value={average}/> <br></br>
      <Statistic text="positive" value={positive}/>%
      </div>
    ) */
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td><StatisticText text="good"/></td>
              <td><StatisticValue  value={props.good}/></td>
            </tr>
            <tr>
              <td><StatisticText text="Neutral"/></td>
              <td><StatisticValue value={props.neutral}/></td>
            </tr>
            <tr>
              <td><StatisticText text="bad"/></td>
              <td><StatisticValue value={props.bad}/></td>
            </tr>
            <tr>
              <td><StatisticText text="all"/></td>
              <td><StatisticValue value={all}/></td>
            </tr>
            <tr>
              <td><StatisticText text="average"/></td>
              <td><StatisticValue value={average}/></td>
            </tr>
            <tr>
              <td><StatisticText text="positive"/></td>
              <td><StatisticValue value={positive}/>%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  
  return (
    <>
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
    </div>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App