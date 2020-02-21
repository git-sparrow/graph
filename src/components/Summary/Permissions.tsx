import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Card from "./components/Card";
import {
  deletePermission,
  saveEditedPermission
} from "../../store/permissions";

const Permissions = () => {
  const permissions: any = useSelector(
    (store: RootState) => store.permissions.byId
  );
  const dispatch = useDispatch();

  const _handleDelete = useCallback(
    id => {
      dispatch(deletePermission(id));
    },
    [dispatch]
  );

  const _handleSave = useCallback(
    (id: string, name: string) => {
      dispatch(saveEditedPermission(id, name));
    },
    [dispatch]
  );

  let permissionsArray = Object.keys(permissions).map(item => {
    return permissions[item];
  });

  return (
    <div>
      <h1>Permissions component</h1>
      {permissionsArray.length > 0 &&
        permissionsArray.map(item => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              onDelete={_handleDelete}
              onSave={_handleSave}
            />
          );
        })}
    </div>
  );
};

export default Permissions;
