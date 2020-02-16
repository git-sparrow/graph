import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users";
import {RootState} from '../../store/rootReducer'

const Summary = () => {
  const users = useSelector((store: RootState) => store.users.users)
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Summary component</h1>
      <ul>
        {users.length > 0 && users.map((user) => {
          return (
          <li key={user.id}>{user.name}</li>
          )
        })}
      </ul>      
    </div>
  );
};

export default Summary;
