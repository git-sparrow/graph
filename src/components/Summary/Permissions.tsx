import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Card from "./components/Card";
import {
  addPermission,
  deletePermission,
  saveEditedPermission
} from "../../store/permissions";
import AddPanel from "./components/AddPanel";

const Permissions = () => {
  const permissions: any = useSelector(
    (store: RootState) => store.permissions.byId
  );
  const roles: any = useSelector((store: RootState) => store.roles.byId);
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

  const _handleAddPermission = useCallback(
    (id: string, name: string, relatedItem: string) => {
      dispatch(addPermission(id, name, relatedItem));
    },
    [dispatch]
  );

  let permissionsArray = Object.keys(permissions).map(item => {
    return permissions[item];
  });

  const rolesMap = Object.keys(roles).map(item => ({
    id: item,
    name: roles[item].name
  }));

  return (
    <div>
      <h1>Permissions component</h1>
      <AddPanel
        title={"permission"}
        relatedWith={"role"}
        relatedItemsMap={rolesMap}
        onAddItem={_handleAddPermission}
      />
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
