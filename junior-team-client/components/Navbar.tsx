import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "../assets";

type NavbarLinkProps = {
  children: React.ReactNode;
  to: string;
  ignoreColor?: boolean;
};

function NavbarLink({ children, to, ignoreColor }: NavbarLinkProps) {
  const router = useRouter();

  return ignoreColor ? (
    <button
      onClick={() => router.push(to)}
      className="flex items-center gap-x-3 text-white bg-black text-xl px-10 py-2 rounded-xl"
    >
      {children}
    </button>
  ) : router.asPath === to ? (
    <button className="flex border-[#fb561d] text-xl border-b-2 w-20 mx-10 md:mx-5 transitition-border ease-in-out duration-300">
      {children}
    </button>
  ) : (
    <button
      onClick={() => router.push(to)}
      className="flex text-xl w-20 mx-10 md:mx-5 transitition-border ease-in-out duration-300 hover:border-[#fb561d] hover:border-b-2 "
    >
      {children}
    </button>
  );
}

function NavbarLogo(props: Props) {
  const router = useRouter();

  return router.asPath === "/" ? (
    <button onClick={() => router.push("/")} className="text-2xl">
      Junior <span className="text-[#fb561d]">Team</span>
    </button>
  ) : (
    <button onClick={() => router.push("/")} className="text-2xl">
      <span className="text-[#fb561d]">Junior</span> Team
    </button>
  );
}

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };

  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <>
          <nav className="border-b shadow-sm">
            <div className="flex justify-between w-screen px-5 md:px-10 py-5 items-center">
              <div className="transition-all duration-300 ease-in-out">
                <NavbarLogo />
              </div>
              <div className="hidden md:flex items-center">
                <NavbarLink to="/topics">Topics</NavbarLink>
                <NavbarLink to="/threads">Threads</NavbarLink>
                <div className="h-10 ml-10">
                  <button
                    onClick={handleLogin}
                    className="border-[#5865F2] border-2 hover:bg-[#5865F2] transition-colors ease-in-out duration-300 hover:text-white px-10 h-full rounded-md text-[#5865F2]"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsOpen(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#fb561d]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </>
      )}

      {isOpen && (
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          animate={{ x: ["-100%", "0%"] }}
          className="h-screen text-black md:hidden"
        >
          <div className="relative">
            <button className="absolute top-10 right-10 text-3xl text-[#fb561d]">
              ✕
            </button>
          </div>
          <div className="py-10 flex flex-col gap-7">
            <NavbarLink to="/topics">Topics</NavbarLink>
            <NavbarLink to="/threads">Threads</NavbarLink>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
