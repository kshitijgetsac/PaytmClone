export function SignIn() {
  return (
    <div className=" flex bg-gray-100 items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-mg ">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <p className="text-center text-gray-600 pt-2 ">
          Enter your credentials to access your
        </p>
        <p className="text-center text-gray-600">account</p>
        <h3 className="font-bold text-black-200 pt-8">Email</h3>
        <input
          className="w-full indent-2 rounded border-gray-200 border-2"
          placeholder="johndoe@example.com"
        ></input>
        <h3 className="font-bold text-black-200 pt-8">Password</h3>
        <input
          type="password"
          className="w-full  rounded border-gray-200 border-2"
        ></input>
        <div className="pt-4">
          <button className="items-center text-white bg-black border  rounded-md w-full">
            Sign In
          </button>
        </div>
        <div className="flex pt-2">
          <h4 className=" text-black-200 items-center">
            Don't have an account?
          </h4>
          <a className="underline" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
