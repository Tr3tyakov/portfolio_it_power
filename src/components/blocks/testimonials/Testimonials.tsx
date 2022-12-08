import React from 'react';
import ContainerLayouts from '../../layouts/ContainerLayouts';
import {Box, Typography, Avatar} from "@mui/material";
import Slider from "react-slick";
import {ITestimonials} from "./testimonials.interfaces";

const mockTestimonials:ITestimonials[]=[
    {username: 'Cristofer Cardenas', typeUser: 'UX Designer', text:'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.'},
    {username: 'Cristofer Cardenas', typeUser: 'UX Designer', text:'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.'},
    {username: 'Cristofer Cardenas', typeUser: 'UX Designer', text:'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.'},
    {username: 'Cristofer Cardenas', typeUser: 'UX Designer', text:'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.'}
]
const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <ContainerLayouts>
            <Box>
                <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' mb='50px'>
                    <Typography fontWeight={600} fontSize='1rem' color='#6d7786'>Отзывы</Typography>
                    <Typography fontWeight={600} fontSize='2.75rem' color='#212b36'>Кому понравилась наша
                        работа</Typography>
                </Box>
                <Slider {...settings}>
                    {mockTestimonials.map((element)=>(
                        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                            <Box maxWidth='500px' display='flex' justifyContent='center' alignItems='center'
                                 textAlign='center' mb='30px'>
                                <Typography fontSize='1rem' fontWeight={400}>
                                    {element.text}
                                </Typography>
                            </Box>
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                                <Avatar/>
                                <Typography fontSize='1rem' fontWeight={600}>{element.username}</Typography>
                                <Typography>{element.typeUser}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </ContainerLayouts>
    );
};

export default Testimonials;