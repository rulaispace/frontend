import ReducerBase from '../../common/redux/reducer-base'

const types = {
    navigate: 'navigate',
    open: 'menuOpen',
    close: 'menuClose',
    loaded: 'dataLoaded',
}

const reducers = [
    {
        type: types.navigate,
        action: ReducerBase.defaultAction(types.navigate),
        reduce: (state={}, payload) => (
            {
                ...state,
                navigator:payload.name,
                loading: true,
            }
        )
    }, {
        type: types.open,
        action: ReducerBase.defaultAction(types.open),
        reduce: (state={}) => ({...state, open:true})
    }, {
        type: types.close,
        action: ReducerBase.defaultAction(types.close),
        reduce: (state={}) => ({...state, open:false})
    }, {
        type: types.loaded,
        action: ReducerBase.defaultAction(types.loaded),
        reduce: (state={}) => ({...state, loading:false})
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer