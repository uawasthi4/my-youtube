import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Songs", "Gaming", "Cricket", "News", "Cooking"];
  return (
    <div className="flex">
      {list.map((btn, index) => (
        <Button key={index} name={btn}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
