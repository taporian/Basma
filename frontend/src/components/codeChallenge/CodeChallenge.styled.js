import styled from "styled-components";

export const ChallengeContainer = styled.div`

display:flex;
flex-wrap: wrap;
margin: auto;
margin:${(props)=>props.margin}; 
flex-direction: column;
flex:${(props)=>props.flex}; 

`;



export const ChallengeTextContainer = styled.div`

display:flex;
margin: auto;
flex-direction: column;
	justify-content: center;


`;
export const ChallengeTitle = styled.h1`

font-weight:bolder;
font-size:2.3rem;
margin: auto;

color:${(props)=>props.color}; 
margin:${(props)=>props.margin}; 

`;

export const Paragraph = styled.p`
text-align:center;
width:70%;

margin:auto;
color:${(props)=>props.color}; 
width:${(props)=>props.width};  
text-align:${(props)=>props.textAlign}; 
flex:${(props)=>props.flex}; 
@media (max-width: 768px) {
    width:100%;
    font-size:${(props)=>props.fontsize}

  }
`;



export const CodeContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;


`;

export const DataContainer = styled.div`
   
    flex:${(props)=>props.flex};
	padding: 0.5em;
    margin:1rem 2rem 2rem 1rem;
    margin:${(props)=>props.margin};
    display:${(props)=>props.display};
    gap:${(props)=>props.gap};
   
 
    @media (max-width: 768px) {

        flex:${(props)=>props.flexmedia};
        gap:${(props)=>props.gapmedia};
  }
`;



export const DataIcon = styled.div`
text-align: center;
	font-size: 3em;
	color: gray;
  
    color:${(props)=>props.color}; 
   
     
`;


export const DataTitle = styled.h2`
text-align: center;
font-size:1.2rem;
font-weight:bold;
color:${(props)=>props.color};  
font-size:${(props)=>props.fontSize}; 
letter-spacing:${(props)=>props.letterSpacing}; 
font-weight:${(props)=>props.fontWeight};


@media (max-width: 768px) {
margin-top:0.5rem;

  }


`;

export const Line = styled.hr`
border: none;
width:3rem;
padding:0.1rem;
margin:1rem auto;
background:#7c4fe0;

`;




