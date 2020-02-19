import React from "react";

type RolesProps = {
  roles: { id: string; name: string }[];
};

const Users = ({ roles }: RolesProps) => {
  // const users: object = useSelector((store: RootState) => store.users.users);
  // console.log(users);
  // // @ts-ignore
  // const testArray = Object.keys(users).map((item: string) => {
  //     // @ts-ignore
  //     console.log(users[item], "Test");
  //     // @ts-ignore
  //     return users[item];
  // });
  // console.log("testArray", testArray);
  return (
    <div>
      <h1>Roles component</h1>
      <ul>
        {roles.length > 0 &&
          roles.map(role => {
            return <li key={role.id}>{role.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Users;
