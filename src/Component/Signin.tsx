function Signin() {
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="bg-white p-8 rounded-lg shadow-lg w-150 border-1 border-gray-500">
        <h2 className="flex justify-center mb-10 center text-2xl font-bold text-center">
          Sign In
        </h2>
        <div className="flex gap-5">
          <div className="w-full md:w-1/2">
            <label className="block mb-2 text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full p-2 mb-4  border-b-2 border-gray-900 focus:outline-none focus:border-b-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block mb-2 text-gray-700">Last Name</label>
            <input
              type="text"
              className="w-full p-2 mb-4  border-b-2 border-gray-900 focus:outline-none focus:border-b-blue-500"
              placeholder="Your Name"
            />
          </div>
        </div>
        <label className="mb-2 text-gray-700">Email ID</label>

        <input
          type="email"
          className="w-full p-2 mb-4  border-b-2 border-gray-900 focus:outline-none focus:border-b-blue-500"
          placeholder="Your Email"
        />
        <div className="w-full">
          <label className="block mb-2 text-gray-700">Phone No</label>
          <input
            type="text"
            className="w-full p-2 mb-4  border-b-2 border-gray-900 focus:outline-none focus:border-b-blue-500"
            placeholder="Your Number"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
