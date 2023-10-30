import { useState } from 'react';
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Progress,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f59e94',

      },
    },
  },
});

const PersonalInformationForm = ({ onNext }) => {
  return (
      <Box bg="#f1b7af" p={4} rounded="md" color="white">
        <Heading textAlign="center" fontWeight="bold" mb="2%">
          Personal Information
        </Heading>
        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight="normal">
            First Name
          </FormLabel>
          <Input id="first-name" placeholder="First Name" />
        </FormControl>

        <FormControl mt="2%">
          <FormLabel htmlFor="last-name" fontWeight="normal">
            Last Name
          </FormLabel>
          <Input id="last-name" placeholder="Last Name" />
        </FormControl>

        <FormControl mt="2%">
          <FormLabel htmlFor="gender" fontWeight="normal">
            Gender
          </FormLabel>
          <Select id="gender" placeholder="Select Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <FormControl mt="2%">
          <FormLabel htmlFor="age" fontWeight="normal">
            Age
          </FormLabel>
          <Input id="age" type="number" placeholder="Age" />
        </FormControl>

        <Button mt="5%" colorScheme="teal" variant="outline" onClick={onNext}>
          Next
        </Button>
      </Box>
  );
};

const AdditionalInformationForm = ({ onBack, onSubmit }) => {
  return (
      <Box bg="#f1b7af" p={4} rounded="md" color="white">
        <Heading textAlign="center" fontWeight="bold" mb="2%">
          Additional Information
        </Heading>
        <FormControl>
          <FormLabel htmlFor="marital-status" fontWeight="normal">
            Marital Status
          </FormLabel>
          <Select id="marital-status" placeholder="Select Status">
            <option value="true">True</option>
            <option value="false">False</option>
          </Select>
        </FormControl>

        <FormControl mt="2%">
          <FormLabel htmlFor="employment-status" fontWeight="normal">
            Employment Status
          </FormLabel>
          <Select id="employment-status" placeholder="Select Status">
            <option value="true">True</option>
            <option value="false">False</option>
          </Select>
        </FormControl>

        <FormControl mt="2%">
          <FormLabel htmlFor="education" fontWeight="normal">
            Education
          </FormLabel>
          <Select id="education" placeholder="Select Education Level">
            <option value="true">True</option>
            <option value="false">False</option>
          </Select>
        </FormControl>

        <ButtonGroup mt="5%">
          <Flex w="100%" justifyContent="space-between">
            <Button
                onClick={onBack}
                isDisabled={false}
                colorScheme="teal"
                variant="outline"
                w="7rem"
                mr="5%"
            >
              Back
            </Button>
            <Button
                onClick={onSubmit}
                colorScheme="teal"
                variant="outline"
                w="7rem"
            >
              Submit
            </Button>
          </Flex>
        </ButtonGroup>
      </Box>
  );
};

export default function TwoStageForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    setStep(2);
    setProgress(50);
  };

  const handleBack = () => {
    setStep(1);
    setProgress(0);
  };

  const handleSubmit = () => {
    // Handle form submission here
    toast({
      title: 'Data Submitted',
      description: 'Your data has been submitted successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
      <ChakraProvider theme={theme}>
        <Box p={4} rounded="md" color="white">
          <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated />
          {step === 1 ? (
              <PersonalInformationForm onNext={handleNext} />
          ) : step === 2 ? (
              <AdditionalInformationForm onBack={handleBack} onSubmit={handleSubmit} />
          ) : null}
        </Box>
      </ChakraProvider>
  );
}
