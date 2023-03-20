import {useEffect, useState} from 'react';
import {Wordle} from './components/wordle/wordle.component';
import './App.css';

const DATA_LINK = 'http://localhost:3001/solutions';

export type db = {
  id: number;
  word: string;
};

function App() {
  const [solution, setSolution] = useState<null | string>(null);

  useEffect(() => {
    const GetSolution = async () => {
      const res = await fetch(DATA_LINK);
      const data: db[] = await res.json();
      const randomSolution = data[Math.floor(Math.random() * data.length - 1)];

      setSolution(randomSolution.word);
    };

    GetSolution();
  }, []);

  console.log(solution);

  return (
    <div>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
