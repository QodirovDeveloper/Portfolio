"use client";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import { buttonVariants, Button } from "./ui/button";

export const navbarLinks = [
  {
    path: "/",
    text: "Bosh sahifa",
  },
  {
    path: "/projects",
    text: "Loyihalar",
  },
];

function Mobile({ open, pathname }) {
  return (
    open && (
      <nav className="sm:hidden absolute w-full bg-primary-foreground left-0 right-0 top-[60px] shadow-sm z-50">
        <ul className="grid grid-cols-2 py-5 px-3 border-t">
          {navbarLinks.map(({ text, path }, index) => {
            return (
              <li className="w-full" key={index}>
                <Link
                  className={`${buttonVariants({ variant: "link" })} ${
                    pathname === path ? "underline" : ""
                  } w-full`}
                  href={path}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              className={`${buttonVariants({
                variant: "default",
              })} justify-center w-full`}
              href="https://t.me/hasanboy_vlog"
              target="_blank"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    )
  );
}

function Desktop({ pathname }) {
  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {navbarLinks.map(({ text, path }, index) => {
          return (
            <li key={index}>
              <Link
                className={`${buttonVariants({ variant: "link" })} ${
                  pathname === path ? "underline" : ""
                }`}
                href={path}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <Desktop pathname={pathname} />
      <Mobile open={open} pathname={pathname} />
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="sm:hidden"
        variant="outline"
        size="icon"
      >
        {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
      </Button>
    </>
  );
}
