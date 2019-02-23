import ReducerBase from "../../../common/redux/reducer-base";

const types = {
    loading: 'loadingRegulationData',
    filter: 'filterRegulationData',
    changePage: 'changePageOfRegulationData',
    changeRowsPerPage: 'changeRowsPerPageOfRegulationData'
}

const reducers = [
    {
        type: types.loading,
        action: ReducerBase.defaultAction(types.loading),
        reduce: (state, payload) => {
            for (const index in payload) {
                const resource = payload[index]
                // if (resource.state === '在途') {
                resource.operator = ['修改', '发布', '删除']
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