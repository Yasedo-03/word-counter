import { createAction, props } from '@ngrx/store';

export const countWords = createAction(
  '[Word Count] Count',
  props<{ text: string }>()
);
