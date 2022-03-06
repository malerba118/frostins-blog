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
}

const Editor: FC<EditorProps> = ({
  language,
  defaultValue,
  onChange,
  readOnly,
}) => {
  const containerRef = useRef<any>();
  const editorRef = useRef<any>();

  const updateHeight = () => {
    if (readOnly) {
      const contentHeight = Math.min(
        1000,
        editorRef.current.getContentHeight()
      );
      containerRef.current.style.height = contentHeight + "px";
    }
  };

  //   useLayoutEffect(() => {
  //     if (readOnly) {
  //       const contentHeight = Math.min(
  //         1000,
  //         editorRef.current.getContentHeight()
  //       );
  //       containerRef.current.style.height = contentHeight + "px";
  //     }
  //   }, [readOnly]);

  return (
    <Box ref={containerRef} width="100%" height="100%">
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
        onChange={onChange}
        options={{
          readOnly,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          wrappingStrategy: "advanced",
          minimap: {
            enabled: false,
          },
          overviewRulerLanes: 0,
        }}
      />
    </Box>
  );
};

export default Editor;
