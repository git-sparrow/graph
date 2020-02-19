import produce, { Draft } from "immer";

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
export type PermissionsActionTypes = InitPermissions | SetPermission;

type InitialState = {
  permissions: Permission | {};
};

const INIT_PERMISSIONS = "INIT_PERMISSIONS";
const SET_PERMISSION = "SET_PERMISSION";

const initialState: InitialState = {
  permissions: {}
};

// reducer
export default (state = initialState, action: PermissionsActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_PERMISSIONS:
        draft.permissions = action.payload;
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
