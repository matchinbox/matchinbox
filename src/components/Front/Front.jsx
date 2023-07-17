import React from 'react'
import {motion} from "framer-motion";

import "./front.css"
const Front = ({data , indexNo}) => {
  return (
    <motion.div  
    
   
    style={{backgroundColor:data.bgCode}}  className={`frontContainer `}>
        <div className="gradient_bg"></div>
        <motion.div 
         initial={{ opacity: 0, scale: 0.5 , x:"-400px" }}
         animate={{ opacity: 1, scale: 1,   x:"0px" }}
         transition={{ duration: 0.5    }}
        
        className="frontContainer_content">
            
        <div className={`frontContainerTextContent ${indexNo  ==0 ? "firstItem":""}`}>
            <h1 className='container_main_heading'>{data.name}</h1>
            <p className='container_main_desc'> {  data.content}</p>
        </div>
            {
              data.multipleImg ? <div className='multipleImg'>
                  {data.imageArr.map(img=>(

                    <img src={img} alt="phoneImg" />


                  ))}
              </div>:   <img className={`${data.image==="/img/explore3.png" ? "smallImg" :""} container_main_img`} src={data.image} alt="matchinBoxIMg" />
            }
         
        </motion.div>


    </motion.div>
  )
}

export default Front