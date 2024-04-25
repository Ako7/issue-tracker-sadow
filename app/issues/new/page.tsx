"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Add issue title..."></TextField.Root>
      <SimpleMDE />
      <Button>Add new Issue</Button>
    </div>
  );
};

export default NewIssuePage;
