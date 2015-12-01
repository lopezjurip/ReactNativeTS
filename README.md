# ReactNativeTS
[![Build Status][ci-image]][ci-url] [![dependencies][dependencies-image]][dependencies-url] [![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]

Minimal template of a React Native project in Typescript.

> Follow each step as a commit to see how to setup a React Native project with Typescript.

## Advanced templates

Each branch in this repository has a more complex setup based on a previous one.

#### Branches:
* [router](https://github.com/mrpatiwi/ReactNativeTS/tree/router): Flux architecture routing using [react-native-router-flux](https://github.com/aksonov/react-native-router-flux).
  * [alt](https://github.com/mrpatiwi/ReactNativeTS/tree/alt): Complete Flux implementation using [alt](https://github.com/goatslacker/alt).


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
$ npm run android
```

[ci-image]: https://travis-ci.org/mrpatiwi/ReactNativeTS.svg
[ci-url]: https://travis-ci.org/mrpatiwi/ReactNativeTS
[dependencies-image]: https://david-dm.org/mrpatiwi/ReactNativeTS.svg
[dependencies-url]: https://david-dm.org/mrpatiwi/ReactNativeTS
[dev-dependencies-image]: https://david-dm.org/mrpatiwi/ReactNativeTS/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/mrpatiwi/ReactNativeTS#info=devDependencies
