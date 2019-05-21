import axios from 'axios';

// API keys
/**
 * Note: API keys are provided to store on user's browser. In this case, I have 
 *  configured the restriction to allow only locahost:3000 to access
 *  this API key. 
 *  To change or add more: Credentials ---> API key 1 under API Keys  
 *  Documentation: 
 *      https://developers.google.com/youtube/v3/docs/search/list
 */
const KEY = "xxxxxxxxxxxxxxx";

// make preconfig with default url and parameters 
export default axios.create({
    // youtube http request linke 
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});