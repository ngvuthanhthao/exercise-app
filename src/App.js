import './App.css';
import {useCallback, useState} from 'react';
import StopWatch from './/components/StopWatch';
import {DurationExercise} from './components/DurationExercise';

const MENU_SCREEN = 'menu';
const EXERCISE_SCREEN = 'exercise';
const DURATION_EXERCISE = 'duration';
const REPETITION_EXERCISE = 'repetition';


function RepetitionExercise({exercise, setMenuScreen}) {
  let [count, setCount] = useState(0)
  return <div>
    <p>{exercise.name}e</p>
    <p style={{fontSize: "5em"}}>{count}</p>
    <button onClick={()=> setCount(count=>count+1)}> Increment </button>
    <button onClick={()=> setCount(0)}> Reset</button>
    <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
}

let exerciseList = [
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Plank" },
  { type: REPETITION_EXERCISE, name: "Push Ups" },

];

function App() {
  const [currentScreen, setCurrentScreen] = useState(EXERCISE_SCREEN);
  const [currentExercise, setCurrentExercise] = useState(exerciseList[3]);
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise)=> {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  })

  if (currentScreen === MENU_SCREEN) {
    screenComponent = <div>
      <p>Exercise Menu</p>
      <ul>
  {exerciseList.map(({ type, name }) => {
    return (
      <li key={name}>
        <button onClick={() => buttonClick({ type, name })}>
          {name}
        </button>
      </li>
    );
  })}
</ul>
    </div>
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = <DurationExercise 
          exercise={currentExercise}
          setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
    />
    break;
      case REPETITION_EXERCISE:
        screenComponent = <RepetitionExercise 
          exercise={currentExercise}
          setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
    />
    break;
    default:
      screenComponent = undefined
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;