import produce, { Draft } from "immer";

const SET_ROLES = "SET_ROLES";

const initialState = {
  roles: {}
};

// reducer
export default (state = initialState, action: any) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case SET_ROLES:
        draft.roles = action.payload;
        break;
    }
  });

export const setRoles = (roles = {}) => ({
  type: SET_ROLES,
  payload: roles
});
