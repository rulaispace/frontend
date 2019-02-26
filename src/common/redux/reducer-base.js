import Any from "../utils/any";
import actionNames from "../config/action-name-config";

const defaultTypes = {
    default: 'default',
}

const defaultReducer = {
    type: defaultTypes.default,
    action: function (payload) {
        return {
            type: defaultTypes.default,
            payload,
        }
    },
    reduce: function (state = {}) {
        return {
            ...state
        }
    }
}

const search = function(data, id) {
    if (data == null) return null

    for (const index in data) {
        const item = data[index]

        if (item.id === id) return item

        const child = search(item.children, id)
        if (child != null) return child
    }

    return null;
}

const ReducerBase = Any.extend({
    create: function() {
        const args = Array.prototype.slice.call(arguments)
        const types = args.length > 0 ? args[0] : defaultTypes
        const reducers = args.length > 1 ? args[1] : [defaultReducer]

        this.types = types
        this.reducers = reducers

        return this
    },
    createAction: function(type, payload) {
        const specificReducer = this.reducers.filter(reducer => {return reducer.type === type})[0]
        const reducer = specificReducer ? specificReducer : defaultReducer
        return reducer.action(payload)
    },
    reduce: function(state={}, action) {
        const specificReducer = this.reducers.filter(reducer => {return reducer.type === action.type})[0]
        const reducer = specificReducer ? specificReducer : defaultReducer
        return reducer.reduce(state, action.payload)
    },
    proxy: function() {
        const self = this
        return function(state, action) {
            return self.reduce.call(self, state, action)
        }
    }
})

ReducerBase.defaultAction = function(type) {
    return (payload) => ({type, payload})
}

ReducerBase.defaultTableReduce = function() {
    return (state, payload) => {
        state.table.body = payload
        return state
    }
}

ReducerBase.defaultTableFilterReduce = function(id) {
    return (state={}, payload) => {
        state.toolbar.input.defaultValue = payload.value
        state.table.filter[id] = payload.value

        return state
    }
}

ReducerBase.defaultChangePageOfTable = function() {
    return (state={}, payload) => {
        state.table.pagination.page = payload.page

        return state
    }
}

ReducerBase.defaultChangeRowsPerPageOfTable = function() {
    return (state={}, payload) => {
        state.table.pagination.rowsPerPage = payload.rowsPerPage

        return state
    }
}

ReducerBase.defaultNestedListReduce = function() {
    return (state, payload) => {
        console.log(state)
        state.mode = 'main'
        if (state.dialog) {
            state.dialog.open = false
            state.dialog.form = {}
        }

        state.nestedList.data = payload.children
        return state
    }
}

ReducerBase.defaultExpandNestedList = function() {
    return (state={}, payload) => {
        const targetItem = search(state.nestedList.data, payload.id)
        if (targetItem) {
            targetItem.expanded = true
        }

        return state
    }
}

ReducerBase.defaultCollapseNestedList = function() {
    return (state={}, payload) => {
        const targetItem = search(state.nestedList.data, payload.id)
        targetItem.expanded = false

        return state
    }
}

ReducerBase.defaultOpenEditDialog = function() {
    return (state={}, payload) => {
        state.mode = actionNames.edit
        state.dialog.open = true
        state.dialog.form = ReducerBase.formatFormInput(state.dialog.form, payload)
        return state
    }
}

ReducerBase.formatFormInput = function(form, data) {
    for (const property in data) {
        if (!form[property]) form[property] = {}

        form[property].value = data[property]
    }
    return form
}

ReducerBase.defaultCloseEditDialog = function() {
    return (state={}) => {
        state.mode = 'main'
        state.dialog.open = false
        state.dialog.form = {}
        return state
    }
}

ReducerBase.defaultChangeDialogInput = function() {
    return (state={}, payload) => {
        state.dialog.form[payload.id].value = payload.value
        return state
    }
}

export default ReducerBase
