import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AsigneeSelect from "./AsigneeSelect";
import { cache } from "react";

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDeatailPage = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchUser(parseInt(params.id));
  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="4">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AsigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const issue = await fetchUser(parseInt(params.id));
  return {
    title: issue?.title,
    description: "Details od issue" + issue?.id,
  };
}
export default IssueDeatailPage;
