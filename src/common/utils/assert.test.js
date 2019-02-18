import assert from "./assert";

describe('Test assertion', () => {
    it('Test assertion with false condition', () => {
        function demo() {
            assert(false, 'Something wrong.')
        }

        expect(demo).toThrowError()
    })
    it('Test assertion with no args', () => {
        function demo() {
            assert()
        }

        expect(demo).toThrowError('Assertion failed')
    })
})