const API_MOCK = {
    login: {
        username: 'zhangsan',
        password: 'abcd1234',
        token: '264a75bc7aca4a28a7f8cff2b98d58ea',
        showPassword: false,
        name: '张三',
    },
    'mock/post/data': {
        value1: 'value1',
        value2: 2
    },
    'mock/post/error': {
        tip:'Failed to fetch',
        stack:'TypeError: Failed to fetch'
    },
    'mock/post/server500': {
        "timestamp":"2019-01-25T03:24:04.087+0000",
        "status":500,
        "error":"Internal Server Error",
        "tip":"Some Exception",
        "path":"/login"
    }
}

export default API_MOCK