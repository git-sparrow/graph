import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { addUser, deleteUser, saveEditedUser } from "../../store/users";
import Card from "./components/Card";
import AddPanel from "./components/AddPanel";

const Users = () => {
  const users: any = useSelector((store: RootState) => store.users.byId);
  const dispatch = useDispatch();

  const _handleDelete = useCallback(
    id => {
      dispatch(deleteUser(id));
    },
    [dispatch]
  );

  const _handleSave = useCallback(
    (id: string, name: string) => {
      dispatch(saveEditedUser(id, name));
    },
    [dispatch]
  );
  const _handleAddUser = useCallback(
    (id: string, name: string) => {
      dispatch(addUser(id, name));
    },
    [dispatch]
  );

  let usersArray = Object.keys(users).map(item => {
    return users[item];
  });

  return (
    <div>
      <h1>Users component</h1>
      <AddPanel title={"user"} isRoot={true} onAddItem={_handleAddUser} />
      <ul>
        {usersArray.length > 0 &&
          usersArray.map(item => {
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
      </ul>
    </div>
  );
};

export default Users;
