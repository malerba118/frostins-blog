import { FC } from "react";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  Navigator,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Box, Flex, Stack } from "@chakra-ui/react";

interface ProjectProps {}

const Project: FC<ProjectProps> = ({ children }) => {
  return (
    <SandpackProvider template="react">
      <Box w="50vw">{children}</Box>
      <Box pos="fixed" top={0} right={0} bottom={0} w="50vw" bg="red.400">
        <SandpackLayout>
          <Stack spacing={0} h="100vh" w="100%">
            <Navigator />
            <SandpackCodeEditor showLineNumbers customStyle={{ flex: 1 }} />
            <SandpackPreview customStyle={{ flex: 1 }} />
          </Stack>
        </SandpackLayout>
      </Box>
    </SandpackProvider>
  );
};

export default Project;
