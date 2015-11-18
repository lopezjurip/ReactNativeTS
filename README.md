# ReactNativeTS

Minimal template of a React Native project in Typescript.

> Follow each step as a commit [here](https://github.com/mrpatiwi/ReactNativeTS/commits/master).

## Getting Started

Clone this repository:
```sh
$ git clone https://github.com/mrpatiwi/ReactNativeTS.git
```

Install dependencies:
```sh
$ npm install
```

Watch and re-compile `.ts` and `.tsx` files:
```sh
$ npm run watch
```

Start server:
```sh
$ npm start
```

### iOS

Open `ios/ReactNativeTS.xcodeproj` in XCode.

### Android

Run:
```sh
$ react-native run-android
```

If you hace errors about *"Unable to download JS bundle"*, try:
```sh
adb reverse tcp:8081 tcp:8081
```
