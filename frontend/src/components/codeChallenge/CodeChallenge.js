import React from 'react'
import {ChallengeContainer,ChallengeTextContainer,ChallengeTitle,Line,Paragraph,DataContainer, DataIcon,DataTitle,CodeContainer} from './CodeChallenge.styled'
import { iconData } from '../../data/icons';


export default function CodeChallenge() {
    return (
        <>
       <ChallengeContainer>
       <ChallengeTextContainer>
       <ChallengeTitle>
            Code Challenge
            <Line/>
            </ChallengeTitle>
            <Paragraph >          
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Laborum obcaecati dignissimos quae quo ad iste ipsum 
            officiis deleniti asperiores sit.
            </Paragraph>
            
       </ChallengeTextContainer>
       </ChallengeContainer>
 
          <CodeContainer>
        {iconData.map((data)=>(
                  <>
                       <DataContainer flex={'30%'}>
                           <DataIcon>
                {data.icon}
                </DataIcon>

              <DataTitle>
                {data.title}
                </DataTitle>

                <Paragraph fontsize={"0.7rem"} >   
                {data.description}
                </Paragraph >
                </DataContainer>
               
              
                </>
        ))}
  </CodeContainer>
       </>
    )
}
