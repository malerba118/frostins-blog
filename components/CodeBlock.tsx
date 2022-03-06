import { FC } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import Editor from "./Editor";

const exampleCode = `
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
`;

interface CodeBlockProps {}

const CodeBlock: FC<CodeBlockProps> = ({ ...props }) => {
  return <Editor readOnly defaultValue={exampleCode} language="javascript" />;
};

export default CodeBlock;
