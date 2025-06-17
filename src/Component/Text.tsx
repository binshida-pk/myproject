// //useState
// import { useState } from "react";
// function Text() {
//   const [name, setName] = useState("sparrow");

//   const changeName = () => {
//     setName("jack");
//   };

//   return (
//     <>
//       <div className="flex justify-center  gap-3">
//         <br />
//         <h1>Type your name</h1>
//         <input type=" text" value={name} className="border-1" />
//         <button className="border-1" onClick={changeName}>
//           submit
//         </button>
//       </div>
//     </>
//   );
// }

// export default Text;

// useEfect

// import { useState, useEffect } from "react";

// function Text() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);
//   });

//   return (
//     <div className="flex justify-center">
//       <h1> i have renderd{count}times!</h1>
//     </div>
//   );
// }

// export default Text;

// useRef

// import { useEffect, useRef, useState } from "react";

// function Text() {
//   const [value, setValue] = useState(0);
//   console.log("hello");
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <div className="flex justify-center gap-3">
//       <h1>{value}</h1>
//       <button
//         onClick={() => {
//           setValue((count) => count + 1);
//         }}
//       >
//         click
//       </button>
//     </div>
//   );
// }

// export default Text;

// useCallback
// import { useState, useCallback } from "react";

// function Text() {
//   const [name, setName] = useState("jack");
//   const changeName = useCallback(() => {
//     "sparrrow";
//   }, [name]);

//   return (
//     <div className=" flex justify-center gap-3">
//       <h1>{name}</h1>
//       <button onClick={() => setName(changeName)}>click</button>
//     </div>
//   );
// }
// export default Text;

//useMemo

// import { useState, useMemo } from "react";

// function Text() {
//   const [number, setNumber] = useState(0);
//   const [counter, setCounter] = useState(0);

//   function sqr() {
//     console.log(" sqr received ");
//     return number * number;
//   }
//   const output = useMemo(() => sqr(number), [number]);

//   return (
//     <div className="flex justify-center gap-3 ">
//       <input
//         className="boarder-2"
//         type="number"
//         value={number}
//         onChange={(e) => {
//           setNumber(e.target.value);
//         }}
//       />
//       <h1>square num:{output}</h1>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         click ++
//       </button>
//       <h1>counter:{counter}</h1>
//     </div>
//   );
// }

// export default Text;

// useReducer
// import { useReducer } from "react";
// function Text() {
//   const initialState = { count: 0 };
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "increase":
//         return { count: state.count + 1 };
//       case "decrease":
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="flex justify-center gap-3">
//       <h1>counter{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increase" })}>increase</button>
//       <button onClick={() => dispatch({ type: "decrease" })}>decrease</button>
//     </div>
//   );
// }

// export default Text;

import { useEffect, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../Localstorage/localstorage";
function Text() {
  const [count, setCount] = useState(() => {
    const storage = getlocalStorage("count");
    return (storage as number) || 0;
  });

  useEffect(() => {
    setlocalStorage("count", count);
  }, [count]);

  return (
    <div className="flex justify-center gap-3 bg-blue-100">
      <h1 className="text-4xl text-black">{count}</h1>
      <button className="bg-blue-50" onClick={() => setCount(count + 1)}>
        count
      </button>
    </div>
  );
}

export default Text;
