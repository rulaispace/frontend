import Any from "../utils/any";

export const DefaultLocalReduxStateStorageKey = 'redux-store'

const ObjectStorage = {
    create: function(key=DefaultLocalReduxStateStorageKey) {
        const self = Any.create.call(this)
        self.key = key

        return self
    },
    clear: function() {
        localStorage.removeItem(this.key)
    },
    read: function() {
        return this.isEmpty() ? null : JSON.parse(localStorage.getItem(this.key))
    },
    isEmpty: function() {
        return localStorage.getItem(this.key) == null
    },
    update: function(state) {
        state != null ?
            localStorage.setItem(this.key, JSON.stringify(state)) :
            this.clear()
    },
}

export default ObjectStorage

/*
export default function ObjectStorage(key=DefaultLocalReduxStateStorageKey) {
    this.key = key

    this.clear = function() {
        localStorage.removeItem(this.key)
    }

    this.read = function() {
        return this.isEmpty() ? null : JSON.parse(localStorage.getItem(this.key))
    }

    this.isEmpty = function() {
        return localStorage.getItem(this.key) == null
    }

    this.update = function(state) {
        state != null ?
            localStorage.setItem(this.key, JSON.stringify(state)) :
            this.clear()
    }
}*/
