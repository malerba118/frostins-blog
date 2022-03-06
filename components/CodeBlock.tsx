import React, { FC } from "react";
import { Button, Flex, Stack, Tag, Icon } from "@chakra-ui/react";
import {
  SandpackThemeProvider,
  useSandpack,
  useSandpackTheme,
} from "@codesandbox/sandpack-react";
import { formatFilePath, SandpackLanguageSupport } from "./utils";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { lineNumbers } from "@codemirror/gutter";
import {
  getCodeMirrorLanguage,
  getEditorTheme,
  getSyntaxHighlight,
} from "./utils";
import { Box } from "@chakra-ui/react";
import { RiFileEditLine } from "react-icons/ri";

interface CodeBlockProps {
  path: string;
  code: string;
  language: SandpackLanguageSupport;
  showLineNumbers?: boolean;
}

const CodeBlock: FC<CodeBlockProps> = ({
  path,
  code,
  language = "typescript",
  showLineNumbers = false,
}) => {
  const { theme } = useSandpackTheme();
  const { sandpack } = useSandpack();
  const editor = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const currentEditor = editor.current as HTMLDivElement;

    const extensions = [
      getCodeMirrorLanguage(language),
      getEditorTheme(theme),
      getSyntaxHighlight(theme),
      EditorState.readOnly.of(true),
      EditorView.editable.of(false),
    ];

    if (showLineNumbers) {
      extensions.push(lineNumbers());
    }

    const state = EditorState.create({
      doc: code,
      extensions,
    });
    const view = new EditorView({ state, parent: currentEditor });

    return () => view.destroy();
  }, [editor.current]);

  return (
    <Stack
      bg={theme.palette.defaultBackground}
      rounded="lg"
      spacing={-2}
      w="100%"
      my={5}
    >
      <Flex p={2} justifyContent="space-between">
        <Tag
          size="md"
          visibility={path ? "visible" : "hidden"}
          bg="none"
          color="orange.200"
          opacity={0.8}
          cursor="pointer"
          _hover={{
            opacity: 1,
          }}
          rounded="lg"
          onClick={() => {
            sandpack.openFile(path);
          }}
        >
          {formatFilePath(path)}
        </Tag>
        <Button
          colorScheme="whiteAlpha"
          size="xs"
          color="orange.200"
          onClick={() => {
            sandpack.openFile(path);
            sandpack.updateFile(path, code || "");
          }}
        >
          <Icon alignSelf="center" fontSize="md" as={RiFileEditLine} mr="1" />{" "}
          Copy to Sandbox
        </Button>
      </Flex>
      <Box
        p={4}
        px={1}
        bg={theme.palette.defaultBackground}
        rounded="lg"
        overflow="hidden"
        tabIndex={-1}
        ref={editor}
      />
    </Stack>
  );
};

const CodeBlockWrapper: FC<CodeBlockProps> = (props) => {
  return (
    <SandpackThemeProvider theme="monokai-pro">
      <CodeBlock {...props} />
    </SandpackThemeProvider>
  );
};

export default CodeBlockWrapper;
