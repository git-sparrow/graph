import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../store/users";
import {RootState} from '../../store/rootReducer'
import uniqBy from 'lodash/uniqBy'

import {User} from '../../store/types';

const Permissions = () => {
  const users = useSelector((store: RootState) => store.users.users)

  const getPermissions = () => {
      const permissionsArr: {id:string, name: string}[] = [];

      users.forEach((user) => {
            user.roles.forEach((role) => {
                role.permissions.forEach((permission) => {
                    permissionsArr.push({id: permission.id, name: permission.name})
                })
            })
      })
     
     const uniqueArr: {id:string, name: string}[] = uniqBy(permissionsArr, 'id');
     
     return (
         <ul>
             {uniqueArr.length > 0 && uniqueArr.map((item) => {
                return (
                    <li key={item.id}>{item.name}</li>
                )
             })}
         </ul>
     )
  }

  return (
    <div>
      <h1>Permissions component</h1>
     {getPermissions()}   
    </div>
  );
};

export default Permissions;
