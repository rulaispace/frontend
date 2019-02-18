import ReducerBase from "../../common/redux/reducer-base";

const types = {
    open: 'ACCOUNT_FORM_OPEN',
    close: 'ACCOUNT_FORM_CLOSE',
    login: 'ACCOUNT_LOGIN',
    logout: 'ACCOUNT_LOGOUT'
}

const reducers = [
    {
        type: types.open,
        action: () => ({type: types.open,}),
        reduce: (state={}) => ({...state, open:true})
    }, {
        type: types.close,
        action: () => ({type: types.close,}),
        reduce: (state={}) => ({...state, open:false})
    }, {
        type: types.login,
        action: (payload) => ({type: types.login, payload}),
        reduce: (state={}, payload={}) => ({...state, ...payload, open:false})
    }, {
        type: types.logout,
        action: () => ({type: types.logout}),
        reduce: () => ({open:false})
    }
]

const Reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
})

export default Reducer.create()

/*export default class reducer {
    static open() {
        return {type: reducer.OPEN}
    }

    static close() {
        return {type: reducer.CLOSE}
    }

    static login(payload) {
        return {
            type:reducer.LOGIN,
            payload,
        }
    }

    static logout() {
        return {
            type: reducer.LOGOUT,
        }
    }

    static reduce(state={}, action) {
        switch (action.type) {
            case reducer.OPEN:
                return {
                    ...state,
                    open: true
                }
            case reducer.CLOSE:
                return {
                    ...state,
                    open: false
                }
            case reducer.LOGIN: {
                const {payload} = action
                return {
                    ...state,
                    ...payload,
                    open: false
                }
            }
            case reducer.LOGOUT: {
                return {
                    open: false
                }
            }
            default :
                return state
        }
    }
}*/

/*
Reducer.OPEN = 'ACCOUNT_FORM_OPEN'
Reducer.CLOSE = 'ACCOUNT_FORM_CLOSE'
Reducer.LOGIN = 'ACCOUNT_LOGIN'
Reducer.LOGOUT = 'ACCOUNT_LOGOUT'*/
