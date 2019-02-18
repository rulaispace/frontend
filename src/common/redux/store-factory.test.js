import StoryFactory from "./story-factory";
import ObjectStorage from "./object-storage";
import MessageReducer from "../message/reducer";

describe('Test storage factory', () => {
    const storageKey = 'Jest_Store_Factory_Key'

    it('Test initial state of store', () => {
        const state = new StoryFactory().create().getState()
        expect(state).toHaveProperty('layout')
        expect(state).toHaveProperty('message')
        expect(state).toHaveProperty('account')
        expect(state).toHaveProperty('notification')
        expect(state).toHaveProperty('document')
        expect(state).toHaveProperty('resource')
        expect(state).toHaveProperty('rule')
        expect(state).toHaveProperty('announcement')
        expect(state).toHaveProperty('regulation')
        expect(state).toHaveProperty('organization')
        expect(state).toHaveProperty('schedule')
    })
    it('Test initial state when local storage is empty', () => {
        const localStorage = new ObjectStorage(storageKey)
        localStorage.clear()


        const state = new StoryFactory({localStorage: localStorage}).create().getState()
        expect(state).toHaveProperty('layout')
        expect(state).toHaveProperty('message')
        expect(state).toHaveProperty('account')
        expect(state).toHaveProperty('notification')
        expect(state).toHaveProperty('document')
        expect(state).toHaveProperty('resource')
        expect(state).toHaveProperty('rule')
        expect(state).toHaveProperty('announcement')
        expect(state).toHaveProperty('regulation')
        expect(state).toHaveProperty('organization')
        expect(state).toHaveProperty('schedule')
    })
    it('Test initial state when local storage is not empty', () => {
        const localStorage = new ObjectStorage(storageKey)
        localStorage.clear()
        localStorage.update({'document': 'some value'})


        const state = new StoryFactory({localStorage: localStorage}).create().getState()
        expect(state).toHaveProperty('document', 'some value')
    })
    it('Test state with override state', () => {
        const state = new StoryFactory({
            overrideState: {
                'document': 'some value'
            },
            enableLocalStorage: false,
        }).create().getState()
        expect(state).toHaveProperty('document', 'some value')
    })
    it('Test normal redux dispatch', () => {
        const store = new StoryFactory({enableLocalStorage: false}).create()
        store.dispatch(MessageReducer.show('登录失败', 'Jest test'))
        expect(store.getState()).toHaveProperty('message.title', '登录失败')
    })
})