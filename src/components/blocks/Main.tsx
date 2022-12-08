import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import cards from "../icons/cards.svg";
import ContainerLayouts from '../layouts/ContainerLayouts'
const Main = () => {

    return (
        <ContainerLayouts>
                <Box display='flex' gap='20px' justifyContent='center' flexWrap='wrap' alignItems='center' mt='120px' mb='20px'>
                    <Box>
                        <Typography component='span' fontSize='3.625rem' fontWeight='700' color='#212b36'>
                            Create Your <br/> project Today <br/> with&nbsp;
                            <Typography component='span' fontSize='3.625rem' fontWeight='700' color='#FA541B'>ITPOWER</Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <img src={cards} alt="Картинка"/>
                    </Box>
                </Box>
        </ContainerLayouts>
    );
};

export default Main;