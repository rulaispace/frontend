import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import boxing from '../config/encapsulation-config'
import {deepOverride} from '../utils/object'
import ObjectStorage from "./object-storage";
import Any from "../utils/any";
import MessageReducer from "../dialog/reducer";
import accountReducer from "../../biz/account/reducer";
import layoutReducer from "../../biz/layout/reducer";
import notificationReducer from "../../biz/content/notification/reducer";
import DocumentReducer from "../../biz/content/document/reducer";
import OrganizationReducer from "../../biz/content/organization/reducer";
import ScheduleReducer from "../../biz/content/schedule/reducer";
import ResourceReducer from "../../biz/content/resource/reducer";
import RuleReducer from "../../biz/content/rule/reducer";
import announcementReducer from "../../biz/content/announcement/reducer";
import RegulationReducer from "../../biz/content/regulation/reducer";

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
        return applyMiddleware(
            createLoggerMiddleWare(),
            thunk,
            createSaverMiddleWare(this.localStorage)
        )(
            createStore
        )(
            combineReducers(StoreFactory.reducers()),
            this.usingLocalStorage() ? this.localStorage.read() : deepOverride(boxing, this.overrideState)
            // deepOverride(boxing, this.overrideState)
        )
    },
})

StoreFactory.defaultReducers = {
    message: MessageReducer,
    account: accountReducer,
    layout: layoutReducer,
    notification: notificationReducer,
    document: DocumentReducer,
    organization: OrganizationReducer,
    schedule: ScheduleReducer,
    resource: ResourceReducer,
    rule: RuleReducer,
    announcement: announcementReducer,
    regulation: RegulationReducer,
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

export default StoreFactory