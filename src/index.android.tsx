import React, { Component } from "react"
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native"
import { Provider } from 'react-redux'
import store from 'store/index'
import { translationMessages } from 'i18n'

import LanguageProvider from 'containers/LanguageProvider'

interface Props {}

interface State {}

export default class App extends Component<Props, State> {
    render() {
        return (
            <Provider store={store}>
                <LanguageProvider messages={translationMessages}>
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={styles.instructions}>
                            To get started, edit index.android.js
                        </Text>
                        <Text style={styles.instructions}>
                            Shake or press menu button for dev menu
                        </Text>
                    </View>
                </LanguageProvider>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as TextStyle,
});
