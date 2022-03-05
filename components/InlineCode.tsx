import { FC } from "react";
import { Code, CodeProps } from "@chakra-ui/react";

interface InlineCodeProps extends CodeProps {}

const InlineCode: FC<InlineCodeProps> = ({ ...props }) => {
  return <Code px={2} py={1} rounded="md" {...props} />;
};

export default InlineCode;
