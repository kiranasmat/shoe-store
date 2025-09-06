"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "./components/slider";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false); // token exists, allow rendering
    }
  }, []);

  if (loading) return null; // or show a loader

  return (
    <div>
      <Slider />
    </div>
  );
}
