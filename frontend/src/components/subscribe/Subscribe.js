import React from 'react'
import news from '../../assets/images/newsletter-background.png'
import { Row,Col25,InputFormTxt,LabelForm,InputFormSub } from "../../components/form/Form.styled";
import { ChallengeContainer, ChallengeTextContainer, ChallengeTitle, Paragraph } from '../codeChallenge/CodeChallenge.styled';
import './subscribe.css'
export default function Subscribe() {
    return (
        <>
        <div className='subscribe-container'>
        <div className='subscribe-background'>
        <ChallengeContainer flex='50%' margin='auto 0 -10rem 0;'>
       <ChallengeTextContainer>
       <ChallengeTitle color='black'>
           Subscribe to get updates
            </ChallengeTitle>
            <br/>
            <Paragraph width='55%' color='black' fontsize='0.9rem'>          
            By subscribing you will get newsleter, promotions adipisicing elit. Architecto beatae, 
            asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.
            </Paragraph>   
            
       </ChallengeTextContainer>
       
       </ChallengeContainer>
    
       </div>
       <form className='subscribe-form' >
  <Row>
      <Col25>
        <InputFormTxt />                
      </Col25>
    </Row>
  
  
    <Row>
      <InputFormSub  type='submit' value='Subscribe'/>
    </Row>
  </form>
  </div>
        </>
    )
}
