import React, { Component, PropTypes, StatelessComponent } from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { selectLocale } from 'store/language/selectors'
import { AppState } from 'store/reducer'
import config from 'config'

import { LanguageProviderProps } from './types'

const LanguageProvider: StatelessComponent<LanguageProviderProps> = ({
    locale = config.language.defaultLocale,
    children,
    messages
}) => (
    <IntlProvider locale={locale} messages={messages[locale]}>
      { children }
    </IntlProvider>
)

export default connect(
    (state: AppState) => ({
        locale: selectLocale(state)
    })
)(LanguageProvider)
