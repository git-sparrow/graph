import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

type ObjectsProps = {
  objects: { id: string; name: string }[];
};

const Objects = ({ objects }: ObjectsProps) => {
  const [value, setValue] = useState<string>("");

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Objects component</h1>
      <ul>
        {objects.length > 0 &&
          objects.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
      <div>
        <TextField
          id="outlined-search"
          label="Add new object"
          type="search"
          variant="outlined"
          value={value}
          onChange={_handleChange}
        />
      </div>
    </div>
  );
};

export default Objects;
