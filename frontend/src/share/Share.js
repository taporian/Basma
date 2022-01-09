import React from 'react'
import {ToolsContainer,ImgContainerTool,ImgTool,ConatinerTool,ShareTitle,ToolData} from '../powerfulTool/PowerfulTool.styled';
import thumb3  from '../assets/images/thumb-3.png';
import {shareData} from '../data/share';
import '../powerfulTool/tools.css';
import { BannerButton } from '../components/banner/Banner.styled';


export default function Share() {
    return (
        <>
        <ToolsContainer backgroundColor={"white"}>
       
            <ConatinerTool style={{'margin-left':'3rem','flex':'45%'}}>
            <ShareTitle>
                Share your photos with friends easily.
            </ShareTitle>
            <ToolData>
            {shareData.map((data)=>(
                  <>
                  <div className='shareContainer'>
                  <div className='shareicon'>
                  <span >
                      {data.icon}
                      </span>
                      </div>
                      <div className='sharedescription'>
                {data.description}
                </div>
               
               </div>
              
                </>
        ))}
        <BannerButton style={{'margin-left':'0rem','margin-top':'1.2rem'}}>
					Learn More
				</BannerButton>
        </ToolData>
        
        
            </ConatinerTool>
            <ImgContainerTool margin={"15rem auto"} marginMedia={'22rem auto 0rem auto' }>
            <ImgTool src={thumb3} alt="share"/>
            </ImgContainerTool>
        </ToolsContainer>
        </>
    )
}
