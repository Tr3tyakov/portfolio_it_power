import React from 'react'
import {Box, Container, Button, Typography} from '@mui/material'
import cards from '../../components/icons/cards.svg'
const StartPage: React.FC = () => {


    return (
        <>
            <Box component='div' position='fixed' width='100vw' height='100px'
                >
                <Box bgcolor='#212b36' width='100vw' height='50px'>
                    <Container maxWidth={false}>
                        <Box height='100%' display='flex' alignItems='center' justifyContent='space-between' p='0 20px'>

                        </Box>
                    </Container>
                </Box>
                <Box width='100vw' height='50px'>
                    <Container maxWidth='lg'>
                        <Box height='100%' display='flex' alignItems='center' justifyContent='space-between' p='0 20px'>
                            <Box whiteSpace='nowrap' display='flex'>
                                <Typography color='#FA541B' fontSize='1.2rem' fontWeight={600}>
                                    IT
                                </Typography>
                                <Typography color='#212b36' fontSize='1.2rem' fontWeight={600}>
                                    POWER
                                </Typography>
                            </Box>
                            <Button>
                                CLICK
                            </Button>
                        </Box>
                    </Container>
                </Box>
                <Container maxWidth='lg'>
                        <Box display='flex' p='0 20px' mt='30px' alignItems='center'>
                            <Box whiteSpace='nowrap'>
                                <Typography component='span' fontSize='3.625rem' fontWeight='700' color='#212b36'>
                                    Create Your <br/> project Today <br/> with <Typography  component='span' fontSize='3.625rem' fontWeight='700' color='#FA541B'>ITPOWER</Typography>
                                </Typography>
                            </Box>
                            <Box>
                                <img src={cards} alt="Картинка"/>
                            </Box>
                        </Box>
                </Container>
            </Box>
        </>
    )
}

export default StartPage