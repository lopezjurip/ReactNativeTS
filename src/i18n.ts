import 'intl'
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import frLocaleData from 'react-intl/locale-data/fr'

import enTranslationMessages from 'translations/en.json'
import frTranslationMessages from 'translations/fr.json'

import config from 'config'

/**
 * add helpers to format date strings and all the i18n magic
 */
addLocaleData(enLocaleData)
addLocaleData(frLocaleData)

export const formatTranslationMessages: any = (locale: string, messages: any) => {
  const defaultFormattedMessages: any = locale !== config.language.defaultLocale ? formatTranslationMessages(config.language.defaultLocale, enTranslationMessages) : {}
  const formattedMessages: any = {}
  const messageKeys = Object.keys(messages)
  for (const messageKey of messageKeys) {
    if (locale === config.language.defaultLocale) {
      formattedMessages[messageKey] = messages[messageKey]
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey]
    }
  }

  return formattedMessages
}

export const translationMessages: any = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages)
}
