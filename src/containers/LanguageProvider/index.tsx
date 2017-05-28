import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { createSelector } from 'reselect'
import { selectLocale } from 'store/language/selectors'
import { AppState } from 'store/reducer'
import config from 'config'

interface Props {
    locale?: string,
    messages?: any,
    children?: any
}

interface State {}

const mapstateToProps = createSelector(
  [selectLocale],
  (locale) => ({
      locale,
  })
)

export default class LanguageProvider extends Component<Props, State> {

  render () {
    const {locale = config.language.defaultLocale, messages, children} = this.props
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        { children }
      </IntlProvider>
    )
  }
}
