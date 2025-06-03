import Users from "./Users";

function Usersprop() {
  return (
    <div className="grid w-full pl-50 ">
      <div className="grid grid-cols-3 h-13 p-3 border-b-2  hover:bg-blue-100">
        <div className="flex gap-3">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-black"
          />
          User
        </div>
        <div>Email</div>
        <div>Job</div>
      </div>

      <Users user="dsaf" email="asdf" job="sf" />
      <Users user="idhg" email="asdf" job="rf" />
      <Users user="dsaf" email="asdf" job="wf" />
      <Users user="idhg" email="asdf" job="jf" />
    </div>
  );
}

export default Usersprop;
