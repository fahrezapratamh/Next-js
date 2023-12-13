"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=13092003",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate failed");
    } else {
      const respone = await res.json();
      if (respone.revalidate) {
        setStatus("Revalidate success");
      }
    }
  };
  return (
    <div className="h-96 w-1/2 flex items-center justify-center bg-gray-400/50 rounded-lg">
      <div className="flex flex-col">
        <h1>Revalidate Admin</h1>
        <h1>{status}</h1>
        <button
          className="bg-sky-500 text-white h-10  p-3"
          onClick={() => revalidate()}
        >
          Revalidate
        </button>
      </div>
    </div>
  );
}
