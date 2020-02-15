// dummy data
import data from '../data.json'
import produce, {Draft} from 'immer';

const SET_USERS = 'SET_USERS';

export interface Users {
    users: Array<object>
}

interface FetchUsersAction {
    type: typeof SET_USERS
    payload: Users
}

const initialState: any = {
    users: [],
};

// reducer
export default (state = initialState, action: FetchUsersAction) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case SET_USERS:
        draft.users = action.payload;
        break;
    }
  });

export const setUsers = (users = []): any => ({
  type: SET_USERS,
  payload: users,
});
export const fetchUsers = () => {
    return (dispatch: any): any => {
        return Promise.resolve("started from resolve").then(() => {
            // @ts-ignore
            dispatch(setUsers(data));

            return Promise.resolve('Dummy data fetched');
        })

    };
};
