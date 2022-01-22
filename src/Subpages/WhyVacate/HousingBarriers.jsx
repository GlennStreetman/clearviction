import {
    Box,
    Grid
} from "@material-ui/core";

import pha from "../../Assets/Citybuildings_TwoColor1.svg";
import supportiveHousing from "../../Assets/Diversity_TwoColor1.svg";
import privateHousing from "../../Assets/Processbuilding_TwoColor1.svg";
import transitionalHousing from "../../Assets/Dream_TwoColor1.svg";
import { WhyVacateHousingStyles } from "../../Styles/WhyVacateHousingStyles";
import { TextWithImage } from "./TextWithImage";

export const HousingBarriers = () => {
    const classes = WhyVacateHousingStyles();
    return (
        <>
            <Box>
                <Grid container spacing={1} className={classes.containerStyles}>
                    <TextWithImage 
                        img={pha}
                        header={"Public Housing Authorities"}
                        text={["Income capped", "Can’t be a registered offender", "PHAs have discretion on who they decide to house"]}
                        cols={6}
                    />
                    <TextWithImage 
                        img={privateHousing}
                        header={"Private Housing"}
                        text={["Landlords often deny people with criminal records", "Management companies often have background checks and also deny people with criminal records"]}
                        cols={6}
                    />
                    <TextWithImage 
                        img={supportiveHousing}
                        header={"Supportive Housing"}
                        text={["Funded by HUD homeless programs", "Must have been residing in emergency shelter in the 90 days prior"]}
                        cols={6}
                    />
                    <TextWithImage 
                        img={transitionalHousing}
                        header={"Transitional Housing"}
                        text={["Some require you have substance abuse, emotional or physical issues", "May require you attend special meetings or work"]}
                        cols={6}
                    />
                </Grid>
            </Box>
        </>
    )
}