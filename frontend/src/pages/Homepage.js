import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/children.avif";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0} sx={{ height: '100%' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src={Students} 
                        alt="students" 
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            maxHeight: '100vh',
                            objectFit: 'cover'
                        }} 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <StyledTitle>
                            Welcome to <br/> <strong>Cool Made</strong>
                            <br />
                            School Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ 
                                        mt: 2, 
                                        mb: 3, 
                                        color: "#7f56da", 
                                        borderColor: "#7f56da",
                                        '&:hover': {
                                            borderColor: "#7f56da"
                                        }
                                    }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: yellow;
  padding: 0;
  max-width: 100% !important;

  @media (max-width: 900px) {
    height: auto;
    min-height: 100vh;
  }
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 16px;
    height: auto;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 900px) {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
  font-size: 1.1rem;

  @media (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;