import { createStore, combineReducers, applyMiddleware } from 'redux'
import AccountReducer from '../account/reducer'
import MessageReducer from '../message/reducer'
import LayoutReducer from '../layout/reducer'
import NotificationReducer from '../content/notification/reducer'
import DocumentReducer from '../content/document/reducer'
import OrganizationReducer from '../content/organization/reducer'
import ScheduleReducer from '../content/schedule/reducer'
import ResourceReducer from '../content/resource/reducer'
import RuleReducer from '../content/rule/reducer'
import AnnouncementReducer from '../content/announcement/reducer'
import RegulationReducer from '../content/regulation/reducer'

import thunk from 'redux-thunk'
import {init} from './init-state'
import {deepOverride} from '../common/object'
import ObjectStorage from "./object-storage";

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

export default function StoryFactory(
    {
        overrideState = {},
        enableLocalStorage = true,
        localStorage=new ObjectStorage()
    } = {}
    )
{
    this.usingLocalStorage = function() {
        return enableLocalStorage && !localStorage.isEmpty()
    }

    this.createLoggerMiddleWare = function() {
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

    this.createSaverMiddleWare = function(storeLocalStorage) {
        return (
            store => next => action => {
                let result = next(action)
                storeLocalStorage.update(store.getState())
                return result
            }
        )
    }

    this.create = function() {
        return applyMiddleware(
            this.createLoggerMiddleWare(),
            thunk,
            this.createSaverMiddleWare(
                new ObjectStorage()
            )
        )(
            createStore
        )(
            combineReducers(DefaultReduxReducers),
            this.usingLocalStorage() ? localStorage.read() : deepOverride(init, overrideState)
        )
    }
}