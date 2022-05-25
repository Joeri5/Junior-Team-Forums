import { useRouter } from "next/router";
import React from "react";

type NavbarLinks = {
  children: React.ReactNode;
  to: string;
  ignoreColor?: boolean;
};

function NavbarLinks({ children, to, ignoreColor }: NavbarLinks) {
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

  return <div>Navbar</div>;
};

export default Navbar;
