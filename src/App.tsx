import {useEffect, useState} from 'react';
import {Wordle} from './components/wordle/wordle.component';
import data from '../data/db.json';
import './App.css';

export type db = {
  id: number;
  word: string;
};

function App() {
  const [solution, setSolution] = useState<null | string>(null);

  useEffect(() => {
    const GetSolution = () => {
      const {solutions} = data;
      const randomSolution =
        solutions[Math.floor(Math.random() * solutions.length - 1)];

      setSolution(randomSolution.word);
    };

    GetSolution();
  }, []);

  return (
    <div>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
