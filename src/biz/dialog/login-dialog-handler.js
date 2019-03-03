import BaseHandler from "../../common/base/handler-base";
import post from "../../common/fetch/fetch";
import commonNames from "../../common/config/common-name-config";
import message from './common-dialog-handler'

const loginSuccess = function(refObj, callback=f=>f) {
    return function(payload) {
        localStorage.setItem(commonNames.token, payload[commonNames.token])
        // localStorage.setItem(commonNames.name, payload[commonNames.name])
        localStorage.setItem(commonNames.username, payload[commonNames.username])
        localStorage.setItem(commonNames.rule, payload[commonNames.rule])
        refObj.setState({open: false, username: null, password: null, loginCallback: null})
        callback()
    }
}
const loginFailed = function() {
    return function(error) {
        message.tip({title: error.title, message: error.detail})
    }
}

const Handler = BaseHandler.extend({
    login: function(callback) {
        this.refObj.setState({open: true, username: null, password: null, loginCallback:
                function(self) {
                    return function(username, password) {
                        post('login', {username, password},
                            function(refObj){return loginSuccess(refObj, callback)}(self.refObj),
                            function(refObj){return loginFailed(refObj)}(self.refObj),
                        )
                    }
                }(this)
        })
    },
    logout: function(callback) {
        message.alert({title: '系统提示', message: '确定要退出系统吗？',
            agreeCallback: () => {
                localStorage.removeItem(commonNames.token)
                localStorage.removeItem(commonNames.username)
                localStorage.removeItem(commonNames.rule)
                callback()
            }
        })
    }
})

export default Handler.create()