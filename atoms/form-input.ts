import { atom } from 'recoil';
import { Inputs } from '../pages/bar/create';

export const formInputState = atom<Inputs | undefined>({
  key: 'form-input-state',
  default: undefined,
});
