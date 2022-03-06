import { FC } from "react";
import Editor from "./Editor";
import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

type SandpackLanguageSupport = "javascript" | "typescript" | "html" | "css";

export const getLanguageFromFile = (
  filePath?: string,
  fileType?: string
): SandpackLanguageSupport => {
  if (!filePath && !fileType) return "javascript";

  let extension = fileType;
  if (!extension && filePath) {
    const extensionDotIndex = filePath.lastIndexOf(".");
    extension = filePath.slice(extensionDotIndex + 1);
  }

  switch (extension) {
    case "js":
    case "jsx":
      return "javascript";
    case "ts":
    case "tsx":
      return "typescript";
    case "html":
    case "svelte":
    case "vue":
      return "html";
    case "css":
    case "less":
    case "scss":
      return "css";
    default:
      return "javascript";
  }
};

interface ConnectedEditorProps {}

const ConnectedEditor: FC<ConnectedEditorProps> = ({}) => {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  return (
    <SandpackStack customStyle={{ height: "100vh", margin: 0 }}>
      <FileTabs />
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        <Editor
          key={sandpack.activePath}
          language={getLanguageFromFile(sandpack.activePath) as any}
          defaultValue={code}
          onChange={(value: any) => updateCode(value || "")}
        />
      </div>
    </SandpackStack>
  );
};

export default ConnectedEditor;
