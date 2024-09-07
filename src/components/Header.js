import '../css/App.css';
import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    createTheme,
    ThemeProvider,
    Toolbar,
    Typography,
    useMediaQuery
} from "@mui/material";
import logo from "../data/images/app/good-indian-brands-logo.jpeg";
import React from "react";

const theme = createTheme({
    typography: {
        body1: {
            fontSize: '1.4rem',
            [createTheme().breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        },
    },
});

const Description = ({}) => (
  <div>
      <CardContent>
          <ThemeProvider theme={theme}>
              <Typography variant="body1" color="text.primary">
                  Good India Brands is your go-to platform for discovering a curated list of exceptional, yet
                  lesser-known brands across India.
                  Sourced directly from the community, we celebrate the hidden gems that offer quality,
                  authenticity, and unique products.
                  Join us in supporting local brands that deserve to be in the spotlight!
              </Typography>
          </ThemeProvider>
      </CardContent>
  </div>
);

const MobileHeader = ({ embedId }) => (
    <div>
        <AppBar position="static" sx={{
            background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
            boxShadow: 'none'
        }}>
            <Toolbar>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}
                >
                    <Box display="flex" alignItems="center">
                        <img src={logo} alt="Logo" style={{height: 40, marginRight: 8}}/>
                        <Typography variant="h5" color="textPrimary">
                            Good Indian Brands
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>

        <Card>
            <Description />
            <Box padding={"10px"} paddingTop={"0px"}>
                <Button variant="contained" color="primary" fullWidth>
                    Make a Submission
                </Button>
            </Box>
        </Card>
    </div>
);


const DesktopHeader = ({embedId}) => (
    <div>
        <AppBar position="static" sx={{
            background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
            boxShadow: 'none'
        }}>
            <Toolbar>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}
                >
                    <Box display="flex" alignItems="center">
                        <img src={logo} alt="Logo" style={{height: 40, marginRight: 8}}/>
                        <Typography variant="h4" color="textPrimary">
                            Good Indian Brands
                        </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                        Make a Submission
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>

        <Card>
            <Description />
        </Card>
    </div>

);


function Header() {
    const isMobile = useMediaQuery('(max-width:600px)');  // Matches for screens smaller than 600px

    return (
        <div>
            {isMobile ? (
                <MobileHeader />
            ) : (
                <DesktopHeader />
            )}
        </div>
    );
}

export default Header;
