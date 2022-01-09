import React from 'react'
import { contactData } from '../../data/contact'
import { ConatinerTool, ImgContainerTool, ImgTool, ShareTitle, ToolData, ToolsContainer } from '../../powerfulTool/PowerfulTool.styled'
import { BannerButton } from '../banner/Banner.styled'
import { ChallengeContainer, ChallengeTextContainer, ChallengeTitle, Line, Paragraph } from '../codeChallenge/CodeChallenge.styled';
import { Col25, ErrorPForm, InputFormSub, InputFormTxt, LabelForm, Row, TextareaForm } from '../form/Form.styled';
import './contact.css';

export default function ContactUs() {
    return (
        <>
        <div className='contact-container'>
         <ChallengeContainer>
       <ChallengeTextContainer>
       <ChallengeTitle>
            Stay Tuned
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
        <ToolsContainer widthMedia='100%'>
            <ConatinerTool flexMedia='50%'  flex='35%' >
           
            <ToolData style={{'margin-bottom':'8rem','width':'100%'}}>
            <Paragraph width='100%' flex='20%' textAlign="start" >          
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of 
            classical Latin literature from 45 BC, making it over 2000 years old.
            </Paragraph>
            {contactData.map((data)=>(
                  <>
                 
                  <div className='contactContainer'>
                      
                  <div className='contactIcon'>
                  <span >
                      {data.icon}
                      </span>
                      </div>
                      <div className='contactdescription'>
                {data.description}
                </div>
               
               </div>
              
                </>
        ))}

        </ToolData>

        
            </ConatinerTool>
            <form className='contact-form-container'>
  <Row marginMedia='auto' margin='1rem'>
    
      <Col25>
        <InputFormTxt/>
      
      </Col25>
    </Row>
    <Row marginMedia='auto' margin='1rem'>
    
      <Col25>
        <InputFormTxt />
    
      </Col25>
    </Row>
    <Row marginMedia='auto' margin='1rem'>
     
      <Col25>
        <InputFormTxt />
       
      </Col25>
    </Row>
    <Row marginMedia='auto' margin='1rem'>
      <Col25>
        <TextareaForm  ></TextareaForm>

        
      </Col25>
    </Row>
    <Col25>
    
    <Row  marginMedia='auto'  margin='1rem'>
      <InputFormSub  type='submit' value='Send Message'/>
    </Row>
    </Col25>
  </form>

        </ToolsContainer>
        </div>
        </>
    )
}
