import './App.css';
import {Button, Grid, SvgIcon} from "@mui/material";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function Header() {
    return (
        <div>
            <Grid container spacing={2} className={"headerBackground"} p={2}>
                <Grid item xs={8}>
                    <HomeIcon color="primary" fontSize="large"/>
                    <strong>

                    </strong>
                    <font size="6">
                        Good Indian Brands
                    </font>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={"submissionButton"}>
                        Make a submission
                    </Button>
                </Grid>
            </Grid>
            {/*<img src={logo} alt="Italian Trulliasd" className={"logo"}/>*/}

        </div>
    );
}

export default Header;
