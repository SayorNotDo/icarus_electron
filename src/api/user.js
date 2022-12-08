import { post } from "../plugins/request";

export function login(url, data) {
    return post(url, data)
}