import ReducerBase from "../../common/redux/reducer-base";
import commonNames from "../../common/config/common-name-config";

const types = {
    open: 'loginFormOpen',
    agree: 'loginFormClose',
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
        reduce: (state={}, payload={}) => {
            localStorage.setItem(commonNames.token, payload.token)
            return {...state, ...payload, open: false}
        }
    }, {
        type: types.logout,
        action: () => ({type: types.logout}),
        reduce: () => {
            return ({open:false})
        }
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    },
    clear: function(state) {
        console.log(state)
    }
}).create()

export default reducer