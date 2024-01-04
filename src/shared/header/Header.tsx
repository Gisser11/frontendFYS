import React from 'react';
import "./styles.css"
import Button from "../../components/button/Button.tsx";
import Typography from "../../components/typography/Text.tsx";
const Header = () => {
    return (
        <div className="headerMain">
            <h1>FYS LOGO</h1>
            <h1>SearchBar</h1>
            <Button w={140} h={38}>
                <Typography style="secondary" text="Вход" />
            </Button>
        </div>
    );
};

export default Header;