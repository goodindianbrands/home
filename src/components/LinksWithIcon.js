import {IconButton, Tooltip} from "@mui/material";
import {Instagram, Link, YouTube} from "@mui/icons-material";

export function WebsiteLink({url}) {
    if(url !== undefined) {
        return (
            <div>
                <Tooltip title="Visit Website">
                    <IconButton
                        component="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                    >
                        <Link />
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
    else{
        <div />
    }
}

export function YouTubeLink({url}) {
    if (url !== undefined) {
        return (
            <div>
                <Tooltip title="Watch on YouTube">
                    <IconButton
                        component="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                    >
                        <YouTube/>
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
    else{
        <div />
    }
}

export function InstagramLink({url}) {
    if (url !== undefined) {
        return (
            <div>
                <Tooltip title="Visit on Instagram">
                    <IconButton
                        component="a"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                    >
                        <Instagram/>
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
    else{
        <div />
    }
}

