import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Text } from "@chakra-ui/react";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      {user ? (
        <Text>Hello, {user.email}</Text>
      ) : (
        <Text>Please sign in to view this content.</Text>
      )}
    </Container>
  );
}
