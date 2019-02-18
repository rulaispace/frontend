import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {init} from './init-state'
import {deepOverride} from '../utils/object'
import ObjectStorage from "./object-storage";
import Any from "../utils/any";
import MessageReducer from "../message/reducer";
import AccountReducer from "../../biz/account/reducer";
import LayoutReducer from "../../biz/layout/reducer";
import NotificationReducer from "../../biz/content/notification/reducer";
import DocumentReducer from "../../biz/content/document/reducer";
import OrganizationReducer from "../../biz/content/organization/reducer";
import ScheduleReducer from "../../biz/content/schedule/reducer";
import ResourceReducer from "../../biz/content/resource/reducer";
import RuleReducer from "../../biz/content/rule/reducer";
import AnnouncementReducer from "../../biz/content/announcement/reducer";
import RegulationReducer from "../../biz/content/regulation/reducer";

const DefaultReduxReducers = {
    message: MessageReducer.reduce,
    account: AccountReducer.reduce,
    layout: LayoutReducer.reduce,
    notification: NotificationReducer.reduce,
    document: DocumentReducer.reduce,
    organization: OrganizationReducer.reduce,
    schedule: ScheduleReducer.reduce,
    resource: ResourceReducer.reduce,
    rule: RuleReducer.reduce,
    announcement: AnnouncementReducer.reduce,
    regulation: RegulationReducer.reduce,
}

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
            combineReducers(DefaultReduxReducers),
            this.usingLocalStorage() ? this.localStorage.read() : deepOverride(init, this.overrideState)
        )
    }
}

export default StoreFactory