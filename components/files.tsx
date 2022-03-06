const files = {
  "/App.js": `import { Center, ChakraProvider, List, ListItem } from "@chakra-ui/react";
import "./styles.css";

const items = ["Austin Malerba", "Joel Malerba", "Miles Malerba"];

export default function App() {
    return (
        <ChakraProvider>
            <Center h="100vh">
                <List spacing={2}>
                {items.map((item) => (
                    <ListItem px={4} py={2} bg="blackAlpha.200" rounded="md" key={item}>
                    {item}
                    </ListItem>
                ))}
                </List>
            </Center>
        </ChakraProvider>
    );
}`,
  "/package.json": `{
    "name": "react",
    "version": "1.0.0",
    "description": "React example starter project",
    "keywords": [
        "react",
        "starter"
    ],
    "main": "src/index.js",
    "dependencies": {
        "@chakra-ui/react": "1.8.6",
        "@emotion/react": "11.8.1",
        "@emotion/styled": "11.8.1",
        "framer-motion": "6.2.8",
        "react": "17.0.2",
        "react-dom": "17.0.2",
        "react-scripts": "4.0.0"
    },
    "devDependencies": {
        "@babel/runtime": "7.13.8",
        "typescript": "4.1.3"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    },
    "browserslist": [
        ">0.2%",
        "not dead",
        "not ie <= 11",
        "not op_mini all"
    ]
}`,
};

export default files;
