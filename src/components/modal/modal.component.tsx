import styled from './modal.module.css';

type Props = {
  isCorrect: boolean;
  turn: number;
  solution: string;
};

export const Modal = ({isCorrect, solution, turn}: Props) => {
  return (
    <div className={styled.modal}>
      {isCorrect ? (
        <div>
          <h2>You Win</h2>
          <p className={styled.solution}>Solution is {solution}</p>
          <p>Your guess in {turn} turn</p>
        </div>
      ) : (
        <div>
          <h2>You lost</h2>
          <p className={styled.solution}>Solution was {solution}</p>
          <p>You can try again :) </p>
        </div>
      )}
    </div>
  );
};
