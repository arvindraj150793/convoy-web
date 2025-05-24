export const mockFirebase = () => ({
  auth: {
    currentUser: {
      uid: 'test-user-123',
      email: 'test@convoy.com'
    },
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn()
  },
  firestore: {
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        get: jest.fn(),
        set: jest.fn(),
        update: jest.fn()
      }))
    }))
  }
});