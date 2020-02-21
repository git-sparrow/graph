import produce, { Draft } from "immer";
import { filterHelper } from "../helpers";

export interface Permission {
  id: string;
  name: string;
  objects: string[];
}

interface InitPermissions {
  type: typeof INIT_PERMISSIONS;
  payload: object;
}
interface SetPermission {
  type: typeof SET_PERMISSION;
  payload: object;
}
export interface DeleteObject {
  type: typeof DELETE_OBJECT;
  payload: string;
}
export type PermissionsActionTypes =
  | InitPermissions
  | SetPermission
  | DeleteObject;

type InitialState = {
  byId: Permission | {};
};

const INIT_PERMISSIONS = "INIT_PERMISSIONS";
const DELETE_OBJECT = "DELETE_OBJECT";
const SET_PERMISSION = "SET_PERMISSION";

const initialState: InitialState = {
  byId: {}
};

// reducer
export default (state = initialState, action: PermissionsActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_PERMISSIONS:
        draft.byId = action.payload;
        break;
      case DELETE_OBJECT:
        draft.byId = filterHelper(state.byId, "objects", action.payload);
        break;
      case SET_PERMISSION:
        draft.permissions = action.payload;
        break;
    }
  });

export const initPermissions = (objects = {}): PermissionsActionTypes => ({
  type: INIT_PERMISSIONS,
  payload: objects
});

export const setPermissions = (permissions = {}) => ({
  type: SET_PERMISSION,
  payload: permissions
});
