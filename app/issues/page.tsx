import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import NewIssuePage from "./new/page";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <>
      <Button>
        <Link href={"/issues/new"}>Add new Issue</Link>
      </Button>
    </>
  );
};

export default IssuesPage;
