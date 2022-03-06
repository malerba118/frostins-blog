import React, { FC } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useSandpackTheme } from "@codesandbox/sandpack-react";
import { lineNumbers } from "@codemirror/gutter";
import {
  getCodeMirrorLanguage,
  getEditorTheme,
  getSyntaxHighlight,
  SandpackLanguageSupport,
} from "./utils";
import { Box } from "@chakra-ui/react";

interface ViewerProps {
  language: SandpackLanguageSupport;
  code?: string;
  showLineNumbers?: boolean;
}

const Viewer: FC<ViewerProps> = ({
  code = "",
  language = "javascript",
  showLineNumbers,
}) => {
  const editor = React.useRef<HTMLDivElement>(null);
  const { theme } = useSandpackTheme();

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
    <Box
      p={2}
      bg={theme.palette.defaultBackground}
      rounded="lg"
      overflow="hidden"
      tabIndex={-1}
      ref={editor}
    />
  );
};

export default Viewer;
