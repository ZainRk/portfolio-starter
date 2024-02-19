import React from 'react';
import "./Intro.css";
import background from "../../img/background.jpg";
const Intro = () => {
    return(
        <div className = "intro">
             <div className="i-background">
            <img src={background} alt="" />
            </div>
           <div className = "i-left">
                
                <div className="body">
                    <span>The Builder of Choice </span>
                    <span>
                       We are Providing high-quality and cost-effective construction services that satisfy or exceed customer expectations, 
                        while complying with all applicable legal and standard requirements. Continuously improving the effectiveness of our
                        Quality Management System by regularly reviewing and communicating our policies to all stakeholders. Prioritizing the
                        health and safety of our employees and the environment through our Health, Safety, and Environment Management program.
                        Ensuring the implementation of our Integrated Management Policy with a focus on continuous improvement in all areas of our
                        operations.
                    </span>
                    
                    </div>
                    <button className="i-button">Learn more 🠮</button>
           </div>

           <div className = "i-right">
           <div className="i-hundred">
           <span>  100 +</span>
           <span> Complete Projects</span>
                </div>
            <div className="BoxA">
                        <div
                 style ={{
                        width: '550px',
                        height: '445px',
                        background:'#0001D4',
                        marginBottom: '3rem',
                        marginRight: '3rem',
                      
                    }}
                    />
             </div>
             
             <div className="i-nineteen">
             <span>  19 +</span>
             <span> Years of Experience</span>
                </div>
                <div className="BoxB">
                        <div                
                 style ={{
                        width: '550px',
                        height: '445px',
                        background:'#B10204',
                        marginBottom: '3rem',
                    }}
                    />
             </div>
             <div className="longBox">
             <div className="BoxC">
                        <div
                 style ={{
                        width: '1100px',
                        height: '20px',
                      
                        background:'#00B900',   
                        marginLeft:'290px',
                        position: 'absolute',
                    }}
                    />
             </div>

             <div className="BoxD">
             <div
                 style ={{
                    marginTop: '20px',
                        width: '1100px',
                        height: '1230px',
                        background:'#FFFFFF',
                        margin: '20px',   
                        
                        
                    }}
                    />
             </div>
             </div>

        </div>
        </div>
    )
}

export default Intro;