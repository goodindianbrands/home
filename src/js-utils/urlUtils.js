const YOUTUBE_EMBED_ID_KEY = "v";

export function getQueryParams() {
    const url = new URL(window.location.href);
    return new URLSearchParams(url.search);
}

export function getYoutubeEmbedId(url) {
    return getQueryParam(url, YOUTUBE_EMBED_ID_KEY)
}

function getQueryParam(url, queryParamKey) {
    try {
        const urlObj = new URL(url);
        const params = new URLSearchParams(urlObj.search);
        return  params.get(queryParamKey);
    } catch (error) {
        console.error('Invalid URL:', error);
        return undefined;
    }
}