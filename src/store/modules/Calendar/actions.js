import { IS_DIALOGS } from './types';

export default {
  [IS_DIALOGS]: async ({ commit }) => {
    const test = 'test';
    console.log(test);
    commit(IS_DIALOGS, test);
  }
};
