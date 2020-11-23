import { IS_DIALOGS, OPEN_CALENDAR_DIALIOG } from './types';

export default {
  [IS_DIALOGS]: (state, payload) => {
    state.isDialog = payload;
  },
  [OPEN_CALENDAR_DIALIOG]: (state, payload) => {
    state.calendar.startDate = payload.date;
    state.calendar.startTime = payload.time;
    state.calendar.hasTime = payload.hasTime;
    state.dialog = true;
  }
  // [CLOSE_CALENDAR_DIALOG]: state => {
  //   state.dialog = false;
  // }
};
