import React from 'react'
import LoginForm from "./login-form";
import StoreFactory from "../../common/redux/store-factory";
import {mount, shallow} from "enzyme";
import {destroySystem, restoreSystem} from "../../common/fetch/fetch";


describe('Test LoginForm', () => {
    const initStore = () => StoreFactory.create({
        overrideState: {
            account: {
                open: true,
            },
        },
        enableLocalStorage: false,
    }).get()


    it('The structure of this component is stable.', () => {
        const store = initStore()
        const component = shallow(<LoginForm store={store}/>)
        expect(component).toMatchSnapshot();
    })
    it('Close the self with top button', () => {
        const store = initStore()
        const component = mount(<LoginForm store={store}/>)
        component.find('Dialog').prop('onClose')()

        expect(store.getState().account.open).toBeFalsy()
    })
    it('Close the self with bottom button', () => {
        const store = initStore()
        const component = mount(<LoginForm store={store}/>)
        component.find('Button[id="agree-button"]').prop('onClick')()
        expect(store.getState().account.open).toBeFalsy()
    })
    it('Login in', () => {
        const store = StoreFactory.create({
            overrideState: {
                account: {
                    username: 'zhangsan',
                    password: 'abcd1234',
                    open: true,
                },
            },
            enableLocalStorage: false,
        }).get()

        const component = mount(<LoginForm store={store}/>)
        component.find('Button[id="login-button"]').prop('onClick')()
        expect(store.getState().account.open).toBeFalsy()
        expect(store.getState().account).toHaveProperty('token')
    })
    it('Login in fail', () => {
        destroySystem()

        const store = StoreFactory.create({
            overrideState: {
                account: {
                    username: 'zhangsan',
                    password: 'abcd1234',
                    open: true,
                },
            },
            enableLocalStorage: false,
        }).get()

        const component = mount(<LoginForm store={store}/>)
        component.find('Button[id="login-button"]').prop('onClick')()
        expect(store.getState().message.title).toBe('登录失败：')

        restoreSystem()
    })
})
