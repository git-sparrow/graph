import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../store/users";
import {RootState} from '../../store/rootReducer'
import uniqBy from 'lodash/uniqBy'

import {Role} from '../../store/types';
type RolesProps = {
  roles: {id: string, name: string}[]
}

const Roles = ({roles}: RolesProps) => {  

  return (
    <div>
      <h1>Roles component</h1>
      <ul>
          {roles.length > 0 && roles.map((role) => {
            return (
                <li key={role.id}>{role.name}</li>
            )
          })}
      </ul>  
    </div>
  );
};

export default Roles;
