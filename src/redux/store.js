import {combineReducers, createStore} from 'redux'
import UserReducer from './reducers/User'

const Reducers = combineReducers({
    UserReducer  
})

// const middleware = composeWithDevTools(applyMiddleware(thunk))

// create a makeStore function
const store = createStore(
  Reducers
);

export default store