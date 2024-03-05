/* eslint-disable react/jsx-no-undef */
import StopWatch from "./StopWatch"
export function DurationExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  
  }