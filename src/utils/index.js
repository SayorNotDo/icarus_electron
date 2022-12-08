export function getUrlParams(url) {
    const arrSeatch = url.split("?").pop().split("#").shift().split("&");
    let obj = {};
    arrSeatch.forEach((item) => {
        const [key, value] = item.split("=");
        obj[key] = value;
        return obj;
    });
    return obj;
}