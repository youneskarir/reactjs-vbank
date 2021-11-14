import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeIconB } from "./themeIconElements";



const ThemeIcon = () => {
    const theme=useContext(ThemeContext);
    const onClickHandler = () =>{
        theme.onChange();
    }
    return (
        
            <ThemeIconB onClick={onClickHandler}/>
    
    )
}

export default ThemeIcon;
