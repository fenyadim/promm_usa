import { Dispatch, SetStateAction } from 'react';

export const toggleVisible = (setState: Dispatch<SetStateAction<boolean>>, state: boolean) => {
  return () => setState(!state);
};
