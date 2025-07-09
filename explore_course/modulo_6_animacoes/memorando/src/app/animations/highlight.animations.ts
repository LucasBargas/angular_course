import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #b2b6ff',
      filter: 'brightness(100%)',
    }),
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #b2b6ff',
      filter: 'brightness(95%)',
    }),
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      }),
    ),
    animate(300),
  ]),
]);
