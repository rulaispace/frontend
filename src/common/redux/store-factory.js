import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import boxing from '../config/encapsulation-config'
import {deepOverride} from '../utils/object'
import ObjectStorage from "./object-storage";
import Any from "../utils/any";
import accountReducer from "../../biz/account/reducer";
import layoutReducer from "../../biz/layout/reducer";
import notificationReducer from "../../biz/content/notification/reducer";
import documentReducer from "../../biz/content/document/reducer";
import organizationReducer from "../../biz/content/organization/reducer";
import scheduleReducer from "../../biz/content/schedule/reducer";
import resourceReducer from "../../biz/content/resource/reducer";
import ruleReducer from "../../biz/content/rule/reducer";
import announcementReducer from "../../biz/content/announcement/reducer";
import regulationReducer from "../../biz/content/regulation/reducer";
import commonNames from "../config/common-name-config";

function createLoggerMiddleWare() {
    return (
        store => next => action => {
            console.groupCollapsed('dispatching', action.type)
            console.log('###PRE STATE###', JSON.stringify(store.getState(), null, 4))
            console.log('###ACTION###', JSON.stringify(action, null, 4))
            let result = next(action)
            console.log('###NEXT STATE###', JSON.stringify(store.getState(), null, 4))
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

const StoreFactory = Any.extend({
    create: function(
        {
            overrideState = {},
            enableLocalStorage = true,
            localStorage= ObjectStorage.create()
        } = {}
    ) {
        this.overrideState = overrideState
        this.enableLocalStorage = enableLocalStorage
        this.localStorage = localStorage

        return this
    },
    usingLocalStorage: function() {
        return this.enableLocalStorage && !this.localStorage.isEmpty()
    },
    get() {
        const store = applyMiddleware(
            createLoggerMiddleWare(), thunk, createSaverMiddleWare(this.localStorage))(
                createStore)(
                    combineReducers(StoreFactory.reducers()), this.usingLocalStorage() ? this.localStorage.read() : deepOverride(boxing, this.overrideState))

        store.alert = StoreFactory.message.func(commonNames.alert)
        store.tips = StoreFactory.message.func(commonNames.tips)

        StoreFactory.store = store // 用于清空数据

        return store
    },
})

StoreFactory.defaultReducers = {
    account: accountReducer,
    layout: layoutReducer,
    notification: notificationReducer,
    document: documentReducer,
    organization: organizationReducer,
    schedule: scheduleReducer,
    resource: resourceReducer,
    rule: ruleReducer,
    announcement: announcementReducer,
    regulation: regulationReducer,
}

StoreFactory.reducer = function(name) {
    return StoreFactory.defaultReducers[name]
}

StoreFactory.reducers = function() {
    const reducers = {}
    for (const property in StoreFactory.defaultReducers) {
        reducers[property] = StoreFactory.defaultReducers[property].proxy()
    }
    return reducers
}

StoreFactory.message = {
    func: function(type) {
        return function({
                            title,
                            message,
                            agreeCallback=function() {
                                StoreFactory.message.self.setState({
                                    ...StoreFactory.message.self.state,
                                    open: false
                                })
                            },
                            disagreeCallback=function() {
                                StoreFactory.message.self.setState({
                                    ...StoreFactory.message.self.state,
                                    open: false
                                })
                            }
        }) {
            StoreFactory.message.self.setState({
                open: true,
                type: type,
                title: title,
                message: message,
                agreeCallback: () => {
                    StoreFactory.message.self.setState({
                        ...StoreFactory.message.self.state,
                        open: false
                    })
                    agreeCallback()
                },
                disagreeCallback: () => {
                    StoreFactory.message.self.setState({
                        ...StoreFactory.message.self.state,
                        open: false
                    })
                    disagreeCallback()
                }
            })
        }
    },
    self: null,
}

StoreFactory.clear = function() {
    for (const name in StoreFactory.defaultReducers)
        StoreFactory.defaultReducers[name].clear(StoreFactory.store.getState()[name])
}

export default StoreFactory