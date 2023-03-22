import {useEffect, useState} from 'react';
import data from '../../../data/db.json';
import styled from './keypad.module.css';
import type {usedKeysType} from '../../hook/useWordle';

type Props = {
  usedKeys: usedKeysType;
};

type LetterDataType = {
  key: string;
};

export const Keypad = ({usedKeys}: Props) => {
  const [letters, setLetters] = useState<LetterDataType[]>([]);

  useEffect(() => {
    if (data) {
      const {letters} = data;
      setLetters(letters);
    }
  }, []);

  return (
    <div className={styled.keypad}>
      {letters &&
        letters.map(({key}) => {
          const color = usedKeys[key];
          return (
            <div key={key} className={styled[color]}>
              {key}
            </div>
          );
        })}
    </div>
  );
};
