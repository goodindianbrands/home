import '../css/App.css';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button, Chip, ListItem, Stack, styled, Typography, useMediaQuery} from "@mui/material";
import {useState} from "react";
import {InstagramLink, WebsiteLink, YouTubeLink} from "./LinksWithIcon";


const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
};

const mobileImgStyle = {
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'contain',
};


const GradientContainer = styled(Grid2)(({ theme }) => ({
    borderRadius: '16px',
    background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    boxShadow: theme.shadows[4],
    overflow: 'hidden', // Ensures the rounded corners are visible
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        margin: theme.spacing(0),
        marginTop: theme.spacing(2),
    },
}));

function RenderTags({tags}) {
    if (tags !== undefined) {
        return (
            <div>
                <Stack direction="row"
                       spacing={1}
                       useFlexGap
                       sx={{ flexWrap: 'wrap' }}
                >
                {tags.map((item, index) => (
                    <Chip label={item} />
                ))}
                </Stack>
            </div>
        );
    }
    else{
        <div />
    }
}

function ReadMoreText({text}) {
    const [expanded, setExpanded] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');  // Matches for screens smaller than 600px
    const cutOffLength = isMobile ? 200 : 500;
    return (
        <div>
            <Typography variant="body1">
                {expanded ? text : `${text.substring(0, cutOffLength)}...`}
            </Typography>
            <Button
                variant="text"
                size="small"
                onClick={() => setExpanded(!expanded)}
                sx={{ marginTop: 0 }}
            >
                {expanded ? 'See Less' : 'See More'}
            </Button>
        </div>
    );
}


export function DesktopCard({brandData}) {
    return (
        <div className={""}>
            <GradientContainer container spacing={2}>
                <Grid2 xs={4}>
                    <img src={brandData.imagePath} alt="Coming Soon..." style={imgStyle}/>
                </Grid2>
                <Grid2 xs={8}>
                    <Stack spacing={0}>
                        <ListItem dense={"true"}>
                            <Typography variant="h3">
                                {brandData.name}
                                <div className={"inline-display"}>
                                    <WebsiteLink url={brandData.websiteLink}/></div>
                            </Typography>

                        </ListItem>
                        <ListItem dense={"true"}>
                            <ReadMoreText text={brandData.description}/>
                        </ListItem>
                        <ListItem dense={"true"}>
                            Socials:
                            <YouTubeLink url={brandData.youtubeLink}/>
                            <InstagramLink url={brandData.instagramLink}/>
                        </ListItem>
                        <ListItem dense={"true"}>
                            Tags: &nbsp;
                            <RenderTags tags={brandData.tags}/>
                        </ListItem>
                    </Stack>
                </Grid2>
            </GradientContainer>
            {/*<hr />*/}
        </div>
    );
}

export function MobileCard({brandData}) {
    return (
        <div className={""}>
            <GradientContainer container>
                <Grid2 xs={12} padding={"0px"} spacing={"0px"}>
                    <Stack spacing={0}>
                        <ListItem dense={"true"}>
                            <Typography variant="h4">
                                {brandData.name}
                                <div className={"inline-display"}>
                                    <WebsiteLink url={brandData.websiteLink}/></div>
                            </Typography>
                        </ListItem>

                        <img src={brandData.imagePath} alt="Coming Soon..." style={mobileImgStyle}/>

                        <ListItem dense={"true"}>
                            <ReadMoreText text={brandData.description}/>
                        </ListItem>
                        <ListItem dense={"true"}>
                            Socials:
                            <YouTubeLink url={brandData.youtubeLink}/>
                            <InstagramLink url={brandData.instagramLink}/>
                        </ListItem>
                        <ListItem dense={"true"}>
                            Tags: &nbsp;
                            <RenderTags tags={brandData.tags}/>
                        </ListItem>
                    </Stack>
                </Grid2>
            </GradientContainer>
        </div>
    );
}
