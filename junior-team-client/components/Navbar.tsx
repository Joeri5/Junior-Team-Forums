import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

type NavbarLink = {
  children: React.ReactNode;
  to: string;
  ignoreColor?: boolean;
};

function NavbarLink({ children, to, ignoreColor }: NavbarLink) {
  const router = useRouter();

  return ignoreColor ? (
    <button
      onClick={() => router.push(to)}
      className="flex items-center gap-x-3 text-white bg-black text-xl px-10 py-2 rounded-xl"
    >
      {children}
    </button>
  ) : router.asPath === to ? (
    <button className="flex items-center gap-x-3 text-white bg-black text-xl px-10 py-2 rounded-xl">
      {children}
    </button>
  ) : (
    <button
      onClick={() => router.push(to)}
      className="flex items-center gap-x-3 text-xl px-10 py-2 rounded-xl filter-img-child"
    >
      {children}
    </button>
  );
}

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  //   const [user, loading] = useAuthState(auth);

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
          <nav>
            <div>
              <h1 className="text-2xl">
                Junior <span className="text-[#fb561d]">Team</span>
              </h1>
            </div>
          </nav>
        </>
      )}

      {isOpen && (
        <>
          <nav>
            <div>
              <h1>Junior Team</h1>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
