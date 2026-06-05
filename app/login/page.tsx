export default function LoginPage() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Login
      </h1>

      <input
        type="email"
        placeholder="Enter Email"
        className="border p-2 w-full mb-4"
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="border p-2 w-full mb-4"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}