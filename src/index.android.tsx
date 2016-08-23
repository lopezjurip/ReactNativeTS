import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
    render() {
        return (
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as React.ViewStyle,
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as React.TextStyle,
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as React.TextStyle,
});
