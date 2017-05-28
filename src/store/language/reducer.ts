import { Action } from 'redux'
import DeviceInfo from 'react-native-device-info'
import config from 'config'

export interface LanguageState {
    locale: String,
    supportedLanguages: String[]
}

const phoneLocale = DeviceInfo.getDeviceLocale()

const initialState: LanguageState = {
  locale: config.language.supportedLocales.includes(phoneLocale) ? phoneLocale : config.language.defaultLocale,
  supportedLanguages: config.language.supportedLocales
}

const languageReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default languageReducer
