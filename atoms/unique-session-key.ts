import { atom } from 'recoil';

export const sessionKey = atom<string | undefined>({
  key: 'unique-session-key',
  default: undefined,
});
