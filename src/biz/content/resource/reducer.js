import ReducerBase from "../../../common/redux/reducer-base";
import commonNames from "../../../common/config/common-name-config";

const types = {
    loading: 'loadingResourceData',
    filter: 'filterResourceData',
    changePage: 'changePageOfResourceData',
    changeRowsPerPage: 'changeRowsPerPageOfResourceData'
}

const reducers = [
    {
        type: types.loading,
        action: ReducerBase.defaultAction(types.loading),
        reduce: (state, payload) => {
            for (const index in payload) {
               const resource = payload[index]
               resource.operator = [commonNames.modify, commonNames.delete]
            }

            state.table.body = payload
            return state
        },
    }, {
        type: types.filter,
        action: ReducerBase.defaultAction(types.filter),
        reduce: ReducerBase.defaultTableFilterReduce('name'),
    }, {
        type: types.changePage,
        action: ReducerBase.defaultAction(types.changePage),
        reduce: ReducerBase.defaultChangePageOfTable(),
    }, {
        type: types.changeRowsPerPage,
        action: ReducerBase.defaultAction(types.changeRowsPerPage),
        reduce: ReducerBase.defaultChangeRowsPerPageOfTable(),
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer