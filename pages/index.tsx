import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import FileAction from "../components/FileAction";
import InlineCode from "../components/InlineCode";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Project>
      <Box p={16}>
        <Heading lineHeight={2}>Reorder a list with framer-motion</Heading>
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
        </Text>
      </Box>
    </Project>
  );
};

export default Home;
