import styled from 'styled-components';



export const InputFormTxt = styled.input`
font-size:20px;
color:black;
width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  box-shadow: -1px 1px 2px 1px rgba(143, 136, 136, 0.3);

`
export const InputFormSub = styled.input`
background-color: #7c4fe0;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  width:100%;
  margin:${(props)=>props.margin}; 
  width:${(props)=>props.width}; 
 
  cursor: pointer;
 
  margin-top:1rem;
  @media  (max-width: 768px) {
    width: 100%;
        margin: auto;
      }

  &:hover {
    background-color: #8454ef;
        

`
export const TextareaForm = styled.textarea`
font-size:20px;
color:black;
width: 100%;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`
export const ErrorPForm = styled.p `
        color:red;
`
export const LabelForm = styled.label`
  display: inline-block;
    width: 90%;
    text-align: left;
    font-size:18px;
padding: 12px 12px 12px 0;
  display: inline-block;
`

export const Container = styled.div`
border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width:80%;
  position: relative;
  transform: translate(12%, 0%);
  
`
export const Col25 = styled.div`
float: left;
  width: 100%;
  margin-top: 6px;
  
  @media  (max-width: 600px) {
    width: 100%;
        margin-top: 0;
      }

`
export const Col75 = styled.div`
float: left;
  width: 75%;
  margin-top: 6px;
  @media  (max-width: 600px) {
    width: 100%;
        margin-top: 0;
      }

`
export const Row = styled.div`
    margin:${(props)=>props.margin}; 
    width: 100%;
    padding-top:0.5rem;
    :after{
        content: "";
        display: table;
        clear: both;
        }
        @media  (max-width: 768px) {
           
            margin:${(props)=>props.marginMedia}; 
      }

`

