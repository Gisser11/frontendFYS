import React from 'react';
import "./ButtonStyles.css"

type TypographyProps = {
    w: number,
    h: number,
    children: React.ReactNode;
};



const Button: React.FC<TypographyProps> = ({ w,h,children}) => {
    const buttonStyle = {
        width: w,
        height: h,
    }



    return ( 
        <div className="buttonMain" style={buttonStyle}>
            {children}
        </div>
    ) 
};

export default Button;
