import * as React from "react"
import VdNavbar from "../components/navbar"

export default function IndexPage() {
  return (
    <main>
      <VdNavbar></VdNavbar>
      <div className="content max-w-7xl mx-auto px-4 text-gray-200">
        <span class="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Ciao! 👋</span> <br />
      </div>
    </main>
  )
}

export const Head = () => <title>Vittorio Lo Mele</title>
