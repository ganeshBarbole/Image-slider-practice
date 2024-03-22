import { useState } from 'react'
import { Context } from './context/Context'
import { FiArrowLeftCircle,FiArrowRightCircle } from "react-icons/fi";


const Images = () => {
    const {data} = Context()
    const [currentSlide,setCurrentSlide] = useState(0);
  
    const handlePrevious = () => {
      setCurrentSlide(currentSlide === 0 ? data.length-1 : currentSlide-1)
    }

    const handleNext = () => {
      setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1)
    }
  

    return(
        <div className='w-[400px] h-[400px] flex relative items-center bg-yellow-500 p-3'>
            
            <FiArrowLeftCircle size={20} onClick={() => handlePrevious()} className='left-4 bg-white absolute'/>
            {data && data.length ? 
            data.map((image,index) => (
               <img 
                 key={image.id}
                 src={image.download_url}
                 alt={image.download_url }
                 className =  {`w-full h-full object-contain ${currentSlide === index ? '' : 'hidden'}`}
                 />
            ))
           : null}
            <FiArrowRightCircle size={20} onClick={() => handleNext()} className='right-4 absolute bg-white'/>
            <span className='bottom-4 absolute  justify-center flex left-[70px]'>
            {data && data.length ? 
             data.map((_,index) => 
             (<button key={index}  onClick={() => setCurrentSlide(index)} 
             className={`w-4 h-4 rounded-full m-1 ${currentSlide === index ? "bg-white" : 'bg-gray-500'}`} ></button>))
            :null}
            </span>
          
            
            
        
        </div>
        
           )
}

export default Images;