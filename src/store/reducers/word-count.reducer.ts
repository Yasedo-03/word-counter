import { createReducer, on } from '@ngrx/store';
import { countWords } from '../actions/word-count.actions';

export interface WordCountState {
  words: number;
  charactersWithSpace: number;
  charactersWithoutSpace: number;
}

export const initialState: WordCountState = {
  words: 0,
  charactersWithSpace: 0,
  charactersWithoutSpace: 0
};

export const wordCountReducer = createReducer(
  initialState,
  on(countWords, (state, { text }) => ({
    ...state,
    words: text.split(' ').length,
    charactersWithSpace: text.length,
    charactersWithoutSpace: text.replace(/\s/g, "").length
  }))
);
