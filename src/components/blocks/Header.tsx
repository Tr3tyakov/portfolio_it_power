import React from 'react'
import {
    Box,
    Container,
    Button,
    Typography,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material'
import cards from '../icons/cards.svg'
import {SelectChangeEvent} from '@mui/material/Select'
import { styled } from "@mui/material/styles";

const languageList = [
    'EN', 'RU'
]

const CustomSelect= styled(Select)(({ theme }) => ({
    backgroundColor:'white',
    borderRadius:'5px',

}));
const Header: React.FC = () => {
    const [language, setLanguage] = React.useState<string>('')
    const changeLanguage = (e: SelectChangeEvent) => {
        setLanguage(e.target.value)
    }
    return (
        <>
            <Box component='div' position='fixed' width='100vw' height='50px'>
                <Box width='100vw' height='100%'>
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
            </Box>
        </>
    )
}

export default Header