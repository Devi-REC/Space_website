import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
    width: 330px;
    height: 260px;
   
    cursor: pointer;
    border-radius: 10px;
    
    overflow: hidden;
    padding: 26px 20px;
    border: 0.1px solid rgb(45, 210, 207);
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: rgb(45, 210, 207) 0 0 50px 4px;
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

const AstronautCard = ({ astronaut }) => {
    return (
        <Link to={`/astronaut/${astronaut.id}`}>
            <Card>
                <Title>{astronaut.name}</Title>
                <Image src={astronaut.imageUrl} alt={astronaut.name} />
            </Card>
        </Link>
    );
};

export default AstronautCard;
