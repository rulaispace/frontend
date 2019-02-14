import ObjectStorage, {DefaultLocalReduxStateStorageKey} from "./object-storage";

describe('Test object storage', () => {
    it('create the default object storage', () => {
        const objectStorage = new ObjectStorage()
        expect(objectStorage.key).toBe(DefaultLocalReduxStateStorageKey)
    })
    it('Clear default object storage data', () => {
        const objectStorage = new ObjectStorage()
        objectStorage.clear()
        expect(objectStorage.read()).toBeNull()
    })
    it('Read object storage data', () => {
        const key = 'JestKey'
        const objectStorage = new ObjectStorage(key)
        expect(objectStorage.key).toBe(key)

        objectStorage.update({property: 'value'})
        expect(objectStorage.read()).toHaveProperty('property', 'value')

        // update with null
        objectStorage.update(null)
        expect(objectStorage.isEmpty).toBeTruthy()
    })
})