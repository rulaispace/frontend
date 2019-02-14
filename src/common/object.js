import assert from "./assert";

export function override(source, delta) {
    return {
        ...source,
        ...delta,
    }
}

export function deepOverride(source, delta) {
    if (!shouldDeepTrace(delta)) return choose(source, delta)

    if (delta == null) return source
    if (source == null) return delta

    if (Array.isArray(source))
        return arrayDeepOverride(source, delta)

    return objectDeepOverride(source, delta)
}

export function shouldDeepTrace(thing) {
    if (thing instanceof RegExp) return false

    return (
        !(new Set([
            'function',
            'string',
            'number',
            'boolean',
            'symbol',
            'undefined',
        ])
            .has(typeof thing))
    )
}

function choose(source, delta) {
    return delta != null ? delta : source
}

function arrayDeepOverride(source, delta) {
    // Source must be array
    // if (!Array.isArray(source)) throw new TypeError('the type of source is not an array.')
    assert(Array.isArray(source), 'The type of source is not an array.')

    if (!Array.isArray(delta)) throw new TypeError('the type of delta is not an array.')

    const pairs = delta.reduce((result, item) => {
            const {key} = item
            if (!key) throw new TypeError('deep override element in array should have property named `key`')

            return {
                ...result,
                [key]: {
                    ...result[key],
                    delta: item,
                }
            }
        },
        (source.reduce((result, item) => {
            const {key} = item
            if (!key) throw new TypeError('deep override element in array should have property named `key`')

            return {
                ...result,
                [key]: {
                    ...result[key],
                    source: item,
                }
            }
        },{}))
    )

    return Object.keys(pairs).map((key) => {
        const {source, delta} = pairs[key]
        return deepOverride(source, delta)
    })
}

function objectDeepOverride(source, delta) {
    const keys = [...new Set([...Object.keys(source), ...Object.keys(delta)])]
    return keys.reduce((result, key) => {
        return {
            ...result,
            [key]: deepOverride(source[key], delta[key])
        }
    }, {})
}