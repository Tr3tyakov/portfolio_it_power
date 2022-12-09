import React from 'react';
import ContainerLayouts from '../../layouts/ContainerLayouts'
import {Box, Typography, Button} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {IAboutUsInfo} from "./aboutUs.interfaces";

const aboutUsInfo: IAboutUsInfo[] = [
    {
        id: 'subtitle',
        title: 'Проектов',
        quantity: '150',
        about: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
        elevation: 60
    },
    {
        id: 'subtitle',
        title: 'Счастливых клиентов',
        quantity: '32k',
        about: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
        elevation: 180
    },
    {
        id: 'subtitle',
        title: 'Лет опыта',
        quantity: '20',
        about: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
        elevation: 320
    },
]

const AboutUs: React.FC = () => {
    const [height, setHeight] = React.useState<number>(0)
    React.useEffect(() => {
        const elements: NodeListOf<HTMLElement> = document.querySelectorAll('#subtitle')
        if (!elements) return
        const offsets = Array.from(elements).map((element)=>element.offsetTop)
        window.addEventListener('scroll', ()=>scroll(offsets))
        return () => {
            window.removeEventListener('scroll', ()=>scroll)
        }
    }, [])

    const scroll = (offsets:number[]) => {
        if (window.scrollY >= offsets[0] && window.scrollY <= offsets[2]) {
            console.log(Math.floor((window.scrollY - offsets[0]) * 1.5))
            setHeight(Math.floor((window.scrollY - offsets[0]) * 1.5))
            return
        }
        if (window.scrollY < offsets[0]) {
            setHeight(0)
            return
        }

        setHeight(370)

    }

    return (
        <ContainerLayouts>
            <Box display='flex' gap='100px' flexWrap='wrap' justifyContent='center' mb='100px'>
                <Box position='relative' display='flex' flexDirection='column' alignItems='flex-end'
                     justifyContent='flex-start' maxWidth='50%' pt='12px'>
                    <Box>
                        <Typography fontWeight={600} fontSize='1rem' color='#6d7786'>О нас</Typography>
                    </Box>
                    <Box>
                        <Typography fontWeight={600} fontSize='2.75rem' color='#212b36'>Кто мы такие</Typography>
                    </Box>
                    <Box maxWidth='600px'>
                        <Box mb='20px'>
                            <Typography textAlign='right' fontWeight={600} fontSize='0.9rem' color='#6d7786'>In hac
                                habitasse platea
                                dictumst.
                                Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                                Pellentesque
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                egestas</Typography>
                        </Box>
                        <Box display='flex' justifyContent='flex-end' alignItems='center'>
                            <Button className='box__shadow' endIcon={<ArrowForwardIosIcon/>} variant='outlined'>Узнать
                                больше</Button>
                        </Box>
                        <Box position='absolute' width='5px' right='-60px' bgcolor='#6d778617'
                             borderRadius='6px'
                             top='0' bottom='-20px'>
                            <Box boxShadow='0px 2px 5px 2px lightgray' borderRadius='6px' top='0' height={height + 'px'}
                                 bgcolor='#FA541B'>

                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box display='flex' gap='30px' flexDirection='column'>
                    {aboutUsInfo.map((element) => (
                        <Box key={element.title} className='about__block' display='flex' alignItems='center'>
                            <Box display='flex' flexDirection='column' maxWidth='100px' width='100%' mr='40px'>
                                <Typography fontSize='2.75rem' fontWeight={700}>{element.quantity}</Typography>
                                <Typography id={element.id} fontWeight='600'
                                            color={height > element.elevation ? '#FA541B' : '#6d7786'}>{element.title}</Typography>
                            </Box>
                            <Box className='about__block__text'>
                                <Typography fontWeight='600' fontSize='0.9rem'
                                            color='#6d7786'>{element.about}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </ContainerLayouts>
    );
};

export default AboutUs;