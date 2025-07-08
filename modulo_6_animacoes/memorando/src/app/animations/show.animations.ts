import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  state('show', style({})),
  transition('void => show', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      }),
    ),
  ]),
  transition('show => void', [
    animate(
      300,
      style({
        opacity: 0,
      }),
    ),
  ]),
]);
