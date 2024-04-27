import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const AddIssueButton = () => {
  return (
    <Flex mb="3" justify="between">
      <IssueStatusFilter />
      <Button>
        <Link href={"/issues/new"}>Add new Issue</Link>
      </Button>
    </Flex>
  );
};

export default AddIssueButton;
