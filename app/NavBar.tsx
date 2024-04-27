"use client";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBugs } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav>
      <Container>
        <Flex
          gap="6"
          mb="5"
          px="5"
          height="50px"
          className="border-b"
          align="center"
          justify="between"
        >
          <Flex gap="6" align="center">
            <Link href={"/"}>
              <FaBugs className="object-fill" size={25} />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={classnames({
                      "text-zinc-900": link.href === currentPath,
                      "text-zinc-500": link.href !== currentPath,
                      "hover:text-zinc-800 transition-colors": true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href={"/api/auth/signout"}>Log out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href={"/api/auth/signin"}>Log in</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
