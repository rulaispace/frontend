import reducer from './reducer'

describe('Test all login form actions', () => {
    it('open login form', () => {
        const state = reducer.reduce({}, reducer.createAction(reducer.types.open))
        expect(state).toHaveProperty('open', true)
    })
    it('user logout', () => {
        const state = reducer.reduce({}, reducer.createAction(reducer.types.logout))
        expect(state).toHaveProperty('open', false)
    })
})