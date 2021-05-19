import { parse } from "qs"
/**
 * @param url Url of website with params e.g example.com?foo=bar
 * @default window.location.href
 * @description parses querystring into relavent data type. ( this uses qs under the hood )
 */
export const getParams = (url = "") => {
    let dataUrl: string
    if (url)
        return parse(url)
    let currentUrl = window.location.href.split("?")[1]
    console.log(currentUrl)
}