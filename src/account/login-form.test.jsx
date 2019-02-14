import React from 'react'
import LoginForm from "./login-form";
import StoryFactory from "../redux/story-factory";
import {mount, shallow} from "enzyme";
import {destroySystem, restoreSystem} from "../fetch/fetch";


describe('Test LoginForm', () => {
    const initStore = () => new StoryFactory({
        overrideState: {
            account: {
                open: true,
            },
        },
        enableLocalStorage: false,
    }).create()


    it('The structure of this component is stable.', () => {
        const store = initStore()
        const component = shallow(<LoginForm store={store}/>)
        expect(component).toMatchSnapshot();
    })
    it('Close the dialog with top button', () => {
        const store = initStore()
        const component = mount(<LoginForm store={store}/>)
        component.find('Dialog').prop('onClose')()

        expect(store.getState().account.open).toBeFalsy()
    })
    it('Close the dialog with bottom button', () => {
        const store = initStore()
        const component = mount(<LoginForm store={store}/>)
        component.find('Button[id="close-button"]').prop('onClick')()
        expect(store.getState().account.open).toBeFalsy()
    })
    it('Login in', () => {
        const store = new StoryFactory({
            overrideState: {
                account: {
                    username: 'zhangsan',
                    password: 'abcd1234',
                    open: true,
                },
            },
            enableLocalStorage: false,
        }).create()

        const component = mount(<LoginForm store={store}/>)
        component.find('Button[id="login-button"]').prop('onClick')()
        expect(store.getState().account.open).toBeFalsy()
        expect(store.getState().account).toHaveProperty('token')
    })
    it('Login in fail', () => {
        destroySystem()

        const store = new StoryFactory({
            overrideState: {
                account: {
                    username: 'zhangsan',
                    password: 'abcd1234',
                    open: true,
                },
            },
            enableLocalStorage: false,
        }).create()

        const component = mount(<LoginForm store={store}/>)
        component.find('Button[id="login-button"]').prop('onClick')()
        expect(store.getState().message.title).toBe('登录失败：')

        restoreSystem()
    })
})
