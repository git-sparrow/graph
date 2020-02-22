import produce, { Draft } from "immer";
import { filterHelper } from "../helpers";
import omit from "lodash/omit";

import { DeleteObject, AddObject, DELETE_OBJECT, ADD_OBJECT } from "./objects";

export interface Permission {
  id: string;
  name: string;
  objects: string[];
}

interface InitPermissions {
  type: typeof INIT_PERMISSIONS;
  payload: object;
}
export interface AddPermission {
  type: typeof ADD_PERMISSION;
  payload: {
    id: string;
    name: string;
    relatedRole: string;
  };
}
export interface DeletePermission {
  type: typeof DELETE_PERMISSION;
  payload: string;
}
export interface SaveEditedPermission {
  type: typeof SAVE_EDITED_PERMISSION;
  payload: {
    id: string;
    name: string;
  };
}
export type PermissionsActionTypes =
  | InitPermissions
  | DeleteObject
  | AddObject
  | DeletePermission
  | SaveEditedPermission
  | AddPermission;

type InitialState = {
  byId: Permission | {};
};

const INIT_PERMISSIONS = "INIT_PERMISSIONS";
const SAVE_EDITED_PERMISSION = "SAVE_EDITED_PERMISSION";
export const DELETE_PERMISSION = "DELETE_PERMISSION";
export const ADD_PERMISSION = "ADD_PERMISSION";

const initialState: InitialState = {
  byId: {}
};

export default (state = initialState, action: PermissionsActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_PERMISSIONS:
        draft.byId = action.payload;
        break;
      case DELETE_OBJECT:
        draft.byId = filterHelper(state.byId, "objects", action.payload);
        break;
      case ADD_OBJECT:
        draft.byId[action.payload.relatedPermission].objects.push(
          action.payload.id
        );
        break;
      case DELETE_PERMISSION:
        draft.byId = omit(state.byId, [action.payload]);
        break;
      case SAVE_EDITED_PERMISSION:
        draft.byId[action.payload.id].name = action.payload.name;
        break;
      case ADD_PERMISSION:
        draft.byId[action.payload.id] = {
          id: action.payload.id,
          name: action.payload.name,
          objects: []
        };
    }
  });

export const initPermissions = (objects = {}): PermissionsActionTypes => ({
  type: INIT_PERMISSIONS,
  payload: objects
});

export const deletePermission = (id: string): PermissionsActionTypes => ({
  type: DELETE_PERMISSION,
  payload: id
});

export const saveEditedPermission = (
  id: string,
  name: string
): PermissionsActionTypes => ({
  type: SAVE_EDITED_PERMISSION,
  payload: { id, name }
});

export const addPermission = (
  id: string,
  name: string,
  relatedRole: string
): PermissionsActionTypes => ({
  type: ADD_PERMISSION,
  payload: { id, name, relatedRole }
});
