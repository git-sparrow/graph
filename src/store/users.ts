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

import { DELETE_ROLE, ADD_ROLE, DeleteRole, AddRole } from "./roles";

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
interface AddUser {
  type: typeof ADD_USER;
  payload: {
    id: string;
    name: string;
  };
}
interface DeleteUser {
  type: typeof DELETE_USER;
  payload: string;
}
export interface SaveEditedUser {
  type: typeof SAVE_EDITED_USER;
  payload: {
    id: string;
    name: string;
  };
}
export type UsersActionTypes =
  | InitUsers
  | DeleteRole
  | AddRole
  | DeleteUser
  | SaveEditedUser
  | AddUser;

type InitialState = {
  byId: User | {};
};

const INIT_USERS = "INIT_USERS";
const DELETE_USER = "DELETE_USER";
const SAVE_EDITED_USER = "SAVE_EDITED_USER";
const ADD_USER = "ADD_USER";

const initialState: InitialState = {
  byId: {}
};

export default (state = initialState, action: UsersActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_USERS:
        draft.byId = action.payload;
        break;
      case DELETE_ROLE:
        draft.byId = filterHelper(state.byId, "roles", action.payload);
        break;
      case ADD_ROLE:
        draft.byId[action.payload.relatedUser].roles.push(action.payload.id);
        break;
      case DELETE_USER:
        draft.byId = omit(state.byId, [action.payload]);
        break;
      case SAVE_EDITED_USER:
        draft.byId[action.payload.id].name = action.payload.name;
        break;
      case ADD_USER:
        draft.byId[action.payload.id] = {
          id: action.payload.id,
          name: action.payload.name,
          address: "some address",
          roles: []
        };
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

export const saveEditedUser = (id: string, name: string): UsersActionTypes => ({
  type: SAVE_EDITED_USER,
  payload: { id, name }
});

export const addUser = (id: string, name: string): UsersActionTypes => ({
  type: ADD_USER,
  payload: { id, name }
});

// dummy data fetch
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
