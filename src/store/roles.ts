import produce, { Draft } from "immer";
import omit from "lodash/omit";
import { filterHelper } from "../helpers";

import { DeletePermission } from "./permissions";
import { DELETE_PERMISSION } from "./permissions";

export interface Role {
  id: string;
  name: string;
  permissions: string[];
}

interface InitRoles {
  type: typeof INIT_ROLES;
  payload: object;
}
interface SetRole {
  type: typeof SET_ROLE;
  payload: object;
}
interface DeleteRole {
  type: typeof DELETE_ROLE;
  payload: string;
}
export type RolesActionTypes =
  | InitRoles
  | SetRole
  | DeletePermission
  | DeleteRole;

type InitialState = {
  byId: Role | {};
};

const INIT_ROLES = "INIT_ROLES";
const DELETE_ROLE = "DELETE_ROLE";
const SET_ROLE = "SET_ROLE";

const initialState: InitialState = {
  byId: {}
};

// reducer
export default (state = initialState, action: RolesActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_ROLES:
        draft.byId = action.payload;
        break;
      case DELETE_PERMISSION:
        draft.byId = filterHelper(state.byId, "permissions", action.payload);
        break;
      case DELETE_ROLE:
        draft.byId = omit(state.byId, [action.payload]);
        break;
      case SET_ROLE:
        draft.roles = action.payload;
        break;
    }
  });

export const initRoles = (roles = {}) => ({
  type: INIT_ROLES,
  payload: roles
});

export const deleteRole = (id: string): RolesActionTypes => ({
  type: DELETE_ROLE,
  payload: id
});

export const setRoles = (role = {}) => ({
  type: SET_ROLE,
  payload: role
});
