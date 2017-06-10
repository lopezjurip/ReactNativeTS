import { combineReducers } from 'redux'
import language, { LanguageState } from 'store/language/reducer'

export interface AppState {
    language: LanguageState
}

const rootReducer = combineReducers({
    language
})

export default rootReducer
