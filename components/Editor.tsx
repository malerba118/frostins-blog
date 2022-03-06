import { FC, useEffect, useLayoutEffect, useRef } from "react";
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
} from "@monaco-editor/react";
import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Box } from "@chakra-ui/react";

interface EditorProps {
  language: MonacoEditorProps["language"];
  defaultValue: MonacoEditorProps["defaultValue"];
  onChange?: MonacoEditorProps["onChange"];
  readOnly?: boolean;
  height?: string;
}

const Editor: FC<EditorProps> = ({
  language,
  defaultValue,
  onChange,
  readOnly,
  height = "auto",
}) => {
  const containerRef = useRef<any>();
  const editorRef = useRef<any>();

  const updateHeight = () => {
    if (height === "auto") {
      const contentHeight = Math.min(
        1000,
        editorRef.current.getContentHeight()
      );
      containerRef.current.style.height = contentHeight + "px";
    }
  };

  return (
    <Box ref={containerRef} width="100%" height={height}>
      <MonacoEditor
        onMount={(editor) => {
          editorRef.current = editor;
          updateHeight();
        }}
        width="100%"
        height="100%"
        language={language}
        theme="vs-dark"
        defaultValue={defaultValue}
        onChange={(val, ev) => {
          onChange?.(val, ev);
        }}
        options={{
          readOnly,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          wrappingStrategy: "advanced",
          minimap: {
            enabled: false,
          },
          overviewRulerLanes: 0,
          guides: {
            indentation: false,
          },
        }}
      />
    </Box>
  );
};

export default Editor;
