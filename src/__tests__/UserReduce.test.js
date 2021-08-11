import user from '../Reducers/UserReducer';

describe('user reducer', () => {
  const LOGIN_USER = 'LOGIN_USER';

  const action = {
    type: LOGIN_USER,
    loggedUser: {
      id: 1,
      name: 'test1',
      email: 'test@hotmail.com',
      created_at: '2021-08-06T01:11:48.921Z',
      updated_at: '2021-08-06T01:11:48.921Z',
    },
  };

  it('user reducer has no user as initial state', () => {
    expect(user({ user: {}, loggedIn: false }, {})).toEqual({
      loggedIn: false,
      user: {},
    });
  });

  it('users reducer updates login state after login action', () => {
    expect(user({ user: {}, loggedIn: false }, action)).toEqual({
      loggedIn: true,
      user: {
        created_at: '2021-08-06T01:11:48.921Z',
        email: 'test@hotmail.com',
        id: 1,
        name: 'test1',
        updated_at: '2021-08-06T01:11:48.921Z',
      },
    });
  });

  it('user reducer has a user', () => {
    expect(user({ user: {}, loggedIn: false }, action).user).toEqual({
      created_at: '2021-08-06T01:11:48.921Z',
      email: 'test@hotmail.com',
      id: 1,
      name: 'test1',
      updated_at: '2021-08-06T01:11:48.921Z',
    });
  });

  it('user has correct id', () => {
    expect(user({ user: {}, loggedIn: false }, action).user.id).toEqual(1);
  });

  it('user dont have more properties than expected', () => {
    expect(user({ user: {}, loggedIn: false }, action).user.other).toBeUndefined();
  });
});
