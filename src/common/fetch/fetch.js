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
        response.json().then(value => {dispatch(value, success, fail)})
    }).catch(err => {
        fail(err)
    })
}

function dispatch(payload, success, fail) {
    const title = '系统错误：'
    const {status=200, error, message='', path=''} = payload
    if (status !== 200) {
        const details = `${error}: status=${status}, message=${message}, path=${path}`
        return fail({title, details})
    }

    success(payload)
}

export default post