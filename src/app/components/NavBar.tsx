import Link from 'next/link';
import Search from "./Search";
import React from 'react'

export default function NavBar() {
  return (
    <header className="bg-slate-500 sticky top-0 z-10">
        <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-thin max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl text-center text-white whitespace-nowrap">
                <Link href="/">Image Gallery</Link>
            </h1>
            <Search />
        </nav>
    </header>
  )
}
