/*
quando usar no cliente, usar a biblioteca instalada cookies-next
*/
import { getCookie } from 'cookies-next'

export function getCookieClient() {

    const token = getCookie("session");

    return token
}
