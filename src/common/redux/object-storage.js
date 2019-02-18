export const DefaultLocalReduxStateStorageKey = 'redux-store'

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
}