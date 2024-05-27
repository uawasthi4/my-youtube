import React, { useMemo, useState } from "react";
import { findNthPrime } from "../../utilities/helper";

const DemoMemo = () => {
  const [value, setValue] = useState(0);

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  //   const prime = () => findNthPrime(value);
  const prime = useMemo(() => findNthPrime(value), [value]);

  return (
    <div
      className={
        "m-4 p-2 border w-96 h-96 border-black " +
        (isDarkTheme && " bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="bg-yellow-600 rounded-sm p-2 mb-2"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle Theme
        </button>
      </div>
      <div>
        <input
          type="number"
          className="border border-black rounder-lg p-2 text-black"
          placeholder="Input something!"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <h1 className="font-bold mt-2">nth Prime Number: {prime}</h1>
      </div>
    </div>
  );
};

export default DemoMemo;
