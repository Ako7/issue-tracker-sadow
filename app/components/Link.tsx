import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";
import { ReactNode } from "react";

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
