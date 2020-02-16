
export interface Object {
    id: string
    name: string
}

export interface Permission {
    id: string
    name: string
    objects: Array<Object>
}

export interface Role {
    id: string
    name: string
    permissions: Array<Permission>
}

export interface User {
    id: string
    name: string
    address: string
    roles: Array<Role>
}