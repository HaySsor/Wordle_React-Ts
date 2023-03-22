import {useEffect, useState} from 'react';
import {useWordle} from '../../hook/useWordle';
import {Grid} from '../grid/grid.component';
import {Keypad} from '../keypad/keypad.component';
import {Modal} from '../modal/modal.component';

type Props = {
  solution: string;
};

export const Wordle = ({solution}: Props) => {
  const {currentGuess, handleKeyup, guesses, turn, usedKeys, isCorrect} =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener('keyup', handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener('keyup', handleKeyup);
    }
    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);
  console.log(solution);
  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
};
