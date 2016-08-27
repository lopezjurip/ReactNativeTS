// It is necessary to add the typings of imported oomponents

declare module "react-native-button" {
    import React, { Component } from "react";

    interface Props {
        style?: React.ViewStyle;
        styleDisabled?: React.ViewStyle;
        onPress?: () => any;
    }

    export default class Button extends Component<Props, any> {}
}

/*
// If you are lazy and don't care about the strict typings:

declare module "react-native-button" {
    const value: any;
    export default value;
}
*/
