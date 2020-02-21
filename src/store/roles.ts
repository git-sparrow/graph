import produce, { Draft } from "immer";

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
export type RolesActionTypes = InitRoles | SetRole;

type InitialState = {
  byId: Role | {};
};

const INIT_ROLES = "INIT_ROLES";
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
      case SET_ROLE:
        draft.roles = action.payload;
        break;
    }
  });

export const initRoles = (roles = {}) => ({
  type: INIT_ROLES,
  payload: roles
});
export const setRoles = (role = {}) => ({
  type: SET_ROLE,
  payload: role
});
