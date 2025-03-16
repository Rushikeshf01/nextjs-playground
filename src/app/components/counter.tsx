"use client"
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    console.log("counter component");
    
    return (
        <button onClick={() => {setCount(count+1)}}>Clicked Count {count} times</button>
    )
}