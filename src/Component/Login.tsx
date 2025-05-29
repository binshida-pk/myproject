import Button from "./Button";

function Login() {
  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <form className="bg-white p-8 rounded-lg shadow-lg w-96 border-1 border-gray-500">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <label className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 mb-4  border-b-1 border-gray-900 focus:outline-none  focus:border-b-blue-500"
            placeholder="Your Name"
          />

          <label className="mb-2 text-gray-700">Email ID</label>

          <input
            type="email"
            className="w-full p-2 mb-4  border-b-1 border-gray-900 focus:outline-none focus:border-b-blue-500"
            placeholder="Your Email"
          />

          <a
            href="/signin"
            className="text-gray-700 text-decoration-line: underline"
          >
            Click me
          </a>

          {/* <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-2"
          >
            Submit
          </button> */}
          <Button classes={"w-full "} label="login" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
