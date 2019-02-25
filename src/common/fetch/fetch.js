import MOCK from "./mock"
import {deepOverride} from "../utils/object";

const API_PROTOCOL = "http://"
const BACKEND_SERVER_DOMAIN = "localhost:8080"
export let IS_MOCK_MODE = false
export let IS_BROKEN = false

export function setMockMode(flag=true) {
    IS_MOCK_MODE = flag
}

export function destroySystem() {
    IS_BROKEN = true
}

export function restoreSystem() {
    IS_BROKEN = false
}

function post(api, input, success, fail) {
    if (IS_MOCK_MODE) {
        const payload = deepOverride(MOCK[api], input)
        if (IS_BROKEN) {
            return fail(MOCK['mock/post/error'])
        }

        return dispatch(payload, success, fail)
    }

    fetch(API_PROTOCOL + BACKEND_SERVER_DOMAIN + "/" + api, {
        method: 'POST',
        mode:'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
    }).then(response => {
        response.json().then(json => {dispatch(json, success, fail)})
    }).catch(err => {
        fail({title: '网络错误', details: err.message + '  url:  '  + api})
    })
}

function dispatch(json, success, fail) {
    const title = '系统错误'
    const {status, payload} = json
    if (status !== 200) {
        fail({title, details: payload})
        return
    }

    success(payload)
}

export default post