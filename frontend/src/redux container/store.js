import {createStore} from 'redux'
import {scanReducer} from './reducers'
export const store = createStore(scanReducer)