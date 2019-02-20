import ReducerBase from "../../../common/redux/reducer-base";

const types = {
    load: 'notificationDataLoad',
}

const reducers = [
    {
        type: types.load,
        action: ReducerBase.defaultAction(types.load),
        reduce: (state={}, payload) => ({...state, dataList:payload})
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer