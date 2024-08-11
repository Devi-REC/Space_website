import React from 'react';
import styled from 'styled-components';

// Container for the scrolling events
const EventsContainer = styled.div`
    max-height: 430px; /* Adjust based on your needs */
    overflow-y: auto; /* Enables vertical scrolling */
    padding: 30px;
    border-radius: 10px;
    background-color:#041514c9 ;
    border: 1px solid  rgb(45, 210, 207);
    box-shadow: 
        1px 4px 8px rgb(45, 210, 207), /* Shadow on bottom and right */
        0 -4px 8px rgb(45, 210, 207); /* Shadow on top */
    position: relative; /* Allows positioning of the GIF */
     /* Space for the astronaut GIF */
     h1{
     color:rgb(45, 210, 207);
     }
`;

const AstronautImage = styled.img`
    position: absolute;
    left: 10px; /* Adjust as needed */
    top: 50%;
    transform: translateY(-50%);
    width: 80px; /* Adjust as needed */
    height: auto;
    border-radius: 10px; /* Optional */
    box-shadow: 0 0 10px rgba(0,0,0,0.2); /* Optional */
`;

const EventCard = styled.div`
    background-color: ${({ theme }) => theme.card};
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
    border: 2px solid rgb(45, 210, 207);
    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: rgba(255, 140, 0, 0.5) 0px 8px 24px;
        background-color: ${({ theme }) => theme.primary};
    }
`;

const EventTitle = styled.h3`
    font-size: 23px;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.3s ease;
    ${EventCard}:hover & {
        color: ${({ theme }) => theme.white};
    }
`;

const EventDate = styled.p`
    font-size: 14px;
    color: rgb(45, 210, 207);
    transition: color 0.3s ease;
    ${EventCard}:hover & {
        color: ${({ theme }) => theme.white + 80};
    }
`;

const EventDescription = styled.p`
    font-size: 14px;
    color: orange;
    transition: color 0.3s ease;
    ${EventCard}:hover & {
        color: ${({ theme }) => theme.white + 80};
    }
`;

const KnowMoreButton = styled.button`
   font-size: 20px;
   font-weight: 600;
   color:white;
   cursor: pointer;
   background-color: black;
   border: 2px solid rgb(45, 210, 207);
   padding: 10px 15px;
   border-radius: 8px;
   margin-top: 10px;
   transition: background-color 0.3s ease;
   &:hover {
       background-color: ${({ theme }) => theme.secondary}; /* Example of a different hover color */
   }
`;

const UpcomingEvents = ({ events }) => {
    const handleKnowMoreClick = () => {
        window.open('https://science.nasa.gov/learn/events-activities/', '_blank');
    };

    return (
        <div>
            <EventsContainer>
            <h1 >UpcomingEvents</h1>
                {events.map((event, index) => (
                    <EventCard key={index}>
                        
                        <EventTitle>{event.title}</EventTitle>
                        <EventDate>{event.date}</EventDate>
                        <EventDescription>{event.description}</EventDescription>
                        <KnowMoreButton onClick={handleKnowMoreClick}>
                            Know More
                        </KnowMoreButton>
                    </EventCard>
                ))}
            </EventsContainer>
        </div>
    );
};

export default UpcomingEvents;
