export const filterHelper = (
  object: any,
  arrToFilter: string,
  idToRemove: string
) => {
  let filteredObject = {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      let dependencyArray = [...object[key][arrToFilter]];

      const elIndex = dependencyArray.findIndex(
        (item: string) => item === idToRemove
      );
      console.log("Element index", elIndex);
      if (~elIndex) {
        dependencyArray = dependencyArray.filter(
          (item: string) => item !== idToRemove
        );
      }
      filteredObject = {
        ...filteredObject,
        [key]: {
          ...object[key],
          [arrToFilter]: dependencyArray
        }
      };
    }
  }

  return filteredObject;
};
