"use client"
import { useRouter } from "next/navigation"
export default function About() {
  const router = useRouter();
  return (
    <div>
      About Us
      <h1>Your Fellow Neanderthals</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Go to Home
      </button>
    </div>
  )
}
