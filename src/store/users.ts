// dummy data
import data from "../data.json";

import produce, { Draft } from "immer";
import omit from "lodash/omit";
import { filterHelper } from "../helpers";
import { Dispatch } from "redux";
import { normalizeUsersData } from "../util/normalizr";
import { initObjects } from "./objects";
import { initPermissions } from "./permissions";
import { initRoles } from "./roles";

import { DELETE_ROLE, DeleteRole } from "./roles";

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
interface DeleteUser {
  type: typeof DELETE_USER;
  payload: string;
}
export type UsersActionTypes = InitUsers | DeleteRole | DeleteUser | SetUser;

type InitialState = {
  byId: User | {};
};

const INIT_USERS = "INIT_USERS";
const DELETE_USER = "DELETE_USER";
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
      case DELETE_ROLE:
        draft.byId = filterHelper(state.byId, "roles", action.payload);
        break;
      case DELETE_USER:
        draft.byId = omit(state.byId, [action.payload]);
        break;
      case SET_USER:
        draft.users = action.payload;
        break;
    }
  });

export const initUsers = (users = {}): UsersActionTypes => ({
  type: INIT_USERS,
  payload: users
});

export const deleteUser = (id: string): UsersActionTypes => ({
  type: DELETE_USER,
  payload: id
});

export const setUser = (user: User): UsersActionTypes => ({
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
