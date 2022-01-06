import styled from "styled-components";

export const BannerContainer = styled.div`

display:flex;
flex-wrap: wrap;
margin: auto;


`;



export const BannerTextContainer = styled.div`
 flex:50%;
display:flex;
flex-direction: column;
justify-content: center;


`;

export const BannerTitle = styled.h1`
font-size:3rem;
/* transform: translate(50%,50%); */
margin-left:10rem;
inline-size: 22rem;
overflow-wrap: break-word;
font-weight:bolder;
@media (max-width: 768px) {
   margin:auto;

  }
`;



export const BannerDesc = styled.p`
display:flex;
margin-left:8rem;
 width: fit-content;
	padding: 0.5em 1em;
    font-weight: 400;
    @media (max-width: 768px) {
    margin:auto;

  }

`;

export const BannerButton = styled.button`

 width: fit-content;
	padding: 0.8em 1em;
    margin-left:9rem;
    border-radius:0.5rem;
    border:none;
    background: linear-gradient(90deg, rgba(83,42,222,1) 30%, rgba(110,46,227,1) 70%);
    color:white;
    @media (max-width: 768px) {
    margin:auto;

  }
`;


export const ImgBannerContainer = styled.div`

 max-height: 70vh;
	flex: 50%;
	display: flex;
	justify-content: center;
 flex:50%;
`;

export const ImgBanner = styled.img`
 margin-left:1rem;
 max-height: inherit;

`;


