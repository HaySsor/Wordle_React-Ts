import type {typeGuesses} from '../../hook/useWordle';
import {Row} from '../row/row.component';

type Props = {
  currentGuess: string;
  guesses: (typeGuesses | undefined)[][];
  turn: number;
};

export const Grid = ({currentGuess, guesses, turn}: Props) => {
  return (
    <div>
      {guesses.map((item, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={item} />;
      })}
    </div>
  );
};
