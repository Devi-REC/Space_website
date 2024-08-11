import styled from 'styled-components';

export const Container = styled.div`
font-family: 'Poppins', sans-serif;
    background: linear-gradient(343.07deg, rgba(0, 0, 0, 1) 5.71%, rgba(0, 0, 0, 1) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
    padding-top: 80px; /* Add padding to avoid overlap */
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
     height: max-content;
  max-height: 86vh; /* Limit the height of the wrapper */
  overflow-y: auto; /* Make wrapper scrollable */
 
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;


export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 22px;
    font-weight:bold;
    text-align: center;
    max-width: 600px;
    color: white;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    max-height:500px; /* Set a max-height */
    overflow-y: auto;  /* Enable vertical scrolling */
    padding: 10px;
    border: 0.1px solid rgb(45, 210, 207);
    width: 100%; /* Ensure it takes up the full width */
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
