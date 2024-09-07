import '../css/App.css';
import Header from "./Header";
import {getQueryParams, getYoutubeEmbedId} from "../js-utils/urlUtils";
import {getCompanyDetails} from "../js-utils/companyUtils";
import YoutubeEmbed from "./YoutubeEmbed";

function YoutubeRender({youtubeLink}) {
    const embedId = getYoutubeEmbedId(youtubeLink)
    if (embedId !== undefined) {
        return (
            <div className={"center"}>
                <YoutubeEmbed embedId={getYoutubeEmbedId(youtubeLink)} />
            </div>

        )
    }
    else {
        return (
            <div />
        )
    }
}

function DetailPage() {
    const queryParams = getQueryParams();
    const companyId = queryParams.get("id")
    const companyDetails = getCompanyDetails(companyId);
    const youtubeLink = companyDetails.socials?.youtube;
    return (
        <div>
            <Header />
            <div className={"padding"}>
                <h1>Company: {companyDetails.name}</h1>
                <h2>Description</h2>
                {companyDetails.description}
                <YoutubeRender youtubeLink={youtubeLink} />
            </div>


            Loading data for {companyId}

            Company Details {JSON.stringify(companyDetails)}
        </div>
    );
}



export default DetailPage;
