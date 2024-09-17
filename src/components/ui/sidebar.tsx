"use client";
import { cn } from "@/lib/utils";
import { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Logo from "../Logo";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./button";
import useIsActiveLink from "@/utils/useIsActiveLink";
import { links } from "@/assests/data";

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const NavSidebar = () => {
  return (
    <SidebarProvider>
      <SidebarBody />
    </SidebarProvider>
  );
};

export const SidebarBody = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileSidebar />
    </>
  );
};

export const DesktopNavbar = () => {
  const { open, setOpen } = useSidebar();
  return (
    <header>
      <nav className="shadow-md dark:shadow-teal-500 shadow-zinc-300">
        <div className="align-center flex justify-between items-center w-screen py-4 px-4 sm:px-8 lg:px-12">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-8">
            <ul className="hidden md:flex md:items-center md:gap-4">
              {links.map((navLink, i) => {
                return <NavLink navLink={navLink} key={i} />;
              })}
            </ul>
            <Button className="hidden sm:inline-flex">reach out</Button>
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              <IconMenu2 />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export const MobileSidebar = () => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <aside
        className={cn(
          "flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between"
              )}
            >
              <nav className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <div className="flex justify-between items-center">
                  <Logo />
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="text-neutral-800 dark:text-neutral-200"
                    onClick={() => setOpen(!open)}
                  >
                    <IconX />
                  </Button>
                </div>
                <ul className="mt-8 flex flex-col gap-2">
                  {links.map((navLink, index) => {
                    return <SidebarLink key={index} link={navLink} />;
                  })}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </>
  );
};

export const SidebarLink = ({
  link,
}: {
  link: string;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, setOpen, animate } = useSidebar();
  const isActive = useIsActiveLink(link);
  return (
    <li>
      <a
        href={`#${link}`}
        className={cn(
          "flex items-center justify-start gap-2  group/sidebar py-2"
        )}
        onClick={() => setOpen(!open)}
      >
        <motion.span
          animate={{
            display: animate
              ? open
                ? "inline-block"
                : "none"
              : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className={`tracking-wide capitalize group-hover/sidebar:border-b-2 group-hover/sidebar:border-b-primary  group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 ${
            isActive && "border-b-2 border-b-primary text-primary font-semibold"
          }`}
        >
          {link}
        </motion.span>
      </a>
    </li>
  );
};

const NavLink = ({ navLink }: { navLink: string }) => {
  const isActive = useIsActiveLink(navLink);
  return (
    <li>
      <motion.a
        href={`#${navLink}`}
        className={`tracking-wide capitalize duration-150 transition hover:border-b-2 hover:border-b-primary ${
          isActive && "border-b-2 border-b-primary text-primary font-semibold"
        }`}
      >
        {navLink}
      </motion.a>
    </li>
  );
};
