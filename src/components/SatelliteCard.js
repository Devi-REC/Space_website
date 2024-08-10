import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 330px;
    height: 390px;
    background-color: ${({ theme }) => theme.darkblack};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: rgba(255, 140, 0, 0.15) 0px 4px 24px;
    overflow: hidden;
    padding: 26px 20px;
    border: 0.1px solid #ffa500;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: rgba(255, 187, 130, 0.6) 0 0 50px 4px;
        filter: brightness(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Details = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    margin-top: 8px;
    display: ${({ show }) => (show ? 'block' : 'none')};
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const SatelliteCard = ({ satellite }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Card onClick={() => setShowDetails(!showDetails)}>
            <Title>{satellite.name}</Title>
            <Image src={satellite.image} alt={satellite.name} />
            <Details show={showDetails}>
                <p><strong>Mission Type:</strong> {satellite.missionType}</p>
                <p><strong>Operator:</strong> {satellite.operator}</p>
                <p><strong>Launch Mass:</strong> {satellite.launchMass}</p>
                <p><strong>Launch Date:</strong> {satellite.launchDate}</p>
                <p><strong>Rocket:</strong> {satellite.rocket}</p>
                <p><strong>Launch Site:</strong> {satellite.launchSite}</p>
                <p><strong>Description:</strong> {satellite.description}</p>
            </Details>
        </Card>
    );
};

export default SatelliteCard;
