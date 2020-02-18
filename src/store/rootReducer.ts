import { combineReducers } from "redux";
import users from "./users";
import roles from "./roles";
import permissions from "./permissions";
import objects from "./objects";

export const rootReducer = combineReducers({
  users,
  roles,
  permissions,
  objects
});

export type RootState = ReturnType<typeof rootReducer>;
