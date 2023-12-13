"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
  }, [error]);
  return (
    <>
     <div className="">
      
     </div>
    </>
  );
}
