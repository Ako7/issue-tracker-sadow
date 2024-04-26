import ReactMarkdown from "react-markdown";
import { IssueStatusBadge } from "@/app/components";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Issue } from "@prisma/client";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="5">
        <ReactMarkdown>{issue?.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
