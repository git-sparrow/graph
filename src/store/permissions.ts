import produce, { Draft } from "immer";

const SET_PERMISSIONS = "SET_PERMISSIONS";

const initialState = {
  permissions: {}
};

// reducer
export default (state = initialState, action: any) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case SET_PERMISSIONS:
        draft.permissions = action.payload;
        break;
    }
  });

export const setPermissions = (permissions = {}) => ({
  type: SET_PERMISSIONS,
  payload: permissions
});
