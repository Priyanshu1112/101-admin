"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    console.log('here')
    router.push("/companies");
  }, [router]);
  return null; // No need to render anything as it will redirect
}
