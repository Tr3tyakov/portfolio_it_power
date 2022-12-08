import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import cards from "../icons/cards.svg";
import ContainerLayouts from '../layouts/ContainerLayouts'
const Main = () => {

    return (
        <ContainerLayouts>
            <Container maxWidth='lg'>
                <Box display='flex' p='0 20px' mt='30px' alignItems='center'>
                    <Box whiteSpace='nowrap'>
                        <Typography component='span' fontSize='3.625rem' fontWeight='700' color='#212b36'>
                            Create Your <br/> project Today <br/> with <Typography component='span'
                                                                                   fontSize='3.625rem'
                                                                                   fontWeight='700'
                                                                                   color='#FA541B'>ITPOWER</Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <img src={cards} alt="Картинка"/>
                    </Box>
                </Box>
            </Container>
        </ContainerLayouts>
    );
};

export default Main;