import Any from "../utils/any";

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

ReducerBase.defaultTableFilterReduce = function() {
    return (state={}, payload) => {
        state.toolbar.input.defaultValue = payload.value
        state.table.filter.title = payload.value

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
        state.nestedList.data = payload.children
        return state
    }
}

const search = function(data, key) {
    if (data == null) return null

    for (const index in data) {
        const item = data[index]

        if (item.key === key) return item

        const child = search(item.children, key)
        if (child != null) return child
    }

    return null;
}

ReducerBase.defaultExpandNestedList = function() {
    return (state={}, payload) => {
        const targetItem = search(state.nestedList.data, payload.key)
        if (targetItem) {
            targetItem.expanded = true
        }

        return state
    }
}

ReducerBase.defaultCollapseNestedList = function() {
    return (state={}, payload) => {
        const targetItem = search(state.nestedList.data, payload.key)
        targetItem.expanded = false

        return state
    }
}

export default ReducerBase
