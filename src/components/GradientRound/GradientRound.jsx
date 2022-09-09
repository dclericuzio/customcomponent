import React from 'react'
import './GradientRound.css'

const GradientRound = () => {

    const text = "Dante Clericuzio Created This Animation -";
   

  return (

    <div className="roundcontainer">
        <div className="round">
            <div className="text">
                <p>
                    {text.split("").map((text,i) =>  
                    <b key={i} style={{transform: `rotate(${i*8.5}deg)`}}>{text}</b>
                    )}
                </p>
            </div>
            <span><i></i></span>
        </div>
        
    </div>
    
  )
}

export default GradientRound