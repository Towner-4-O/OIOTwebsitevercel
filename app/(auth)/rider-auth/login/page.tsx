"use client"

import LoginFormRider from "@/app/_components/layout/rider-auth/LoginFormRider"
import { Suspense } from "react"

const Page = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <LoginFormRider />
    </Suspense>
  )
}

export default Page