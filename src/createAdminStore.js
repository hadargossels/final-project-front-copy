import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import discountReducer from './reducers/discountReducer'
import productReducer from './reducers/productReducer'
import userReducer from './reducers/userReducer'
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import thunk from 'redux-thunk'

import { adminReducer,adminSaga, USER_LOGOUT} from 'react-admin';

export default function createAdminStore({authProvider,dataProvider,history,})  {
    const reducer = combineReducers({
        admin: adminReducer,
        router: connectRouter(history),
        discount:discountReducer,
        products: productReducer,
        user: userReducer,
    });
    const resettableAppReducer = (state, action) =>
        reducer(action.type !== USER_LOGOUT ? state : undefined, action);

    const saga = function* rootSaga() {
        yield all(
            [
                adminSaga(dataProvider, authProvider),
            ].map(fork)
        );
    };
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        (process.env.NODE_ENV === 'development' &&
            typeof window !== 'undefined' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
                traceLimit: 25,
            })) ||
        compose;
  
    const store = createStore(
        resettableAppReducer,
        { /* set your initial state here */ },
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
                // add your own middlewares here
                thunk
            ),
        ),        
    );
    sagaMiddleware.run(saga);
    return store;
};