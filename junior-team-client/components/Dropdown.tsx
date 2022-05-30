import React, { useState } from "react"
import { motion } from "framer-motion"
import { signOut } from "next-auth/react"

type Props = {
  title: string
}

const Dropdown = ({ title }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex">
      {!isOpen && (
        <button
          className="text-white bg-[#fb561d] hover:bg-[#c03403] pr-12 focus:outline-none font-medium rounded-lg text-sm px-4 h-10 text-center flex items-center"
          onClick={() => setIsOpen(true)}
        >
          {title || null}
        </button>
      )}
      {isOpen && (
        <div className="">
          <div className="">
            <button
              className="text-white bg-[#fb561d] hover:bg-[#c03403] pr-12 focus:outline-none` font-medium rounded-lg text-sm px-4 h-10 text-center flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {title || null}
            </button>
          </div>
          <motion.div
            animate={{ y: 10 }}
            className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href={`/api/auth/signout`}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
