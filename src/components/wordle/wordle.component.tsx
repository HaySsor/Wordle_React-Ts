import {useEffect} from 'react';
import {useWordle} from '../../hook/useWordle';
import {Grid} from '../grid/grid.component';

type Props = {
  solution: string;
};

export const Wordle = ({solution}: Props) => {
  const {currentGuess, handleKeyup, guesses, turn} = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <span>{currentGuess}</span>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
};
