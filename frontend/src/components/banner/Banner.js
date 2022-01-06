import React from 'react'
import thumb from '../../assets/images/thumb-1.png'
import { BannerContainer,ImgBanner ,ImgBannerContainer,BannerTextContainer,BannerButton,BannerTitle,BannerDesc} from './Banner.styled'
import useWindowDimensions from '../../hooks/useWindowDimensions';
export default function Banner() {

    const {width}= useWindowDimensions();

    return (
        
        <BannerContainer>
            {width > 854 ?
            <>
            <BannerTextContainer>
            <BannerTitle>Creative way to Showcase your App</BannerTitle>
            <BannerDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Temporibus commodi, voluptate quaerat iure quidem 
            expedita eos a blanditiis sint modi est error veniam 
            facere eum at doloribus amet, nobis ut.
				</BannerDesc>
                <BannerButton
					className="basma-button"
				
				>
					Get Started
				</BannerButton>
                <br/>
            </BannerTextContainer>
            <ImgBannerContainer>
            <ImgBanner src={thumb} alt="banner"/>
            </ImgBannerContainer>
            </>
            :
            <>
          {/* // flip   */}
            <ImgBannerContainer>
            <ImgBanner src={thumb} alt="banner"/>
            </ImgBannerContainer>
            <BannerTextContainer>
            <BannerTitle>Creative way to Showcase your App</BannerTitle>
            <BannerDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Temporibus commodi, voluptate quaerat iure quidem 
            expedita eos a blanditiis sint modi est error veniam 
            facere eum at doloribus amet, nobis ut.
				</BannerDesc>
                <BannerButton
					className="basma-button"
				
				>
					Get Started
				</BannerButton>
                <br/>
            </BannerTextContainer>
            </>

}
        </BannerContainer>
    )
}
