import {FirebaseUtils} from '../../src'

describe('Firebase Utils', () => {
  it('should store the api passed to storage property', () => {
    expect(FirebaseUtils.storage).toBe(undefined)
    FirebaseUtils.storage = {}
    expect(typeof FirebaseUtils.storage).toBe('object')
  })
})
