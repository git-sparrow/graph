// dummy data
import data from '../data.json'

import produce, {Draft} from 'immer';


import {User} from './types';
import { Dispatch } from 'redux';

const SET_USERS = 'SET_USERS';

export interface Users {
    users: Array<User>
}
interface SetUsers {
    type: typeof SET_USERS
    payload: Users
}
export interface InitialState {
  users: Array<User>
}
const initialState: InitialState = {
    users: [{
      id: "5e4534fcc2e1e4711f596b51",
      name: "Ericka Keith",
      address: "587 Rock Street, Dana, Tennessee, 5590",
      roles: [
        {
          id: "5e4534fce3319397ea91b983",
          name: "Role-Entropix",
          permissions: [
            {
              id: "5e4534fcdce4140858236df6",
              name: "ADMIN",
              objects: [
                {
                  id: "5e4534fcb4d4600d08304152",
                  name: "Bucket"
                },
                {
                  id: "5e4534fcaad72997ea7971ee",
                  name: "Object1"
                },
                {
                  id: "5e4534fcd38016f08bf8fce8",
                  name: "Object2"
                }
              ]
            },
            {
              id: "5e4534fc470d1e156f80259b",
              name: "WRITE",
              objects: [
                {
                  id: "5e4534fc0f401e7cefd5bf1e",
                  name: "Object3"
                },
                {
                  id: "5e4534fcb4d4600d08304152",
                  name: "Bucket"
                }
              ]
            },
            {
              id: "5e4534fc109638942cd24207",
              name: "READ",
              objects: [
                {
                  id: "5e4534fc0f401e7cefd5bf1e",
                  name: "Object3"
                },
                {
                  id: "5e4534fcb4d4600d08304152",
                  name: "Bucket"
                }
              ]
            }
          ]
        },
        {
          id: "5e4534fcc4b49cc499a35b72",
          name: "Role-Ecratic",
          permissions: [
            {
              id: "5e4534fcdce4140858236df6",
              name: "ADMIN",
              objects: [
                {
                  id: "5e4534fcb4d4600d08304152",
                  name: "Bucket"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "5e4534fc42bc43e7d029a33e",
      name: "Doris Hurst",
      address: "163 Nova Court, Oasis, Puerto Rico, 4144",
      roles: [
        {
          id: "5e4534fca70ced1c8a0509a4",
          name: "Role-Plasmos",
          permissions: [
            {
              id: "5e4534fc470d1e156f80259b",
              name: "WRITE",
              objects: [
                {
                  id: "5e4534fc0f401e7cefd5bf1e",
                  name: "Object3"
                }
              ]
            },
            {
              id: "5e4534fcdce4140858236df6",
              name: "ADMIN",
              objects: [
                {
                  id: "5e4534fcb4d4600d08304152",
                  name: "Bucket"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "5e4534fc81bb45e692095582",
      name: "Pat Harmon",
      address: "371 Boardwalk , Munjor, Arkansas, 7201",
      roles: [
        {
          id: "5e4534fcc4b49cc499a35b72",
          name: "Role-Ecratic",
          permissions: [
            {
              id: "5e4534fcdce4140858236df6",
              name: "ADMIN",
              objects: [
                {
                  id: "5e4534fcb4d4600d08304152",
                  name: "Bucket"
                }
              ]
            }
          ]
        }
      ]
    }],
};

// reducer
export default (state = initialState, action: SetUsers) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case SET_USERS:
        draft.users = action.payload;
        break;
    }
  });

export const setUsers = (users: User[] = []) => ({
  type: SET_USERS,
  payload: users,
});
export const fetchUsers = () => {
    return (dispatch: Dispatch) => {
        return Promise.resolve("started from resolve").then(() => {           
            dispatch(setUsers(data));

            return Promise.resolve('Dummy data fetched');
        })

    };
};
