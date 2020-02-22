import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

import Card from "./components/Card";

import { addObject, deleteObject, saveEditedObject } from "../../store/objects";
import AddPanel from "./components/AddPanel";

const Objects = () => {
  const objects: any = useSelector((store: RootState) => store.objects.byId);
  const permissions: any = useSelector(
    (store: RootState) => store.permissions.byId
  );
  const dispatch = useDispatch();

  const _handleDelete = useCallback(
    id => {
      dispatch(deleteObject(id));
    },
    [dispatch]
  );

  const _handleSave = useCallback(
    (id: string, name: string) => {
      dispatch(saveEditedObject(id, name));
    },
    [dispatch]
  );

  const _handleAddObject = useCallback(
    (id: string, name: string, relatedItem: string) => {
      dispatch(addObject(id, name, relatedItem));
    },
    [dispatch]
  );

  let objectsArray = Object.keys(objects).map(item => {
    return objects[item];
  });

  const permissionsMap = Object.keys(permissions).map(item => ({
    id: item,
    name: permissions[item].name
  }));

  return (
    <div>
      <h1>Objects component</h1>
      <AddPanel
        title={"object"}
        relatedWith={"permission"}
        relatedItemsMap={permissionsMap}
        onAddItem={_handleAddObject}
      />
      {objectsArray.length > 0 &&
        objectsArray.map(object => {
          return (
            <Card
              key={object.id}
              id={object.id}
              name={object.name}
              onDelete={_handleDelete}
              onSave={_handleSave}
            />
          );
        })}
    </div>
  );
};

export default Objects;
