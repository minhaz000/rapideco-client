import Image from "next/image";
import Link from "next/link";
import Error from "../../public/404.png";
export default function NotFound() {
  return (
    <div className="h-screen sm:flex justify-center items-center mx-20 gap-5 mb-5 sm:mb-0">
      <div className="sm:w-1/2">
        <Image src={Error} alt="404" />
      </div>
      <div className="sm:w-1/2">
        <h2 className="text-6xl">Not Found</h2>
        <Link
          href="/"
          className="bg-red-700 px-5 py-2 rounded shadow-md text-white mt-5 inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
