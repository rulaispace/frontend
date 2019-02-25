import ReducerBase from "../../common/redux/reducer-base";

const types = {
    show: 'showMessageDialog',
    close: 'closeMessageDialog',
}

const reducers = [
    {
        type: types.show,
        action: ReducerBase.defaultAction(types.show),
        reduce: (state, payload) => ({open:true, title: payload.title, details: payload.details})
    }, {
        type: types.close,
        action: ReducerBase.defaultAction(types.close),
        reduce: (state={}) => ({...state, open:false})
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer