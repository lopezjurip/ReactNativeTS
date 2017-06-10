import React, { Component } from "react"
import { Provider } from 'react-redux'
import store from 'store/index'
import { translationMessages } from 'i18n'

import LanguageProvider from 'containers/LanguageProvider'
import Root from './containers/Root'

class App extends Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <LanguageProvider messages={translationMessages}>
                    <Root />
                </LanguageProvider>
            </Provider>
        );
    }
}

export default App
