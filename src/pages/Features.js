import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  color: #fff; /* Text color */
  background: linear-gradient(to bottom, #EF5350, #E57373); /* Red gradient background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
`;

const FeatureList = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
`;

const FeatureItem = styled.li`
  margin: 10px 0;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <h2>Introduction:</h2>
      <p>
        Welcome to Mindful AI, we're on a mission to empower you with tools and insights to enhance your mental health. We understand that your mental well-being is precious, and we're here to support you on your journey to a happier and healthier life.
      </p>

      <h2>What We Do:</h2>
      <FeatureList>
        <FeatureItem>
          <strong>Mental Health Assessment:</strong> At Mindful AI, we offer a comprehensive mental health assessment tool. This tool helps you gain insights into your mental well-being by answering a series of questions. It's the first step towards understanding yourself better.
        </FeatureItem>
        <FeatureItem>
          <strong>Personalized Guidance:</strong> Based on the results of your assessment, we provide you with personalized mindfulness exercises, relaxation techniques, and coping strategies. These recommendations are designed to help you manage stress, anxiety, and other mental health challenges effectively.
        </FeatureItem>
        <FeatureItem>
          <strong>Chatbot Support:</strong> Our AI chatbot is here to offer real-time mental health support. Whether you have questions, need someone to talk to, or require assistance with specific issues like stress, anxiety, or depression, our chatbot is available to listen and provide guidance.
        </FeatureItem>
        <FeatureItem>
          <strong>Crisis Helplines and Resources:</strong> We understand that sometimes you might need immediate help. That's why we offer a list of crisis helplines and local mental health resources. These are invaluable in emergencies and when you need the support of human professionals.
        </FeatureItem>
        <FeatureItem>
          <strong>Data Privacy and Security:</strong> Your privacy is a top priority for us. Your assessment data and personal information are stored securely, following strict data protection regulations, ensuring your confidentiality.
        </FeatureItem>
        <FeatureItem>
          <strong>Feedback-Driven Improvement:</strong> We value your input. Your feedback drives the continuous enhancement of our platform, making it even more useful for you and others.
        </FeatureItem>
      </FeatureList>

      <h2>Our Mission:</h2>
      <p>
        Our mission is to make mental well-being accessible to everyone. We believe that understanding and nurturing your mental health is essential for a fulfilling life.
      </p>

      <h2>Conclusion:</h2>
      <p>
        Explore Mindful AI further to take control of your mental health journey. We are here to support, guide, and empower you along the way.
      </p>
    </FeaturesContainer>
  );
}

export default Features;
