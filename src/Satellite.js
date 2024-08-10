import React from 'react';
import GalaxyAnimation from './GalaxyAnimation';
import Header from './Header';
import { satelliteData } from './components/satelliteData';
import SatelliteCard from './components/SatelliteCard'; 
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'; // Import the styled-components
import { ThemeProvider } from 'styled-components';

const Satellite = () => {
    const orangeTheme = {
        text_primary: '#FFA500',
        text_secondary: '#FFA500',
        card: '#FFA500',
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
                    <CardContainer>
                        {satelliteData.map((satellite) => (
                            <SatelliteCard key={satellite.id} satellite={satellite} />
                        ))}
                    </CardContainer>
                </Wrapper>
            </Container>
        </ThemeProvider>
    );
}

export default Satellite;
