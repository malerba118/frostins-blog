import { FC } from "react";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  Navigator,
  SandpackThemeProvider,
  SandpackThemeProp,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Editor from "./Editor";
import ConnectedEditor from "./ConnectedEditor";

interface ProjectProps {
  theme?: SandpackThemeProp;
}

const Project: FC<ProjectProps> = ({ children, theme = "night-owl" }) => {
  return (
    <SandpackThemeProvider theme={theme}>
      <SandpackProvider template="react">
        <Box pos="fixed" top={0} right={0} bottom={0} w="50vw" bg="red.400">
          <SandpackLayout theme={theme}>
            <Stack spacing={0} h="100vh" w="100%">
              <Navigator />
              <SandpackCodeEditor
                showLineNumbers
                customStyle={{ height: "calc(50%)" }}
              />
              <SandpackPreview customStyle={{ height: "calc(50% - 40px)" }} />
            </Stack>
          </SandpackLayout>
        </Box>
        <Box w="50vw">{children}</Box>
      </SandpackProvider>
    </SandpackThemeProvider>
  );
};

export default Project;
