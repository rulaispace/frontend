import ReducerBase from "../../common/redux/reducer-base";

const types = {
    open: 'loginFormOpen',
    close: 'loginFormClose',
    login: 'userLogin',
    logout: 'userLogout',
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

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer