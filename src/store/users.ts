// dummy data
import data from "../data.json";

import produce, { Draft } from "immer";

import { Dispatch } from "redux";
import { normalizeUsersData } from "../util/normalizr";
import { initObjects } from "./objects";
import { initPermissions } from "./permissions";
import { initRoles } from "./roles";

export interface User {
  id: string;
  name: string;
  address: string;
  roles: string[];
}

interface InitUsers {
  type: typeof INIT_USERS;
  payload: object;
}
interface SetUser {
  type: typeof SET_USER;
  payload: object;
}
export type UsersActionTypes = InitUsers | SetUser;

type InitialState = {
  byId: User | {};
};

const INIT_USERS = "INIT_USERS";
const SET_USER = "SET_USER";

const initialState: InitialState = {
  byId: {}
};

// reducer
export default (state = initialState, action: UsersActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_USERS:
        draft.byId = action.payload;
        break;
      case SET_USER:
        draft.users = action.payload;
        break;
    }
  });

export const initUsers = (users = {}) => ({
  type: INIT_USERS,
  payload: users
});
export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user
});

export const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    return Promise.resolve("started from resolve").then(() => {
      const normalizedData = normalizeUsersData(data);
      const { objects, permissions, roles, users } = normalizedData.entities;
      dispatch(initObjects(objects));
      dispatch(initPermissions(permissions));
      dispatch(initRoles(roles));
      dispatch(initUsers(users));

      return Promise.resolve("Dummy data fetched");
    });
  };
};
