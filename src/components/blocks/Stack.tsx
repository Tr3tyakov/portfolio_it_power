import React from 'react';
import ContainerLayouts from "../layouts/ContainerLayouts";
import {Typography, Grid, Paper, Container, Box} from "@mui/material";
import { styled } from '@mui/material/styles';
import DjangoIcon from '../icons/BackEnd/django-icon.svg'
import PostgresqlIcon from '../icons/BackEnd/postgresql-icon.svg'
import FastApiIcon from '../icons/BackEnd/fastapi-1.svg'
import VueIcon from '../icons/FrontEnd/vue-js-icon.svg'
import ReactIcon from '../icons/FrontEnd/react-js-icon.svg'
import NextIcon from '../icons/FrontEnd/nextjs-icon.svg'
import GoogleMapIcon from '../icons/Android/google-map-icon.svg'
import KotlinIcon from '../icons/Android/kotlin-programming-language-icon.svg'
import SwiftIcon from '../icons/IOS/language_swift_icon_138431.svg'
import UiKitIcon from '../icons/IOS/uikit-logo.svg'

const Stack = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        border: '2px solid #212b36',
        boxShadow: '-6px 6px 4px rgb(250,84,27, 0.85)',
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    }));

    return (
        <ContainerLayouts>
            <Container maxWidth={"md"}>
                <Typography
                    component={'div'} width='100%'
                    fontSize='2.75rem' fontWeight='700'
                    color='#212b36' textAlign='center'
                    marginY='2rem'
                >
                    Направления разработки
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Item>
                            <h3 className='stack_h'>BackEnd</h3>
                            <Box display='flex' gap={1}>
                                <img className='stack_icon' src={DjangoIcon} />
                                <img className='stack_icon' src={PostgresqlIcon} />
                                <img className='stack_icon' src={FastApiIcon} />
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3 className='stack_h'>FrontEnd</h3>
                            <Box display='flex' gap={1}>
                                <img className='stack_icon' src={VueIcon} />
                                <img className='stack_icon' src={ReactIcon} />
                                <img className='stack_icon-wide' src={NextIcon} />
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3 className='stack_h'>Android</h3>
                            <Box display='flex' gap={1}>
                                <img className='stack_icon' src={GoogleMapIcon} />
                                <img className='stack_icon' src={KotlinIcon} />
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3 className='stack_h'>IOS</h3>
                            <Box display='flex' gap={1}>
                                <img className='stack_icon' src={SwiftIcon} />
                                <img className='stack_icon' src={UiKitIcon} />
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </ContainerLayouts>
    );
};

export default Stack;
