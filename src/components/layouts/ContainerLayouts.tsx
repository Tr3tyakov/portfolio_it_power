import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import React from 'react'

interface IContainerLayouts {
    children: React.ReactNode
}

const ContainerLayouts: React.FC<IContainerLayouts> = ({children}) => {

    return <Container maxWidth='xl'>
        {children}
    </Container>
}


export default ContainerLayouts

