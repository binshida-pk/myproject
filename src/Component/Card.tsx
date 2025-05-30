function Card() {
  return (
    <div className=" ">
      <div className="justify-center md:pl-60 sm:pl-0 sm:grid-cols-1">
        <div className="grid mt-3  ">
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg p-3 w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4nF-jNK6rVLlhrZ5sIpYW_45Xu1A-ZKetQ&s"
            />

            <div>
              <div className="flex justify-between pr-26 gap-37">
                <h5 className="mb-2 text-2xl text-white dark:text-white pl-3">
                  Beach
                </h5>
                <button
                  type="button"
                  className="text-blue-300 bg-blue-200 hover:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:border-blue-400"
                >
                  CROTIA
                </button>
              </div>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b pl-3">
                <p>
                  Completely renovated for the season 2020,Arena Verudela Beach
                  Apartment fully equipped and moderly furnished 4-Star
                  self-Service appartmenta located on the Adriatic costline by
                  one of most beautiful in pula
                </p>
              </div>

              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b pl-3">
                <h6>PERFECT FOR YOU,IF YOU ENJOY</h6>
                <div>
                  <button className="text-blue-300 bg-blue-200 hover:bg-blue-300 rounded-full text-sm p-2 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:border-blue-400">
                    sunny weather
                  </button>

                  <button className="text-blue-300 bg-blue-200 hover:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:border-blue-400">
                    Onsite Zoo
                  </button>
                  <button className="text-blue-300 bg-blue-200 hover:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:border-blue-400">
                    Sea
                  </button>
                  <button
                    type="button"
                    className="text-blue-300 bg-blue-200 hover:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:border-blue-400"
                  >
                    Nature
                  </button>

                  <button
                    type="button"
                    className="text-blue-300 bg-blue-200 hover:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:border-blue-400"
                  >
                    WAter Sports
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-75 ml-3 mb-2">
                  Show Details
                </button>
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-red-400 bg-gray-700 mr-3 rounded-lg border-2 border-gray-500"
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
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
