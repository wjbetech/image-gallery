import Link from 'next/link';
import React from 'react'

export default function BottomNav() {
  return (
    <header className="bg-slate-500 max-w-full">
        <nav className="font-thin max-w-6xl mx-auto text-center">
            <h1 className="text-md sm:text-lg text-white whitespace-nowrap py-4">
                <Link href="https://github.com/wjbetech">@wjbetech</Link>
            </h1>
        </nav>
    </header>
  )
}

// flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-thin max-w-6xl mx-auto
