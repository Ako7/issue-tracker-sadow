import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const AddIssueButton = () => {
  return (
    <div className="mb-3">
      <Button>
        <Link href={"/issues/new"}>Add new Issue</Link>
      </Button>
    </div>
  );
};

export default AddIssueButton;
