import React from 'react';
import Header from "./shared/header/Header.tsx";
import Container from "./shared/container/Container.tsx";
import Gap from "./shared/gap/Gap.tsx";
import {useServices} from "./hooks/useServices.ts";
import StudiaCard from "./components/ServiceCard/StudiaCard.tsx";


const App = () => {
    const {isLoading, data} = useServices()
    
    console.log(data)
    return (
        <div>
            <Header />
            <Gap/>
            <Container w={1440} h={5000}>
                <div className="sortingContainer">
                    
                </div>
                {data && data.map((studio) => (
                    <StudiaCard key={studio.id} cardData={studio} />
                ))}
            </Container>
            
        </div>
    );
};

export default App;