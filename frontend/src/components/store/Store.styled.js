import styled from "styled-components";
import store from '../../assets/images/download-bg.jpeg'
export const StoreContainer = styled.div`

    background:linear-gradient(0deg, rgba(20, 40, 80, 0.7), rgba(20, 40, 80, 0.7)), url(${store});
    width: 90%;
    height:25rem;
    background-position: center ;
	display: flex;
	flex-direction: column;
	padding: 2em 0;
	margin: auto;
	background-size: cover;
	text-align: center;
	color: white;
    margin-bottom:2rem

`;