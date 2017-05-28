import { createSelector, OutputSelector } from 'reselect'
import { AppState } from '../reducer'

export const selectLanguage = (state: AppState) => state.language

export const selectLocale =  createSelector(
  selectLanguage,
  (languageState) => languageState.locale
)
