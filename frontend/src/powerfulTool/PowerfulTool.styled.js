import styled from "styled-components";

export const ToolsContainer = styled.div`
display:flex;
margin:auto;
flex-wrap: wrap;
background-color:${(props)=>props.backgroundColor};
width:90%;
height:100%;
padding:2rem;


@media (max-width: 768px) {
    width:${(props)=>props.widthMedia};
    padding-bottom:13rem;
  }


`;



export const ImgContainerTool = styled.div`
	flex: 0 0 50%;
	display: flex;
    max-height: 60vh;
	justify-content: center; 
    margin:${(props)=>props.margin};
    @media (max-width: 768px) {
   
        margin:${(props)=>props.marginMedia};
}

`;


export const ImgTool = styled.img`

max-height: inherit;

`;

export const ConatinerTool = styled.div`
	flex: 0 0 50%;
	display: flex;
    max-height: 60vh;
	display:flex;
    flex-wrap:wrap;
    margin:auto;
    width:${(props)=>props.width};
    margin:${(props)=>props.margin};
    flex:${(props)=>props.flex};
    
    @media (max-width: 768px) {
        flex:${(props)=>props.flexMedia};
   margin:${(props)=>props.marginMedia};
}
   

`;

export const ToolTitle = styled.h1`
font-size:2.5rem;
/* transform: translate(50%,50%); */
margin-bottom:2rem;
inline-size: 30rem;
overflow-wrap: break-word;
font-weight:bolder;
@media (max-width: 768px) {
   margin:auto;
   margin-left:-1rem;
   inline-size: 20rem;

  }
`;


export const ShareTitle = styled.h1`
font-size:2.5rem;
/* transform: translate(50%,50%); */
margin-bottom:1rem;
inline-size:25rem;
overflow-wrap: break-word;
font-weight:bolder;

@media (max-width: 768px) {
   margin:auto;
   width:100%;

  }
`;



export const ToolData = styled.div`
display: flex;
flex-wrap:wrap;
	width: 85%;
	flex-direction: column;

/* transform: translate(50%,50%); */

@media (max-width: 768px) {
   margin:auto;
   
  

  }
`;