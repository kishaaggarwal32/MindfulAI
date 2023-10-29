import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Box, // Replace Container with Box
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
    marital_status: "false",
    employment_status: "false",
    education: "true",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // Create the data payload for the cURL request
    const data = new URLSearchParams(formData);

    try {
      const response = await fetch(
          "https://backend-mindfulai.azurewebsites.net/mongo_db/add_personal_information_by_email",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "email-id": user.email,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
          }
      );

      if (response.ok) {
        setSuccessMessage("Data sent successfully.");
        setErrorMessage("");
      } else {
        setSuccessMessage("");
        setErrorMessage("Failed to send data to the server.");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("An error occurred: " + error.message);
    }
  };

  return (
      <Box // Use Box for the container
          bg="pink.100" // Set the background color to light pink
          p={4} // Add padding
          borderRadius="md" // Add some border radius for a nicer look
      >
        <Text fontSize="2xl" textAlign="center" mb="5">
          Welcome to MindFulAI
        </Text>
        {user ? (
            <div>
              {successMessage && (
                  <Alert status="success" mt="4">
                    <AlertIcon />
                    <AlertTitle mr={2}>Success!</AlertTitle>
                    <AlertDescription>{successMessage}</AlertDescription>
                  </Alert>
              )}
              {errorMessage && (
                  <Alert status="error" mt="4">
                    <AlertIcon />
                    <AlertTitle mr={2}>Error!</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
              )}
              <form>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <GridItem>
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <Input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          borderColor="black"
                      />
                    </FormControl>
                  </GridItem>
                  {/* Add similar styling for other form fields */}
                  {/* ... (rest of the form fields) ... */}
                  <GridItem colSpan={2} textAlign="center">
                    <Button
                        mt="1rem"
                        onClick={handleSubmit}
                        colorScheme="teal"
                        variant="outline"
                    >
                      Submit
                    </Button>
                  </GridItem>
                </Grid>
              </form>
            </div>
        ) : (
            <Text fontSize="xl" textAlign="center" mt="4">
              Please sign in to view this content.
            </Text>
        )}
      </Box>
  );
}
