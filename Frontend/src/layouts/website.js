import React from 'react'
import Footer from '../conponents/Footer'
import Header from '../conponents/Header'

const LayoutWebsite = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer/>
        </div>
    )
}

export default LayoutWebsite
