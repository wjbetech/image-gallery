'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import React from "react"

export default function Search() {

    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/results/${search}`);
        setSearch("");
    }

  return (
    <form 
        className="flex justify-center md:justify-between" 
        onSubmit={handleSubmit}
    >
        <input 
            type="text" 
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for images"
            className="bg-white p-2 pl-4 w-[250px] sm:w-80 text-lg rounded-xl text-black"
        />
    </form>
  )
}

