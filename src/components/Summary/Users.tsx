import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { deleteUser } from "../../store/users";
import Card from "./components/Card";

const Users = () => {
  const users: any = useSelector((store: RootState) => store.users.byId);
  const dispatch = useDispatch();

  const _handleDelete = useCallback(
    id => {
      dispatch(deleteUser(id));
    },
    [dispatch]
  );

  let usersArray = Object.keys(users).map(item => {
    return users[item];
  });

  return (
    <div>
      <h1>Roles component</h1>
      <ul>
        {usersArray.length > 0 &&
          usersArray.map(item => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                onDelete={_handleDelete}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Users;
