import React from 'react'
import {ChallengeContainer,ChallengeTextContainer,ChallengeTitle,Line,Paragraph} from '../codeChallenge/CodeChallenge.styled'
import './price.css';
import PriceCard from './PriceCard';
import { basicData,proData } from '../../data/price';


export default function Price() {
    return (
        <>
        <div className='price-container'>
        <ChallengeContainer>
        <ChallengeTextContainer>
        <center> 
      <ChallengeTitle>
             Basma Code Challenge
             <Line/>
             </ChallengeTitle>
             </center> 
             <Paragraph>          
             Lorem ipsum dolor sit amet, 
             consectetur adipisicing elit. 
             Laborum obcaecati dignissimos quae quo ad iste ipsum 
             officiis deleniti asperiores sit.
             </Paragraph>
             
        </ChallengeTextContainer>
        <div className='price-card-container'>
          <PriceCard basicData={basicData} proData={proData}/>
       
             
          </div>
         
          
        </ChallengeContainer>
      <h6 className='pice-contact'>Not sure what to choose? <a className='price-link' href='/contact'>Contact Us</a>  </h6>
        </div>
     
        
        </>
    )
}
