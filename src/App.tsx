import React from "react";
import {Header, Main, Stack, Footer, AboutUs} from "./components/blocks/index";
import Testimonials from "./components/blocks/testimonials/Testimonials";


const App = () =>{
    return (
        <>
            <Header/>
            <Main/>
            <AboutUs/>
            <Testimonials/>
            <Stack/>
            <Footer/>

        </>

    );
}

export default App;