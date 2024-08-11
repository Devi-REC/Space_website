import React, { useState } from 'react';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';
import { satelliteData } from './components/satelliteData';
import SatelliteCard from './components/SatelliteCard'; 
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'; // Import the styled-components
import { ThemeProvider } from 'styled-components';

const Satellite = () => {
    const [filter, setFilter] = useState('all'); // State to manage the selected filter

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredSatellites = filter === 'all'
        ? satelliteData
        : satelliteData.filter(satellite => satellite.category === filter);

    const orangeTheme = {
        text_primary: 'rgb(45, 210, 207)',
        text_secondary: 'rgb(45, 210, 207)',
        card: 'rgb(45, 210, 207);',
        primary: 'rgb(45, 210, 207)',
        darkblack: '#333',
        white: '#fff',
    };

    return (
        <ThemeProvider theme={orangeTheme}>
            <Container id="satellites">
                <GalaxyAnimation />
                <Header />
                <Wrapper>
                    <Title>Satellites</Title>
                    <Desc>
                        Explore the various satellites and their missions.
                    </Desc>
                    <ToggleButtonGroup>
                        {['all', 'Mission failure', 'Extra-terrestrial missions', 'Geosynchronous Orbit', 'Geostationary Orbit', 'Crewed spacecraft'].map((category) => (
                            <>
                                <ToggleButton 
                                    key={category} 
                                    active={filter === category} 
                                    onClick={() => handleFilterChange(category)}
                                >
                                    {category}
                                </ToggleButton>
                                <Divider />
                            </>
                        ))}
                    </ToggleButtonGroup>
                    <CardContainer>
                        {filteredSatellites.map((satellite) => (
                            <SatelliteCard key={satellite.id} satellite={satellite} />
                        ))}
                    </CardContainer>
                </Wrapper>
            </Container>
        </ThemeProvider>
    );
}

export default Satellite;
