import produce, { Draft } from "immer";

const SET_OBJECTS = "SET_OBJECTS";

const initialState = {
  objects: {}
};

// reducer
export default (state = initialState, action: any) =>
  produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case SET_OBJECTS:
        draft.objects = action.payload;
        break;
    }
  });

export const setObjects = (objects = {}) => ({
  type: SET_OBJECTS,
  payload: objects
});
