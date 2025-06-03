// function Table() {
//   return (
//     <div className="grid grid-cols-6  mt-3  justify-start  rounded-lg  border-1 bg-gray-100 p-1">
//       <div className="col-span-3">
//         <div className="flex align-middle">
//           <svg
//             className="w-6 text-gray-800 dark:text-black mt-3"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//             />
//           </svg>
//           <div className="p-1 text-[12px]">
//             <div>Technology</div>
//             <div>30+ Courses</div>
//           </div>
//         </div>
//       </div>

//       <div className="col-span-2 self-center">
//         <div className="flex justify-between ">Enrolled 950</div>
//       </div>
//       <div className="self-center justify-self-end">
//         <svg
//           className="flex w-6 text-gray-800 dark:text-black justify-between"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           fill="none"
//           viewBox="0 0 24 24"
//         >
//           <path
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="m10 16 4-4-4-4"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default Table;

type Props = {
  text1: string;
  text2: string;
  text3: string;
};

export default function Table({ text1, text2, text3 }: Props) {
  return (
    <div className="grid grid-cols-6  mt-3  justify-start  rounded-lg  border-1 bg-gray-100 p-1">
      <div className="col-span-3">
        <div className="flex align-middle">
          <svg
            className="w-6 text-gray-800 dark:text-black mt-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <div className="p-1 text-[12px]">
            <div>{text1}</div>
            <div>{text2}</div>
          </div>
        </div>
      </div>

      <div className="col-span-2 self-center">
        <div className="flex justify-between ">{text3}</div>
      </div>
      <div className="self-center justify-self-end">
        <svg
          className="flex w-6 text-gray-800 dark:text-black justify-between"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m10 16 4-4-4-4"
          />
        </svg>
      </div>
    </div>
  );
}
