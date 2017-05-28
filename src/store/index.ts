/**
 * @flow
 */

import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'remote-redux-devtools'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'

import rootReducer from './reducer'
import rootEpic from './middleware'

import config from 'config'

const engine = createEngine(config.storeKey)

const store = createStore(
  storage.reducer(rootReducer),
  composeWithDevTools(
    applyMiddleware(
      createEpicMiddleware(rootEpic),
      storage.createMiddleware(engine, [], config.actionsToPersist)
    )
  )
)

const load = storage.createLoader(engine)
load(store)

export default store
