import { FC } from "react";
import { Code, CodeProps } from "@chakra-ui/react";

interface InlineCodeProps extends CodeProps {}

const InlineCode: FC<InlineCodeProps> = ({ ...props }) => {
  return (
    <Code
      verticalAlign="baseline"
      bg="whiteAlpha.100"
      h="30px"
      px={2}
      rounded="md"
      {...props}
    />
  );
};

export default InlineCode;
