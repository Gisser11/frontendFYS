import React from 'react';
import {PrimaryStyles, SecondaryStyles} from "./TextStyles.ts";

type TypographyProps = {
    text: string;
    style: string
    _fontSize?: number
};

const Typography: React.FC<TypographyProps> = ({ text, style, _fontSize }) => {
    const textStyle = style === "primary" ? 
        PrimaryStyles :
            style === "secondary" ? SecondaryStyles :
            {color: "red"}
    
    return <div style={textStyle}>{text}</div>;
};

export default Typography;
