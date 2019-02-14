export default class Reducer {
    static open() {
        return {type: Reducer.OPEN}
    }

    static close() {
        return {type: Reducer.CLOSE}
    }

    static navigateTo(title) {
        return {
            type: Reducer.NAVIGATE_TO,
            title: title ? title.replace('menu_', '') : 'welcome',
        }
    }

    static reduce(state={}, action) {
        switch (action.type) {
            case Reducer.OPEN:
                return {
                    ...state,
                    open: true,
                }
            case Reducer.CLOSE:
                return {
                    ...state,
                    open: false,
                }
            case Reducer.NAVIGATE_TO:
                return {
                    ...state,
                    navigator: action.title
                }
            default:
                return state
        }
    }
}

Reducer.OPEN = 'MAIN_MENU_OPEN'
Reducer.CLOSE = 'MAIN_MENU_CLOSE'
Reducer.NAVIGATE_TO = 'NAVIGATE_TO'