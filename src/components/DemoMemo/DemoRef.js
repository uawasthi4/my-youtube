import React, { useEffect, useRef, useState } from "react";

const DemoRef = () => {
  const [staVal, setStaVal] = useState(0);
  let letVal = 0;
  const refVal = useRef(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      console.log("Hello world: " + Math.random());
    }, 1000);
  }, []);
  return (
    <div className="m-4 p-2 h-96 w-96 border border-black">
      <div>
        <button
          className="bg-yellow-500 rounded-sm text-black p-2 mb-2"
          value={letVal}
          onClick={() => (letVal = letVal + 1)}
        >
          Increase let value
        </button>
        <h1 className="font-bold">Let Value: {letVal}</h1>
      </div>
      <hr className="mb-2" />
      <div>
        <button
          className="bg-yellow-500 rounded-sm text-black p-2 mb-2"
          value={staVal}
          onClick={() => setStaVal(staVal + 1)}
        >
          Increase value
        </button>
        <h1 className="font-bold">State Value: {staVal}</h1>
      </div>
      <hr className="mb-2" />
      <div>
        <button
          className="bg-yellow-500 rounded-sm text-black p-2 mb-2"
          value={staVal}
          onClick={() => (refVal.current = refVal.current + 1)}
        >
          Increase ref value
        </button>
        <h1 className="font-bold">Ref Value: {refVal.current}</h1>
      </div>
      <div>
        <button
          className="bg-red-800 text-white p-2 rounded-md mt-24 float-end"
          onClick={() => {
            clearInterval(interval.current);
          }}
        >
          Stop Interval
        </button>
      </div>
    </div>
  );
};

export default DemoRef;
