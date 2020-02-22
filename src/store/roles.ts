import produce, { Draft } from "immer";
import omit from "lodash/omit";
import { filterHelper } from "../helpers";

import {
  DELETE_PERMISSION,
  ADD_PERMISSION,
  DeletePermission,
  AddPermission
} from "./permissions";

export interface Role {
  id: string;
  name: string;
  permissions: string[];
}

interface InitRoles {
  type: typeof INIT_ROLES;
  payload: object;
}
export interface AddRole {
  type: typeof ADD_ROLE;
  payload: {
    id: string;
    name: string;
    relatedUser: string;
  };
}
export interface DeleteRole {
  type: typeof DELETE_ROLE;
  payload: string;
}
export interface SaveEditedRole {
  type: typeof SAVE_EDITED_ROLE;
  payload: {
    id: string;
    name: string;
  };
}
export type RolesActionTypes =
  | InitRoles
  | AddRole
  | DeletePermission
  | AddPermission
  | DeleteRole
  | SaveEditedRole;

type InitialState = {
  byId: Role | {};
};

const INIT_ROLES = "INIT_ROLES";
export const DELETE_ROLE = "DELETE_ROLE";
const SAVE_EDITED_ROLE = "SAVE_EDITED_ROLE";
export const ADD_ROLE = "ADD_ROLE";

const initialState: InitialState = {
  byId: {}
};

export default (state = initialState, action: RolesActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_ROLES:
        draft.byId = action.payload;
        break;
      case DELETE_PERMISSION:
        draft.byId = filterHelper(state.byId, "permissions", action.payload);
        break;
      case ADD_PERMISSION:
        draft.byId[action.payload.relatedRole].permissions.push(
          action.payload.id
        );
        break;
      case DELETE_ROLE:
        draft.byId = omit(state.byId, [action.payload]);
        break;
      case SAVE_EDITED_ROLE:
        draft.byId[action.payload.id].name = action.payload.name;
        break;
      case ADD_ROLE:
        draft.byId[action.payload.id] = {
          id: action.payload.id,
          name: action.payload.name,
          permissions: []
        };
        break;
    }
  });

export const initRoles = (roles = {}): RolesActionTypes => ({
  type: INIT_ROLES,
  payload: roles
});

export const deleteRole = (id: string): RolesActionTypes => ({
  type: DELETE_ROLE,
  payload: id
});

export const saveEditedRole = (id: string, name: string): RolesActionTypes => ({
  type: SAVE_EDITED_ROLE,
  payload: { id, name }
});

export const addRole = (
  id: string,
  name: string,
  relatedUser: string
): RolesActionTypes => ({
  type: ADD_ROLE,
  payload: { id, name, relatedUser }
});
