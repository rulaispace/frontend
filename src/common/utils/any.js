const Any = {}

Any.extend = function(extension) {
    const hasOwnProperty = Object.hasOwnProperty
    const object = Object.create(this)

    for (const property in extension) {
        if (hasOwnProperty.call(extension, property) ||
            typeof object[property] === 'undefined')
            object[property] = extension[property]
    }

    return object
}

export default Any