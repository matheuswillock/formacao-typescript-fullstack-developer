import { Button } from "@chakra-ui/react";

interface IButton {
  login: any;
}

export const LoginButton = ({ login }: IButton) => {
  return (
    <Button
      onClick={login}
      colorScheme="green"
      size="md"
      width="100%"
      marginTop="10px"
      variant="solid"
    >
      Login
    </Button>
  );
};
