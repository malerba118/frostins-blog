import { Box, Heading, Portal, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import FileAction from "../components/FileAction";
import InlineCode from "../components/InlineCode";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";
import ReorderList from "../posts/reorder-list.mdx";
import CodeBlock from "../components/CodeBlock";

const mdxComponents = {
  h1: (props: any) => (
    <Heading fontWeight="800" mt={8} mb={4} size="2xl" {...props} />
  ),
  h2: (props: any) => (
    <Heading fontWeight="700" mt={8} mb={4} size="lg" {...props} />
  ),
  h3: (props: any) => <Heading mt={8} mb={4} size="md" {...props} />,
  h4: (props: any) => <Heading mt={8} mb={4} size="sm" {...props} />,
  p: (props: any) => <Text mt={4} mb={4} size="md" {...props} />,
  code: (props: any) => <InlineCode {...props} />,
  pre: (props: any) => {
    const className = props.children?.props?.className || "";
    const code = props.children?.props?.children?.trim() || "";
    const language = className.replace(/language-/, "");
    return (
      <CodeBlock
        code={code}
        language={language}
        path={props.path}
        showLineNumbers={props.showLineNumbers}
      />
    );
  },
};

const Home: NextPage = () => {
  return (
    <Project>
      <Box p={16}>
        {/* <Heading lineHeight={2}>Reorder a list with framer-motion</Heading>
        <Text>
          Today we're going to learn how to reorder a list with framer-motion
        </Text>
        <Text>
          First let's have a look at{" "}
          <FileAction action="open" path="/index.js" />
          as this is the root of our app.
        </Text>
        <br />
        <Text>
          Now let's add a new file <FileAction action="add" path="/foo.js" />.
          Now that <InlineCode>/foo.js</InlineCode> exists, we can go ahead and
          delete it <FileAction action="delete" path="/foo.js" />.
        </Text> */}
        <ReorderList components={mdxComponents} />
      </Box>
    </Project>
  );
};

export default Home;
