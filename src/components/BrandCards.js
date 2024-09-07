import BrandCard, {DesktopCard, MobileCard} from "./BrandCard";
import {getAllCompanies} from "../js-utils/companyUtils";
import React from "react";
import {useMediaQuery} from "@mui/material";

function BrandCards({companies}) {
    const isMobile = useMediaQuery('(max-width:600px)');  // Matches for screens smaller than 600px

    return (
        <div>
            {isMobile ? (
                Array.from(companies.entries()).map(([key, item]) => (
                    <MobileCard brandData={item} />
                ))
            ) : (
                Array.from(companies.entries()).map(([key, item]) => (
                    <DesktopCard brandData={item} />
                ))
            )}
        </div>
    );
}

export default BrandCards;
