import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../store/users";
import {RootState} from '../../store/rootReducer'
import uniqBy from 'lodash/uniqBy'

import {User} from '../../store/types';

const Roles = () => {
  const users = useSelector((store: RootState) => store.users.users)

  const getRoles = () => {
      const rolesArr: {id:string, name: string}[] = [];

      users.forEach((user) => {
            user.roles.forEach((role) => {
                rolesArr.push({id: role.id, name: role.name})
            })
      })
     const uniqueArr: {id:string, name: string}[] = uniqBy(rolesArr, 'id');
     
     return (
         <ul>
             {uniqueArr.length > 0 && uniqueArr.map((role) => {
                return (
                    <li key={role.id}>{role.name}</li>
                )
             })}
         </ul>
     )
  }

  return (
    <div>
      <h1>Roles component</h1>
     {getRoles()}   
    </div>
  );
};

export default Roles;
