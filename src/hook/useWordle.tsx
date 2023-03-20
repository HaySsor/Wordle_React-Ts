import {useState} from 'react';

export type typeGuesses = {
  key: string;
  color: string;
};

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<(typeGuesses | undefined)[][]>([
    ...Array(6),
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    let solutionArray: (string | null)[] = [...solution];
    let formattedGuess: typeGuesses[] = [...currentGuess].map((l) => {
      return {key: l, color: 'grey'};
    });

    // find any green letters
    formattedGuess.forEach((item, index) => {
      if (solutionArray[index] === item.key) {
        formattedGuess[index].color = 'green';
        solutionArray[index] = null;
      }
    });

    // find yellow color
    formattedGuess.forEach((item, index) => {
      if (solutionArray.includes(item.key) && item.color !== 'green') {
        formattedGuess[index].color = 'yellow';
        solutionArray[solutionArray.indexOf(item.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess: typeGuesses[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((old) => {
      let newGuesses = [...old];
      console.log(newGuesses);
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((old) => {
      return [...old, currentGuess];
    });
    setTurn((old) => {
      return old + 1;
    });
    setCurrentGuess('');
  };

  const handleKeyup = (event: KeyboardEvent) => {
    const {key} = event;
    if (key === 'Enter') {
      if (turn > 5) {
        return;
      }
      if (currentGuess.length !== 5) {
        return;
      }
      if (history.includes(currentGuess)) {
        return;
      }

      const formatted = formatGuess();
      console.log(formatted);
      addNewGuess(formatted);
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((old) => {
          return old + key;
        });
      }
    }
    if (key === 'Backspace') {
      setCurrentGuess((old) => {
        return old.slice(0, -1);
      });
    }
  };

  return {turn, currentGuess, guesses, isCorrect, handleKeyup};
};
