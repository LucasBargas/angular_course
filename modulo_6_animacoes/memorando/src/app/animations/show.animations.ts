import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
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
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      }),
    ),
  ]),
]);
