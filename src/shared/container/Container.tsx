import React from 'react';
import "./styles.css"
// Пропсы
type ContainerProps = {
    w: number;
    h: number
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ w, h, children }) => {
    const ContainerStyle = {width: w, height: h}



    return <div className="main" style={ContainerStyle}>{children}</div>;
};

export default Container;
