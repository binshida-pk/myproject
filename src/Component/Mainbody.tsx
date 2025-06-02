import Table from "./Table";

function Mainbody() {
  return (
    <div>
      <div className="pr-10 pt-5 sm:ml-64  h-[20vh]  ">
        <div className="grid grid-cols-5  gap-3 ">
          <div className="col-span-2 p-2 bg-violet-400 rounded-lg border-1  ">
            <div className="font-bold ">Welcome Back!Daxa</div>
            <p>Learning Management System Dashboard</p>
            <p>Daily Performance</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 border-1">
            <div>Active Courses</div>
            <p className="font-bold">1.5k+</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 border-1">
            <div>Enrolled Students</div>
            <p className="font-bold">1.2k+</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 border-1">
            <div>Completion Status</div>
            <p className="font-bold">75%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4  h-[50vh] sm:w-full  ">
          <div className="col-span-3 sm:col-span-2  bg-gray-100 p-3 rounded-lg border-1">
            <div className="font-bold">Active Students</div>
          </div>

          <div className="bg-white border-1  rounded-lg sm:p-3  ">
            <div className="flex justify-between">
              <p className="flex-start">Courses categorys</p>
              <p className="flex-end">This week</p>
            </div>
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
