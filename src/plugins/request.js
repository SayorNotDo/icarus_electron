import { message } from 'ant-design-vue';
import axios from 'axios';
// import TokenKey from '../utils/constants';
// import getUrlParams from '../utils';
import packageJSON from '../../package.json'

let baseURL = "";

// if (window.__POWERED_BY_QIANKUN__) {
//     baseURL = "/" + packageJSON.name;
// }

// if (window.location.pathname.startsWith("/" + packageJSON.name)) {
//     if (window.location.search.indexOf("shareId") > -1) {
//         baseURL = "/" + packageJSON.name;
//     } else {
//         window.location.href = "/"
//     }
// }

// let urlParams = getUrlParams(window.location.href);

const instance = axios.create({
    baseURL,    // url = base url + request url
    withCredentials: true, // true = use with credentials for
    //timeout: 60000 // request timeout, default 1 minutes
})

instance.interceptors.response.use(response => {
    return response;
}, error => {
    let msg;
    if (error.response && error.response.headers) {
        if (error.response.status === 402) {
            if (error.response.headers['redirect']) {
                window.open(error.response.headers['redirect']);
            }
        }
        msg = error.response.data.message || error.response.data;
    } else {
        console.log('error: ', error)
        msg = error.message
    }
    if (msg && !(msg instanceof Object)) {
        message.error(msg)
    }
    return Promise.reject(error)
})

// // add token beforeEach request
// instance.interceptors.request.use(
//     config => {
//         let user = JSON.parse(localStorage.getItem(TokenKey));
//         if (user && user.csrfToken) {
//             config.headers["CSRF-Token"] = user.csrfToken;
//         }
//         if (user && user.sessionId) {
//             config.headers["X-AUTH-TOKEN"] = user.sessionId;
//         }
//         // sso callback
//         if (!config.headers["X-AUTH-TOKEN"]) {
//             let sessionId = urlParams["_token"]
//             if (sessionId) {
//                 config.headers["X-AUTH-TOKEN"] = Base64.decode(sessionId);
//             }
//         }
//         // sso callback
//         if (!config.headers["CSRF-TOKEN"]) {
//             let csrf = urlParams["_csrf"]
//             if (csrf) {
//                 config.headers["CSRF-TOKEN"] = csrf
//             }
//         }
//     },
//     error => {
//         console.log("Error: " + error);
//         return Promise.reject(error)
//     }
// );


export const request = instance

/* simplify request method */
const promise = (request, loading = {}) => {
    return new Promise((resolve, reject) => {
        loading.status = true;
        request.then(response => {
            if (response.status == 200) {
                resolve(response.data);
            } else {
                reject(response.data);
            }
            loading.status = false;
        }).catch(error => {
            reject(error);
            loading.status = false;
        })
    })
}


/* GET Method */
export const get = (url, data, loading) => {
    return promise(request({ url: url, method: "get", params: data }), loading)
}

/* POST Method */
export const post = (url, data, loading) => {
    return promise(request({ url: url, method: "post", data: data }), loading)
}

/* PUT Method */
export const put = (url, data, loading) => {
    return promise(request({ url: url, method: "put", data }), loading)
}

/* DELETE Method */
export const del = (url, data, loading) => {
    return promise(request({ url: url, method: "delete" }), loading)
}

// export const generateShareUrl = (name, shareUrl) => {
//     if (window.__POWERED_BY_QIANKUN__) {
//         return window.location.origin + "/" + packageJSON.name + name + shareUrl;
//     } else {
//         return window.location.origin + name + shareUrl;
//     }
// }

// export const generateModuleUrl = (url) => {
//     if (window.__POWERED_BY_QIANKUN__) {
//         return window.location.origin + "/" + packageJSON.name + url;
//     } else {
//         return window.location.origin + url;
//     }
// }

export default {
    install(Vue) {
        Vue.prototype.$get = get;
        Vue.prototype.$post = post;
        Vue.prototype.$put = put;
        Vue.prototype.$delete = del;
        Vue.prototype.$request = request;
    }
}