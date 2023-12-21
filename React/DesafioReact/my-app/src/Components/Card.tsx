import { Box, Center, Input } from "@chakra-ui/react";
import { Header } from "./Header";
import { LoginButton } from "./LoginButton";
import { Login } from "../Services/Login";

export const Card = () => {
  return (
    <>
      <Box padding="25px" bg="#1A202C" minHeight="100vh">
        <Box bg="#f8f8f8" borderRadius="25px" padding="15px" marginTop="35px">
          <Center>
            <Header />
          </Center>
          <Input placeholder="Email" size="md" />
          <Input placeholder="Password" size="md" type="password" isRequired />
          <LoginButton login={Login} />
        </Box>
      </Box>
    </>
  );
};
