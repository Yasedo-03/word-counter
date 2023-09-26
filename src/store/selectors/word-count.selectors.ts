import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WordCountState } from '../reducers/word-count.reducer';

export const selectWordCountFeature = createFeatureSelector<WordCountState>('wordCount');

export const selectWords = createSelector(
  selectWordCountFeature,
  (state: WordCountState) => state.words
);

export const selectCharactersWithSpace = createSelector(
  selectWordCountFeature,
  (state: WordCountState) => state.charactersWithSpace
);

export const selectCharactersWithoutSpace = createSelector(
  selectWordCountFeature,
  (state: WordCountState) => state.charactersWithoutSpace
);
