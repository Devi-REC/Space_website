import React, { useState } from 'react';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';
import { AstronautData } from './components/AstronautData';
import AstronautCard from './components/AstronautCard';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import { ThemeProvider } from 'styled-components';

const Astronaut = () => {
    const [filter, setFilter] = useState('all'); // State to manage the selected filter
    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredAstronauts = filter === 'all'
        ? AstronautData.filter(astronaut => astronaut.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : AstronautData.filter(astronaut => astronaut.category === filter && astronaut.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const orangeTheme = {
        text_primary: 'rgb(45, 210, 207)',
        text_secondary: 'rgb(45, 210, 207)',
        card: 'rgb(45, 210, 207)',
        primary: 'rgb(45, 210, 207)',
        darkblack: '#333',
        white: '#fff',
    };

    return (
        <ThemeProvider theme={orangeTheme}>
            <GalaxyAnimation />
            <Container id="astronauts">
                <GalaxyAnimation />
                <Header />
                <Wrapper>
                    <Title>Astronauts</Title>
                    <Desc>
                        Explore the various astronauts and their missions.
                    </Desc>
                    <input
                        type="text"
                        placeholder="Search Astronauts"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{
                            fontSize: '21px',
                            color: 'rgb(45, 210, 207)',
                            border: '2px solid rgb(45, 210, 207)', // Add border
                            borderRadius: '12px', // Rounded corners
                            boxShadow: '0 4px 8px rgba(45, 210, 207, 0.4)', // Add box shadow
                            backgroundColor: 'rgba(45, 210, 207, 0.1)', // Subtle background color
                            padding: '10px',
                            margin: '20px 0',
                            width: '100%',
                            maxWidth: '400px',
                            textAlign: 'center', // Center the text
                            cursor: 'text',
                        }}
                    />
                    <CardContainer>
                        {filteredAstronauts.map((astronaut) => (
                            <AstronautCard key={astronaut.id} astronaut={astronaut} />
                        ))}
                    </CardContainer>
                </Wrapper>
            </Container>
        </ThemeProvider>
    );
};

export default Astronaut;
