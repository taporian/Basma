
import basic from '../assets/images/bike.png';
import pro from '../assets/images/motorbike.png';



export const basicData  = [
    {
        icon:<img src={basic} className='price-img' alt="basic"/>,  
        title:'BASIC',
        price:'$49',
        content:[
            <hr/>,
            "5GB Linux Web Space",
            <hr/>,
            "5 MySQL Databases",
            <hr/>,
            "24/7 Tech Support",
            <hr/>,
            "Daily Backups",
            <hr/>,
        ],       
    }

]


export const proData  = [
    {
        icon:<img src={pro} className='price-img' alt="basic"/>,  
        title:'Pro',
        price:'$129',
        content:[
            <hr/>,
            "10GB Linux Web Space",
            <hr/>,
            "50 MySQL Databases",
            <hr/>,
            "Unlimited Email",
            <hr/>,
            "Daily Backups",
            <hr/>,
        ],       
    }

]