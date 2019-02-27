import mock from "./mock"
import {deepOverride} from "../utils/object";

const protocol = "http://"
const baseUrl = "localhost:8080"
export let isMock = false
export let isBroken = false

export function setMockMode(flag=true) {
    isMock = flag
}

export function destroySystem() {
    isBroken = true
}

export function restoreSystem() {
    isBroken = false
}

function post(api, request, success, fail) {
    if (isMock) {
        if (isBroken) return fail(mock['mock/post/error'])
        return dispatch(deepOverride(mock[api], request), success, fail)
    }

    fetch(
        protocol + baseUrl + "/" + api,
        {
            method: 'POST',
            mode:'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }
    )
    .then(
        function(response) {
            return response.json()
        }
    )
    .then(
        function(json) {
            dispatch(json, success, fail)
        }
    )
    .catch(
        function(error) {
            fail(
                {
                    title: `系统错误,url=[${api}]`,
                    details: error.message
                }
            )
        }
    )
}

function dispatch(json, success, fail) {
    if (json.status === 200) {
        success(json.payload)
        return ;
    }

    fail({
        title: `系统错误[${json.status}]`,
        details: json.message
    })
}

export default post