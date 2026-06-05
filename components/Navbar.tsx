import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link href="/">College Discovery</Link>
      </h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/compare">Compare</Link>
        <Link href="/predictor">Predictor</Link>
        <Link href="/saved">Saved</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}