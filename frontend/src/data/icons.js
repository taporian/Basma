import { MdOutlineTouchApp } from "react-icons/md";
import pointer from '../assets/svg/pointer-top.svg';
import cogs from '../assets/svg/cogs.svg';
import { IoFingerPrintOutline } from "react-icons/io5";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";


const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.';
export const iconData  = [
    {
        icon:<img src={pointer} alt="pointer"/>,  
        title:'Fully functional',
        description:description,
        
    },
    {
        icon: <IoFingerPrintOutline/>,  
        title:'Fully functional',
        description:description,
        
    },
    {
        icon: <RiNotificationBadgeLine/>,  
        title:'Fully functional',
        description:description,
        
    },
    {
        icon: <HiOutlineLocationMarker/>,  
        title:'Location Tracking',
        description:description,
        
    },
    {
        icon:<img src={cogs} style={{' -webkit-transform': 'scaleX(-1)' ,'transform': 'scaleX(-1)'}} alt="cogs"/>, 
        title:'Powerful Settings',
        description:description,
        
    },
    {
        icon: <BsGlobe/>,  
        title:'Multiple Language',
        description:description,
        
    },

]