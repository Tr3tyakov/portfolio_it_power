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
import {styled} from "@mui/material/styles";

const languageList = [
    'EN', 'RU'
]

const CustomSelect = styled(Select)(({theme}) => ({
    backgroundColor: 'white',
    borderRadius: '5px',

}));

type typeLanguage = 'RU' | 'EN'

const Header: React.FC = () => {
    const [language, setLanguage] = React.useState<typeLanguage>('RU')
    const changeLanguage = (e: SelectChangeEvent<any>) => {
        setLanguage(e.target.value)
    }
    return (
        <Box component='div' position='fixed' width='100vw' top='0' left='0' right='0' height='50px' bgcolor='#212b36'>
            <Container maxWidth='xl' sx={{height: '100%', maxWidth: '1200px'}}>
                <Box height='100%' display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        <Typography color='#FA541B' fontSize='1.2rem' fontWeight={600}>
                            IT
                        </Typography>
                        <Typography color='white' fontSize='1.2rem' fontWeight={600}>
                            POWER
                        </Typography>
                    </Box>
                    <CustomSelect
                        value={language}
                        onChange={changeLanguage}
                        sx={{width: '80px', height: '40px'}}
                    >
                        {languageList.map((element) => (
                            <MenuItem key={element} value={element}>{element}</MenuItem>
                        ))}
                    </CustomSelect>
                </Box>
            </Container>
        </Box>
    )
}

export default Header