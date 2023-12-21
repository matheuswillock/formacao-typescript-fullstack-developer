import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { Layout } from "./Components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box
          backgroundColor="#fff"
          padding="25px"
          borderRadius="25px"
          marginTop="20px"
        >
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" type="password" />
          <Center>
            <Button colorScheme="teal" size="sm" width="100%" marginTop="10px">
              Login
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
