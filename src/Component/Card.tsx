function Card() {
  return (
    <div className="w-[100%] ">
      <div className="grid lg:grid-cols-3 justify-center gap-2 md:pl-70 sm:pl-0 sm:grid-cols-1">
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

        {/* <div className="grid mt-3  ">
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg p-3 w-full"
              src="data:image/jpeg;base64,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"
            />

            <div>
              <div className="flex justify-between pr-26 gap-26 ">
                <h5 className="mb-2 text-2xl text-white dark:text-white pl-3">
                  Apartment
                </h5>
                <button
                  type="button"
                  className="text-blue-300  bg-blue-200 hover:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-400 dark:border-blue-400"
                >
                  CROTIA
                </button>
              </div>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b pl-3">
                <p>
                  Most Arena Verudela Beach Apartments offer a splendid and
                  soothing view of the sea and are surrounded by fragrant
                  Mediterranean vegetation and a seafront promenade.
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

        <div className="grid mt-3 ">
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg p-3 w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s"
            />

            <div>
              <div className="flex justify-between pr-26 gap-39">
                <h5 className="mb-2 text-2xl text-white dark:text-white pl-3">
                  Food
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
                  Pasta is a popular, versatile, and relatively inexpensive food
                  staple, appreciated for its taste, convenience, and ability to
                  be combined with various ingredients.
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
        </div> */}
      </div>
    </div>
  );
}

export default Card;
