import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../store/users";
import {RootState} from '../../store/rootReducer'
import uniqBy from 'lodash/uniqBy'

import {User} from '../../store/types';
type PermissionsProps = {
    permissions: {id: string, name: string}[]
  }

const Permissions = ({permissions}: PermissionsProps) => {
  
  return (
    <div>
      <h1>Permissions component</h1>
      <ul>
             {permissions.length > 0 && permissions.map((item) => {
                return (
                    <li key={item.id}>{item.name}</li>
                )
             })}
         </ul>  
    </div>
  );
};

export default Permissions;
