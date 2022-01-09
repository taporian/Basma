import React from 'react'
import { ChallengeContainer, ChallengeTextContainer, ChallengeTitle, CodeContainer, DataContainer, DataIcon, Paragraph } from '../codeChallenge/CodeChallenge.styled'
import { StoreContainer } from './Store.styled';
import ios from '../../assets/images/app-store.png';
import google from '../../assets/images/google-play.png';

export default function Store() {
    return (
        <>
        <StoreContainer>
        <ChallengeContainer>
       <ChallengeTextContainer>
       <ChallengeTitle>
           BASMA is available for all  devices
            </ChallengeTitle>
            <Paragraph fontsize='0.9rem'>          
            sApp is available for all devices, consectetur adipisicing elit. Itaque 
            at harum quam explicabo. Aliquam optio, delectus, dolorem quod neque eos totam. 
            Delectus quae animi tenetur voluptates
             doloribus commodi dicta modi aliquid deserunt, quis maiores nesciunt autem, aperiam natus.
            </Paragraph>   
       </ChallengeTextContainer>
       </ChallengeContainer>
       <CodeContainer style={{'margin-top':'0rem'}} >
       <DataContainer gap='1rem' gapmedia='0.2rem' display='flex' margin={'auto'}  flexmedia={'50%'}>
                            <DataIcon style={{'maxHeight': '6vh','margin':'auto'}} color={'white'}>
                            <img className='profile-img' src={google} alt="google"/>
                 </DataIcon>
                 <DataIcon style={{'maxHeight': '6vh','margin':'auto'}} color={'white'}>
                            <img className='profile-img' src={ios} alt="ios"/>
                 </DataIcon>
                 </DataContainer>
               
                        
                
               
                 </CodeContainer>
        </StoreContainer>
       
    
        </>
    )
}
