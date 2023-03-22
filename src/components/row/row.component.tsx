import styled from './row.module.css';
import type {typeGuesses} from '../../hook/useWordle';
type Props = {
  guess?: (typeGuesses | undefined)[];
  currentGuess?: string;
};

export const Row = ({guess, currentGuess}: Props) => {
  if (currentGuess) {
    let letters = currentGuess.split('');
    return (
      <div className={`${styled.row} ${styled.current}`}>
        {letters.map((letter, index) => {
          return (
            <div key={index} className={styled.filled}>
              {letter}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  if (guess) {
    return (
      <div className={`${styled.row} ${styled.past}`}>
        {guess.map((l, i) => {
          if (!l) return;
          return (
            <div key={i} className={styled[l.color]}>
              {l?.key}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styled.row}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
