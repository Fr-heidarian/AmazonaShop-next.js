import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <Link
        href="/"
        className="absolute top-4 left-4 text-gray-600 font-bold hover:text-gray-900"
      >
        back to home
      </Link>
      <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Sign in
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <div>
            <button className="btn btn-block btn-neutral">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
