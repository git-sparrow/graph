import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../store/users";
import {RootState} from '../../store/rootReducer'
import uniqBy from 'lodash/uniqBy'

import {User} from '../../store/types';

const Objects = () => {
  const users = useSelector((store: RootState) => store.users.users)

  const getObjects = () => {
      const objectsArr: {id:string, name: string}[] = [];

      users.forEach((user) => {
            user.roles.forEach((role) => {
                role.permissions.forEach((permission) => {
                    permission.objects.forEach(item => {
                        objectsArr.push({id: item.id, name: item.name})
                       })
                    })
            })
      })

     const uniqueArr: {id:string, name: string}[] = uniqBy(objectsArr, 'id');
     
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
      <h1>Objects component</h1>
     {getObjects()}   
    </div>
  );
};

export default Objects;
