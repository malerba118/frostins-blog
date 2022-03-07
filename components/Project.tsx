import { FC } from "react";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  Navigator,
  SandpackThemeProp,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Box, Stack } from "@chakra-ui/react";
import files from "./files";

interface ProjectProps {
  theme?: SandpackThemeProp;
}

const Project: FC<ProjectProps> = ({ children, theme = "monokai-pro" }) => {
  return (
    <SandpackProvider customSetup={{ files }} template="react">
      <Box w="53vw" overflow="hidden">
        {children}
      </Box>
      <Box pos="fixed" top={0} right={0} bottom={0} w="47%">
        <SandpackLayout theme={theme}>
          <Stack spacing={0} h="100vh" w="100%">
            <Navigator />
            <SandpackCodeEditor
              showLineNumbers
              customStyle={{ height: "50%", fontFamily: "poppins" }}
            />
            <SandpackPreview customStyle={{ height: "calc(50% - 40px)" }} />
          </Stack>
        </SandpackLayout>
      </Box>
    </SandpackProvider>
  );
};

export default Project;
