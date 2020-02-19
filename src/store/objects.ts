import produce, { Draft } from "immer";

export interface Object {
  id: string;
  name: string;
}

interface InitObjects {
  type: typeof INIT_OBJECTS;
  payload: object;
}
interface SetObject {
  type: typeof SET_OBJECT;
  payload: object;
}

type InitialState = {
  objects: Object | {};
};

const INIT_OBJECTS = "INIT_OBJECTS";
const SET_OBJECT = "SET_OBJECT";
export type ObjectsActionTypes = InitObjects | SetObject;

const initialState: InitialState = {
  objects: {}
};

// reducer
export default (state = initialState, action: ObjectsActionTypes) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case INIT_OBJECTS:
        draft.objects = action.payload;
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

export const setObjects = (objects = {}): ObjectsActionTypes => ({
  type: SET_OBJECT,
  payload: objects
});
