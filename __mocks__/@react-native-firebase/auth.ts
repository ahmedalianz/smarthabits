type AuthCallback = (user: { uid: string; email: string } | null) => void;

const mockUser = { uid: '123', email: 'test@test.com' };
let authCallback: AuthCallback;

const authMock = {
  onAuthStateChanged: jest.fn(cb => {
    authCallback = cb;
    return jest.fn(); // Mock unsubscribe function
  }),
  signOut: jest.fn(() => Promise.resolve()),
  signInWithEmailAndPassword: jest.fn(() =>
    Promise.resolve({ user: mockUser }),
  ),
};

export default () => authMock;
export { authCallback, mockUser };
