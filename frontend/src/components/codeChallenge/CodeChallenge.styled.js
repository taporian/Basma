import styled from "styled-components";

export const ChallengeContainer = styled.div`
display:flex;
flex-wrap: wrap;
margin: auto;
flex-direction: column;
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
`;

export const Paragraph = styled.p`
text-align:center;
width:70%;
margin:auto;
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
flex: 30%;
	padding: 0.5em;
    margin:1rem 2rem 2rem 1rem;

`;
export const DataIcon = styled.div`
text-align: center;
	font-size: 3em;
	color: gray;
   
`;


export const DataTitle = styled.h2`
text-align: center;
font-size:1.2rem;
font-weight:bold;
@media (max-width: 768px) {
margin-top:0.5rem;

  }


`;

export const Line = styled.hr`
border: none;
width:3rem;
padding:0.1rem;
margin:1rem auto;
background-color:#7c4fe0
`;




