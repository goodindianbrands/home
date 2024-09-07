import Header from "./Header";
import Filter from "./Filter";
import '../css/App.css';
import BrandCards from "./BrandCards";
import {Container} from "@mui/material";
import {getAllCompanies} from "../js-utils/companyUtils";
import {createContext, useState} from "react";

export const CompaniesContext = createContext();

function Home() {
    const [companies, setCompanies] = useState(getAllCompanies());

    return (


        <div>

            <Container
                maxWidth="lg" // Use a predefined breakpoint or custom value
                sx={{
                    width: '100%',   // Full width of the parent
                    maxWidth: '1200px', // Adjust as needed
                    margin: '0 auto', // Centers the container horizontally
                    padding: '8px',  // Optional: Add padding inside the container
                }}
            >
                <CompaniesContext.Provider value={{companies, setCompanies}}>
                    <Header/>
                    <Filter/>
                    <BrandCards companies={companies} />
                </CompaniesContext.Provider>
            </Container>

        </div>
    );
}

export default Home;
