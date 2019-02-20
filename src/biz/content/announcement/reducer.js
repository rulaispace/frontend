import ReducerBase from "../../../common/redux/reducer-base";

const types = {
    query: 'resourceQuery',
    reset: 'resourceQueryReset',
}

const reducers = [
    {
        type: types.query,
        action: ReducerBase.defaultAction(types.query),
        reduce: (state={}, payload) => ({...state, query:payload.condition})
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer