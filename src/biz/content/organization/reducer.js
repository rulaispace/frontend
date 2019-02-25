import ReducerBase from "../../../common/redux/reducer-base";

const types = {
    loading: 'loadingOrganizationData',
    filter: 'filterOrganization',
    expand: 'expandOfOrganization',
    collapse: 'collapseOfOrganization',
    openEditDialog: 'openEditDialogOfOrganization',
    modifyFormInput: 'modifyFormInputOfOrganization',
    closeEditDialog: 'closeEditDialogOfOrganization',
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
    }, {
        type: types.openEditDialog,
        action: ReducerBase.defaultAction(types.openEditDialog),
        reduce: ReducerBase.defaultOpenEditDialog(),
    }, {
        type: types.closeEditDialog,
        action: ReducerBase.defaultAction(types.closeEditDialog),
        reduce: ReducerBase.defaultCloseEditDialog(),
    }, {
        type: types.modifyFormInput,
        action: ReducerBase.defaultAction(types.modifyFormInput),
        reduce: ReducerBase.defaultChangeDialogInput(),
    }
]

const reducer = ReducerBase.extend({
    create: function() {
        return ReducerBase.create.call(this, types, reducers)
    }
}).create()

export default reducer