
import app from '../assets/images/app.png';
import settings from '../assets/images/settings.png';
import download from '../assets/images/download.png';
import { MdArrowForwardIos } from "react-icons/md";


const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius saepe, voluptates quis enim incidunt obcaecati?';
export const profileData  = [
   
    {
        icon:<img className='profile-img' src={download} alt="download"/>,  
        title:'Install the App',
        description:description,
        
    },
   
    {
        icon: <MdArrowForwardIos className='profile-arrow' />,  
   
        
    },
    {
        icon:<img className='profile-img' src={settings} alt="settings"/>,  
        title:'Setup your profile',
        description:description,
        
    },
    {
        icon: <MdArrowForwardIos className='profile-arrow' />,  
        
    },
    {
        icon:<img className='profile-img' src={app} alt="app"/>,  
        title:'Enjoy the features!',
        description:description,
        
    },
   


]