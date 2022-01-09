import React from 'react'
import {ChallengeContainer,ChallengeTextContainer,ChallengeTitle,Paragraph,DataContainer, DataIcon,DataTitle,CodeContainer} from '../codeChallenge/CodeChallenge.styled';
import { profileData } from '../../data/profile';
import './profile.css'
export default function Profile() {
  
    return (
        <>
        <div className='profile-container'>
        <ChallengeContainer >
        <ChallengeTextContainer>
        <br/>
        <ChallengeTitle color='white'>
             Code Challenge
             </ChallengeTitle>
             <br/>
             <Paragraph color='white'>          
             Lorem ipsum dolor sit amet, 
             consectetur adipisicing elit. 
             Laborum obcaecati dignissimos quae quo ad iste ipsum 
             officiis deleniti asperiores sit.
             </Paragraph>
             
        </ChallengeTextContainer>
        </ChallengeContainer>
  
           <CodeContainer style={{'margin-top':'0rem'}} >
         {profileData.map((data)=>(
                   <>
                        <DataContainer flex={'15%'} margin={'0rem'}  flexmedia={'100%'}>
                            <DataIcon style={{'maxHeight': '6vh','margin':'2rem'}} color={'white'}>
                 {data.icon}
                 </DataIcon>
 
               <DataTitle color={'white'}>
                 {data.title}
                 </DataTitle>
 
                 <Paragraph width='100%' color='white' fontsize={"0.7rem"} >   
                 {data.description}
                 </Paragraph >
                 </DataContainer>
                
               
                 </>
         ))}
   </CodeContainer>
   </div>
        </>
    )
}
