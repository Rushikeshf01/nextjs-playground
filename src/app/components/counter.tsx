"use client"
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
    // const {isLoaded, userId, sessionId, getToken} = useAuth()
    const {isLoaded, isSignedIn} = useUser()

    const [count, setCount] = useState(0)
    console.log("counter component");
    
    if(!isLoaded || !isSignedIn){
        return null
    }
    
    return (
        <button onClick={() => {setCount(count+1)}}>Clicked Count {count} times</button>
    )
}