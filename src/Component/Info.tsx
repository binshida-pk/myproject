import Button from "./Button";

function Info() {
  return (
    <div className=" overflow-y-auto max-h-screen ">
      <div className=" pr-7 pl-60">
        <div className="col-span-2 bg-gray-100 p-2.5 rounded-lg border border-gray-400">
          <div className="flex gap-5">
            <div className="w-full md:w-1/3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2 h-4">
                First Name
              </label>
              <input
                className="block w-full  rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white border-1"
                id="grid-first-name"
                type="text"
                placeholder="text"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2 h-4">
                Last Name
              </label>
              <input
                className="block w-full border-1 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 mt-6">
            <div className="w-[650px] px-4">
              <label className="block uppercase text-xs font-bold mb-2 h-4">
                Email Address
              </label>
              <input
                className="block w-full border-1 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 h-4">
                Country
              </label>
              <div
                className="block w-full border-1 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                id="grid-state"
              >
                <div className="relative flex justify-between">
                  <select className="flex justify-between">
                    <option>Germany</option>
                    <option>India</option>
                    <option>United State</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-xs font-bold mb-2 h-4">
                Street Address
              </label>
              <input
                className="block w-full border-1 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 border-b-1 border-gray-600">
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-2">
              <label className="block uppercase text-xs font-bold mb-2 h-4">
                city
              </label>
              <input
                className="block w-full border-1 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="text"
              />
            </div>
            <div className="flex flex-wrap mx-4 mb-6">
              <div className="w-full px-3 mb-6 md:mb-2">
                <label className="block uppercase text-xs font-bold mb-2 h-4">
                  State/Province
                </label>
                <input
                  className="block w-full border-1 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  placeholder="text"
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3 mb-6 md:mb-2">
                <label className="block uppercase text-xs font-bold mb-2 h-4">
                  Zip/Postal Code
                </label>
                <input
                  className="block w-full border-1 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  placeholder="text"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-gray-300 text-black px-2 py-2 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>

            <Button classes={"w-full "} label="submit." type="submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
