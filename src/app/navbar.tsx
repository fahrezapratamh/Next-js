"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {data:session,status} : {data: any; status: string}= useSession();



  return (
    <div className="flex w-full bg-slate-900 px-2 py-2">
      <h1 className="text-white">Fahreza</h1>
      <ul className="flex ml-3 ">
        <Link href="/">
          <li
            className={`ml-3 ${
              pathname === "/" ? "text-sky-500" : "text-white"
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`ml-3 ${
              pathname === "/about" ? "text-sky-500" : "text-white"
            }`}
          >
            About
          </li>
        </Link>
        <Link href="/about/profile">
          <li
            className={`ml-3 ${
              pathname === "/about/profile" ? "text-sky-500" : "text-white"
            }`}
          >
            Profile
          </li>
        </Link>
      </ul>
      <div className="ml-auto flex">
        {status === "authenticated" ? (
          <>
         <div className="flex items-center">
         <h2 className="text-white">{session?.user?.fullname}</h2>
          <button className="text-white h-10 p-3 bg-sky-500" onClick={() => signOut()}>Logout</button>
         </div>
          </>
        ) : (
          <button onClick={() => signIn()}>Login</button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
