import React from 'react'
import Slider from './components/Slider'
import Content from './components/Content'
import Content2 from './components/Content2'
import Navbar2 from './components/Navbar2'
import Footer2 from './components/Footer2'

function Home() {
    return (
        <div>
            <Slider />
            <br/>
            <br/>
            <Content />
            <br/>
            <Content2 />
            <br/>
            <br/>
 
            <Navbar2 />
            <Footer2 />
        </div>
       
    )
}

export default Home
