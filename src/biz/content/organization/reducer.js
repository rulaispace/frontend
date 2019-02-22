import ReducerBase from "../../../common/redux/reducer-base";

const types = {
    loading: 'loadingOrganizationData',
    filter: 'filterOrganizationData',
    expand: 'expandOfOrganizationData',
    collapse: 'collapseOfOrganizationData'
}

const reducers = [
    {
        type: types.loading,
        action: ReducerBase.defaultAction(types.loading),
        reduce: ReducerBase.defaultNestedListReduce(),
    }, {
        type: types.filter,
        action: ReducerBase.defaultAction(types.filter),
        reduce: ReducerBase.defaultTableFilterReduce(),
    }, {
        type: types.expand,
        action: ReducerBase.defaultAction(types.expand),
        reduce: ReducerBase.defaultExpandNestedList(),
    }, {
        type: types.collapse,
        action: ReducerBase.defaultAction(types.collapse),
        reduce: ReducerBase.defaultCollapseNestedList(),
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer