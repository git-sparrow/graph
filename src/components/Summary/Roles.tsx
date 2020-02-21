import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Card from "./components/Card";
import { deleteRole, saveEditedRole } from "../../store/roles";

const Roles = () => {
  const roles: any = useSelector((store: RootState) => store.roles.byId);
  const dispatch = useDispatch();

  const _handleDelete = useCallback(
    id => {
      dispatch(deleteRole(id));
    },
    [dispatch]
  );

  const _handleSave = useCallback(
    (id: string, name: string) => {
      dispatch(saveEditedRole(id, name));
    },
    [dispatch]
  );

  let rolesArray = Object.keys(roles).map(item => {
    return roles[item];
  });

  return (
    <div>
      <h1>Roles component</h1>
      {rolesArray.length > 0 &&
        rolesArray.map(item => {
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

export default Roles;
