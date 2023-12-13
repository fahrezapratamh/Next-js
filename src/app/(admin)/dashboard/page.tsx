"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated" || session?.user.role !== "admin") {
      router.push("/login");
    }
  }, [status, router,session?.user.role]);
  console.log(session)
  return (
    <>
      <div className="h-96 w-full flex items-center justify-center bg-gray-400/50 rounded-lg">
        <h1>Dashboard Page</h1>
      </div>
    </>
  );
}
