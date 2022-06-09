import {React,useContext} from 'react'
import './FloatingDiv.css'
import { themeContext } from "../../Context";


const FloatingDiv = ({image,txtTop,txtBottom}) => {
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className='floatingDiv'>
        <img src={image} alt='' />
        <span style={{color:darkMode?"#000":""}}>
            {txtTop} <br />
            {txtBottom}
        </span>
    </div>
  )
}

export default FloatingDiv