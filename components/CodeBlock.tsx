import { FC } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import Viewer from "./Viewer";
import { Button, Flex, Stack, Tag } from "@chakra-ui/react";
import { useSandpack, useSandpackTheme } from "@codesandbox/sandpack-react";
import { SandpackLanguageSupport } from "./utils";

interface CodeBlockProps {
  path: string;
  code: string;
  language: SandpackLanguageSupport;
}

const CodeBlock: FC<CodeBlockProps> = ({ path, code, language }) => {
  const { theme } = useSandpackTheme();
  const { sandpack } = useSandpack();

  return (
    <Stack bg={theme.palette.defaultBackground} rounded="lg" spacing={-2}>
      <Flex p={2} justifyContent="space-between">
        <Tag
          visibility={path ? "visible" : "hidden"}
          bg="whiteAlpha.300"
          color="whiteAlpha.800"
        >
          {path}
        </Tag>
        <Button
          colorScheme="purple"
          size="xs"
          onClick={() => {
            sandpack.openFile(path);
            sandpack.updateFile(path, code || "");
          }}
        >
          Apply Changes
        </Button>
      </Flex>
      <Viewer showLineNumbers code={code} language={language} />
    </Stack>
  );
};

export default CodeBlock;
