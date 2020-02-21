import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

import Card from "./components/Card";

import { deleteObject } from "../../store/objects";

const Objects = () => {
  const objects: any = useSelector((store: RootState) => store.objects.byId);
  const dispatch = useDispatch();

  const _handleDelete = useCallback(
    id => {
      dispatch(deleteObject(id));
    },
    [dispatch]
  );

  let objectsArray = Object.keys(objects).map(item => {
    return objects[item];
  });

  return (
    <div>
      <h1>Objects component</h1>
      {objectsArray.length > 0 &&
        objectsArray.map(object => {
          return (
            <Card
              key={object.id}
              id={object.id}
              name={object.name}
              onDelete={_handleDelete}
            />
          );
        })}
    </div>
  );
};

export default Objects;
