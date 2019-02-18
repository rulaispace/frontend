export default class Reducer {
    static open() {
        return {type: Reducer.OPEN}
    }

    static close() {
        return {type: Reducer.CLOSE}
    }

    static login(payload) {
        return {
            type:Reducer.LOGIN,
            payload,
        }
    }

    static logout() {
        return {
            type: Reducer.LOGOUT,
        }
    }

    static reduce(state={}, action) {
        switch (action.type) {
            case Reducer.OPEN:
                return {
                    ...state,
                    open: true
                }
            case Reducer.CLOSE:
                return {
                    ...state,
                    open: false
                }
            case Reducer.LOGIN: {
                const {payload} = action
                return {
                    ...state,
                    ...payload,
                    open: false
                }
            }
            case Reducer.LOGOUT: {
                return {
                    open: false
                }
            }
            default :
                return state
        }
    }
}

Reducer.OPEN = 'ACCOUNT_FORM_OPEN'
Reducer.CLOSE = 'ACCOUNT_FORM_CLOSE'
Reducer.LOGIN = 'ACCOUNT_LOGIN'
Reducer.LOGOUT = 'ACCOUNT_LOGOUT'