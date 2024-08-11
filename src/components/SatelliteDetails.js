import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { satelliteData } from './satelliteData'; // Ensure this path is correct
import GalaxyAnimation from '../GalaxyAnimation';

// Styles from your previous component
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Poppins', sans-serif;
  border: 0.1px solid rgb(45, 210, 207);
  background-color: #000000;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden; /* Prevent entire page from scrolling */
  transition: all 0.5s ease;
  
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px 20px 12px;
  
  height: max-content;
  max-height: 86vh; /* Limit the height of the wrapper */
  overflow-y: auto; /* Make wrapper scrollable */
  border: 0.1px solid rgb(45, 210, 207);
  background-color: ${({ theme }) => theme.darkblack};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


const Title = styled.div`
font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6; 
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;
const Descrip = styled.div`
   font-family: 'Poppins', sans-serif;
   background-color:black;
   border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(45, 210, 207, 0.4);
  line-height: 2.6; 
`;
const Image = styled.img`
 max-width: 100%;  /* Ensures the image doesn’t overflow */
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const Tags = styled.div`
font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  padding: 10px;
  border: 2px solid rgb(45, 210, 207); /* Add border */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(45, 210, 207, 0.4); /* Add box shadow */
  background-color: rgba(45, 210, 207, 0.1); /* Subtle background color */

  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
    padding: 8px;
  }
`;


const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => `${theme.primary}20`}; /* Lighten color if needed */
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
     strong {
    color: rgb(45, 210, 207);
    font-size:18px;
    margin-right:5px
     /* Change the color of the text inside <strong> */
  }
    
`;
const WikipediaLink = styled.a`
  font-size: 16px;
  color: rgb(45, 210, 207);
  text-decoration: none;
  margin-top: 20px;
  border: 2px solid rgb(45, 210, 207); /* Add border */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(45, 210, 207, 0.4); /* Add box shadow */
  background-color: rgba(45, 210, 207, 0.1); /* Subtle background color */
  padding: 10px 20px; /* Adjust padding for button size */
  display: inline-block; /* Ensure it behaves like a button */
  text-align: center; /* Center the text */
  cursor: pointer; /* Add pointer cursor for button-like behavior */

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.primaryDark};
    background-color: rgba(45, 210, 207, 0.2); /* Slightly darken on hover */
  }
`;


const BackButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: 600;
  color:  rgb(45, 210, 207);
  cursor: pointer;
  background-color: ${({ theme }) => theme.darkblack};
  border: 2px solid  rgb(45, 210, 207);
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

 &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }

  &:active {
    background-color:${({ theme }) => theme.primary};
    transform: scale(0.95);
  }
`;

const SatelliteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const satelliteId = parseInt(id, 10); // Convert to number
  const satellite = satelliteData.find((sat) => sat.id === satelliteId);

  if (!satellite) return <p>Satellite not found</p>;

  return (
    <Container>
        <GalaxyAnimation />
        
      <Wrapper>
        <BackButton onClick={() => navigate('/satellite')}>← Back</BackButton>
        <Title>{satellite.name}</Title>
        <Image src={satellite.image} alt={`Image of ${satellite.name}`} />
        <Tags>
          <Tag><strong>Mission Type:</strong> {satellite.missionType}</Tag>
          <Tag><strong>Operator:</strong> {satellite.operator}</Tag>
          <Tag><strong>Launch Mass:</strong> {satellite.launchMass}</Tag>
          <Tag><strong>Launch Date:</strong> {satellite.launchDate}</Tag>
        
          <Tag><strong>Launch Site:</strong> {satellite.launchSite}</Tag>
        </Tags>
        <Descrip>
        <Label>Description</Label>
        <Desc>{satellite.description}</Desc>
        </Descrip>
        <WikipediaLink href={satellite.link} target="_blank" rel="noopener noreferrer">
          Learn more on Wikipedia
        </WikipediaLink>
      </Wrapper>
      
    </Container>
  );
};

export default SatelliteDetails;
