import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

import Card from "./components/Card";

import { IObject } from "../../store/objects";

type ObjectsProps = {
  objects: { id: string; name: string }[];
};

const Objects = () => {
  const objects: any = useSelector((store: RootState) => store.objects.byId);

  let objectsArray: IObject[] = Object.keys(objects).map(item => {
    return objects[item];
  });

  console.log("testArray", objectsArray);

  return (
    <div>
      <h1>Objects component</h1>

      {objectsArray.length > 0 &&
        objectsArray.map((object: IObject) => {
          return <Card key={object.id} id={object.id} name={object.name} />;
        })}

      <div></div>
    </div>
  );
};

export default Objects;
