import assert from "./assert";

export function modifyWithDef(target, def) {
    if (def == null) return target;

    if (!shouldDeepTrace(def)) {
        if (target === undefined) return def;

        return target;
    }

    if (Array.isArray(def)) {
        return target
    }

    assert(!Array.isArray(target), `配置数据格式异常，请检查节点数据是否正确！${target}`);
    for (const property in def) {
        let targetProperty = target[property]
        if (targetProperty === undefined) {
            target[property] = def[property];
            continue;
        }
        target[property] = modifyWithDef(targetProperty, def[property])
    }

    return target
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

    let cur = 0
    const pairs = delta.reduce((result, item) => {
            let {key} = item
            if (!key) {
                key = 'CIX-' + (++cur)
            }

            return {
                ...result,
                [key]: {
                    ...result[key],
                    delta: item,
                }
            }
        },
        (source.reduce((result, item) => {
            let {key} = item
            if (!key) {
                key = 'CIX-' + (++cur)
            }

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