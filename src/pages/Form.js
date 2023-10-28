// Form.js
import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Form = () => {
  const { user } = useContext(AuthContext);
  const questions = [
    "I am the life of the party.",
    "I don't talk a lot.",
    "I feel comfortable around people.",
    "I keep in the background.",
    "I start conversations.",
    "I have little to say.",
    "I talk to a lot of different people at parties.",
    "I don't like to draw attention to myself.",
    "I don't mind being the center of attention.",
    "I am quiet around strangers.",
    "I get stressed out easily.",
    "I am relaxed most of the time.",
    "I worry about things.",
    "I seldom feel blue.",
    "I am easily disturbed.",
    "I get upset easily.",
    "I change my mood a lot.",
    "I have frequent mood swings.",
    "I get irritated easily.",
    "I often feel blue.",
    "I feel little concern for others.",
    "I am interested in people.",
    "I insult people.",
    "I sympathize with others' feelings.",
    "I am not interested in other people's problems.",
    "I have a soft heart.",
    "I am not really interested in others.",
    "I take time out for others.",
    "I feel others emotions.",
    "I make people feel at ease.",
    "I am always prepared.",
    "I leave my belongings around.",
    "I pay attention to details.",
    "I make a mess of things.",
    "I get chores done right away.",
    "I often forget to put things back in their proper place.",
    "I like order.",
    "I shirk my duties.",
    "I follow a schedule.",
    "I am exacting in my work.",
    "I have a rich vocabulary.",
    "I have difficulty understanding abstract ideas.",
    "I have a vivid imagination.",
    "I am not interested in abstract ideas.",
    "I have excellent ideas.",
    "I do not have a good imagination.",
    "I am quick to understand things.",
    "I use difficult words.",
    "I spend time reflecting on things.",
    "I am full of ideas.",
  ];

  const [responses, setResponses] = useState({});

  const handleResponseChange = (questionId, response) => {
    setResponses({
      ...responses,
      [questionId]: response,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page refresh)

    // Create a string representing the responses
    const responseData = Object.values(responses).join("");

    // Make the API POST request
    axios
      .post(
        "https://hackathon-mindfulai.azurewebsites.net/mongo_db/write_to_mongo",
        `data=${responseData}`,
        {
          headers: {
            accept: "application/json",
            "email-id": user.email,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        // Handle the response from the server, e.g., show a success message
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error:", error);
      });
  };

  return (
    <Box
      p="4"
      borderWidth="2px"
      borderColor="red.400"
      borderRadius="lg"
      textAlign="center"
    >
      <Heading as="h2" fontSize="xl" mb="4">
        Personality Questionnaire
      </Heading>
      <Text fontSize="lg" fontWeight="bold" mb="2" textAlign="justify">
        Rate each statement from 1 (Strongly Disagree), 2 (Disagree), 3
        (Neutral), 4 (Agree), 5 (Strongly Agree)
      </Text>

      {questions.map((question, index) => (
        <Box key={index} mt="4" textAlign="justify">
          <Text fontSize="xl">{question}</Text>
          <Options
            questionId={index}
            selectedOption={responses[index]}
            onOptionChange={handleResponseChange}
          />
        </Box>
      ))}

      <Button
        colorScheme="red"
        mt="4"
        mx="auto"
        display="block"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};
const Options = ({ questionId, selectedOption, onOptionChange }) => {
  const options = [1, 2, 3, 4, 5]; // Numeric values correspond to "Strongly Disagree" to "Strongly Agree"

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={questionId}
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(questionId, option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Form;
