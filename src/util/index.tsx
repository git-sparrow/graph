import { normalize, schema } from "normalizr";

export const normalizeUsersData = (data: any) => {
  const object = new schema.Entity("objects");
  const permission = new schema.Entity("permissions", {
    objects: [object]
  });
  const role = new schema.Entity("roles", {
    permissions: [permission]
  });
  const user = new schema.Entity("users", {
    roles: [role]
  });
  const userListSchema = [user];

  return normalize(data, userListSchema);
};
