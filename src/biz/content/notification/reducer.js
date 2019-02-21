import ReducerBase from "../../../common/redux/reducer-base";

const types = {
    loading: 'loadingNotificationData',
    filter: 'filterNotificationData',
}

const reducers = [
    {
        type: types.loading,
        action: ReducerBase.defaultAction(types.loading),
        reduce: (state={}, payload) => {
            state.table.body = payload
            return state
        }
    }, {
        type: types.filter,
        action: ReducerBase.defaultAction(types.filter),
        reduce: (state={}, payload) => {
            state.toolbar.input.defaultValue = payload.value
            state.table.filter.title = payload.value

            return state
        }
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer