"use client"
import { useEffect } from "react"

export default function Error ({error} : {error: Error}) {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="flex item-center justify-center h-screen">
           <div className="text-2xl text-red-500">Error Fetching users</div> 
        </div>
    )
}