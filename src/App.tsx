import { Box, Heading, Spacer } from "@kuma-ui/core";
import { breakpoints } from "@/theme";
import { Editor } from "./Editor";

function App() {
  return (
    <Box as="main" maxWidth={breakpoints.lg} p="20" m="auto">
      <Heading as="h3">MY Tiptap Editor</Heading>
      <Spacer size={4} />
      <Editor />
    </Box>
  );
}

export default App;
