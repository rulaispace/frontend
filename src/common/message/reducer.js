export default class Reducer {
    static show(title, details) {
        return {
            type: Reducer.SHOW,
            title,
            details,
        }
    }

    static close() {
        return {
            type: Reducer.CLOSE,
        }
    }

    static reduce(state={}, action) {
        switch (action.type) {
            case Reducer.SHOW:
                return {
                    ...state,
                    title: action.title,
                    details: action.details,
                    open: true
                }
            case Reducer.CLOSE:
                return {
                    ...state,
                    open: false
                }
            default :
                return state
        }
    }
}

Reducer.SHOW = 'MESSAGE_DIALOG_SHOW'
Reducer.CLOSE = 'MESSAGE_DIALOG_CLOSE'