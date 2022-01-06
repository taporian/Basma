import React from 'react'
import Shape from "react-clip-path";
import './clip.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Clip() {

const {width}= useWindowDimensions();
    return (
       
  <>

             <div className='clip'>
             { width > 854 ?           
             <Shape       
					width="100%"
					height="90vh"
					showLabel={true}
					backgroundColor="#5812ed"
					formula="polygon(45.2% 0, 100% 0, 100% 45%, 77% 80%)"
				/>:
                <Shape       
                width="100%"
                height="90vh"
                showLabel={true}
                backgroundColor="#5812ed"
                formula="polygon(3.2% 0, 100% 0, 100% 45%, 77% 80%)"
            />
             }
               
                  </div>
                  </>
      
    )
}
