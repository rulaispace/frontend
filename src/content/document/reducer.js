export default class Reducer {
    static query(value) {
        return {
            type: Reducer.QUERY,
            value: value,
        }
    }

    static reset() {
        return {
            type: Reducer.RESET,
        }
    }

    static reduce(state={}, action) {
        switch (action.type) {
            case Reducer.QUERY:
                return {
                    ...state,
                    query: action.value,
                }
            case Reducer.RESET:
                return {
                    ...state,
                    query: '',
                }
            default :
                return state
        }
    }
}

Reducer.QUERY = 'DOCUMENT_QUERY'
Reducer.RESET = 'DOCUMENT_RESET'