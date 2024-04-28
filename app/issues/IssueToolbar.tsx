import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueToolbar = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button>
        <Link href={"/issues/new"}>Add new Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueToolbar;
