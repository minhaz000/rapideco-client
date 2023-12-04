import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-400">
      <h2 className="text-3xl">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
      <Link
        href="/"
        className="bg-slate-700 px-5 py-2 rounded mt-2 shadow-md text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
