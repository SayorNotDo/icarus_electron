import { login } from "../../api/user";
import { urlPrefix } from "../../utils/constants";

function saveSessionStorage(response) {
    // login information stored in cookie
    let user = response.data;
}

function clearSessionStorage() {
    loadlStorage.removeItem(TokenKey);
}

export function userLogin(userInfo) {
    console.log("debug user login...");
    let loginUrl = "/login";
    switch (userInfo.authenticate) {
        case "LOCAL":
            loginUrl = urlPrefix + "/user/login";
            break;
        case "LDAP":
            loginUrl = urlPrefix + "/user/ldap/login";
            break;
        default:
            loginUrl = urlPrefix + "/user/login";
    }
    return new Promise((resolve, reject) => {
        login(loginUrl, userInfo)
            .then(response => {
                // saveSessionStorage(response);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}