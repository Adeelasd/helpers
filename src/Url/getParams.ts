import { parse } from "query-string"
/**
 * @param url Url of website with params e.g example.com?foo=bar
 * @default window.location.href (only works on DOM)
 * @description parses querystring into relavent data type. ( this uses qs under the hood )
 */
const getParams = (url = "") => {
    let currentUrl = (url || window.location.href).split("?")[1]
    return parse(currentUrl)
}

export default getParams