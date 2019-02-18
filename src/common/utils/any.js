const Any = {
    create: function() {
        this.extend = function(extension) {
            const hasOwnProperty = Object.hasOwnProperty
            const object = Object.create(this)

            for (const property in extension) {
                if (hasOwnProperty.call(extension, property) ||
                    typeof object[property] === 'undefined')
                    object[property] = extension[property]
            }

            return object
        }
        return this
    }
}

export default Any