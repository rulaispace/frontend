import ReducerBase from "../../../common/redux/reducer-base";

const types = {
    loading: 'loadingDocumentData',
    filter: 'filterDocumentData',
    changePage: 'changePageOfDocumentData',
    changeRowsPerPage: 'changeRowsPerPageOfDocumentData'
}

const reducers = [
    {
        type: types.loading,
        action: ReducerBase.defaultAction(types.loading),
        reduce: (state, payload) => {
            state.table.body = payload.map(item => {
                item.operator = '下载'
                return item
            })
            return state
        }
    }, {
        type: types.filter,
        action: ReducerBase.defaultAction(types.filter),
        reduce: ReducerBase.defaultTableFilterReduce(),
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