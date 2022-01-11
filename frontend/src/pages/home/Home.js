import React from 'react'
import Banner from '../../components/banner/Banner'
import Clip from '../../components/clip/Clip'
import CodeChallenge from '../../components/codeChallenge/CodeChallenge'
import ContactUs from '../../components/contact_us/Contact_Us'
import Price from '../../components/Price/Price'
import Profile from '../../components/profile/Profile'
import Store from '../../components/store/Store'
import Subscribe from '../../components/subscribe/Subscribe'
import PowerfulTool from '../../powerfulTool/PowerfulTool'
import Share from '../../share/Share'


import './home.css'
export default function Home() {
    
    return (
        <>
        <Clip/>
        <Banner/>
        <CodeChallenge/>
        <PowerfulTool/>
        
        <Share/>
        <Profile/>
        <Price/>
        <Store/>
        <Subscribe/>
        <ContactUs/>
      

    
    

        </>
    )
}
