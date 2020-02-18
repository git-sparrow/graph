// dummy data
import data from "../data.json";

import produce, { Draft } from "immer";

import { User } from "./types";
import { Dispatch } from "redux";
import { normalizeUsersData } from "../util";

const SET_USERS = "SET_USERS";

export interface Users {
  users: Array<User>;
}
interface SetUsers {
  type: typeof SET_USERS;
  payload: Users;
}
export interface InitialState {
  users: Array<User>;
}
const initialState: InitialState = {
  users: []
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
  payload: users
});
export const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    return Promise.resolve("started from resolve").then(() => {
      const normalizedData = normalizeUsersData(data);
      console.log(normalizedData);

      dispatch(setUsers(data));

      return Promise.resolve("Dummy data fetched");
    });
  };
};
