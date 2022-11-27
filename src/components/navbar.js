import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function VdNavbar() {
  return (
    <nav className="sticky top-0 z-10 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex space-x-6 text-gray-200 content-center">
            <a href="#" className="py-1.5 text-sm hover:text-white transition duration-150 ease-in-out">Progetti</a>
            <a href="#" className="py-1.5 text-sm hover:text-white transition duration-150 ease-in-out">Scuola</a>
            <a href="#" className="py-1.5 text-sm hover:text-white transition duration-150 ease-in-out">Blog</a>
          </div>
          <StaticImage
            src="../images/crop-white.png"
            alt="Website logo"
            placeholder="blurred"
            width={75}
            height={30}
          />

          <button className="rounded-full bg-violet-900 px-4 py-2 text-gray-200 font-medium text-xs leading-tight shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-700 active:shadow-lg transition duration-150 ease-in-out">Contattami</button>
        </div>
      </div>
    </nav>
  )
}
