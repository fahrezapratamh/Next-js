"use client";
import { MouseEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";
export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <>
      <div className="fixed z-10 left-0 top-0 right-0 bottom-0 mx-auto bg-black/60" ref={overlay} onClick={close}>
        <div className="absolute top-1/2 left-1/2 -translate-x-12 -translate-y-1/2 p-6 bg-white">
            {children}
        </div>
      </div>
    </>
  );
}
