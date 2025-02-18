import './App.css';
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from './components/RepetitionExercise';
import {useNavigate} from "react";

function start() {

  return (
    <div className='App'>
      <header className='app-Header'>
        <h1>GrindGuru</h1>
        <ExerciseButtons />
      </header>
    </div>
  );

}

function ExerciseButtons() {
  const nav = useNavigate();

  return (
    <nav>
      <ul>
        <li> <button onClick={() => nav("/stair-master")}>Stair Master</button></li>
        <li> <button onClick={() => nav("/hack-squat")}>Hack Squat</button></li>
      </ul>
    </nav>
  );
}

function App() {
  return (

  <div className="App">
    <Home />
    <DurationExercise />
    <RepetitionExercise />
  </div>
);
}


export default App;
