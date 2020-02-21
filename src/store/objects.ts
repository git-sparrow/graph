import produce, { Draft } from "immer";
import omit from "lodash/omit";

export interface IObject {
  id: string;
  name: string;
}

export interface InitObjects {
  type: typeof INIT_OBJECTS;
  payload: object;
}
export interface DeleteObject {
  type: typeof DELETE_OBJECT;
  payload: string;
}
interface SaveEditedObject {
  type: typeof SAVE_EDITED_OBJECT;
  payload: {
    id: string;
    name: string;
  };
}
export interface SetObject {
  type: typeof SET_OBJECT;
  payload: object;
}

type InitialState = {
  byId: IObject | {};
};

const INIT_OBJECTS = "INIT_OBJECTS";
const DELETE_OBJECT = "DELETE_OBJECT";
const SAVE_EDITED_OBJECT = "SAVE_EDITED_OBJECT";
const SET_OBJECT = "SET_OBJECT";
export type ObjectsActionTypes =
  | InitObjects
  | DeleteObject
  | SaveEditedObject
  | SetObject;

const initialState: InitialState = {
  byId: {}
};

// reducer
export default (state = initialState, action: ObjectsActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_OBJECTS:
        draft.byId = action.payload;
        break;
      case DELETE_OBJECT:
        draft.byId = omit(state.byId, [action.payload]);
        break;
      case SAVE_EDITED_OBJECT:
        draft.byId[action.payload.id].name = action.payload.name;
        break;
      case SET_OBJECT:
        draft.test = action.payload;
        break;
    }
  });

export const initObjects = (objects = {}): ObjectsActionTypes => ({
  type: INIT_OBJECTS,
  payload: objects
});

export const deleteObject = (id: string): ObjectsActionTypes => ({
  type: DELETE_OBJECT,
  payload: id
});

export const saveEditedObject = (
  id: string,
  name: string
): ObjectsActionTypes => ({
  type: SAVE_EDITED_OBJECT,
  payload: { id, name }
});

export const setObjects = (objects = {}): ObjectsActionTypes => ({
  type: SET_OBJECT,
  payload: objects
});
