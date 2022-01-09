import React from 'react';
import {ToolsContainer,ImgContainerTool,ImgTool,ConatinerTool,ToolTitle,ToolData} from './PowerfulTool.styled';
import thumb2  from '../assets/images/thumb-2.png';
import {toolData} from '../data/tool';
import './tools.css';
import {FaBell} from 'react-icons/fa';
import {HiMailOpen} from 'react-icons/hi';
import {BsFillCameraVideoFill} from 'react-icons/bs';



export default function PowerfulTool() {
    return (
        <>
        <ToolsContainer backgroundColor={"#f6f9fe"}>
        <ImgContainerTool margin={"2rem auto"}>
            <ImgTool src={thumb2} alt="banner"/>
            </ImgContainerTool>
            <ConatinerTool>
            <ToolTitle>
                Work Faster with powerful tools.
            </ToolTitle>
            <ToolData>
            {toolData.map((data)=>(
                  <>
                  <div className='toolContainer'>
                  <div className='toolicon'>
                      {data.icon}
                      </div>
                      <div className='tooldescription'>
                {data.description}
                </div>
               
               </div>
              
                </>
        ))}
        <div className='icon-tools'>
        <span >
        <FaBell size={'1.5rem'} />
        </span>
        <span >
        <HiMailOpen size={'1.5rem'}/>
        </span>
        <span >
        <BsFillCameraVideoFill size={'1.5rem'}/>
        </span>
        </div>
        </ToolData>
        
            </ConatinerTool>
        </ToolsContainer>
        </>
    )
}
