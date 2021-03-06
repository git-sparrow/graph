export const starterData = [
  {
    id: "5e4534fcc2e1e4711f596b51",
    name: "Ericka Keith",
    address: "587 Rock Street, Dana, Tennessee, 5590",
    roles: [
      {
        id: "5e4534fce3319397ea91b983",
        name: "Role-Entropix",
        permissions: [
          {
            id: "5e4534fcdce4140858236df6",
            name: "ADMIN",
            objects: [
              {
                id: "5e4534fcb4d4600d08304152",
                name: "Bucket"
              },
              {
                id: "5e4534fcaad72997ea7971ee",
                name: "Object1"
              },
              {
                id: "5e4534fcd38016f08bf8fce8",
                name: "Object2"
              }
            ]
          },
          {
            id: "5e4534fc470d1e156f80259b",
            name: "WRITE",
            objects: [
              {
                id: "5e4534fc0f401e7cefd5bf1e",
                name: "Object3"
              },
              {
                id: "5e4534fcb4d4600d08304152",
                name: "Bucket"
              }
            ]
          },
          {
            id: "5e4534fc109638942cd24207",
            name: "READ",
            objects: [
              {
                id: "5e4534fc0f401e7cefd5bf1e",
                name: "Object3"
              },
              {
                id: "5e4534fcb4d4600d08304152",
                name: "Bucket"
              }
            ]
          }
        ]
      },
      {
        id: "5e4534fcc4b49cc499a35b72",
        name: "Role-Ecratic",
        permissions: [
          {
            id: "5e4534fcdce4140858236df6",
            name: "ADMIN",
            objects: [
              {
                id: "5e4534fcb4d4600d08304152",
                name: "Bucket"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "5e4534fc42bc43e7d029a33e",
    name: "Doris Hurst",
    address: "163 Nova Court, Oasis, Puerto Rico, 4144",
    roles: [
      {
        id: "5e4534fca70ced1c8a0509a4",
        name: "Role-Plasmos",
        permissions: [
          {
            id: "5e4534fc470d1e156f80259b",
            name: "WRITE",
            objects: [
              {
                id: "5e4534fc0f401e7cefd5bf1e",
                name: "Object3"
              }
            ]
          },
          {
            id: "5e4534fcdce4140858236df6",
            name: "ADMIN",
            objects: [
              {
                id: "5e4534fcb4d4600d08304152",
                name: "Bucket"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "5e4534fc81bb45e692095582",
    name: "Pat Harmon",
    address: "371 Boardwalk , Munjor, Arkansas, 7201",
    roles: [
      {
        id: "5e4534fcc4b49cc499a35b72",
        name: "Role-Ecratic",
        permissions: [
          {
            id: "5e4534fcdce4140858236df6",
            name: "ADMIN",
            objects: [
              {
                id: "5e4534fcb4d4600d08304152",
                name: "Bucket"
              }
            ]
          }
        ]
      }
    ]
  }
];

const objectsCutted = [
  {
    id: "5e4534fcb4d4600d08304152",
    name: "Bucket"
  },
  {
    id: "5e4534fc0f401e7cefd5bf1e",
    name: "Object3"
  },
  {
    id: "5e4534fcd38016f08bf8fce8",
    name: "Object2"
  },
  {
    id: "5e4534fcaad72997ea7971ee",
    name: "Object1"
  }
];

const premissionsCutted = [
  {
    id: "5e4534fcdce4140858236df6",
    name: "ADMIN",
    objects: []
  },
  {
    id: "5e4534fc470d1e156f80259b",
    name: "WRITE",
    objects: []
  },
  {
    id: "5e4534fc109638942cd24207",
    name: "READ",
    objects: []
  }
];

const rolesCutted = [
  {
    id: "5e4534fce3319397ea91b983",
    name: "Role-Entropix",
    permissions: []
  },
  {
    id: "5e4534fcc4b49cc499a35b72",
    name: "Role-Ecratic",
    permissions: []
  },
  {
    id: "5e4534fca70ced1c8a0509a4",
    name: "Role-Plasmos",
    permissions: []
  }
];

const usersCutted = [
  {
    id: "5e4534fcc2e1e4711f596b51",
    name: "Ericka Keith",
    address: "587 Rock Street, Dana, Tennessee, 5590",
    roles: []
  },
  {
    id: "5e4534fc42bc43e7d029a33e",
    name: "Doris Hurst",
    address: "163 Nova Court, Oasis, Puerto Rico, 4144",
    roles: []
  },
  {
    id: "5e4534fc81bb45e692095582",
    name: "Pat Harmon",
    address: "371 Boardwalk , Munjor, Arkansas, 7201",
    roles: []
  }
];
