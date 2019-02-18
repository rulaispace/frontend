import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {init} from './init-state'
import {deepOverride} from '../utils/object'
import ObjectStorage from "./object-storage";
import ReducerFactory from "./reducer-factory";
import Any from "../utils/any";

function createLoggerMiddleWare() {
    return (
        store => next => action => {
            console.groupCollapsed('dispatching', action.type)
            console.log('pre state', JSON.stringify(store.getState()))
            console.log('action', JSON.stringify(action))
            let result = next(action)
            console.log('next state', JSON.stringify(store.getState()))
            console.groupEnd()
            return result
        }
    )
}

function createSaverMiddleWare(storeLocalStorage) {
    return (
        store => next => action => {
            let result = next(action)
            storeLocalStorage.update(store.getState())
            return result
        }
    )
}

const StoreFactory = {
    create: function(
        {
            overrideState = {},
            enableLocalStorage = true,
            localStorage= ObjectStorage.create()
        } = {}
    ) {
        const self = Any.create.call(this)
        self.overrideState = overrideState
        self.enableLocalStorage = enableLocalStorage
        self.localStorage = localStorage

        return self
    },

    usingLocalStorage: function() {
        return this.enableLocalStorage && !this.localStorage.isEmpty()
    },

    get() {
        return applyMiddleware(
            createLoggerMiddleWare(),
            thunk,
            createSaverMiddleWare(this.localStorage)
        )(
            createStore
        )(
            combineReducers(ReducerFactory.reducers()),
            this.usingLocalStorage() ? this.localStorage.read() : deepOverride(init, this.overrideState)
        )
    }
}

export default StoreFactory