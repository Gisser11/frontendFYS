import React from 'react';
import './StudiaCard.css'
import Typography from "../typography/Text.tsx";
import {IStudia} from "../../types/IStudia.ts";

const StudiaCard = ({cardData}: {cardData: IStudia}) => {
    
    return (
        <div className="StudiaCardMain">
            <div className="TextInformatin">
                <Typography style="primary" text={cardData.name}/>
                <Typography style="secondary" text={cardData.description}/>
                <div className="cityBg"><Typography style="secondary" text={cardData.city}/></div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default StudiaCard;