import prisma from "@/prisma/client";
import AddIssueButton from "./IssueToolbar";
import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";
import IssueToolbar from "./IssueToolbar";
import { Metadata } from "next";

const IssuesPage = async ({ searchParams }: { searchParams: IssueQuery }) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where,
    orderBy: orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issuesCount = await prisma.issue.count({
    where,
  });
  return (
    <Flex direction={"column"} gap="3">
      <IssueToolbar />
      <IssueTable issues={issues} searchParams={searchParams} />
      <Pagination
        currentPage={page}
        itemCount={issuesCount}
        pageSize={pageSize}
      />
    </Flex>
  );
};
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all project issues",
};
export default IssuesPage;
